'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { heroLabel, heroSubheadline, heroCTA } from '@/lib/motion'
import Container from '@/components/shared/Container'
import { Button } from '@/components/ui/button'
import InternalHeroBackground from '@/components/layout/InternalHeroBackground'

export default function DPHero() {
  return (
    <section
      className="relative overflow-hidden bg-bg-primary"
      style={{
        paddingTop: 'calc(var(--section-padding-y, 5rem) + 72px)',
        paddingBottom: 'var(--section-padding-y, 5rem)',
      }}
      aria-label="Digital Platforms hero"
    >
      <InternalHeroBackground
        glowAt="78% -5%"
        glowColor="rgba(108,58,255,0.20)"
        secondaryAt="10% 50%"
        secondaryColor="rgba(14,165,233,0.07)"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <motion.div
            variants={heroLabel}
            initial="hidden"
            animate="visible"
            className="mb-6 inline-flex items-center gap-2"
          >
            <Link
              href="/services"
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted transition-colors duration-200 hover:text-text-secondary focus-visible:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-accent-primary"
            >
              Services
            </Link>
            <ChevronRight size={11} className="text-text-muted" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-primary">
              Digital Platforms
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mb-6 font-display font-bold leading-[1.06] tracking-[-0.03em] text-text-primary"
            style={{ fontSize: 'clamp(38px, 6vw, 80px)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            Digital Platforms built
            <br />
            to{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0EA5E9 0%, #6C3AFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              convert,
            </span>{' '}
            differentiate,
            <br />
            and scale.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mb-10 max-w-[580px] font-body leading-[1.75] text-text-secondary"
            style={{ fontSize: 'clamp(16px, 1.4vw, 18px)' }}
            variants={heroSubheadline}
            initial="hidden"
            animate="visible"
          >
            From high-conversion websites and landing systems to custom platforms and immersive
            digital experiences, we build the interfaces where attention turns into action.
          </motion.p>

          {/* CTA */}
          <motion.div variants={heroCTA} initial="hidden" animate="visible">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact" className="group" data-magnetic>
                Book a Discovery Call
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
