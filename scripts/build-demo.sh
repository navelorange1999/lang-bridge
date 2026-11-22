#!/usr/bin/env bash
set -euo pipefail

: "${DEMO_RELEASE:?DEMO_RELEASE must identify the commit being built}"
if [[ "${DEMO_SLUG:-lang-bridge}" != lang-bridge ]]; then
  echo 'The LangBridge build requires the lang-bridge slug.' >&2
  exit 1
fi

corepack pnpm@10.7.1 install --frozen-lockfile
ASTRO_TELEMETRY_DISABLED=1 corepack pnpm@10.7.1 build
