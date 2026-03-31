'use client'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
} from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import SectionHeadline from '@/components/shared/SectionHeadline'
import BodyText from '@/components/shared/BodyText'

/* ─────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────── */

interface ProcessStep {
  number: string
  title: string
  duration: string
  description: string
  deliverables: string[]
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Diagnostic',
    duration: 'Week 1–2',
    description:
      'We audit your current stack, channels, messaging, and data. You walk away with a clear picture of where revenue is leaking and what to fix first.',
    deliverables: [
      'Full-funnel audit',
      'ICP & positioning analysis',
      'Competitive landscape map',
      'Prioritised opportunity list',
    ],
  },
  {
    number: '02',
    title: 'Architecture',
    duration: 'Week 3–4',
    description:
      'We design the full growth system: channels, messaging, tech stack, KPIs, and 90-day roadmap. Strategy without a playbook is just theory.',
    deliverables: [
      '90-day growth roadmap',
      'Channel & budget allocation',
      'Messaging architecture',
      'Tech stack blueprint',
    ],
  },
  {
    number: '03',
    title: 'Execution',
    duration: 'Month 2–3',
    description:
      'We build and launch — campaigns, content systems, automations, and reporting infrastructure. Fast iteration with clear performance gates.',
    deliverables: [
      'Live campaigns & sequences',
      'Content & SEO system launch',
      'CRM & automation build',
      'Weekly performance reviews',
    ],
  },
  {
    number: '04',
    title: 'Compound',
    duration: 'Month 4+',
    description:
      'Early wins fund bigger bets. We scale what works, kill what doesn\'t, and build the compounding systems that make growth self-sustaining.',
    deliverables: [
      'Scale winning channels',
      'Attribution & revenue reporting',
      'Retention & expansion loops',
      'Quarterly strategy reviews',
    ],
  },
]

/* ─────────────────────────────────────────────────────────
   Scroll-driven progress line (desktop)
───────────────────────────────────────────────────────── */

function ProgressLine({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.7', 'end 0.5'],
  })
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 25 })

  return (
    <div className="relative mb-12 hidden h-px bg-border-subtle lg:block">
      <motion.div
        style={{ scaleX, transformOrigin: 'left' }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6C3AFF] to-[#3B82F6]"
      />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Vertical progress line (mobile)
───────────────────────────────────────────────────────── */

function VerticalProgressLine({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.6'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 })

  return (
    <div className="absolute left-[19px] top-0 h-full w-px bg-border-subtle lg:hidden">
      <motion.div
        style={{ scaleY, transformOrigin: 'top' }}
        className="absolute inset-0 rounded-full bg-gradient-to-b from-[#6C3AFF] to-[#3B82F6]"
      />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Step (desktop — column card)
───────────────────────────────────────────────────────── */

function StepCard({ step }: { step: ProcessStep }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative flex flex-col"
    >
      {/* Desktop: dot on the line */}
      <div className="mb-8 hidden lg:flex lg:items-center lg:gap-4">
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-hover bg-bg-elevated">
          <div className="h-2 w-2 rounded-full bg-gradient-to-br from-[#6C3AFF] to-[#3B82F6] transition-transform duration-300 group-hover:scale-150" />
          {/* Pulse ring */}
          <div className="absolute inset-0 animate-ping rounded-full border border-[#6C3AFF] opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
        </div>
      </div>

      {/* Card body */}
      <div className="flex-1 rounded-2xl border border-border-subtle bg-bg-elevated p-6 transition-all duration-300 hover:border-border-hover">
        {/* Number + duration */}
        <div className="mb-4 flex items-center justify-between">
          <span className="bg-gradient-to-r from-[#6C3AFF] to-[#3B82F6] bg-clip-text font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-transparent">
            {step.number}
          </span>
          <span className="rounded-full border border-border-subtle px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">
            {step.duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 font-display text-[20px] font-semibold leading-tight tracking-[-0.02em] text-text-primary">
          {step.title}
        </h3>

        {/* Description */}
        <p className="mb-5 font-body text-[14px] leading-relaxed text-text-secondary">
          {step.description}
        </p>

        {/* Divider */}
        <div className="mb-4 h-px w-full bg-border-subtle" />

        {/* Deliverables */}
        <ul className="space-y-1.5">
          {step.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className="mt-[3px] shrink-0 text-accent-primary"
                fill="none"
              >
                <path
                  d="M2 6L5 9L10 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-body text-[13px] text-text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────
   Step (mobile — row with vertical line)
───────────────────────────────────────────────────────── */

function StepRow({ step, index }: { step: ProcessStep; index: number }) {
  const isLast = index === steps.length - 1

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative flex gap-6 lg:hidden"
    >
      {/* Node */}
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-hover bg-bg-elevated">
        <div className="h-2 w-2 rounded-full bg-gradient-to-br from-[#6C3AFF] to-[#3B82F6]" />
      </div>

      {/* Content */}
      <div className={cn('flex-1 pb-12', isLast && 'pb-0')}>
        <div className="mb-1 flex items-center gap-3">
          <span className="bg-gradient-to-r from-[#6C3AFF] to-[#3B82F6] bg-clip-text font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-transparent">
            {step.number}
          </span>
          <span className="rounded-full border border-border-subtle px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">
            {step.duration}
          </span>
        </div>

        <h3 className="mb-2 font-display text-[20px] font-semibold leading-tight tracking-[-0.02em] text-text-primary">
          {step.title}
        </h3>

        <p className="mb-4 font-body text-[14px] leading-relaxed text-text-secondary">
          {step.description}
        </p>

        <ul className="space-y-1.5">
          {step.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className="mt-[3px] shrink-0 text-accent-primary"
                fill="none"
              >
                <path
                  d="M2 6L5 9L10 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-body text-[13px] text-text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────── */

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <Section ref={sectionRef} bg="primary" id="process">
      <Container>
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              How We Work
            </SectionLabel>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <SectionHeadline size="xl" gradient className="mb-5">
              From diagnosis
              <br />
              to compound growth.
            </SectionHeadline>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <BodyText size="lg" muted>
              A structured 90-day sprint gets the engine running. Then we shift
              into compounding mode — scaling what works, feeding the flywheel.
            </BodyText>
          </ScrollReveal>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <ProgressLine sectionRef={sectionRef} />
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-4 gap-6"
          >
            {steps.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </motion.div>
        </div>

        {/* Mobile: vertical timeline */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="relative lg:hidden"
        >
          <VerticalProgressLine sectionRef={sectionRef} />
          {steps.map((step, i) => (
            <StepRow key={step.number} step={step} index={i} />
          ))}
        </motion.div>

        {/* Bottom callout */}
        <ScrollReveal delay={0.1}>
          <div className="mt-16 rounded-2xl border border-border-subtle bg-bg-elevated p-8 text-center">
            <p className="mb-2 font-display text-[20px] font-semibold tracking-[-0.02em] text-text-primary sm:text-[24px]">
              Most clients see measurable results within{' '}
              <span className="bg-gradient-to-r from-[#6C3AFF] to-[#3B82F6] bg-clip-text text-transparent">
                30 days.
              </span>
            </p>
            <p className="font-body text-[15px] text-text-secondary">
              No six-month onboarding. No waiting for the strategy deck before
              anything moves.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
