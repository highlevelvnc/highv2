import type { Metadata } from 'next'
import DPHero from '@/components/sections/services/digital-platforms/DPHero'
import DPProblems from '@/components/sections/services/digital-platforms/DPProblems'
import DPDeliverables from '@/components/sections/services/digital-platforms/DPDeliverables'
import DPOutcomes from '@/components/sections/services/digital-platforms/DPOutcomes'
import DPFit from '@/components/sections/services/digital-platforms/DPFit'
import DPWork from '@/components/sections/services/digital-platforms/DPWork'
import DPCTA from '@/components/sections/services/digital-platforms/DPCTA'
import RelatedServices from '@/components/shared/RelatedServices'
import { JsonLd } from '@/components/shared/JsonLd'
import { SITE_URL } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Digital Platforms — High Level',
  description:
    'High-conversion websites, landing pages, 3D experiences, and custom platforms built to convert, differentiate, and scale. The digital infrastructure your growth strategy needs.',
  openGraph: {
    title: 'Digital Platforms — High Level',
    description:
      'Websites, landing pages, and custom platforms built for conversion and scale — not aesthetics alone.',
  },
  alternates: { canonical: '/services/digital-platforms' },
}

export default function DigitalPlatformsPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
            { '@type': 'ListItem', position: 3, name: 'Digital Platforms', item: `${SITE_URL}/services/digital-platforms` },
          ],
        }}
      />
      <DPHero />
      <DPProblems />
      <DPDeliverables />
      <DPOutcomes />
      <DPFit />
      <DPWork />
      <RelatedServices currentSlug="digital-platforms" />
      <DPCTA />
    </>
  )
}
