/**
 * Site-wide configuration constants.
 *
 * Set NEXT_PUBLIC_SITE_URL in your deployment environment to override the
 * default. The trailing slash is stripped to keep URL concatenation clean.
 *
 * Usage:
 *   import { SITE_URL } from '@/lib/config/site'
 *   // → 'https://highlevelmkt.com'
 */
export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://highlevelmkt.com').replace(/\/$/, '')
