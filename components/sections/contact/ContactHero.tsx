'use client'

import { motion } from 'framer-motion'
import { heroLabel, heroSubheadline } from '@/lib/motion'
import SectionLabel from '@/components/shared/SectionLabel'
import Container from '@/components/shared/Container'

export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden bg-bg-primary"
      style={{ paddingTop: 'calc(var(--section-padding-y, 5rem) + 72px)', paddingBottom: 'var(--section-padding-y, 5rem)' }}
      aria-label="Contact hero"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        aria-hidden="true"
        style={{
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(108,58,255,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <Container>
        <div className="max-w-2xl">
          <motion.div
            variants={heroLabel}
            initial="hidden"
            animate="visible"
          >
            <SectionLabel withLine className="mb-6">
              Contact
            </SectionLabel>
          </motion.div>

          <motion.h1
            className="mb-6 font-display font-bold tracking-[-0.03em] text-text-primary leading-[1.08]"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            Let&apos;s build{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              something serious.
            </span>
          </motion.h1>

          <motion.p
            className="font-body text-text-secondary leading-[1.75] max-w-[480px]"
            style={{ fontSize: 'clamp(16px, 1.4vw, 18px)' }}
            variants={heroSubheadline}
            initial="hidden"
            animate="visible"
          >
            Tell us about your business, your goals, and where you want to be in
            twelve months. We&apos;ll respond within one business day.
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
