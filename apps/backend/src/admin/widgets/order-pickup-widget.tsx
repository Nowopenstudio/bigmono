import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Container, Heading, StatusBadge, Text } from "@medusajs/ui"

// Mirrors the shape written by src/subscribers/order-pickup-location.ts.
// Kept local so the admin bundle doesn't import backend-only code.
type PickupMetadata = {
  shipping_option_id?: string
  shipping_option_name?: string | null
  location_id?: string | null
  location_name?: string | null
  address?: {
    address_1?: string | null
    address_2?: string | null
    city?: string | null
    province?: string | null
    postal_code?: string | null
    country_code?: string | null
    phone?: string | null
    company?: string | null
  } | null
}

type OrderWidgetProps = {
  data?: {
    metadata?: Record<string, unknown> | null
  }
}

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="grid grid-cols-2 items-start px-6 py-4">
    <Text size="small" leading="compact" weight="plus" className="text-ui-fg-subtle">
      {label}
    </Text>
    <div className="flex flex-col">{children}</div>
  </div>
)

const Line = ({ value }: { value?: string | null }) => {
  if (!value) {
    return null
  }

  return (
    <Text size="small" leading="compact">
      {value}
    </Text>
  )
}

const OrderPickupWidget = ({ data }: OrderWidgetProps) => {
  const pickup = data?.metadata?.pickup as PickupMetadata | undefined

  if (!pickup) {
    return null
  }

  const address = pickup.address
  const cityLine = [
    address?.city,
    [address?.province, address?.postal_code].filter(Boolean).join(" "),
  ]
    .filter(Boolean)
    .join(", ")

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">Store Pickup</Heading>
        <StatusBadge color="blue">Pickup</StatusBadge>
      </div>

      <Row label="Location">
        <Line value={pickup.location_name || pickup.location_id || "Unknown"} />
      </Row>

      {address && (
        <Row label="Address">
          <Line value={address.company} />
          <Line value={address.address_1} />
          <Line value={address.address_2} />
          <Line value={cityLine} />
          <Line value={address.country_code?.toUpperCase()} />
        </Row>
      )}

      {address?.phone && (
        <Row label="Phone">
          <Line value={address.phone} />
        </Row>
      )}

      {pickup.shipping_option_name && (
        <Row label="Method">
          <Line value={pickup.shipping_option_name} />
        </Row>
      )}
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: "order.details.side.before",
})

export default OrderPickupWidget
