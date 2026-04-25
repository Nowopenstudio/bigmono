const fs = require("node:fs")
const path = require("node:path")

const root = path.join(__dirname, "..", ".next", "server")
const legacyManifest = path.join(root, "middleware-manifest.json")
const nestedManifest = path.join(root, "middleware", "middleware-manifest.json")
const fallbackManifest = {
  version: 2,
  middleware: {},
  functions: {},
  sortedMiddleware: [],
}

const ensureParentDir = (filePath) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
}

const copyIfMissing = (from, to) => {
  if (!fs.existsSync(from) || fs.existsSync(to)) {
    return false
  }

  ensureParentDir(to)
  fs.copyFileSync(from, to)
  return true
}

const writeFallbackIfMissing = (filePath) => {
  if (fs.existsSync(filePath)) {
    return false
  }

  ensureParentDir(filePath)
  fs.writeFileSync(filePath, JSON.stringify(fallbackManifest, null, 2))
  return true
}

const copiedLegacy = copyIfMissing(nestedManifest, legacyManifest)
const copiedNested = copyIfMissing(legacyManifest, nestedManifest)
const wroteLegacyFallback = writeFallbackIfMissing(legacyManifest)
const wroteNestedFallback = writeFallbackIfMissing(nestedManifest)

if (copiedLegacy || copiedNested || wroteLegacyFallback || wroteNestedFallback) {
  console.log(
    "[ensure-next-manifests] Ensured middleware-manifest.json exists in legacy and nested server paths."
  )
}
