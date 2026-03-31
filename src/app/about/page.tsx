import type { Metadata } from 'next'
import AboutHero from '@/components/sections/about/AboutHero'
import AboutWhy from '@/components/sections/about/AboutWhy'
import AboutPhilosophy from '@/components/sections/about/AboutPhilosophy'
import AboutHowWeWork from '@/components/sections/about/AboutHowWeWork'
import AboutTeam from '@/components/sections/about/AboutTeam'
import AboutRetention from '@/components/sections/about/AboutRetention'
import AboutCTA from '@/components/sections/about/AboutCTA'

export const metadata: Metadata = {
  title: 'About — High Level',
  description:
    'High Level is a Digital Growth Infrastructure company. We build systems, not campaigns — combining growth systems, digital platforms, performance, and brand presence into one scalable engine.',
  openGraph: {
    title: 'About — High Level',
    description:
      'High Level exists to help businesses grow through better infrastructure — combining systems, platforms, performance, automation, and strategic execution into one scalable engine.',
  },
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWhy />
      <AboutPhilosophy />
      <AboutHowWeWork />
      <AboutTeam />
      <AboutRetention />
      <AboutCTA />
    </>
  )
}
