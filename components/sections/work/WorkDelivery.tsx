'use client'

import { motion } from 'framer-motion'
import { Brain, Fingerprint, Layers, Zap, Target } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'

const attributes = [
  {
    icon: Brain,
    title: 'Strategic thinking first',
    body: 'Every engagement begins with a diagnosis, not a deliverable. We understand your business before we recommend a single tactic — and we challenge briefs that don\'t start in the right place.',
  },
  {
    icon: Fingerprint,
    title: 'Custom, not templated',
    body: 'We don\'t sell packages. We scope work around your specific situation, constraints, and goals. No two engagements look the same because no two businesses are the same.',
  },
  {
    icon: Layers,
    title: 'Systems that compound',
    body: 'We build infrastructure, not campaigns. The growth levers we put in place are designed to improve over time — not require constant reinvestment to maintain output.',
  },
  {
    icon: Zap,
    title: 'Fast iteration cycles',
    body: 'Most engagements produce first results within 30 days. We move in tight sprints, measure continuously, and adapt quickly — because markets don\'t wait for quarterly reviews.',
  },
  {
    icon: Target,
    title: 'Business alignment',
    body: 'We talk to founders, operators, and commercial leads — not just marketing. Growth work that isn\'t connected to revenue targets, sales process, and P&L context rarely compounds.',
  },
]

export default function WorkDelivery() {
  return (
    <Section bg="secondary" id="work-delivery">
      <Container>
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              How We Work
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mb-5 font-display text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary">
              More than{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                delivery.
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-[15px] leading-relaxed text-text-secondary">
              The work above shows outputs. Here&apos;s what drives them.
            </p>
          </ScrollReveal>
        </div>

        {/* Attributes list */}
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-3"
        >
          {attributes.map((attr) => {
            const Icon = attr.icon
            return (
              <motion.div
                key={attr.title}
                variants={fadeInUp}
                className="group flex flex-col gap-5 bg-bg-elevated px-8 py-10 transition-colors duration-300 hover:bg-bg-primary/50"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03]"
                  aria-hidden="true"
                >
                  <Icon size={18} className="text-accent-primary opacity-80" />
                </div>
                <div>
                  <h3 className="mb-2 font-display text-[16px] font-semibold tracking-[-0.01em] text-text-primary">
                    {attr.title}
                  </h3>
                  <p className="font-body text-[14px] leading-relaxed text-text-secondary">
                    {attr.body}
                  </p>
                </div>
              </motion.div>
            )
          })}
          {/* Spacer cell to complete 3-col grid when 5 items */}
          <div className="hidden bg-bg-elevated lg:block" aria-hidden="true" />
        </motion.div>
      </Container>
    </Section>
  )
}
