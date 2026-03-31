'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { retentionReasons } from '@/lib/data/about'

export default function AboutRetention() {
  return (
    <Section bg="secondary" id="about-retention">
      <Container>
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <ScrollReveal>
              <SectionLabel withLine className="mb-5">
                Client Retention
              </SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-[clamp(32px,5vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-text-primary">
                Why clients{' '}
                <span
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  stay.
                </span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <p className="font-body text-[15px] leading-relaxed text-text-secondary lg:max-w-sm lg:pb-1">
              The average High Level engagement runs for 18 months. That is not
              by contract — it is because the work keeps producing value beyond
              what any single deliverable could.
            </p>
          </ScrollReveal>
        </div>

        {/* Reason grid — 2×3 */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {retentionReasons.map((reason) => (
            <motion.div
              key={reason.id}
              variants={fadeInUp}
              className="group relative flex flex-col rounded-2xl border border-border-subtle bg-bg-elevated p-7 transition-all duration-300 hover:border-border-hover"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(108,58,255,0.05)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Accent dot */}
              <span
                className="mb-5 block h-2 w-2 rounded-full bg-accent-primary opacity-60"
                aria-hidden="true"
              />

              {/* Title */}
              <h3 className="mb-3 font-display text-[16px] font-semibold tracking-[-0.01em] text-text-primary">
                {reason.title}
              </h3>

              {/* Body */}
              <p className="font-body text-[14px] leading-relaxed text-text-secondary">
                {reason.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Editorial closer — full-width pull */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-border-subtle bg-bg-elevated px-8 py-8 sm:px-12">
            <p className="font-display text-[clamp(18px,2.5vw,24px)] font-semibold leading-snug tracking-[-0.02em] text-text-primary">
              &ldquo;The goal is never to be useful for one project. It is to
              become the growth infrastructure layer that the business relies on
              to scale.&rdquo;
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
              High Level — Founding Principle
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
