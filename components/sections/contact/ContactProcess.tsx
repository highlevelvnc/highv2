'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'We review your brief',
    description:
      'Every submission is read by a senior team member — not filtered by a junior or an AI. We assess fit, identify the core problem, and prepare a qualified response.',
  },
  {
    number: '02',
    title: 'You receive a response',
    description:
      'Within one business day, you\u2019ll hear back with our honest read of the situation, relevant experience, and a suggested path forward. No template replies.',
  },
  {
    number: '03',
    title: 'We align on scope',
    description:
      'If there\u2019s a fit, we schedule a focused call to pressure-test assumptions and agree on scope. From there, we move fast — most engagements kick off within two weeks.',
  },
]

export default function ContactProcess() {
  return (
    <Section bg="secondary" id="contact-process">
      <Container>
        {/* Header */}
        <div className="mb-14 max-w-lg">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              What happens next
            </SectionLabel>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(28px,4vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary">
              No black box.
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Here&apos;s the process.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-px sm:grid-cols-3 overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative flex flex-col bg-bg-elevated px-8 py-10"
            >
              {/* Number */}
              <span
                className="mb-6 font-display text-[clamp(40px,5vw,56px)] font-bold leading-none tracking-[-0.04em] opacity-[0.07]"
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Title */}
              <h3 className="mb-3 font-display text-[17px] font-semibold tracking-[-0.02em] text-text-primary sm:text-[18px]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-body text-[14px] leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
