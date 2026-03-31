import type { Metadata } from 'next'
import WorkHero from '@/components/sections/work/WorkHero'
import WorkCaseStudies from '@/components/sections/work/WorkCaseStudies'
import WorkPhilosophy from '@/components/sections/work/WorkPhilosophy'
import WorkByCapability from '@/components/sections/work/WorkByCapability'
import WorkDelivery from '@/components/sections/work/WorkDelivery'
import WorkCTA from '@/components/sections/work/WorkCTA'

export const metadata: Metadata = {
  title: 'Work — High Level',
  description:
    'Selected case studies across growth systems, digital platforms, performance marketing, and brand presence. Real outcomes, real metrics, real businesses.',
  openGraph: {
    title: 'Work — High Level',
    description:
      'Selected work across platforms, systems, performance, and digital growth infrastructure — built to drive measurable business outcomes.',
  },
  alternates: { canonical: '/work' },
}

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkCaseStudies />
      <WorkPhilosophy />
      <WorkByCapability />
      <WorkDelivery />
      <WorkCTA />
    </>
  )
}
