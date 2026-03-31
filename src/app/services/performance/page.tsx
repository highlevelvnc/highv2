import type { Metadata } from 'next'
import PerfHero from '@/components/sections/services/performance/PerfHero'
import PerfProblems from '@/components/sections/services/performance/PerfProblems'
import PerfDeliverables from '@/components/sections/services/performance/PerfDeliverables'
import PerfOutcomes from '@/components/sections/services/performance/PerfOutcomes'
import PerfFit from '@/components/sections/services/performance/PerfFit'
import PerfWork from '@/components/sections/services/performance/PerfWork'
import PerfCTA from '@/components/sections/services/performance/PerfCTA'
import RelatedServices from '@/components/shared/RelatedServices'
import { JsonLd } from '@/components/shared/JsonLd'
import { SITE_URL } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Performance — High Level',
  description:
    'Paid traffic management, SEO, AI-assisted content, CRO, and revenue attribution. We build the performance layer that helps companies grow with precision and less acquisition waste.',
  openGraph: {
    title: 'Performance — High Level',
    description:
      'Paid acquisition, SEO, and analytics infrastructure built for profitable growth — not vanity metrics.',
  },
  alternates: { canonical: '/services/performance' },
}

export default function PerformancePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
            { '@type': 'ListItem', position: 3, name: 'Performance', item: `${SITE_URL}/services/performance` },
          ],
        }}
      />
      <PerfHero />
      <PerfProblems />
      <PerfDeliverables />
      <PerfOutcomes />
      <PerfFit />
      <PerfWork />
      <RelatedServices currentSlug="performance" />
      <PerfCTA />
    </>
  )
}
