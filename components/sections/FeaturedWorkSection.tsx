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
import SectionHeadline from '@/components/shared/SectionHeadline'
import BodyText from '@/components/shared/BodyText'
import ButtonPrimary from '@/components/shared/ButtonPrimary'
import ButtonSecondary from '@/components/shared/ButtonSecondary'
import { featuredWork, type CaseStudy } from '@/lib/data/work'

/* ─────────────────────────────────────────────────────────
   Media placeholder — parallax gradient slab
───────────────────────────────────────────────────────── */

function CaseStudyMedia({ study }: { study: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-24, 24])

  const gradientStyle = study.gradientVia
    ? `linear-gradient(135deg, ${study.gradientFrom} 0%, ${study.gradientVia} 50%, ${study.gradientTo} 100%)`
    : `linear-gradient(135deg, ${study.gradientFrom} 0%, ${study.gradientTo} 100%)`

  return (
    <div
      ref={ref}
      className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-bg-elevated"
    >
      {/* Parallax gradient layer */}
      <motion.div
        style={{ y, background: gradientStyle }}
        className="absolute inset-0 scale-110 opacity-90"
      />

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Client / industry badge */}
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-sm">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">
          {study.industry}
        </span>
      </div>

      {/* Year badge */}
      <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-sm">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">
          {study.year}
        </span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Metric display
───────────────────────────────────────────────────────── */

function MetricDisplay({
  metric,
  accentFrom,
  accentTo,
}: {
  metric: CaseStudy['metrics'][number]
  accentFrom: string
  accentTo: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <div
        className="bg-gradient-to-r bg-clip-text font-display text-[28px] font-semibold leading-none tracking-[-0.03em] text-transparent lg:text-[32px]"
        style={
          {
            '--tw-gradient-from': accentFrom,
            '--tw-gradient-to': accentTo,
          } as React.CSSProperties
        }
      >
        <span
          style={{
            backgroundImage: `linear-gradient(135deg, ${accentFrom} 0%, ${accentTo} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {metric.prefix}
          <CountUp
            to={metric.value}
            suffix={metric.suffix}
            decimals={metric.decimals}
          />
        </span>
      </div>
      <span className="font-body text-[12px] uppercase tracking-[0.1em] text-text-muted">
        {metric.label}
      </span>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Case study card
───────────────────────────────────────────────────────── */

function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      variants={fadeInUp}
      className="group grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
    >
      {/* Media — alternates sides on desktop */}
      <div className={cn('lg:order-none', !isEven && 'lg:order-last')}>
        <div className="overflow-hidden rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.01]">
          <CaseStudyMedia study={study} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col">
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border-subtle bg-bg-elevated px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Client */}
        <p className="mb-2 font-mono text-[12px] uppercase tracking-[0.12em] text-accent-primary">
          {study.client}
        </p>

        {/* Headline */}
        <h3 className="mb-5 font-display text-[22px] font-semibold leading-tight tracking-[-0.02em] text-text-primary sm:text-[26px]">
          {study.headline}
        </h3>

        {/* Description */}
        <p className="mb-8 font-body text-[15px] leading-relaxed text-text-secondary">
          {study.description}
        </p>

        {/* Metrics row */}
        <div className="mb-8 flex flex-wrap gap-8 border-t border-border-subtle pt-6">
          {study.metrics.map((metric) => (
            <MetricDisplay
              key={metric.label}
              metric={metric}
              accentFrom={study.gradientFrom}
              accentTo={study.gradientTo}
            />
          ))}
        </div>

        {/* CTA */}
        <div>
          <Link
            href={`/work/${study.slug}`}
            className="group/link inline-flex items-center gap-2 font-body text-[14px] font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            Read case study
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

/* ─────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────── */

export default function FeaturedWorkSection() {
  return (
    <Section bg="secondary" id="work">
      <Container>
        {/* Header */}
        <div className="mb-20 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <ScrollReveal>
              <SectionLabel withLine className="mb-5">
                Selected Work
              </SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <SectionHeadline size="xl" gradient>
                Results that
                <br />
                speak for themselves.
              </SectionHeadline>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <BodyText size="md" muted className="max-w-sm sm:text-right">
              Every engagement is built to compound. Here&apos;s what that
              looks like in practice.
            </BodyText>
          </ScrollReveal>
        </div>

        {/* Case study list */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-col gap-24 lg:gap-32"
        >
          {featuredWork.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </motion.div>

        {/* Footer CTA */}
        <ScrollReveal delay={0.1}>
          <div className="mt-20 flex flex-col items-center gap-4 border-t border-border-subtle pt-16 text-center sm:flex-row sm:justify-center">
            <ButtonPrimary size="lg">See All Case Studies</ButtonPrimary>
            <ButtonSecondary size="lg">Start Your Growth Engine</ButtonSecondary>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
