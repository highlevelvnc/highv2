'use client'

import { useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { ScrollReveal, CountUp, InfiniteMarquee } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { metrics, testimonials, clientMarks } from '@/lib/data/social-proof'

/* ─────────────────────────────────────────────────────────
   Metrics Row — big gradient numbers with per-cell glow
───────────────────────────────────────────────────────── */

function MetricsRow() {
  return (
    <div className="mb-16 grid grid-cols-1 gap-px sm:grid-cols-3 overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle">
      {metrics.map((metric, i) => (
        <div
          key={metric.label}
          className="relative flex flex-col items-center justify-center gap-1.5 bg-bg-elevated px-6 py-10 text-center sm:px-8 sm:py-12 overflow-hidden"
        >
          {/* Per-cell ambient glow */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                i === 0
                  ? 'radial-gradient(ellipse 70% 80% at 50% 110%, rgba(108,58,255,0.09) 0%, transparent 65%)'
                  : i === 1
                    ? 'radial-gradient(ellipse 70% 80% at 50% 110%, rgba(139,92,246,0.07) 0%, transparent 65%)'
                    : 'radial-gradient(ellipse 70% 80% at 50% 110%, rgba(59,130,246,0.07) 0%, transparent 65%)',
            }}
          />

          {/* Top accent line */}
          <div
            className="absolute inset-x-0 top-0 h-px"
            aria-hidden="true"
            style={{
              background:
                i === 0
                  ? 'linear-gradient(90deg, transparent, rgba(108,58,255,0.4) 50%, transparent)'
                  : i === 1
                    ? 'linear-gradient(90deg, transparent, rgba(139,92,246,0.32) 50%, transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(59,130,246,0.32) 50%, transparent)',
              opacity: 0.8,
            }}
          />

          <div
            className="relative font-display text-[clamp(42px,6vw,68px)] font-semibold leading-none tracking-[-0.04em]"
            style={{
              backgroundImage:
                i === 0
                  ? 'linear-gradient(135deg, #6C3AFF 0%, #8B5CF6 100%)'
                  : i === 1
                    ? 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)'
                    : 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            <CountUp
              to={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              decimals={metric.decimals}
              duration={1600}
            />
          </div>
          <p className="relative font-display text-[15px] font-medium text-text-primary">
            {metric.label}
          </p>
          {metric.sublabel && (
            <p className="relative font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
              {metric.sublabel}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Testimonial Card — mouse-tracking spotlight
───────────────────────────────────────────────────────── */

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number]
}) {
  const cardRef = useRef<HTMLElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width)  * 100
    const y = ((e.clientY - rect.top)  / rect.height) * 100
    el.style.setProperty('--sx', `${x}%`)
    el.style.setProperty('--sy', `${y}%`)
  }, [])

  const handleMouseLeave = useCallback(() => {
    cardRef.current?.style.removeProperty('--sx')
    cardRef.current?.style.removeProperty('--sy')
  }, [])

  return (
    <motion.figure
      ref={cardRef}
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col rounded-2xl border border-border-subtle bg-bg-elevated p-7 transition-all duration-300 hover:border-border-hover"
    >
      {/* Mouse-tracking spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle 160px at var(--sx, 50%) var(--sy, 50%), rgba(108,58,255,0.14) 0%, transparent 70%)',
        }}
      />

      {/* Gradient top border on hover */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(108,58,255,0.35) 40%, rgba(59,130,246,0.35) 60%, transparent)',
        }}
      />

      {/* Quote icon with gradient */}
      <div
        className="mb-5 shrink-0"
        aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          width: 'fit-content',
        }}
      >
        <Quote size={20} />
      </div>

      {/* Quote text */}
      <blockquote className="mb-7 flex-1 font-body text-[15px] leading-[1.75] text-text-secondary">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Divider */}
      <div className="mb-5 h-px w-full bg-border-subtle" />

      {/* Author */}
      <figcaption className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
          style={{
            background: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
          }}
          aria-hidden="true"
        >
          <span className="font-display text-[14px] font-semibold">
            {testimonial.initial}
          </span>
        </div>

        <div>
          <p className="font-display text-[14px] font-medium text-text-primary">
            {testimonial.name}
          </p>
          <p className="font-body text-[12px] text-text-muted">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  )
}

/* ─────────────────────────────────────────────────────────
   Client mark strip
───────────────────────────────────────────────────────── */

function ClientMarkStrip() {
  return (
    <div className="mt-16 border-t border-border-subtle pt-14">
      <p className="mb-10 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
        Trusted by growth-stage teams across Europe
      </p>

      <InfiniteMarquee baseVelocity={-30} velocityFactor={4}>
        {clientMarks.map((client) => (
          <div
            key={client.id}
            title={`${client.name} — ${client.segment}`}
            className="group flex items-center gap-2.5 opacity-30 transition-opacity duration-300 hover:opacity-60"
          >
            <div className="flex h-7 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04]">
              <span className="font-mono text-[9px] font-semibold tracking-[0.12em] text-white/70">
                {client.monogram}
              </span>
            </div>
            <span className="font-display text-[14px] font-medium tracking-[-0.01em] text-text-secondary whitespace-nowrap">
              {client.name}
            </span>
          </div>
        ))}
      </InfiniteMarquee>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────── */

export default function SocialProofSection() {
  return (
    <Section bg="primary" id="social-proof">
      <Container>
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              Proof
            </SectionLabel>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary">
              The numbers
              <br />
              <span
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                don&apos;t lie.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Metrics */}
        <ScrollReveal delay={0.05}>
          <MetricsRow />
        </ScrollReveal>

        {/* Testimonials */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </motion.div>

        {/* Client strip */}
        <ScrollReveal delay={0.05}>
          <ClientMarkStrip />
        </ScrollReveal>
      </Container>
    </Section>
  )
}
