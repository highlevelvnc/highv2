'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInLeft, fadeInRight } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { outcomes } from '@/lib/data/service-pages/performance'

export default function PerfOutcomes() {
  return (
    <Section bg="secondary" id="perf-outcomes">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">
          {/* Left: sticky header */}
          <div className="lg:sticky lg:top-32">
            <ScrollReveal>
              <SectionLabel withLine className="mb-5">
                Performance in practice
              </SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="mb-5 font-display text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-text-primary">
                What better performance
                <br />
                <span
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  actually changes.
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <p className="font-body text-[15px] leading-relaxed text-text-secondary">
                Performance is not channel management. It is a system for profitable
                growth — where every input is measurable, every decision is backed by
                data, and every component makes the others more efficient over time.
              </p>
            </ScrollReveal>

            {/* Callout stat */}
            <ScrollReveal delay={0.2}>
              <div className="mt-10 rounded-2xl border border-border-subtle bg-bg-elevated p-7">
                <p className="mb-2 font-display text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] text-text-primary">
                  <span
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    40–60%
                  </span>
                </p>
                <p className="font-body text-[14px] leading-relaxed text-text-secondary">
                  The typical share of paid budget wasted on misattributed spend, poor
                  targeting, and weak conversion paths — before a proper performance
                  architecture is in place.
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
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold font-mono"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(236,72,153,0.12) 0%, rgba(245,158,11,0.12) 100%)',
                      border: '1px solid rgba(236,72,153,0.25)',
                      color: '#F472B6',
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
