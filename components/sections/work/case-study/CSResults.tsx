'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal, CountUp } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import type { CaseStudy } from '@/lib/data/work'

export default function CSResults({ study }: { study: CaseStudy }) {
  const gradientBg = study.gradientVia
    ? `linear-gradient(135deg, ${study.gradientFrom} 0%, ${study.gradientVia} 50%, ${study.gradientTo} 100%)`
    : `linear-gradient(135deg, ${study.gradientFrom} 0%, ${study.gradientTo} 100%)`

  return (
    <Section bg="secondary" id="results">
      <Container>
        {/* Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              The Outcomes
            </SectionLabel>
            <h2 className="font-display text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary">
              Results that held.
            </h2>
          </ScrollReveal>

          {study.impact && (
            <ScrollReveal delay={0.15}>
              <p className="font-body text-[clamp(15px,1.2vw,16px)] leading-[1.8] text-text-secondary">
                {study.impact}
              </p>
            </ScrollReveal>
          )}
        </div>

        {/* Metric cards */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-px bg-border-subtle sm:grid-cols-3"
        >
          {study.metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={fadeInUp}
              className="flex flex-col gap-3 bg-bg-secondary p-8 lg:p-10"
            >
              {/* Gradient accent line */}
              <div
                className="mb-2 h-0.5 w-12 rounded-full"
                style={{ background: gradientBg }}
                aria-hidden
              />
              <span
                className="font-display font-semibold leading-none tracking-[-0.03em]"
                style={{
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  backgroundImage: gradientBg,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {m.prefix}
                <CountUp to={m.value} suffix={m.suffix} decimals={m.decimals} />
              </span>
              <span className="font-body text-[13px] uppercase tracking-[0.08em] text-text-muted">
                {m.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
