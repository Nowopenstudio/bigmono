import type { MedusaContainer } from "@medusajs/framework/types"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"

export type PickupLocation = {
  shipping_option_id: string
  shipping_option_name: string | null
  location_id: string | null
  location_name: string | null
  address: {
    address_1: string | null
    address_2: string | null
    city: string | null
    province: string | null
    postal_code: string | null
    country_code: string | null
    phone: string | null
    company: string | null
  } | null
}

/**
 * Returns the pickup location when the order's shipping method belongs to a
 * "pickup" fulfillment set, or null for regular shipped orders.
 */
export async function resolveOrderPickupLocation(
  container: MedusaContainer,
  orderId: string
): Promise<PickupLocation | null> {
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  const { data: orders } = await query.graph({
    entity: "order",
    fields: ["id", "shipping_methods.shipping_option_id"],
    filters: { id: orderId },
  })

  const optionIds = (orders?.[0]?.shipping_methods || [])
    .map((method) => method?.shipping_option_id)
    .filter((id): id is string => Boolean(id))

  if (!optionIds.length) {
    return null
  }

  const { data: shippingOptions } = await query.graph({
    entity: "shipping_option",
    fields: [
      "id",
      "name",
      "service_zone.fulfillment_set.type",
      "service_zone.fulfillment_set.location.id",
      "service_zone.fulfillment_set.location.name",
      "service_zone.fulfillment_set.location.address.*",
    ],
    filters: { id: optionIds },
  })

  const pickupOption = (shippingOptions || []).find(
    (option) => option?.service_zone?.fulfillment_set?.type === "pickup"
  )

  if (!pickupOption) {
    return null
  }

  const location = pickupOption.service_zone?.fulfillment_set?.location
  const address = location?.address

  return {
    shipping_option_id: pickupOption.id,
    shipping_option_name: pickupOption.name ?? null,
    location_id: location?.id ?? null,
    location_name: location?.name ?? null,
    address: address
      ? {
          address_1: address.address_1 ?? null,
          address_2: address.address_2 ?? null,
          city: address.city ?? null,
          province: address.province ?? null,
          postal_code: address.postal_code ?? null,
          country_code: address.country_code ?? null,
          phone: address.phone ?? null,
          company: address.company ?? null,
        }
      : null,
  }
}
