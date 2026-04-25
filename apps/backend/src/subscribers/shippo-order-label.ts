import type { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import type ShippoModuleService from "../modules/shippo/service"
import { SHIPPO_MODULE } from "../modules/shippo"

type OrderPlacedEvent = {
  id: string
}

type StockLocationAddress = {
  address_1?: string | null
  address_2?: string | null
  city?: string | null
  province?: string | null
  postal_code?: string | null
  country_code?: string | null
  phone?: string | null
  company?: string | null
}

type StockLocationData = {
  id: string
  name?: string | null
  address?: StockLocationAddress | null
  sales_channels?: Array<{ id?: string | null } | null> | null
}

function hasRequiredShippoSenderAddress(address?: StockLocationAddress | null) {
  if (!address) {
    return false
  }

  // Shippo rate lookup typically requires a complete sender address.
  return Boolean(
    address.address_1 &&
      address.city &&
      address.postal_code &&
      address.country_code
  )
}

function resolvePreferredStockLocation(
  locations: StockLocationData[],
  salesChannelId?: string | null
) {
  if (!locations.length) {
    return null
  }

  if (!salesChannelId) {
    return locations[0]
  }

  const channelMatch = locations.find((location) =>
    (location.sales_channels || []).some(
      (channel) => channel?.id === salesChannelId
    )
  )

  return channelMatch || locations[0]
}

async function resolveShippoAddressFromWarehouse(
  container: SubscriberArgs<OrderPlacedEvent>["container"],
  order: Record<string, any>
) {
  const query = container.resolve(ContainerRegistrationKeys.QUERY)
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)

  try {
    const { data: stockLocations } = await query.graph({
      entity: "stock_location",
      fields: [
        "id",
        "name",
        "address.*",
        "sales_channels.id",
      ],
    })

    const preferredLocation = resolvePreferredStockLocation(
      stockLocations || [],
      order.sales_channel_id
    )

    if (!preferredLocation || !hasRequiredShippoSenderAddress(preferredLocation.address)) {
      logger.warn(
        `[Shippo] Warehouse address is incomplete for order ${order.id}; using default SHIPPO_FROM_* sender address.`
      )
      return null
    }

    const senderAddress = preferredLocation.address

    return {
      name: preferredLocation.name || "Warehouse",
      company: senderAddress?.company || undefined,
      street1: senderAddress!.address_1!,
      street2: senderAddress?.address_2 || undefined,
      city: senderAddress!.city || "",
      state: senderAddress?.province || undefined,
      zip: senderAddress!.postal_code || "",
      country: (senderAddress!.country_code || "US").toUpperCase(),
      phone: senderAddress?.phone || undefined,
      email: undefined,
    }
  } catch (e) {
    logger.warn(
      `[Shippo] Failed to resolve warehouse address for order ${order.id}; falling back to default sender address. ${
        e instanceof Error ? e.message : ""
      }`
    )
    return null
  }
}

async function persistOrderShippoMetadata(
  container: SubscriberArgs<OrderPlacedEvent>["container"],
  orderId: string,
  existingMetadata: Record<string, unknown> | null | undefined,
  shippoMetadata: Record<string, unknown>
) {
  const nextMetadata = {
    ...(existingMetadata || {}),
    shippo: shippoMetadata,
  }

  const candidateServiceKeys = ["order", "orderModuleService", "orderService"]

  for (const key of candidateServiceKeys) {
    let service: any
    try {
      service = container.resolve(key)
    } catch {
      continue
    }

    try {
      if (typeof service?.updateOrders === "function") {
        try {
          await service.updateOrders([{ id: orderId, metadata: nextMetadata }])
          return
        } catch {
          await service.updateOrders(
            { id: orderId },
            { metadata: nextMetadata }
          )
          return
        }
      }

      if (typeof service?.updateOrder === "function") {
        await service.updateOrder(orderId, { metadata: nextMetadata })
        return
      }

      if (typeof service?.update === "function") {
        await service.update(orderId, { metadata: nextMetadata })
        return
      }
    } catch {
      // Try the next service key/signature until one succeeds.
    }
  }

  throw new Error(
    "Could not find a compatible order update service to persist Shippo metadata."
  )
}

export default async function shippoOrderLabelSubscriber({
  event: { data },
  container,
}: SubscriberArgs<OrderPlacedEvent>) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const shippoModule: ShippoModuleService = container.resolve(SHIPPO_MODULE)

  if (!shippoModule.isEnabled()) {
    return
  }

  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  const { data: orders } = await query.graph({
    entity: "order",
    fields: [
      "id",
      "display_id",
      "email",
      "sales_channel_id",
      "metadata",
      "shipping_address.*",
    ],
    filters: { id: data.id },
  })

  const order = orders?.[0]

  if (!order) {
    logger.warn(`[Shippo] Could not find order ${data.id} for label creation`)
    return
  }

  try {
    const warehouseAddressFrom = await resolveShippoAddressFromWarehouse(
      container,
      order
    )
    const result = await shippoModule.createAndOptionallyBuyLabel(order, {
      address_from: warehouseAddressFrom || undefined,
    })
    if (!result.skipped) {
      await persistOrderShippoMetadata(
        container,
        order.id,
        order.metadata,
        {
          shipment_id: result.shipment_id,
          transaction_id: result.transaction_id,
          label_url: result.label_url,
          tracking_number: result.tracking_number,
          tracking_url: result.tracking_url,
          address_from: result.address_from,
          updated_at: new Date().toISOString(),
        }
      )
    }

    logger.info(
      `[Shippo] Processed order ${order.id} (display #${order.display_id || "n/a"}): ${JSON.stringify(result)}`
    )
  } catch (err) {
    logger.error(
      `[Shippo] Failed to process order ${order.id}: ${
        err instanceof Error ? err.message : "Unknown error"
      }`
    )
  }
}

export const config: SubscriberConfig = {
  event: "order.placed",
}
