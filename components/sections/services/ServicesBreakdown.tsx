'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Workflow, Globe, Gauge, Megaphone } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { pillars, type Pillar } from '@/lib/data/services'

const iconMap = {
  workflow: Workflow,
  globe: Globe,
  gauge: Gauge,
  megaphone: Megaphone,
} as const

/* ─────────────────────────────────────────────────────────
   Single pillar column
───────────────────────────────────────────────────────── */

function PillarColumn({ pillar }: { pillar: Pillar }) {
  const Icon = iconMap[pillar.iconName]
  const gradientStyle = pillar.gradientVia
    ? `linear-gradient(135deg, ${pillar.gradientFrom} 0%, ${pillar.gradientVia} 50%, ${pillar.gradientTo} 100%)`
    : `linear-gradient(135deg, ${pillar.gradientFrom} 0%, ${pillar.gradientTo} 100%)`

  return (
    <motion.div variants={fadeInUp} className="flex flex-col">
      {/* Pillar header */}
      <div className="mb-6 flex items-center gap-3">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
          style={{ background: gradientStyle }}
          aria-hidden="true"
        >
          <Icon size={15} className="text-white" />
        </div>
        <Link
          href={`/services/${pillar.slug}`}
          className="group/heading font-display text-[15px] font-semibold tracking-[-0.01em] text-text-primary transition-colors duration-200 hover:text-accent-primary focus-visible:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-accent-primary"
          aria-label={`Explore ${pillar.name}`}
        >
          {pillar.name}
        </Link>
      </div>

      {/* Deliverables list */}
      <ul className="space-y-4">
        {pillar.deliverables.map((item) => (
          <li key={item.name} className="group flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span
                className="h-1 w-3 shrink-0 rounded-full"
                style={{ background: gradientStyle }}
                aria-hidden="true"
              />
              <span className="font-body text-[14px] font-medium text-text-primary">
                {item.name}
              </span>
            </div>
            <p className="pl-5 font-body text-[13px] leading-relaxed text-text-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────── */

export default function ServicesBreakdown() {
  return (
    <Section bg="primary" id="services-breakdown">
      <Container>
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              What&apos;s Included
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(28px,4vw,48px)] font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary">
              The full scope of{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                each pillar.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* 4-col breakdown grid */}
        <div className="rounded-2xl border border-border-subtle bg-bg-elevated p-8 sm:p-10">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          >
            {pillars.map((pillar) => (
              <PillarColumn key={pillar.id} pillar={pillar} />
            ))}
          </motion.div>
        </div>

        {/* Footnote */}
        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-center font-body text-[13px] text-text-muted">
            Every engagement is scoped individually. We do not sell fixed packages.
          </p>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
