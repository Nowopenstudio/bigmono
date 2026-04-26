#!/bin/sh
set -eu

NODE_MAJOR="$(node -p "process.versions.node.split('.')[0]")"
if [ "$NODE_MAJOR" != "22" ]; then
  echo "[build-fe] ERROR: Node 22 is required. Current version: $(node -v)"
  exit 1
fi

echo "[build-fe] Installing workspace dependencies..."
npm ci --include=dev --no-audit

echo "[build-fe] Building storefront..."
npm -w apps/storefront run build

echo "[build-fe] Building OpenNext Cloudflare bundle..."
npm -w apps/storefront exec opennextjs-cloudflare build -- --skipWranglerConfigCheck
