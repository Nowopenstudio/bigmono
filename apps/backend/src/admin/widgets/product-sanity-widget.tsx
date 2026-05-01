import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Button, Container, Heading, Text, toast } from "@medusajs/ui"
import { useEffect, useState } from "react"

type ProductWidgetProps = {
  data: {
    id: string
    title: string
  }
}

const ProductSanityWidget = ({ data }: ProductWidgetProps) => {
  const [loading, setLoading] = useState(false)
  const [studioUrl, setStudioUrl] = useState<string | null>(null)

  useEffect(() => {
    fetch("/admin/sanity/config", { credentials: "include" })
      .then((r) => r.json())
      .then((cfg) => setStudioUrl(`${cfg.studio_url}/structure/product;${data.id}`))
      .catch(() => {})
  }, [data.id])

  const handleSync = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/admin/products/${data.id}/sanity-sync`, {
        method: "POST",
        credentials: "include",
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.message || `Error ${res.status}`)
      }

      toast.success("Synced to Sanity", {
        description: `"${data.title}" has been synced.`,
      })
    } catch (err) {
      toast.error("Sync failed", {
        description: err instanceof Error ? err.message : "Unknown error",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Heading level="h2">Sanity</Heading>
        <Text size="small" className="text-ui-fg-subtle">
          Push the latest product info to Sanity, or open in Studio to edit editorial content.
        </Text>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="small"
            isLoading={loading}
            onClick={handleSync}
          >
            Sync to Sanity
          </Button>
          {studioUrl && (
            <a href={studioUrl} target="_blank" rel="noreferrer">
              <Button variant="transparent" size="small">
                Open in Studio ↗
              </Button>
            </a>
          )}
        </div>
      </div>
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: "product.details.side.before",
})

export default ProductSanityWidget
