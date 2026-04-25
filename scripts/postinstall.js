const fs = require("node:fs")
const path = require("node:path")

const ensureOpenNextRootBin = () => {
  const repoRoot = process.cwd()
  const binDir = path.join(repoRoot, "node_modules", ".bin")
  const binPath = path.join(binDir, "opennextjs-cloudflare")

  fs.mkdirSync(binDir, { recursive: true })

  const shim = `#!/bin/sh
if [ -f "${path.join(
    repoRoot,
    "node_modules",
    "@opennextjs",
    "cloudflare",
    "dist",
    "cli",
    "index.js"
  ).replace(/\\/g, "/")}" ]; then
  exec node "${path.join(
    repoRoot,
    "node_modules",
    "@opennextjs",
    "cloudflare",
    "dist",
    "cli",
    "index.js"
  ).replace(/\\/g, "/")}" "$@"
fi

if [ -f "${path.join(
    repoRoot,
    "tools",
    "opennext-bin-shim",
    "bin",
    "opennextjs-cloudflare.js"
  ).replace(/\\/g, "/")}" ]; then
  exec node "${path.join(
    repoRoot,
    "tools",
    "opennext-bin-shim",
    "bin",
    "opennextjs-cloudflare.js"
  ).replace(/\\/g, "/")}" "$@"
fi

exec npx -y @opennextjs/cloudflare@1.19.4 "$@"
`

  fs.writeFileSync(binPath, shim)
  fs.chmodSync(binPath, 0o755)
  console.log(`[postinstall] ensured ${binPath}`)
}

const runOptionalPatch = () => {
  const patchScript = path.join(process.cwd(), "scripts", "patch-opennext-manifest-loader.js")
  if (!fs.existsSync(patchScript)) {
    console.log("[postinstall] skip OpenNext patch script (not present in this build stage)")
    return
  }

  require(patchScript)
}

runOptionalPatch()
ensureOpenNextRootBin()
