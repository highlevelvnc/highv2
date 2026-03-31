'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { heroLabel, heroSubheadline } from '@/lib/motion'
import SectionLabel from '@/components/shared/SectionLabel'
import Container from '@/components/shared/Container'
import InternalHeroBackground from '@/components/layout/InternalHeroBackground'

export default function InsightsHero() {
  return (
    <section
      className="relative overflow-hidden bg-bg-primary"
      style={{
        paddingTop: 'calc(var(--section-padding-y, 5rem) + 72px)',
        paddingBottom: 'calc(var(--section-padding-y, 5rem) * 0.75)',
      }}
      aria-label="Insights hero"
    >
      {/* Editorial glow — softer than action pages, wider spread */}
      <InternalHeroBackground
        glowAt="60% -5%"
        glowColor="rgba(108,58,255,0.22)"
        secondaryAt="10% 60%"
        secondaryColor="rgba(139,92,246,0.07)"
      />

      <Container className="relative z-10">
        <div className="max-w-2xl">
          <motion.div variants={heroLabel} initial="hidden" animate="visible">
            <SectionLabel withLine className="mb-6">
              Insights
            </SectionLabel>
          </motion.div>

          <motion.h1
            className="mb-6 font-display font-bold leading-[1.06] tracking-[-0.03em] text-text-primary"
            style={{ fontSize: 'clamp(40px, 6.5vw, 88px)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            Thinking that{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              compounds.
            </span>
          </motion.h1>

          <motion.p
            className="mb-10 max-w-[500px] font-body leading-[1.75] text-text-secondary"
            style={{ fontSize: 'clamp(16px, 1.4vw, 18px)' }}
            variants={heroSubheadline}
            initial="hidden"
            animate="visible"
          >
            Ideas, systems, and strategic perspectives on growth, automation,
            performance, digital infrastructure, and positioning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 font-body text-[14px] font-medium text-text-muted transition-colors duration-200 hover:text-text-primary"
            >
              Explore our services
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
