import type { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"
import type { IOrderModuleService } from "@medusajs/framework/types"
import { resolveOrderPickupLocation } from "../utils/pickup"

type OrderPlacedEvent = {
  id: string
}

export default async function orderPickupLocationSubscriber({
  event: { data },
  container,
}: SubscriberArgs<OrderPlacedEvent>) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)

  try {
    const pickup = await resolveOrderPickupLocation(container, data.id)

    if (!pickup) {
      return
    }

    const orderModule: IOrderModuleService = container.resolve(Modules.ORDER)
    const order = await orderModule.retrieveOrder(data.id, {
      select: ["id", "metadata"],
    })

    await orderModule.updateOrders(data.id, {
      metadata: {
        ...(order.metadata || {}),
        pickup: {
          ...pickup,
          updated_at: new Date().toISOString(),
        },
      },
    })

    logger.info(
      `[Pickup] Saved pickup location "${pickup.location_name || pickup.location_id}" on order ${data.id}`
    )
  } catch (err) {
    logger.error(
      `[Pickup] Failed to save pickup location for order ${data.id}: ${
        err instanceof Error ? err.message : "Unknown error"
      }`
    )
  }
}

export const config: SubscriberConfig = {
  event: "order.placed",
}
