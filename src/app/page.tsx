import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}
import ManifestoSection from '@/components/sections/ManifestoSection'
import ServicePillarsSection from '@/components/sections/ServicePillarsSection'
import FeaturedWorkSection from '@/components/sections/FeaturedWorkSection'
import ProcessSection from '@/components/sections/ProcessSection'
import IndustriesSection from '@/components/sections/IndustriesSection'
import TechSection from '@/components/sections/TechSection'
import SocialProofSection from '@/components/sections/SocialProofSection'
import InsightsSection from '@/components/sections/InsightsSection'
import FinalCTASection from '@/components/sections/FinalCTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <ServicePillarsSection />
      <FeaturedWorkSection />
      <ProcessSection />
      <IndustriesSection />
      <TechSection />
      <SocialProofSection />
      <InsightsSection />
      <FinalCTASection />
    </>
  )
}
