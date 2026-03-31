import type { Metadata } from 'next'
import GSHero from '@/components/sections/services/growth-systems/GSHero'
import GSProblems from '@/components/sections/services/growth-systems/GSProblems'
import GSDeliverables from '@/components/sections/services/growth-systems/GSDeliverables'
import GSOutcomes from '@/components/sections/services/growth-systems/GSOutcomes'
import GSFit from '@/components/sections/services/growth-systems/GSFit'
import GSWork from '@/components/sections/services/growth-systems/GSWork'
import GSCTA from '@/components/sections/services/growth-systems/GSCTA'
import RelatedServices from '@/components/shared/RelatedServices'
import { JsonLd } from '@/components/shared/JsonLd'
import { SITE_URL } from '@/lib/config/site'

export const metadata: Metadata = {
  title: 'Growth Systems — High Level',
  description:
    'CRM implementation, AI automations, process design, and lead handling infrastructure. We build the systems that turn interest into revenue — without the chaos.',
  openGraph: {
    title: 'Growth Systems — High Level',
    description:
      'CRM, automation, and revenue operations infrastructure for growth-stage businesses.',
  },
  alternates: { canonical: '/services/growth-systems' },
}

export default function GrowthSystemsPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
            { '@type': 'ListItem', position: 3, name: 'Growth Systems', item: `${SITE_URL}/services/growth-systems` },
          ],
        }}
      />
      <GSHero />
      <GSProblems />
      <GSDeliverables />
      <GSOutcomes />
      <GSFit />
      <GSWork />
      <RelatedServices currentSlug="growth-systems" />
      <GSCTA />
    </>
  )
}
