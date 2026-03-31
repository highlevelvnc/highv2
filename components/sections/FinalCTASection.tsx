'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { scaleIn } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import ButtonPrimary from '@/components/shared/ButtonPrimary'

/* ─────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────── */

export default function FinalCTASection() {
  return (
    <Section bg="primary" id="contact" className="!overflow-visible">
      <Container>
        {/* Outer wrapper — positions the ambient glow */}
        <div className="relative">
          {/* Ambient glow layers */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(108,58,255,0.25) 0%, rgba(59,130,246,0.12) 40%, transparent 70%)',
              filter: 'blur(60px)',
            }}
            aria-hidden="true"
          />

          {/* Card */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative overflow-hidden rounded-3xl border border-border-subtle bg-bg-elevated px-8 py-14 text-center sm:px-16 sm:py-20 lg:px-24"
          >
            {/* Subtle inner glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(108,58,255,0.1) 0%, transparent 60%)',
              }}
              aria-hidden="true"
            />

            {/* Decorative top border gradient */}
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(108,58,255,0.5) 30%, rgba(59,130,246,0.5) 70%, transparent 100%)',
              }}
              aria-hidden="true"
            />

            {/* Content */}
            <ScrollReveal>
              <SectionLabel className="mb-6 justify-center">
                The Next Step
              </SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                className="mx-auto mb-6 max-w-2xl font-display text-[clamp(32px,5vw,64px)] font-semibold leading-[1.08] tracking-[-0.03em] text-text-primary"
              >
                Ready to build your{' '}
                <span
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  growth engine?
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mx-auto mb-10 max-w-md font-body text-[17px] leading-relaxed text-text-secondary">
                One call. We&apos;ll diagnose the gap, map the opportunity,
                and tell you exactly what we&apos;d do — no obligation, no
                pitch deck.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <ButtonPrimary size="xl">
                  Book a Discovery Call
                </ButtonPrimary>

                <a
                  href="#work"
                  className="group inline-flex items-center gap-1.5 font-body text-[15px] font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
                >
                  See how we work
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </ScrollReveal>

            {/* Bottom reassurance line */}
            <ScrollReveal delay={0.4}>
              <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
                No commitment · No jargon · Results or we don&apos;t charge
              </p>
            </ScrollReveal>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
