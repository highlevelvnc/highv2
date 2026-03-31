'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInLeft, fadeInRight } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { outcomes } from '@/lib/data/service-pages/digital-platforms'

export default function DPOutcomes() {
  return (
    <Section bg="secondary" id="dp-outcomes">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">
          {/* Left: sticky header */}
          <div className="lg:sticky lg:top-32">
            <ScrollReveal>
              <SectionLabel withLine className="mb-5">
                Platforms in practice
              </SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="mb-5 font-display text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-text-primary">
                What better platforms
                <br />
                <span
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #0EA5E9 0%, #6C3AFF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  actually change.
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <p className="font-body text-[15px] leading-relaxed text-text-secondary">
                A digital platform is not a brochure. It is the operating layer of your
                acquisition, positioning, and conversion strategy. These are the business
                outcomes when the platform is built to do real work.
              </p>
            </ScrollReveal>

            {/* Callout stat */}
            <ScrollReveal delay={0.2}>
              <div className="mt-10 rounded-2xl border border-border-subtle bg-bg-elevated p-7">
                <p className="mb-2 font-display text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] text-text-primary">
                  <span
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #0EA5E9 0%, #6C3AFF 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    3–5×
                  </span>
                </p>
                <p className="font-body text-[14px] leading-relaxed text-text-secondary">
                  The typical conversion rate uplift when a campaign-specific landing page
                  replaces a generic homepage. Same traffic, same spend — more results.
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
                        'linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(108,58,255,0.12) 100%)',
                      border: '1px solid rgba(14,165,233,0.25)',
                      color: '#38BDF8',
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
