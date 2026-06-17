/**
 * Canonical site URL — single source of truth.
 * Change it here (or via NEXT_PUBLIC_SITE_URL) and it propagates to
 * metadata, sitemap, robots and JSON-LD structured data.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gregorius.pl'
).replace(/\/$/, '')
