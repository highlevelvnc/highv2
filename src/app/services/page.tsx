import type { Metadata } from 'next'
import ServicesHero from '@/components/sections/services/ServicesHero'
import ServicesPillars from '@/components/sections/services/ServicesPillars'
import ServicesBreakdown from '@/components/sections/services/ServicesBreakdown'
import ServicesSystem from '@/components/sections/services/ServicesSystem'
import ServicesStartingPoint from '@/components/sections/services/ServicesStartingPoint'
import ServicesConversion from '@/components/sections/services/ServicesConversion'
import ServicesCTA from '@/components/sections/services/ServicesCTA'

export const metadata: Metadata = {
  title: 'Services — High Level',
  description:
    'Growth infrastructure built in four layers: Growth Systems, Digital Platforms, Performance, and Brand Presence. Each pillar is outcome-oriented, scoped individually, and built to compound.',
  openGraph: {
    title: 'Services — High Level',
    description:
      'From AI systems and digital platforms to performance engines and brand presence — the infrastructure modern businesses need to grow with precision.',
  },
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesPillars />
      <ServicesBreakdown />
      <ServicesSystem />
      <ServicesStartingPoint />
      <ServicesConversion />
      <ServicesCTA />
    </>
  )
}
