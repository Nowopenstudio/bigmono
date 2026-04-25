const fs = require("node:fs")
const path = require("node:path")

const root = path.join(__dirname, "..", ".next", "server")
const legacyManifest = path.join(root, "middleware-manifest.json")
const nestedManifest = path.join(root, "middleware", "middleware-manifest.json")

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

const copiedLegacy = copyIfMissing(nestedManifest, legacyManifest)
const copiedNested = copyIfMissing(legacyManifest, nestedManifest)

if (copiedLegacy || copiedNested) {
  console.log(
    "[ensure-next-manifests] Synced middleware-manifest.json between legacy and nested paths."
  )
}
