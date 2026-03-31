'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { ScrollReveal, CountUp } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { allWork, CAPABILITIES, type Capability, type CaseStudy } from '@/lib/data/work'

/* ─────────────────────────────────────────────────────────
   Compact capability card
───────────────────────────────────────────────────────── */

function CapabilityCard({ study }: { study: CaseStudy }) {
  const primaryMetric = study.metrics[0]

  return (
    <motion.div
      variants={fadeInUp}
      layout
      className="group flex flex-col rounded-2xl border border-border-subtle bg-bg-elevated p-6 transition-all duration-300 hover:border-border-hover"
    >
      {/* Gradient accent bar */}
      <div
        className="mb-5 h-1 w-12 rounded-full"
        style={{
          background: `linear-gradient(90deg, ${study.gradientFrom}, ${study.gradientTo})`,
        }}
        aria-hidden="true"
      />

      {/* Client + capability */}
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent-primary">
          {study.client}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-text-muted">
          {study.year}
        </span>
      </div>

      {/* Headline */}
      <p className="mb-5 flex-1 font-display text-[15px] font-semibold leading-tight tracking-[-0.01em] text-text-primary">
        {study.headline}
      </p>

      {/* Primary metric */}
      <div className="mb-5 border-t border-border-subtle pt-5">
        <span
          className="block font-display text-[26px] font-semibold leading-none tracking-[-0.03em]"
          style={{
            backgroundImage: `linear-gradient(135deg, ${study.gradientFrom} 0%, ${study.gradientTo} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {primaryMetric.prefix}
          <CountUp
            to={primaryMetric.value}
            suffix={primaryMetric.suffix}
            decimals={primaryMetric.decimals}
          />
        </span>
        <span className="mt-1 block font-body text-[11px] uppercase tracking-[0.1em] text-text-muted">
          {primaryMetric.label}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border-subtle px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────── */

export default function WorkByCapability() {
  const [active, setActive] = useState<Capability>('All')

  const filtered =
    active === 'All'
      ? allWork
      : allWork.filter((s) => s.capability === active)

  return (
    <Section bg="primary" id="work-by-capability">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              By Capability
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(32px,5vw,52px)] font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary">
              Work across every
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                growth lever.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Capability tabs */}
        <ScrollReveal delay={0.1}>
          <div
            className="mb-10 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter by capability"
          >
            {CAPABILITIES.map((cap) => (
              <button
                key={cap}
                role="tab"
                aria-selected={active === cap}
                aria-controls="capability-grid"
                onClick={() => setActive(cap)}
                className={cn(
                  'rounded-full border px-5 py-2.5 font-body text-[13px] font-medium transition-all duration-200',
                  active === cap
                    ? 'border-accent-primary/50 bg-accent-primary/10 text-text-primary'
                    : 'border-border-subtle bg-bg-elevated text-text-muted hover:border-border-hover hover:text-text-secondary',
                )}
              >
                {cap}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div id="capability-grid" role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={staggerContainer(0.07)}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((study) => (
                <CapabilityCard key={study.id} study={study} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  )
}
