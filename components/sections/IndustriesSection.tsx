'use client'

import {
  HeartPulse,
  Dumbbell,
  Building2,
  Briefcase,
  MapPin,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
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

interface Industry {
  id: string
  icon: LucideIcon
  title: string
  description: string
  iconColor: string
  glowColor: string
}

const industries: Industry[] = [
  {
    id: 'clinics',
    icon: HeartPulse,
    title: 'Health & Clinics',
    description:
      'Patient acquisition systems, reputation management, and local authority for medical and wellness practices.',
    iconColor: '#EC4899',
    glowColor: 'rgba(236,72,153,0.12)',
  },
  {
    id: 'gyms',
    icon: Dumbbell,
    title: 'Gyms & Studios',
    description:
      'Member growth, retention campaigns, and brand presence for fitness businesses at every scale.',
    iconColor: '#F97316',
    glowColor: 'rgba(249,115,22,0.12)',
  },
  {
    id: 'realestate',
    icon: Building2,
    title: 'Real Estate',
    description:
      'Lead generation infrastructure, nurture sequences, and content authority for agents and developers.',
    iconColor: '#3B82F6',
    glowColor: 'rgba(59,130,246,0.12)',
  },
  {
    id: 'services',
    icon: Briefcase,
    title: 'Professional Services',
    description:
      'Demand generation and positioning systems for consultancies, agencies, and B2B professional firms.',
    iconColor: '#6C3AFF',
    glowColor: 'rgba(108,58,255,0.12)',
  },
  {
    id: 'localbusiness',
    icon: MapPin,
    title: 'Local Business',
    description:
      'Hyperlocal SEO, review systems, and community trust-building for neighbourhood-anchored businesses.',
    iconColor: '#10B981',
    glowColor: 'rgba(16,185,129,0.12)',
  },
]

/* ─────────────────────────────────────────────────────────
   Card
───────────────────────────────────────────────────────── */

function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = industry.icon

  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-border-subtle bg-bg-elevated p-7 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover">
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at top left, ${industry.glowColor} 0%, transparent 65%)`,
        }}
      />

      {/* Icon */}
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-bg-primary transition-colors duration-300 group-hover:border-border-hover">
        <Icon size={20} style={{ color: industry.iconColor }} aria-hidden="true" />
      </div>

      {/* Title + arrow */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-display text-[17px] font-semibold leading-snug tracking-[-0.01em] text-text-primary">
          {industry.title}
        </h3>
        <ArrowUpRight
          size={15}
          className="mt-0.5 shrink-0 translate-y-1 text-text-muted opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>

      {/* Description */}
      <p className="font-body text-[14px] leading-relaxed text-text-secondary">
        {industry.description}
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────── */

export default function IndustriesSection() {
  return (
    <Section bg="secondary" id="industries">
      <Container>
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <ScrollReveal>
              <SectionLabel withLine className="mb-5">
                Industries
              </SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <SectionHeadline size="lg" gradient>
                Built for businesses
                <br />
                that want to lead.
              </SectionHeadline>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <BodyText size="md" muted className="max-w-xs sm:text-right">
              We go deep in the verticals we know. Expertise compounds faster
              than generalism.
            </BodyText>
          </ScrollReveal>
        </div>

        {/* ── Mobile: horizontal snap scroll ──────────────── */}
        {/*
          Bleeds to the Container edge on mobile via negative margins.
          Cards are 75vw wide with a peek of the next card.
          No JS required — pure CSS scroll snap.
        */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="sm:hidden -mx-5 px-5 flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Industries — scroll to see all"
        >
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="w-[min(75vw,300px)] shrink-0 snap-start"
            >
              <IndustryCard industry={industry} />
            </div>
          ))}
          {/* Trailing spacer so last card doesn't sit flush against edge */}
          <div className="w-5 shrink-0" aria-hidden="true" />
        </motion.div>

        {/* ── sm+: flex-wrap grid (centers last row) ────────── */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="hidden sm:flex sm:flex-wrap sm:justify-center gap-5"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              variants={fadeInUp}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
            >
              <IndustryCard industry={industry} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
