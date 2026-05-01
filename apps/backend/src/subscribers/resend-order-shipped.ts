import type { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"
import type { INotificationModuleService } from "@medusajs/framework/types"

type ShipmentCreatedEvent = {
  id: string
  no_notification?: boolean
}

export default async function resendOrderShippedSubscriber({
  event: { data },
  container,
}: SubscriberArgs<ShipmentCreatedEvent>) {
  if (data.no_notification) {
    return
  }

  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const notificationModule: INotificationModuleService = container.resolve(Modules.NOTIFICATION)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  // shipment.id is a fulfillment id — find the order through it
  const { data: fulfillments } = await query.graph({
    entity: "fulfillment",
    fields: ["id", "order.id", "order.display_id", "order.email", "order.currency_code", "tracking_links.*"],
    filters: { id: data.id },
  })

  const fulfillment = fulfillments?.[0]
  const order = (fulfillment as any)?.order

  if (!order?.email) {
    logger.warn(`[Resend] Could not resolve order for fulfillment ${data.id}, skipping shipment email`)
    return
  }

  try {
    await notificationModule.createNotifications({
      to: order.email,
      channel: "email",
      template: "order.shipment_created",
      data: {
        order,
        fulfillment: {
          id: fulfillment.id,
          tracking_links: (fulfillment as any).tracking_links ?? [],
        },
      },
    })

    logger.info(`[Resend] Shipment email sent to ${order.email} for order #${order.display_id}`)
  } catch (err) {
    logger.error(
      `[Resend] Failed to send shipment email for fulfillment ${data.id}: ${
        err instanceof Error ? err.message : "Unknown error"
      }`
    )
  }
}

export const config: SubscriberConfig = {
  event: "shipment.created",
}
