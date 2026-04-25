import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Container, Heading, Text } from "@medusajs/ui"

type ShippoMetadata = {
  shipment_id?: string
  transaction_id?: string
  label_url?: string
  tracking_number?: string
  tracking_url?: string
  updated_at?: string
}

type OrderWidgetProps = {
  data?: {
    metadata?: Record<string, unknown> | null
  }
}

const MetadataRow = ({ label, value }: { label: string; value?: string }) => {
  if (!value) {
    return null
  }

  return (
    <div className="grid grid-cols-[160px_1fr] gap-2">
      <Text size="small" className="text-ui-fg-subtle">
        {label}
      </Text>
      <Text size="small">{value}</Text>
    </div>
  )
}

const LinkRow = ({ label, href }: { label: string; href?: string }) => {
  if (!href) {
    return null
  }

  return (
    <div className="grid grid-cols-[160px_1fr] gap-2">
      <Text size="small" className="text-ui-fg-subtle">
        {label}
      </Text>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover text-sm"
      >
        Open
      </a>
    </div>
  )
}

const OrderShippoWidget = ({ data }: OrderWidgetProps) => {
  const shippo = (data?.metadata?.shippo || {}) as ShippoMetadata

  const hasShippoData = Boolean(
    shippo.shipment_id ||
      shippo.transaction_id ||
      shippo.label_url ||
      shippo.tracking_number ||
      shippo.tracking_url
  )

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Heading level="h2">Shippo</Heading>

        {!hasShippoData ? (
          <Text size="small" className="text-ui-fg-subtle">
            No Shippo label data has been saved for this order yet.
          </Text>
        ) : (
          <div className="flex flex-col gap-2">
            <MetadataRow label="Tracking Number" value={shippo.tracking_number} />
            <LinkRow label="Tracking URL" href={shippo.tracking_url} />
            <LinkRow label="Label URL" href={shippo.label_url} />
            <MetadataRow label="Shipment ID" value={shippo.shipment_id} />
            <MetadataRow label="Transaction ID" value={shippo.transaction_id} />
            <MetadataRow label="Updated At" value={shippo.updated_at} />
          </div>
        )}
      </div>
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: "order.details.after",
})

export default OrderShippoWidget
