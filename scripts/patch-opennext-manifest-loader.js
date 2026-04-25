const fs = require("node:fs")
const path = require("node:path")

const candidatePaths = [
  path.join(
    process.cwd(),
    "node_modules",
    "@opennextjs",
    "aws",
    "dist",
    "adapters",
    "config",
    "util.js"
  ),
  path.join(
    process.cwd(),
    "apps",
    "storefront",
    "node_modules",
    "@opennextjs",
    "aws",
    "dist",
    "adapters",
    "config",
    "util.js"
  ),
]

const targetSnippet = `export function loadMiddlewareManifest(nextDir) {
    const filePath = path.join(nextDir, "server/middleware-manifest.json");
    const json = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(json);
}`

const replacementSnippet = `export function loadMiddlewareManifest(nextDir) {
    const legacyPath = path.join(nextDir, "server/middleware-manifest.json");
    const nestedPath = path.join(nextDir, "server/middleware/middleware-manifest.json");
    const filePath = fs.existsSync(legacyPath) ? legacyPath : nestedPath;
    if (!fs.existsSync(filePath)) {
        return { version: 2, middleware: {}, functions: {}, sortedMiddleware: [] };
    }
    const json = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(json);
}`

let patchedAny = false

for (const filePath of candidatePaths) {
  if (!fs.existsSync(filePath)) {
    continue
  }

  const current = fs.readFileSync(filePath, "utf-8")

  if (current.includes(replacementSnippet)) {
    patchedAny = true
    continue
  }

  if (!current.includes(targetSnippet)) {
    continue
  }

  const next = current.replace(targetSnippet, replacementSnippet)
  fs.writeFileSync(filePath, next)
  patchedAny = true
  console.log(`[patch-opennext] Patched middleware manifest loader at ${filePath}`)
}

if (!patchedAny) {
  console.log("[patch-opennext] No matching OpenNext loader found to patch.")
}
