import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { sanitySyncProductsWorkflow } from "../../../../../workflows/sanity-sync-products"

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const { id } = req.params

  const { result } = await sanitySyncProductsWorkflow(req.scope).run({
    input: { product_ids: [id] },
  })

  res.json({ synced: result })
}
