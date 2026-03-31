'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'

const contrasts = [
  {
    id: 'c1',
    problem: 'Most businesses are sold disconnected services.',
    reframe:
      'A new campaign. A new website. A new social strategy. Each delivered in isolation, each requiring its own budget, and none of them compounding into something bigger.',
  },
  {
    id: 'c2',
    problem: 'Campaigns come and go. Infrastructure compounds.',
    reframe:
      'A well-built CRM keeps improving. A content moat keeps attracting. An automation system keeps converting. These are not one-time projects — they are assets that grow in value.',
  },
  {
    id: 'c3',
    problem: 'Companies need systems, not isolated tactics.',
    reframe:
      'When acquisition, platforms, automation, and brand work from the same strategic layer, growth becomes exponential rather than incremental. That is what High Level was built to create.',
  },
]

export default function AboutWhy() {
  return (
    <Section bg="secondary" id="about-why">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[5fr_7fr] lg:gap-24">
          {/* Left: editorial pull */}
          <div>
            <ScrollReveal>
              <SectionLabel withLine className="mb-5">
                Why We Exist
              </SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="mb-7 font-display text-[clamp(28px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.02em] text-text-primary">
                The problem with
                <br />
                <span
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  the agency model.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mb-5 font-body text-[15px] leading-relaxed text-text-secondary">
                Growth is not a campaign. It is a stack of interconnected systems
                that, when built correctly, make every subsequent effort easier and
                more efficient than the last.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-body text-[15px] leading-relaxed text-text-secondary">
                High Level was founded on the belief that most businesses are
                underserved by the agency model — sold isolated deliverables when
                what they actually need is a partner who thinks in systems, moves in
                data, and stays accountable to the same commercial outcomes they
                care about.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: contrast blocks */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle"
          >
            {contrasts.map((c) => (
              <motion.div
                key={c.id}
                variants={fadeInUp}
                className="group flex flex-col gap-3 bg-bg-elevated px-8 py-8 transition-colors duration-300 hover:bg-bg-primary/40"
              >
                {/* Problem statement */}
                <p className="font-display text-[15px] font-semibold leading-snug tracking-[-0.01em] text-text-primary">
                  {c.problem}
                </p>
                {/* Reframe */}
                <p className="font-body text-[14px] leading-relaxed text-text-secondary">
                  {c.reframe}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
