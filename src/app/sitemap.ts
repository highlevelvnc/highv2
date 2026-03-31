import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/config/site'
import { insights } from '@/lib/data/insights'
import { featuredWork } from '@/lib/data/work'

/**
 * Next.js App Router sitemap.
 * Served at /sitemap.xml — referenced by robots.ts.
 *
 * Static routes are listed explicitly with priority and changeFrequency.
 * Dynamic insight article routes are generated from the insights data file.
 * When articles are migrated to a CMS, swap the import for a fetch call.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/growth-systems`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/digital-platforms`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/performance`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/brand-presence`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/insights`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  const insightRoutes: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: `${SITE_URL}/insights/${insight.slug}`,
    lastModified: new Date(insight.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const workRoutes: MetadataRoute.Sitemap = featuredWork.map((study) => ({
    url: `${SITE_URL}/work/${study.slug}`,
    lastModified: new Date(`${study.year}-01-01`),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticRoutes, ...workRoutes, ...insightRoutes]
}
