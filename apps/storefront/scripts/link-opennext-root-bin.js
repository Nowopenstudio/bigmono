const fs = require("node:fs")
const path = require("node:path")

const workspaceRoot = path.resolve(__dirname, "..", "..", "..")
const rootBinDir = path.join(workspaceRoot, "node_modules", ".bin")
const rootBinary = path.join(rootBinDir, "opennextjs-cloudflare")
const localBinary = path.join(
  workspaceRoot,
  "apps",
  "storefront",
  "node_modules",
  ".bin",
  "opennextjs-cloudflare"
)

if (!fs.existsSync(localBinary)) {
  console.log(
    "[link-opennext-root-bin] Local opennextjs-cloudflare binary not found; skipping root shim."
  )
  process.exit(0)
}

fs.mkdirSync(rootBinDir, { recursive: true })

const shim = `#!/bin/sh
exec "${localBinary.replace(/\\/g, "/")}" "$@"
`

fs.writeFileSync(rootBinary, shim)
fs.chmodSync(rootBinary, 0o755)

console.log(`[link-opennext-root-bin] Ensured root binary shim at ${rootBinary}`)
