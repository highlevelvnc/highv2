'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInLeft, fadeInRight } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { outcomes } from '@/lib/data/service-pages/growth-systems'

export default function GSOutcomes() {
  return (
    <Section bg="secondary" id="gs-outcomes">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">
          {/* Left: sticky header column */}
          <div className="lg:sticky lg:top-32">
            <ScrollReveal>
              <SectionLabel withLine className="mb-5">
                Systems in practice
              </SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="mb-5 font-display text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-text-primary">
                How better systems
                <br />
                <span
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  change the business.
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <p className="font-body text-[15px] leading-relaxed text-text-secondary">
                Systems are not back-office infrastructure. They are the layer that determines
                whether your investment in marketing, sales, and growth actually compounds —
                or leaks.
              </p>
            </ScrollReveal>

            {/* Callout stat */}
            <ScrollReveal delay={0.2}>
              <div className="mt-10 rounded-2xl border border-border-subtle bg-bg-elevated p-7">
                <p className="mb-2 font-display text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] text-text-primary">
                  <span
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    5–10×
                  </span>
                </p>
                <p className="font-body text-[14px] leading-relaxed text-text-secondary">
                  The typical leverage ratio when infrastructure replaces manual process — same
                  team, same budget, measurably more output.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: outcomes list */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col divide-y divide-border-subtle"
          >
            {outcomes.map((outcome, idx) => (
              <motion.div
                key={outcome.id}
                variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
                className="flex flex-col gap-3 py-8 first:pt-0 last:pb-0"
              >
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold font-mono"
                    style={{
                      background: 'linear-gradient(135deg, rgba(108,58,255,0.15) 0%, rgba(59,130,246,0.15) 100%)',
                      border: '1px solid rgba(108,58,255,0.25)',
                      color: '#9B7FFF',
                    }}
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <h3 className="mb-2 font-display text-[17px] font-semibold leading-snug tracking-[-0.01em] text-text-primary">
                      {outcome.headline}
                    </h3>
                    <p className="font-body text-[14px] leading-relaxed text-text-secondary">
                      {outcome.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
