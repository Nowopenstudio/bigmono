import { AbstractNotificationProviderService } from "@medusajs/framework/utils"
import { Logger } from "@medusajs/framework/types"
import {
  ProviderSendNotificationDTO,
  ProviderSendNotificationResultsDTO,
} from "@medusajs/framework/types"
import { Resend } from "resend"

type Options = {
  api_key: string
  from: string
  admin_url?: string
  storefront_url?: string
}

type InjectedDependencies = {
  logger: Logger
}

class ResendNotificationService extends AbstractNotificationProviderService {
  static identifier = "resend"

  private client: Resend
  private from: string
  private logger: Logger
  private adminUrl: string
  private storefrontUrl: string

  constructor({ logger }: InjectedDependencies, options: Options) {
    super()
    this.logger = logger
    this.from = options.from
    this.adminUrl = options.admin_url || "http://localhost:9000/app"
    this.storefrontUrl = options.storefront_url || "http://localhost:8000"
    this.client = new Resend(options.api_key)

    if (!options.api_key) {
      this.logger.warn("[Resend] RESEND_API_KEY is not set. Emails will not be sent.")
    } else {
      this.logger.info("[Resend] Resend notification provider initialized.")
    }
  }

  async send(
    notification: ProviderSendNotificationDTO
  ): Promise<ProviderSendNotificationResultsDTO> {
    if (notification.channel !== "email") {
      throw new Error(`[Resend] Channel "${notification.channel}" is not supported. Only "email" is supported.`)
    }

    const notifData = (notification.data ?? {}) as Record<string, unknown>
    const { subject, html } = this.renderTemplate(notification.template, notifData)

    const { data, error } = await this.client.emails.send({
      from: notification.from ?? this.from,
      to: notification.to,
      subject,
      html,
    })

    if (error) {
      this.logger.error(`[Resend] Failed to send email: ${error.message}`)
      throw new Error(error.message)
    }

    this.logger.info(`[Resend] Email sent to ${notification.to} (id: ${data!.id})`)
    return { id: data!.id }
  }

  private renderTemplate(template: string, data: Record<string, unknown>): { subject: string; html: string } {
    switch (template) {
      case "order.placed":
      case "order-placed":
        return this.orderPlacedTemplate(data)
      case "order.shipment_created":
      case "order-shipped":
        return this.orderShippedTemplate(data)
      case "order.canceled":
        return this.orderCanceledTemplate(data)
      case "auth.password_reset":
        return this.passwordResetTemplate(data)
      case "invite.created":
      case "invite.resent":
        return this.inviteTemplate(data)
      default:
        return {
          subject: `Notification: ${template}`,
          html: `<p>You have a new notification.</p><pre style="font-size:12px">${JSON.stringify(data, null, 2)}</pre>`,
        }
    }
  }

  private wrap(content: string): string {
    return `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#222">${content}</div>`
  }

  private orderItemRows(items: Array<Record<string, any>>, currency: string): string {
    return items
      .map(
        (item) =>
          `<tr>
            <td style="padding:8px;border-bottom:1px solid #eee">${item.title ?? ""}</td>
            <td style="padding:8px;border-bottom:1px solid #eee;text-align:center">${item.quantity ?? 1}</td>
            <td style="padding:8px;border-bottom:1px solid #eee;text-align:right">${currency} ${((item.unit_price ?? 0) / 100).toFixed(2)}</td>
          </tr>`
      )
      .join("")
  }

  private orderPlacedTemplate(data: Record<string, unknown>): { subject: string; html: string } {
    const order = data.order as Record<string, any> | undefined
    const displayId = order?.display_id ?? ""
    const items: Array<Record<string, any>> = order?.items ?? []
    const total = order?.total != null ? (order.total / 100).toFixed(2) : "0.00"
    const currency = (order?.currency_code ?? "usd").toUpperCase()

    return {
      subject: `Order Confirmation #${displayId}`,
      html: this.wrap(`
        <h1 style="font-size:24px;margin-bottom:8px">Thank you for your order!</h1>
        <p style="color:#555">Order <strong>#${displayId}</strong> has been placed successfully.</p>
        <table style="width:100%;border-collapse:collapse;margin-top:24px">
          <thead>
            <tr style="background:#f5f5f5">
              <th style="padding:8px;text-align:left">Item</th>
              <th style="padding:8px;text-align:center">Qty</th>
              <th style="padding:8px;text-align:right">Price</th>
            </tr>
          </thead>
          <tbody>${this.orderItemRows(items, currency)}</tbody>
          <tfoot>
            <tr>
              <td colspan="2" style="padding:8px;text-align:right;font-weight:bold">Total</td>
              <td style="padding:8px;text-align:right;font-weight:bold">${currency} ${total}</td>
            </tr>
          </tfoot>
        </table>
      `),
    }
  }

