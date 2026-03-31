'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { workTraits } from '@/lib/data/about'

export default function AboutHowWeWork() {
  return (
    <Section bg="secondary" id="about-how-we-work">
      <Container>
        {/* Two-col header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <ScrollReveal>
              <SectionLabel withLine className="mb-5">
                Engagement Model
              </SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-[clamp(32px,5vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-text-primary">
                How we{' '}
                <span
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  work.
                </span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <p className="font-body text-[15px] leading-relaxed text-text-secondary lg:max-w-sm">
              We work with a deliberately small number of clients at any one
              time. That is not a constraint — it is a quality decision.
            </p>
          </ScrollReveal>
        </div>

        {/* Traits grid */}
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {workTraits.map((trait) => (
            <motion.div
              key={trait.number}
              variants={fadeInUp}
              className="group relative flex flex-col rounded-2xl border border-border-subtle bg-bg-elevated p-7 transition-all duration-300 hover:border-border-hover"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(108,58,255,0.05)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Number */}
              <span
                className="mb-5 block font-display text-[clamp(32px,4vw,48px)] font-bold leading-none tracking-[-0.04em] text-text-primary opacity-[0.07]"
                aria-hidden="true"
              >
                {trait.number}
              </span>

              {/* Title */}
              <h3 className="mb-3 font-display text-[16px] font-semibold tracking-[-0.01em] text-text-primary">
                {trait.title}
              </h3>

              {/* Body */}
              <p className="font-body text-[14px] leading-relaxed text-text-secondary">
                {trait.body}
              </p>
            </motion.div>
          ))}

          {/* Selectively narrow card — positioning statement, fills grid */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-start justify-between rounded-2xl border border-accent-primary/20 bg-accent-primary/[0.04] p-7"
          >
            <p className="mb-4 font-display text-[17px] font-semibold leading-snug tracking-[-0.02em] text-text-primary">
              &ldquo;We keep client numbers deliberately low to protect the
              quality of what we deliver.&rdquo;
            </p>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent-primary">
              High Level
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
