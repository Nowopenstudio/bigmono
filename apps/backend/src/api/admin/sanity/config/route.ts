import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

export async function GET(_req: MedusaRequest, res: MedusaResponse) {
  res.json({
    studio_url: process.env.SANITY_STUDIO_URL || "http://localhost:8000/studio",
  })
}