  private orderShippedTemplate(data: Record<string, unknown>): { subject: string; html: string } {
    const order = data.order as Record<string, any> | undefined
    const fulfillment = data.fulfillment as Record<string, any> | undefined
    const displayId = order?.display_id ?? ""
    const trackingLinks: Array<Record<string, any>> = fulfillment?.tracking_links ?? []

    const trackingHtml = trackingLinks.length
      ? `<p>Track your package:</p><ul>${trackingLinks.map((t) => `<li><a href="${t.url ?? "#"}">${t.tracking_number ?? t.url ?? "Track"}</a></li>`).join("")}</ul>`
      : ""

    return {
      subject: `Your order #${displayId} has shipped`,
      html: this.wrap(`
        <h1 style="font-size:24px;margin-bottom:8px">Your order is on its way!</h1>
        <p style="color:#555">Order <strong>#${displayId}</strong> has been shipped.</p>
        ${trackingHtml}
      `),
    }
  }

  private orderCanceledTemplate(data: Record<string, unknown>): { subject: string; html: string } {
    const order = data.order as Record<string, any> | undefined
    const displayId = order?.display_id ?? ""
    const total = order?.total != null ? (order.total / 100).toFixed(2) : "0.00"
    const currency = (order?.currency_code ?? "usd").toUpperCase()

    return {
      subject: `Your order #${displayId} has been canceled`,
      html: this.wrap(`
        <h1 style="font-size:24px;margin-bottom:8px">Order Canceled</h1>
        <p style="color:#555">Order <strong>#${displayId}</strong> (${currency} ${total}) has been canceled.</p>
        <p style="color:#555">If you have any questions, please contact our support team.</p>
      `),
    }
  }

  private passwordResetTemplate(data: Record<string, unknown>): { subject: string; html: string } {
    const email = data.entity_id as string ?? ""
    const token = data.token as string ?? ""
    const actorType = data.actor_type as string ?? "customer"

    const baseUrl = actorType === "user" ? this.adminUrl : this.storefrontUrl
    const resetUrl = actorType === "user"
      ? `${baseUrl}/reset-password?token=${token}&email=${encodeURIComponent(email)}`
      : `${baseUrl}/account/reset-password?token=${token}&email=${encodeURIComponent(email)}`

    return {
      subject: "Reset your password",
      html: this.wrap(`
        <h1 style="font-size:24px;margin-bottom:8px">Reset your password</h1>
        <p style="color:#555">We received a request to reset the password for <strong>${email}</strong>.</p>
        <p style="color:#555">This link expires in 15 minutes.</p>
        <a href="${resetUrl}" style="display:inline-block;margin-top:16px;padding:12px 24px;background:#111;color:#fff;text-decoration:none;border-radius:4px">Reset Password</a>
        <p style="margin-top:24px;font-size:12px;color:#999">If you didn't request this, you can ignore this email.</p>
      `),
    }
  }

  private inviteTemplate(data: Record<string, unknown>): { subject: string; html: string } {
    const invite = data.invite as Record<string, any> | undefined
    const token = invite?.token ?? ""
    const acceptUrl = `${this.adminUrl}/invite?token=${token}`

    return {
      subject: "You've been invited to join the admin",
      html: this.wrap(`
        <h1 style="font-size:24px;margin-bottom:8px">You're invited!</h1>
        <p style="color:#555">You've been invited to join the admin panel.</p>
        <a href="${acceptUrl}" style="display:inline-block;margin-top:16px;padding:12px 24px;background:#111;color:#fff;text-decoration:none;border-radius:4px">Accept Invite</a>
        <p style="margin-top:24px;font-size:12px;color:#999">This invite may expire. If it no longer works, ask your admin to resend it.</p>
      `),
    }
  }
}

export default ResendNotificationService
