project := "geisterbaustellen"

# Show available recipes
default:
    @just --list

# Hugo dev server (frontend only; petition counter shows "—" because /api isn't served)
dev:
    hugo server

# Full local stack: Hugo (hot-reload UI, internal :1314) + Wrangler (Pages Functions + KV) at http://localhost:1313
dev-full:
    #!/usr/bin/env bash
    set -e
    trap 'kill 0' EXIT INT TERM
    echo ""
    echo "  → http://localhost:1313/  (full stack: UI + /api/*)"
    echo ""
    hugo server --port 1314 --bind 127.0.0.1 --baseURL http://localhost:1313 --appendPort=false &
    sleep 2
    npx wrangler pages dev --proxy 1314 --port 1313

# Build once, then serve the static output via Wrangler (production-like, no hot reload)
dev-api: build
    npx wrangler pages dev public --port 1313

# Production build into ./public
build:
    hugo --minify

# Remove build output and wrangler local state
clean:
    rm -rf public .wrangler

# One-time: create KV namespace, then paste the printed id into wrangler.toml
kv-create:
    npx wrangler kv namespace create PETITIONS

# List counter and token keys in production KV
kv-list:
    npx wrangler kv key list --binding=PETITIONS --remote

# Read a counter, e.g. `just kv-get littenstrasse-79`
kv-get slug:
    npx wrangler kv key get --binding=PETITIONS --remote "count:{{slug}}"

# Reset a counter
kv-reset slug:
    npx wrangler kv key delete --binding=PETITIONS --remote "count:{{slug}}"

# Manual deploy (Cloudflare Pages also auto-deploys on push to main)
deploy: build
    npx wrangler pages deploy public --project-name={{project}}
