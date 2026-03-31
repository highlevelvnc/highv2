'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Workflow, Globe, Gauge, Megaphone, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { pillars, type Pillar } from '@/lib/data/services'

/* ─────────────────────────────────────────────────────────
   Icon map
───────────────────────────────────────────────────────── */

const iconMap = {
  workflow: Workflow,
  globe: Globe,
  gauge: Gauge,
  megaphone: Megaphone,
} as const

/* ─────────────────────────────────────────────────────────
   Pillar card
───────────────────────────────────────────────────────── */

function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  const Icon = iconMap[pillar.iconName]
  const isEven = index % 2 === 0

  const gradientStyle = pillar.gradientVia
    ? `linear-gradient(135deg, ${pillar.gradientFrom} 0%, ${pillar.gradientVia} 50%, ${pillar.gradientTo} 100%)`
    : `linear-gradient(135deg, ${pillar.gradientFrom} 0%, ${pillar.gradientTo} 100%)`

  return (
    <motion.article
      variants={fadeInUp}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-bg-elevated transition-all duration-300 hover:border-border-hover"
    >
      {/* Gradient accent top bar */}
      <div
        className="h-1 w-full shrink-0"
        style={{ background: gradientStyle }}
        aria-hidden="true"
      />

      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at ${isEven ? 'top left' : 'top right'}, ${pillar.gradientFrom}0D 0%, transparent 60%)`,
        }}
      />

      <div className="relative flex flex-col p-8 sm:p-10">
        {/* Icon + pillar name */}
        <div className="mb-6 flex items-center gap-4">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
            style={{ background: gradientStyle }}
            aria-hidden="true"
          >
            <Icon size={20} className="text-white" />
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
              Capability
            </p>
            <h3 className="font-display text-[18px] font-semibold tracking-[-0.01em] text-text-primary">
              {pillar.name}
            </h3>
          </div>
        </div>

        {/* Tagline */}
        <p
          className="mb-5 font-display text-[20px] font-semibold leading-tight tracking-[-0.02em] sm:text-[22px]"
          style={{
            backgroundImage: gradientStyle,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {pillar.tagline}
        </p>

        {/* Description */}
        <p className="mb-7 font-body text-[15px] leading-relaxed text-text-secondary">
          {pillar.description}
        </p>

        {/* Solves */}
        <div className="mb-8">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
            Addresses
          </p>
          <ul className="space-y-2.5">
            {pillar.solves.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-body text-[14px] leading-snug text-text-secondary"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: gradientStyle }}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Link
            href={`/services/${pillar.slug}`}
            className="group/link inline-flex items-center gap-2 font-body text-[14px] font-medium text-text-muted transition-colors duration-200 hover:text-text-primary"
            aria-label={`Explore ${pillar.name}`}
          >
            Explore {pillar.name}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

/* ─────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────── */

export default function ServicesPillars() {
  return (
    <Section bg="secondary" id="service-pillars">
      <Container>
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              Four Pillars
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mb-5 font-display text-[clamp(32px,5vw,56px)] font-semibold leading-[1.08] tracking-[-0.02em] text-text-primary">
              Each pillar is a{' '}
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
          <ScrollReveal delay={0.15}>
            <p className="font-body text-[15px] leading-relaxed text-text-secondary">
              Most companies need one or two pillars urgently. All four working
              together is where growth becomes compounding and defensible.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid — 2 col on md, stack on mobile */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
