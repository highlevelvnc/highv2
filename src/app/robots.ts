import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/config/site'

/**
 * Next.js App Router robots.txt.
 * Served at /robots.txt — allows all crawlers and references the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
