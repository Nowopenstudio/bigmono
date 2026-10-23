import type { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"
import type { INotificationModuleService } from "@medusajs/framework/types"
import type SanityModuleService from "../modules/sanity/service"
import { SANITY_MODULE } from "../modules/sanity"
import { resolveOrderPickupLocation } from "../utils/pickup"

type OrderPlacedEvent = {
  id: string
}

export default async function resendOrderPlacedAdminSubscriber({
  event: { data },
  container,
}: SubscriberArgs<OrderPlacedEvent>) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const notificationModule: INotificationModuleService = container.resolve(Modules.NOTIFICATION)
  const sanityModule: SanityModuleService = container.resolve(SANITY_MODULE)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  let recipients: string[] = []
  try {
    recipients = await sanityModule.getCustomerServiceEmails()
  } catch (err) {
    logger.error(
      `[Resend] Could not read Customer Service Email from Sanity for order ${data.id}: ${
        err instanceof Error ? err.message : "Unknown error"
      }`
    )
    return
  }

  if (!recipients.length) {
    logger.warn(
      `[Resend] Sanity Settings > Customer Service Email is empty, skipping admin notification for order ${data.id}`
    )
    return
  }

  const { data: orders } = await query.graph({
    entity: "order",
    fields: [
      "id",
      "display_id",
      "email",
      "currency_code",
      "total",
      "items.*",
      "tax_total",
      "shipping_total",
      "shipping_address.*",
      "shipping_methods.name",
    ],
    filters: { id: data.id },
  })

  const order = orders?.[0]

  if (!order) {
    logger.warn(`[Resend] Could not find order ${data.id}`)
    return
  }

  let pickup: Awaited<ReturnType<typeof resolveOrderPickupLocation>> = null
  try {
    pickup = await resolveOrderPickupLocation(container, data.id)
  } catch {
    // Still notify the store; the email just won't name the pickup location.
  }

  for (const to of recipients) {
    try {
      await notificationModule.createNotifications({
        to,
        channel: "email",
        template: "order-placed-admin",
        data: { order, pickup },
      })

      logger.info(`[Resend] New order notification sent to ${to} for order #${order.display_id}`)
    } catch (err) {
      logger.error(
        `[Resend] Failed to send new order notification to ${to} for order ${data.id}: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      )
    }
  }
}

export const config: SubscriberConfig = {
  event: "order.placed",
}
