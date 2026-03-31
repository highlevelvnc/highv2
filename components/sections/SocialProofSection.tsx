'use client'


import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { fadeInUp, fadeIn, staggerContainer } from '@/lib/motion'
import { ScrollReveal, CountUp } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { metrics, testimonials, clientMarks } from '@/lib/data/social-proof'

/* ─────────────────────────────────────────────────────────
   Metrics Row
───────────────────────────────────────────────────────── */

function MetricsRow() {
  return (
    <div className="mb-16 grid grid-cols-1 gap-px sm:grid-cols-3 overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="flex flex-col items-center justify-center gap-1.5 bg-bg-elevated px-6 py-8 text-center sm:px-8 sm:py-10"
        >
          <div
            className="font-display text-[clamp(40px,6vw,64px)] font-semibold leading-none tracking-[-0.04em]"
            style={{
              backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
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
          <p className="font-display text-[15px] font-medium text-text-primary">
            {metric.label}
          </p>
          {metric.sublabel && (
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
              {metric.sublabel}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Testimonial Card
───────────────────────────────────────────────────────── */

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number]
}) {
  return (
    <motion.figure
      variants={fadeInUp}
      className="group relative flex flex-col rounded-2xl border border-border-subtle bg-bg-elevated p-7 transition-all duration-300 hover:border-border-hover"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(108,58,255,0.05)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Quote icon */}
      <Quote
        size={20}
        className="mb-5 shrink-0 text-accent-primary opacity-80"
        aria-hidden="true"
      />

      {/* Quote text */}
      <blockquote className="mb-7 flex-1 font-body text-[15px] leading-[1.75] text-text-secondary">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Divider */}
      <div className="mb-5 h-px w-full bg-border-subtle" />

      {/* Author */}
      <figcaption className="flex items-center gap-3">
        {/* Avatar initial */}
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
   Client mark strip — monogram-style badges
   Structured to swap in real SVG logos when available:
   replace the monogram <div> with an <Image /> per client.
───────────────────────────────────────────────────────── */

function ClientMarkStrip() {
  return (
    <div className="mt-16 border-t border-border-subtle pt-14">
      <p className="mb-10 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
        Trusted by growth-stage teams across Europe
      </p>

      <motion.div
        variants={staggerContainer(0.07)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12"
      >
        {clientMarks.map((client) => (
          <motion.div
            key={client.id}
            variants={fadeIn}
            title={`${client.name} — ${client.segment}`}
            className="group flex items-center gap-2.5 opacity-30 transition-opacity duration-300 hover:opacity-60"
          >
            {/* Monogram badge — replace with <Image> when real logo available */}
            <div className="flex h-7 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04]">
              <span className="font-mono text-[9px] font-semibold tracking-[0.12em] text-white/70">
                {client.monogram}
              </span>
            </div>

            {/* Wordmark */}
            <span className="font-display text-[14px] font-medium tracking-[-0.01em] text-text-secondary">
              {client.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
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

        {/* Client mark strip */}
        <ScrollReveal delay={0.05}>
          <ClientMarkStrip />
        </ScrollReveal>
      </Container>
    </Section>
  )
}
