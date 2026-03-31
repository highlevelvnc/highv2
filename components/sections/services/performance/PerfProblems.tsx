'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { problems } from '@/lib/data/service-pages/performance'

export default function PerfProblems() {
  return (
    <Section bg="secondary" id="perf-problems">
      <Container>
        <div className="mb-14 max-w-2xl">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              Where growth spend starts leaking
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="font-display text-[clamp(30px,4.5vw,52px)] font-bold leading-[1.1] tracking-[-0.03em] text-text-primary">
              The gap between
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                spend and returns.
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="mt-5 font-body text-[16px] leading-relaxed text-text-secondary">
              The answer is rarely more budget. More often, it is a performance architecture
              problem — the wrong structure, missing attribution, or misaligned channels.
              These are the failure modes we see most consistently.
            </p>
          </ScrollReveal>
        </div>

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
              <span
                className="font-mono text-[11px] font-medium tracking-[0.14em]"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)',
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
