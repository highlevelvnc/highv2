import type { Metadata } from 'next'
import InsightsHero from '@/components/sections/insights/InsightsHero'
import InsightsFeatured from '@/components/sections/insights/InsightsFeatured'
import InsightsGrid from '@/components/sections/insights/InsightsGrid'
import InsightsNewsletter from '@/components/sections/insights/InsightsNewsletter'
import InsightsClosing from '@/components/sections/insights/InsightsClosing'

export const metadata: Metadata = {
  title: 'Insights — High Level',
  description:
    'Ideas, systems, and strategic perspectives on growth, automation, performance, digital infrastructure, and positioning. Thinking that compounds.',
  openGraph: {
    title: 'Insights — High Level',
    description:
      'Strategic perspectives on growth, automation, performance, SEO, and digital infrastructure from the High Level team.',
  },
  alternates: { canonical: '/insights' },
}

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <InsightsFeatured />
      <InsightsGrid />
      <InsightsNewsletter />
      <InsightsClosing />
    </>
  )
}
