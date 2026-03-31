'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { fitProfiles } from '@/lib/data/service-pages/brand-presence'

export default function BPFit() {
  return (
    <Section bg="primary" id="bp-fit">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Left: copy */}
          <div>
            <ScrollReveal>
              <SectionLabel withLine className="mb-5">
                Who this is for
              </SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="mb-5 font-display text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-text-primary">
                Built for businesses
                <br />
                <span
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #10B981 0%, #6C3AFF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  that deserve better positioning.
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <p className="font-body text-[15px] leading-relaxed text-text-secondary">
                Brand Presence works best when the underlying business is already
                strong — and the gap is between what it delivers and how it is perceived.
                The goal is to close that gap deliberately, not by accident.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: fit checklist */}
          <motion.div
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-4"
          >
            {fitProfiles.map((profile) => (
              <motion.div
                key={profile.id}
                variants={fadeInUp}
                className="flex gap-4 rounded-2xl border border-border-subtle bg-bg-elevated p-6 transition-colors duration-300 hover:border-border-hover"
              >
                <div
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #6C3AFF 100%)',
                  }}
                  aria-hidden="true"
                >
                  <Check size={12} className="text-white" strokeWidth={2.5} />
                </div>

                <div>
                  <p className="mb-1.5 font-display text-[15px] font-semibold leading-snug text-text-primary">
                    {profile.label}
                  </p>
                  <p className="font-body text-[13px] leading-relaxed text-text-secondary">
                    {profile.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom qualifier */}
        <ScrollReveal delay={0.1}>
          <div className="mt-16 rounded-2xl border border-border-subtle bg-bg-elevated px-8 py-7">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
              <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted sm:pt-1">
                Is Brand Presence the right starting point?
              </p>
              <p className="font-body text-[14px] leading-relaxed text-text-secondary">
                Sometimes the brand constraint is downstream — a platform that does not
                convert, or systems that cannot handle the leads brand investment will
                generate. A discovery call helps identify whether Brand Presence is the
                highest-leverage first layer, or whether something else unlocks more value
                faster.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
