#!/usr/bin/env node

const { spawnSync } = require("node:child_process")
const fs = require("node:fs")
const path = require("node:path")

const repoRoot = path.resolve(__dirname, "..", "..", "..")
const args = process.argv.slice(2)

const candidates = [
  path.join(
    repoRoot,
    "apps",
    "storefront",
    "node_modules",
    "@opennextjs",
    "cloudflare",
    "dist",
    "cli",
    "index.js"
  ),
  path.join(
    repoRoot,
    "node_modules",
    "@opennextjs",
    "cloudflare",
    "dist",
    "cli",
    "index.js"
  ),
]

for (const cliPath of candidates) {
  if (!fs.existsSync(cliPath)) {
    continue
  }

  const result = spawnSync(process.execPath, [cliPath, ...args], {
    stdio: "inherit",
  })

  process.exit(result.status ?? 1)
}

const fallback = spawnSync(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["-y", "@opennextjs/cloudflare@1.19.4", ...args],
  { stdio: "inherit" }
)

process.exit(fallback.status ?? 1)
