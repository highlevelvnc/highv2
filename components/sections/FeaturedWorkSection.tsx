'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ScrollReveal, CountUp } from '@/components/animations'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import SectionHeadline from '@/components/shared/SectionHeadline'
import BodyText from '@/components/shared/BodyText'
import ButtonPrimary from '@/components/shared/ButtonPrimary'
import ButtonSecondary from '@/components/shared/ButtonSecondary'
import { featuredWork, type CaseStudy } from '@/lib/data/work'
import { gsap } from '@/lib/gsap'

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
      className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-bg-elevated"
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
      <div className="font-display text-[28px] font-semibold leading-none tracking-[-0.03em] lg:text-[32px]">
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
   Horizontal scroll card — full-screen width
───────────────────────────────────────────────────────── */

function HorizontalCard({
  study,
  index,
  total,
}: {
  study: CaseStudy
  index: number
  total: number
}) {
  return (
    <div
      className="relative flex h-full w-[85vw] max-w-[1100px] shrink-0 flex-col justify-center px-4 sm:px-8 lg:w-[75vw]"
    >
      <article className="group grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        {/* Media */}
        <div className={cn('lg:order-none', index % 2 !== 0 && 'lg:order-last')}>
          <div className="overflow-hidden rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.02]">
            <CaseStudyMedia study={study} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col">
          {/* Counter */}
          <div className="mb-6 flex items-center gap-4">
            <span
              className="font-mono text-[48px] font-bold leading-none tracking-[-0.04em]"
              style={{
                backgroundImage: `linear-gradient(135deg, ${study.gradientFrom} 0%, ${study.gradientTo} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                opacity: 0.3,
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
              / {String(total).padStart(2, '0')}
            </span>
          </div>

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
          <h3 className="mb-5 font-display text-[22px] font-semibold leading-tight tracking-[-0.02em] text-text-primary sm:text-[28px]">
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
      </article>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Progress indicators
───────────────────────────────────────────────────────── */

function ProgressDot({
  index,
  progress,
}: {
  index: number
  progress: ReturnType<typeof useTransform<number, number>>
}) {
  const width = useTransform(progress, (p: number) =>
    Math.abs(p - index) < 0.5 ? 24 : 6,
  )
  const opacity = useTransform(progress, (p: number) =>
    Math.abs(p - index) < 0.5 ? 1 : 0.3,
  )
  const bg = useTransform(progress, (p: number) =>
    Math.abs(p - index) < 0.5
      ? 'linear-gradient(90deg, #6C3AFF, #3B82F6)'
      : 'rgba(255,255,255,0.2)',
  )

  return (
    <motion.div
      className="h-1.5 rounded-full transition-all duration-300"
      style={{ width, opacity, background: bg }}
    />
  )
}

function ScrollProgressDots({
  total,
  containerRef,
}: {
  total: number
  containerRef: React.RefObject<HTMLDivElement | null>
}) {
  const { scrollYProgress } = useScroll({ target: containerRef })
  const progress = useTransform(scrollYProgress, [0, 1], [0, total - 1])

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <ProgressDot key={i} index={i} progress={progress} />
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Section — Horizontal Scroll Showcase
───────────────────────────────────────────────────────── */

export default function FeaturedWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  /* GSAP horizontal scroll pinning */
  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    /* Only horizontal scroll on desktop */
    if (window.innerWidth < 1024) return

    const track = trackRef.current
    const totalScroll = track.scrollWidth - window.innerWidth

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative overflow-hidden bg-bg-secondary"
      style={{
        paddingTop: 'var(--section-padding-y)',
        paddingBottom: 'var(--section-padding-y)',
      }}
    >
      {/* Header — always visible above the horizontal track */}
      <Container className="mb-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
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
            <div className="flex flex-col items-end gap-4">
              <BodyText size="md" muted className="max-w-sm sm:text-right">
                Every engagement is built to compound. Here&apos;s what that
                looks like in practice.
              </BodyText>
              {/* Progress dots — desktop only */}
              <div className="hidden lg:block">
                <ScrollProgressDots
                  total={featuredWork.length}
                  containerRef={sectionRef}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* ── Horizontal scroll track (desktop) ── */}
      <div className="hidden lg:block">
        <div
          ref={trackRef}
          className="flex items-center gap-8 pl-[max(2rem,calc((100vw-1280px)/2+2rem))]"
          style={{ willChange: 'transform' }}
        >
          {featuredWork.map((study, i) => (
            <HorizontalCard
              key={study.id}
              study={study}
              index={i}
              total={featuredWork.length}
            />
          ))}
          {/* End spacer */}
          <div className="w-[10vw] shrink-0" />
        </div>
      </div>

      {/* ── Vertical stack (mobile/tablet) ── */}
      <Container className="lg:hidden">
        <div className="flex flex-col gap-20">
          {featuredWork.map((study) => (
            <article
              key={study.id}
              className="group grid gap-8"
            >
              <div className="overflow-hidden rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                <CaseStudyMedia study={study} />
              </div>

              <div className="flex flex-col">
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
                <p className="mb-2 font-mono text-[12px] uppercase tracking-[0.12em] text-accent-primary">
                  {study.client}
                </p>
                <h3 className="mb-5 font-display text-[22px] font-semibold leading-tight tracking-[-0.02em] text-text-primary">
                  {study.headline}
                </h3>
                <p className="mb-8 font-body text-[15px] leading-relaxed text-text-secondary">
                  {study.description}
                </p>
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
                <Link
                  href={`/work/${study.slug}`}
                  className="group/link inline-flex items-center gap-2 font-body text-[14px] font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
                >
                  Read case study
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>

      {/* Footer CTA */}
      <Container className="mt-16">
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col items-center gap-4 border-t border-border-subtle pt-16 text-center sm:flex-row sm:justify-center">
            <ButtonPrimary size="lg">See All Case Studies</ButtonPrimary>
            <ButtonSecondary size="lg">Start Your Growth Engine</ButtonSecondary>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
