/**
 * Renders an inline JSON-LD <script> block for structured data.
 *
 * Usage (Server Components only — do not mark 'use client'):
 *
 *   import { JsonLd } from '@/components/shared/JsonLd'
 *
 *   <JsonLd data={{
 *     '@context': 'https://schema.org',
 *     '@type': 'BreadcrumbList',
 *     itemListElement: [...],
 *   }} />
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
