'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { heroLabel, heroSubheadline, heroCTA } from '@/lib/motion'
import SectionLabel from '@/components/shared/SectionLabel'
import Container from '@/components/shared/Container'
import { Button } from '@/components/ui/button'
import InternalHeroBackground from '@/components/layout/InternalHeroBackground'

export default function ServicesHero() {
  return (
    <section
      className="relative overflow-hidden bg-bg-primary"
      style={{
        paddingTop: 'calc(var(--section-padding-y, 5rem) + 72px)',
        paddingBottom: 'var(--section-padding-y, 5rem)',
      }}
      aria-label="Services hero"
    >
      <InternalHeroBackground
        glowAt="75% -5%"
        glowColor="rgba(108,58,255,0.20)"
        secondaryAt="15% 50%"
        secondaryColor="rgba(59,130,246,0.07)"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.div variants={heroLabel} initial="hidden" animate="visible">
            <SectionLabel withLine className="mb-6">
              Services
            </SectionLabel>
          </motion.div>

          <motion.h1
            className="mb-6 font-display font-bold leading-[1.06] tracking-[-0.03em] text-text-primary"
            style={{ fontSize: 'clamp(40px, 6.5vw, 88px)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            Growth infrastructure,
            <br />
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              built in layers.
            </span>
          </motion.h1>

          <motion.p
            className="mb-10 max-w-[560px] font-body leading-[1.75] text-text-secondary"
            style={{ fontSize: 'clamp(16px, 1.4vw, 18px)' }}
            variants={heroSubheadline}
            initial="hidden"
            animate="visible"
          >
            From AI systems and digital platforms to performance engines and brand
            presence, High Level builds the infrastructure modern businesses need
            to grow with precision.
          </motion.p>

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
