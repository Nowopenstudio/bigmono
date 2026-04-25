#!/bin/sh
set -eu

echo "[build-fe] Installing workspace dependencies..."
npm ci --include=dev --no-audit

echo "[build-fe] Building storefront..."
npm -w apps/storefront run build

echo "[build-fe] Building OpenNext Cloudflare bundle..."
npm -w apps/storefront exec opennextjs-cloudflare build -- --skipWranglerConfigCheck
