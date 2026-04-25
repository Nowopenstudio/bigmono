import type { Logger } from "@medusajs/framework/types"

type ModuleOptions = {
  api_key?: string
  api_base?: string
  auto_purchase_labels?: boolean
  label_file_type?: "PDF" | "PNG" | "ZPLII"
  parcel_defaults?: {
    length?: string
    width?: string
    height?: string
    distance_unit?: "in" | "cm" | "ft" | "m" | "mm" | "yd"
    weight?: string
    mass_unit?: "g" | "kg" | "lb" | "oz"
  }
  address_from: {
    name: string
    company?: string
    street1: string
    street2?: string
    city: string
    state?: string
    zip: string
    country: string
    phone?: string
    email?: string
  }
}

type ShippoAddress = {
  name: string
  company?: string
  street1: string
  street2?: string
  city: string
  state?: string
  zip: string
  country: string
  phone?: string
  email?: string
}

type InjectedDependencies = {
  logger: Logger
}

type OrderShippingAddress = {
  first_name?: string | null
  last_name?: string | null
  company?: string | null
  address_1?: string | null
  address_2?: string | null
  city?: string | null
  province?: string | null
  postal_code?: string | null
  country_code?: string | null
  phone?: string | null
}

type OrderInput = {
  id: string
  display_id?: string | number | null
  email?: string | null
  shipping_address?: OrderShippingAddress | null
}

type ShippoShipmentResponse = {
  object_id: string
  rates?: Array<{ object_id: string; amount?: string }>
}

type ShippoTransactionResponse = {
  object_id: string
  status?: string
  tracking_number?: string
  tracking_url_provider?: string
  label_url?: string
  messages?: Array<{ code?: string; text?: string }>
}

class ShippoModuleService {
  private logger: Logger
  private apiKey?: string
  private apiBase: string
  private autoPurchaseLabels: boolean
  private labelFileType: "PDF" | "PNG" | "ZPLII"
  private parcelDefaults: Required<NonNullable<ModuleOptions["parcel_defaults"]>>
  private defaultAddressFrom: ModuleOptions["address_from"]

  constructor({ logger }: InjectedDependencies, options: ModuleOptions) {
    this.logger = logger
    this.apiKey = options.api_key
    this.apiBase = options.api_base || "https://api.goshippo.com"
    this.autoPurchaseLabels = Boolean(options.auto_purchase_labels)
    this.labelFileType = options.label_file_type || "PDF"
    this.defaultAddressFrom = options.address_from
    this.parcelDefaults = {
      length: options.parcel_defaults?.length || "10",
      width: options.parcel_defaults?.width || "8",
      height: options.parcel_defaults?.height || "4",
      distance_unit: options.parcel_defaults?.distance_unit || "in",
      weight: options.parcel_defaults?.weight || "16",
      mass_unit: options.parcel_defaults?.mass_unit || "oz",
    }

    if (!this.apiKey) {
      this.logger.warn(
        "[Shippo] SHIPPO_API_KEY is not set. Shippo label automation is disabled."
      )
    } else {
      this.logger.info("[Shippo] Shippo module initialized.")
    }
  }

  isEnabled() {
    return Boolean(this.apiKey)
  }

  async createAndOptionallyBuyLabel(
    order: OrderInput,
    config?: { address_from?: ShippoAddress }
  ) {
    if (!this.apiKey) {
      return {
        skipped: true,
        reason: "missing_api_key",
      }
    }

    if (!order.shipping_address) {
      return {
        skipped: true,
        reason: "missing_shipping_address",
      }
    }

    const shipment = await this.createShipment(order, config?.address_from)
    const rates = shipment.rates || []

    if (!rates.length) {
      this.logger.warn(`[Shippo] No rates returned for order ${order.id}`)
      return {
        skipped: true,
        reason: "no_rates",
        shipment_id: shipment.object_id,
      }
    }

    const cheapestRate = this.getCheapestRate(rates)

    if (!this.autoPurchaseLabels) {
      this.logger.info(
        `[Shippo] Created shipment ${shipment.object_id} for order ${order.id}. Auto-purchase is disabled.`
      )
      return {
        skipped: true,
        reason: "auto_purchase_disabled",
        shipment_id: shipment.object_id,
        selected_rate_id: cheapestRate.object_id,
      }
    }

    const transaction = await this.buyLabel(cheapestRate.object_id)

    if (transaction.status !== "SUCCESS") {
      const messages =
        transaction.messages?.map((m) => m.text).join("; ") || "Unknown error"
      throw new Error(
        `Shippo transaction failed for order ${order.id}: ${messages}`
      )
    }

    this.logger.info(
      `[Shippo] Purchased label for order ${order.id}. Tracking: ${transaction.tracking_number || "n/a"}`
    )

    return {
      skipped: false,
      shipment_id: shipment.object_id,
      transaction_id: transaction.object_id,
      label_url: transaction.label_url,
      tracking_number: transaction.tracking_number,
      tracking_url: transaction.tracking_url_provider,
      address_from: config?.address_from || this.defaultAddressFrom,
    }
  }

  private getCheapestRate(
    rates: Array<{ object_id: string; amount?: string }>
  ): { object_id: string; amount?: string } {
    return rates.reduce((lowest, current) => {
      const currentAmount = Number(current.amount || Number.POSITIVE_INFINITY)
      const lowestAmount = Number(lowest.amount || Number.POSITIVE_INFINITY)
      return currentAmount < lowestAmount ? current : lowest
    })
  }

  private async createShipment(order: OrderInput, addressFrom?: ShippoAddress) {
    const shipping = order.shipping_address!
    const addressTo = {
      name: `${shipping.first_name || ""} ${shipping.last_name || ""}`.trim(),
      company: shipping.company,
      street1: shipping.address_1,
      street2: shipping.address_2,
      city: shipping.city,
      state: shipping.province,
      zip: shipping.postal_code,
      country: (shipping.country_code || "").toUpperCase(),
      phone: shipping.phone,
      email: order.email,
      validate: true,
    }

    return await this.shippoRequest<ShippoShipmentResponse>("/shipments/", {
      method: "POST",
      body: {
        address_from: addressFrom || this.defaultAddressFrom,
        address_to: addressTo,
        parcels: [this.parcelDefaults],
        async: false,
      },
    })
  }

  private async buyLabel(rateId: string) {
    return await this.shippoRequest<ShippoTransactionResponse>(
      "/transactions/",
      {
        method: "POST",
        body: {
          rate: rateId,
          label_file_type: this.labelFileType,
          async: false,
        },
      }
    )
  }

  private async shippoRequest<T>(
    path: string,
    input: { method: "POST" | "GET"; body?: Record<string, unknown> }
  ): Promise<T> {
    const response = await fetch(`${this.apiBase}${path}`, {
      method: input.method,
      headers: {
        Authorization: `ShippoToken ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: input.body ? JSON.stringify(input.body) : undefined,
    })

    if (!response.ok) {
      const body = await response.text()
      throw new Error(
        `Shippo API error (${response.status} ${response.statusText}): ${body}`
      )
    }

    return (await response.json()) as T
  }
}

export default ShippoModuleService
