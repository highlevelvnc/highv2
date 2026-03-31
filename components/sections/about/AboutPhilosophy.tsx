'use client'

import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { principles } from '@/lib/data/about'

export default function AboutPhilosophy() {
  return (
    <Section bg="primary" id="about-philosophy">
      <Container>
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              How We Think
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mb-5 font-display text-[clamp(32px,5vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-text-primary">
              How we approach{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                growth.
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-[15px] leading-relaxed text-text-secondary">
              These are not slogans. They are the operating principles behind
              every decision, every scope, and every piece of work we deliver.
            </p>
          </ScrollReveal>
        </div>

        {/* Principles list — numbered, editorial */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="divide-y divide-border-subtle"
        >
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              custom={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
              className="group grid gap-4 py-8 sm:grid-cols-[80px_1fr_2fr] sm:gap-8 sm:py-10"
            >
              {/* Number */}
              <span
                className="font-display text-[clamp(28px,3vw,40px)] font-bold leading-none tracking-[-0.04em] text-text-primary opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.12]"
                aria-hidden="true"
              >
                {p.number}
              </span>

              {/* Title */}
              <h3 className="font-display text-[17px] font-semibold leading-snug tracking-[-0.02em] text-text-primary sm:text-[18px] sm:pt-0.5">
                {p.title}
              </h3>

              {/* Body */}
              <p className="font-body text-[15px] leading-relaxed text-text-secondary sm:pt-0.5">
                {p.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
