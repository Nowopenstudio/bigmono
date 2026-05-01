import type { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"
import type { INotificationModuleService } from "@medusajs/framework/types"

type InviteEvent = { id: string }

async function handleInvite(
  inviteId: string,
  template: string,
  container: SubscriberArgs<InviteEvent>["container"]
) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const notificationModule: INotificationModuleService = container.resolve(Modules.NOTIFICATION)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  const { data: invites } = await query.graph({
    entity: "invite",
    fields: ["id", "email", "token", "expires_at"],
    filters: { id: inviteId },
  })

  const invite = invites?.[0]

  if (!invite?.email) {
    logger.warn(`[Resend] Invite ${inviteId} has no email, skipping`)
    return
  }

  try {
    await notificationModule.createNotifications({
      to: invite.email,
      channel: "email",
      template,
      data: { invite },
    })

    logger.info(`[Resend] Invite email sent to ${invite.email}`)
  } catch (err) {
    logger.error(
      `[Resend] Failed to send invite email to ${invite.email}: ${
        err instanceof Error ? err.message : "Unknown error"
      }`
    )
  }
}

export default async function resendInviteSubscriber({
  event,
  container,
}: SubscriberArgs<InviteEvent | InviteEvent[]>) {
  const items = Array.isArray(event.data) ? event.data : [event.data]
  const template = event.name === "invite.resent" ? "invite.resent" : "invite.created"

  await Promise.all(items.map((item) => handleInvite(item.id, template, container)))
}

export const config: SubscriberConfig = {
  event: ["invite.created", "invite.resent"],
}
