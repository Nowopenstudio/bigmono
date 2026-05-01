import type { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"
import type { INotificationModuleService } from "@medusajs/framework/types"

type OrderCanceledEvent = {
  id: string
}

export default async function resendOrderCanceledSubscriber({
  event: { data },
  container,
}: SubscriberArgs<OrderCanceledEvent>) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const notificationModule: INotificationModuleService = container.resolve(Modules.NOTIFICATION)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  const { data: orders } = await query.graph({
    entity: "order",
    fields: ["id", "display_id", "email", "currency_code", "total", "items.*"],
    filters: { id: data.id },
  })

  const order = orders?.[0]

  if (!order?.email) {
    logger.warn(`[Resend] Order ${data.id} has no email, skipping cancellation email`)
    return
  }

  try {
    await notificationModule.createNotifications({
      to: order.email,
      channel: "email",
      template: "order.canceled",
      data: { order },
    })

    logger.info(`[Resend] Cancellation email sent to ${order.email} for order #${order.display_id}`)
  } catch (err) {
    logger.error(
      `[Resend] Failed to send cancellation email for order ${data.id}: ${
        err instanceof Error ? err.message : "Unknown error"
      }`
    )
  }
}

export const config: SubscriberConfig = {
  event: "order.canceled",
}
