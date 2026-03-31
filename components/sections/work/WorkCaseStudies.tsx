'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { ScrollReveal, CountUp } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { featuredWork, type CaseStudy } from '@/lib/data/work'

/* ─────────────────────────────────────────────────────────
   Parallax gradient slab
───────────────────────────────────────────────────────── */

function CaseStudyMedia({ study }: { study: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20])

  const bg = study.gradientVia
    ? `linear-gradient(135deg, ${study.gradientFrom} 0%, ${study.gradientVia} 50%, ${study.gradientTo} 100%)`
    : `linear-gradient(135deg, ${study.gradientFrom} 0%, ${study.gradientTo} 100%)`

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-bg-elevated lg:aspect-[3/4]"
    >
      <motion.div
        style={{ y, background: bg }}
        className="absolute inset-0 scale-110 opacity-90"
      />
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
        }}
      />
      {/* Year badge */}
      <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-sm">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">
          {study.year}
        </span>
      </div>
      {/* Industry badge */}
      <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-sm">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">
          {study.industry}
        </span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Metric
───────────────────────────────────────────────────────── */

function Metric({
  metric,
  gradientFrom,
  gradientTo,
}: {
  metric: CaseStudy['metrics'][number]
  gradientFrom: string
  gradientTo: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className="font-display text-[28px] font-semibold leading-none tracking-[-0.03em] lg:text-[32px]"
        style={{
          backgroundImage: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {metric.prefix}
        <CountUp to={metric.value} suffix={metric.suffix} decimals={metric.decimals} />
      </span>
      <span className="font-body text-[11px] uppercase tracking-[0.1em] text-text-muted">
        {metric.label}
      </span>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Case study card
───────────────────────────────────────────────────────── */

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      variants={fadeInUp}
      className="group grid gap-10 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-20"
    >
      {/* Media — alternates on desktop */}
      <div className={cn(!isEven && 'lg:order-last')}>
        <div className="overflow-hidden rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]">
          <CaseStudyMedia study={study} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col">
        {/* Capability + client */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-accent-primary/30 bg-accent-primary/8 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-accent-primary">
            {study.capability}
          </span>
          <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-text-muted">
            {study.client}
          </span>
        </div>

        {/* Headline */}
        <h3 className="mb-6 font-display text-[clamp(20px,2.5vw,28px)] font-semibold leading-tight tracking-[-0.02em] text-text-primary">
          {study.headline}
        </h3>

        {/* Challenge / Solution */}
        {study.challenge && study.solution && (
          <div className="mb-6 space-y-3 border-l-2 border-border-subtle pl-4">
            <div>
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
                Challenge
              </span>
              <p className="font-body text-[14px] leading-relaxed text-text-secondary">
                {study.challenge}
              </p>
            </div>
            <div>
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
                Solution
              </span>
              <p className="font-body text-[14px] leading-relaxed text-text-secondary">
                {study.solution}
              </p>
            </div>
          </div>
        )}

        {/* Metrics */}
        <div className="mb-6 flex flex-wrap gap-8 border-t border-border-subtle pt-6">
          {study.metrics.map((m) => (
            <Metric
              key={m.label}
              metric={m}
              gradientFrom={study.gradientFrom}
              gradientTo={study.gradientTo}
            />
          ))}
        </div>

        {/* Tags + CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border-subtle bg-bg-elevated px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={`/work/${study.slug}`}
            className="group/link inline-flex items-center gap-1.5 font-body text-[13px] font-medium text-text-muted transition-colors duration-200 hover:text-text-primary"
            aria-label={`Read case study: ${study.headline}`}
          >
            Read case study
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

/* ─────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────── */

export default function WorkCaseStudies() {
  return (
    <Section bg="primary" id="case-studies">
      <Container>
        {/* Header */}
        <div className="mb-20">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              Case Studies
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary">
              Six engagements.{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                All outcomes real.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.04 }}
          className="flex flex-col gap-28 lg:gap-36"
        >
          {featuredWork.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
