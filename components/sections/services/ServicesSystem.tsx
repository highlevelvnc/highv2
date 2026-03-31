'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { synergies, pillars } from '@/lib/data/services'

/** Resolve a pillar name to its slug for internal links. */
function slugFor(name: string): string {
  return pillars.find((p) => p.name === name)?.slug ?? '#'
}

/* ─────────────────────────────────────────────────────────
   Pillar layer visual — 4 stacked gradient bars
───────────────────────────────────────────────────────── */

const layers = [
  { label: 'Brand Presence', gradient: 'linear-gradient(90deg, #10B981 0%, #0EA5E9 50%, #6C3AFF 100%)', width: '100%' },
  { label: 'Digital Platforms', gradient: 'linear-gradient(90deg, #0EA5E9 0%, #6C3AFF 100%)', width: '82%' },
  { label: 'Performance', gradient: 'linear-gradient(90deg, #EC4899 0%, #F59E0B 100%)', width: '68%' },
  { label: 'Growth Systems', gradient: 'linear-gradient(90deg, #6C3AFF 0%, #3B82F6 100%)', width: '55%' },
] as const

function LayerDiagram() {
  return (
    <div className="flex flex-col gap-2.5" aria-label="Service layer diagram" role="img">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.label}
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
        >
          {/* Bar */}
          <div
            className="h-10 rounded-lg"
            style={{ width: layer.width, background: layer.gradient, minWidth: '120px' }}
          />
          {/* Label */}
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
            {layer.label}
          </span>
        </motion.div>
      ))}
      {/* Axis label */}
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted/60">
        ← Compounding effect over time
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Synergy card
───────────────────────────────────────────────────────── */

function SynergyCard({
  synergy,
}: {
  synergy: (typeof synergies)[number]
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group flex flex-col rounded-2xl border border-border-subtle bg-bg-elevated p-6 transition-all duration-300 hover:border-border-hover"
    >
      {/* Connection header */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Link
          href={`/services/${slugFor(synergy.pillarA)}`}
          className="rounded-full border border-accent-primary/25 bg-accent-primary/8 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-accent-primary transition-colors duration-200 hover:bg-accent-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-1 focus-visible:ring-offset-bg-elevated"
        >
          {synergy.pillarA}
        </Link>
        <ArrowRight size={13} className="shrink-0 text-text-muted" aria-hidden="true" />
        <Link
          href={`/services/${slugFor(synergy.pillarB)}`}
          className="rounded-full border border-accent-primary/25 bg-accent-primary/8 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-accent-primary transition-colors duration-200 hover:bg-accent-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-1 focus-visible:ring-offset-bg-elevated"
        >
          {synergy.pillarB}
        </Link>
      </div>

      {/* Outcome */}
      <p className="font-body text-[14px] leading-relaxed text-text-secondary">
        {synergy.outcome}
      </p>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────── */

export default function ServicesSystem() {
  return (
    <Section bg="secondary" id="services-system">
      <Container>
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              The System
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mb-5 font-display text-[clamp(32px,5vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-text-primary">
              Each layer works
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                better together.
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-[15px] leading-relaxed text-text-secondary">
              Isolated tactics produce isolated results. The reason our
              engagements compound is that each pillar strengthens the others —
              creating infrastructure, not just activity.
            </p>
          </ScrollReveal>
        </div>

        {/* Two-col: diagram + synergies */}
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-start lg:gap-20">
          {/* Layer diagram */}
          <ScrollReveal>
            <div className="rounded-2xl border border-border-subtle bg-bg-elevated p-8">
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
                Infrastructure stack
              </p>
              <LayerDiagram />
            </div>
          </ScrollReveal>

          {/* Synergies */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-4"
          >
            {synergies.map((s) => (
              <SynergyCard key={s.id} synergy={s} />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
