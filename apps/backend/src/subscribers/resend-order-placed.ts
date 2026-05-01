import type { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"
import type { INotificationModuleService } from "@medusajs/framework/types"

type OrderPlacedEvent = {
  id: string
}

export default async function resendOrderPlacedSubscriber({
  event: { data },
  container,
}: SubscriberArgs<OrderPlacedEvent>) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const notificationModule: INotificationModuleService = container.resolve(Modules.NOTIFICATION)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  const { data: orders } = await query.graph({
    entity: "order",
    fields: [
      "id",
      "display_id",
      "email",
      "currency_code",
      "total",
      "items.*",
    ],
    filters: { id: data.id },
  })

  const order = orders?.[0]

  if (!order) {
    logger.warn(`[Resend] Could not find order ${data.id}`)
    return
  }

  if (!order.email) {
    logger.warn(`[Resend] Order ${data.id} has no email address, skipping notification`)
    return
  }

  try {
    await notificationModule.createNotifications({
      to: order.email,
      channel: "email",
      template: "order-placed",
      data: { order },
    })

    logger.info(`[Resend] Order confirmation sent to ${order.email} for order #${order.display_id}`)
  } catch (err) {
    logger.error(
      `[Resend] Failed to send order confirmation for order ${data.id}: ${
        err instanceof Error ? err.message : "Unknown error"
      }`
    )
  }
}

export const config: SubscriberConfig = {
  event: "order.placed",
}
