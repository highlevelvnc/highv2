'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { fitProfiles } from '@/lib/data/service-pages/growth-systems'

export default function GSFit() {
  return (
    <Section bg="primary" id="gs-fit">
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
                The right fit for
                <br />
                <span
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  growth-stage operations.
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <p className="font-body text-[15px] leading-relaxed text-text-secondary">
                Growth Systems works best for businesses that have traction — leads are coming in,
                revenue is moving — but the operations behind the scenes are not keeping pace.
                The goal is to match the system to the ambition.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: fit profile list */}
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
                {/* Check icon */}
                <div
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
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

        {/* Bottom callout — not for everyone */}
        <ScrollReveal delay={0.1}>
          <div className="mt-16 rounded-2xl border border-border-subtle bg-bg-elevated px-8 py-7">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
              <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted sm:pt-1">
                Not sure if this is the right starting point?
              </p>
              <p className="font-body text-[14px] leading-relaxed text-text-secondary">
                A 30-minute discovery call is usually enough to identify the right layer to start
                with. If Growth Systems is not the right fit, we will tell you — and point you
                toward what is.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
