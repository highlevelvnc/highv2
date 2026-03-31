import type { Metadata } from 'next'
import BPHero from '@/components/sections/services/brand-presence/BPHero'
import BPProblems from '@/components/sections/services/brand-presence/BPProblems'
import BPDeliverables from '@/components/sections/services/brand-presence/BPDeliverables'
import BPOutcomes from '@/components/sections/services/brand-presence/BPOutcomes'
import BPFit from '@/components/sections/services/brand-presence/BPFit'
import BPWork from '@/components/sections/services/brand-presence/BPWork'
import BPCTA from '@/components/sections/services/brand-presence/BPCTA'
import RelatedServices from '@/components/shared/RelatedServices'
import { JsonLd } from '@/components/shared/JsonLd'
import { SITE_URL } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Brand Presence — High Level',
  description:
    'Brand positioning, content systems, thought leadership, and authority assets. We build the presence layer that helps companies be understood, remembered, and chosen — before the first conversation.',
  openGraph: {
    title: 'Brand Presence — High Level',
    description:
      'Positioning, content, and authority infrastructure that builds commercial advantage — not just a better-looking brand.',
  },
  alternates: { canonical: '/services/brand-presence' },
}

export default function BrandPresencePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
            { '@type': 'ListItem', position: 3, name: 'Brand Presence', item: `${SITE_URL}/services/brand-presence` },
          ],
        }}
      />
      <BPHero />
      <BPProblems />
      <BPDeliverables />
      <BPOutcomes />
      <BPFit />
      <BPWork />
      <RelatedServices currentSlug="brand-presence" />
      <BPCTA />
    </>
  )
}
