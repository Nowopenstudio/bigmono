import type { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"
import type { INotificationModuleService } from "@medusajs/framework/types"

type PasswordResetEvent = {
  entity_id: string
  actor_type: "customer" | "user"
  token: string
  metadata?: Record<string, unknown>
}

export default async function resendPasswordResetSubscriber({
  event: { data },
  container,
}: SubscriberArgs<PasswordResetEvent>) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const notificationModule: INotificationModuleService = container.resolve(Modules.NOTIFICATION)

  try {
    await notificationModule.createNotifications({
      to: data.entity_id,
      channel: "email",
      template: "auth.password_reset",
      data: {
        entity_id: data.entity_id,
        actor_type: data.actor_type,
        token: data.token,
      },
    })

    logger.info(`[Resend] Password reset email sent to ${data.entity_id}`)
  } catch (err) {
    logger.error(
      `[Resend] Failed to send password reset email to ${data.entity_id}: ${
        err instanceof Error ? err.message : "Unknown error"
      }`
    )
  }
}

export const config: SubscriberConfig = {
  event: "auth.password_reset",
}
