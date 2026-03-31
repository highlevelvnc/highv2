'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { problems } from '@/lib/data/service-pages/growth-systems'

export default function GSProblems() {
  return (
    <Section bg="secondary" id="gs-problems">
      <Container>
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              Where most companies break
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="font-display text-[clamp(30px,4.5vw,52px)] font-bold leading-[1.1] tracking-[-0.03em] text-text-primary">
              The gaps between
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                interest and revenue.
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="mt-5 font-body text-[16px] leading-relaxed text-text-secondary">
              These are the operational failure points we encounter most consistently. If any of
              these sound familiar, the problem is not your team — it is the infrastructure.
            </p>
          </ScrollReveal>
        </div>

        {/* Problems list */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-px bg-border-subtle sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-border-subtle"
        >
          {problems.map((problem, idx) => (
            <motion.div
              key={problem.id}
              variants={fadeInUp}
              className="flex flex-col gap-4 bg-bg-elevated p-8"
            >
              {/* Number */}
              <span
                className="font-mono text-[11px] font-medium tracking-[0.14em]"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                aria-hidden="true"
              >
                {String(idx + 1).padStart(2, '0')}
              </span>

              <h3 className="font-display text-[17px] font-semibold leading-snug tracking-[-0.01em] text-text-primary">
                {problem.headline}
              </h3>

              <p className="font-body text-[14px] leading-relaxed text-text-secondary">
                {problem.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
