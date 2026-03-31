'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
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

interface Pillar {
  id: string
  number: string
  title: string
  description: string
  outcomes: string[]
  accentClass: string
  glowColor: string
}

const pillars: Pillar[] = [
  {
    id: 'demand',
    number: '01',
    title: 'Demand Generation',
    description:
      'Full-funnel pipeline architecture. We build the systems that fill your calendar with buyers who already want what you sell.',
    outcomes: [
      'Signal-based outbound sequences',
      'LinkedIn authority campaigns',
      'Paid acquisition infrastructure',
    ],
    accentClass: 'from-[#6C3AFF] to-[#3B82F6]',
    glowColor: 'rgba(108,58,255,0.18)',
  },
  {
    id: 'content',
    number: '02',
    title: 'Content & SEO',
    description:
      'Organic moats that compound. We turn your expertise into the most trusted voice in your niche — and the algorithm agrees.',
    outcomes: [
      'Pillar-page keyword architecture',
      'Editorial content systems',
      'Distribution amplification',
    ],
    accentClass: 'from-[#8B5CF6] to-[#EC4899]',
    glowColor: 'rgba(139,92,246,0.18)',
  },
  {
    id: 'brand',
    number: '03',
    title: 'Brand & Positioning',
    description:
      'Category design, not just visual polish. We install a narrative that makes switching to a competitor feel like settling.',
    outcomes: [
      'Category and ICP definition',
      'Messaging architecture',
      'Visual identity systems',
    ],
    accentClass: 'from-[#3B82F6] to-[#10B981]',
    glowColor: 'rgba(59,130,246,0.18)',
  },
  {
    id: 'growth',
    number: '04',
    title: 'Growth Infrastructure',
    description:
      'The operating layer beneath every campaign. CRM architecture, attribution, automation — so growth is measurable and repeatable.',
    outcomes: [
      'CRM and MarTech stack builds',
      'Attribution & revenue reporting',
      'Marketing automation',
    ],
    accentClass: 'from-[#10B981] to-[#6C3AFF]',
    glowColor: 'rgba(16,185,129,0.18)',
  },
]

/* ─────────────────────────────────────────────────────────
   Card — consistent lift + glow hover (no 3D tilt)
───────────────────────────────────────────────────────── */

function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      className="group relative flex flex-col rounded-2xl border border-border-subtle bg-bg-elevated p-8 transition-colors duration-300 hover:border-border-hover"
    >
      {/* Ambient glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at top left, ${pillar.glowColor} 0%, transparent 60%)`,
        }}
      />

      {/* Number + arrow */}
      <div className="mb-6 flex items-start justify-between">
        <span
          className={cn(
            'font-mono text-[11px] font-semibold uppercase tracking-[0.15em]',
            'bg-gradient-to-r bg-clip-text text-transparent',
            pillar.accentClass,
          )}
        >
          {pillar.number}
        </span>
        <span className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4 text-text-secondary" />
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-3 font-display text-[22px] font-semibold leading-tight tracking-[-0.02em] text-text-primary">
        {pillar.title}
      </h3>

      {/* Description */}
      <p className="mb-6 font-body text-[15px] leading-relaxed text-text-secondary">
        {pillar.description}
      </p>

      {/* Accent divider — expands on hover */}
      <div
        className={cn(
          'mb-5 h-px w-10 rounded-full bg-gradient-to-r opacity-50 transition-all duration-300 group-hover:w-16 group-hover:opacity-100',
          pillar.accentClass,
        )}
      />

      {/* Outcomes */}
      <ul className="mt-auto space-y-2">
        {pillar.outcomes.map((outcome) => (
          <li key={outcome} className="flex items-start gap-2">
            <span
              className={cn(
                'mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br',
                pillar.accentClass,
              )}
            />
            <span className="font-body text-[13px] text-text-secondary">
              {outcome}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────── */

export default function ServicePillarsSection() {
  return (
    <Section bg="primary" id="services">
      <Container>
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              What We Do
            </SectionLabel>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <SectionHeadline size="xl" gradient className="mb-5">
              Four levers.
              <br />
              One growth system.
            </SectionHeadline>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <BodyText size="lg" muted>
              We don&apos;t sell services à la carte. Every engagement integrates
              across all four pillars — because isolated tactics don&apos;t
              compound.
            </BodyText>
          </ScrollReveal>
        </div>

        {/* 2×2 Grid */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
