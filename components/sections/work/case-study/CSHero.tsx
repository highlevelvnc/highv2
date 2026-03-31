'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { heroLabel } from '@/lib/motion'
import { CountUp } from '@/components/animations'
import Container from '@/components/shared/Container'
import type { CaseStudy } from '@/lib/data/work'

/**
 * CSHero — case study page hero.
 *
 * Visual treatment is unique to each study via the study's gradient colours:
 *  - Right-side ambient glow uses `gradientFrom` at 22% opacity
 *  - Left counter-glow using `gradientTo` at 8% — creates colour depth
 *  - Dot grid (consistent with homepage hero language)
 *  - The visual panel on the right uses the full gradient at high opacity,
 *    with an inner glow overlay and noise texture for surface richness
 */
export default function CSHero({ study }: { study: CaseStudy }) {
  const gradientBg = study.gradientVia
    ? `linear-gradient(135deg, ${study.gradientFrom} 0%, ${study.gradientVia} 50%, ${study.gradientTo} 100%)`
    : `linear-gradient(135deg, ${study.gradientFrom} 0%, ${study.gradientTo} 100%)`

  return (
    <section
      className="relative overflow-hidden bg-bg-primary"
      style={{
        paddingTop: 'calc(var(--section-padding-y, 5rem) + 72px)',
        paddingBottom: 'var(--section-padding-y, 5rem)',
      }}
      aria-label={`${study.client} case study`}
    >
      {/* ── Background layers ── */}

      {/* Primary glow — right side, study accent colour */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `radial-gradient(ellipse 70% 80% at 85% 0%, ${study.gradientFrom}28 0%, transparent 65%)`,
        }}
      />

      {/* Counter glow — left side, study secondary colour */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `radial-gradient(ellipse 45% 55% at 5% 60%, ${study.gradientTo}12 0%, transparent 55%)`,
        }}
      />

      {/* Edge vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(5,5,8,0.55) 100%)',
        }}
      />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)',
        }}
      />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-center lg:gap-16 xl:grid-cols-[1fr_440px]">

          {/* ── Left: content */}
          <div>
            {/* Breadcrumb */}
            <motion.nav
              className="mb-6 flex items-center gap-2"
              variants={heroLabel}
              initial="hidden"
              animate="visible"
              aria-label="Breadcrumb"
            >
              <Link
                href="/work"
                className="font-mono text-[12px] uppercase tracking-[0.1em] text-text-muted transition-colors hover:text-text-secondary"
              >
                Work
              </Link>
              <ChevronRight size={12} className="text-text-muted opacity-50" aria-hidden />
              <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-text-secondary">
                {study.client}
              </span>
            </motion.nav>

            {/* Capability badge */}
            <motion.div
              className="mb-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            >
              <span
                className="inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em]"
                style={{
                  borderColor: `${study.gradientFrom}50`,
                  backgroundColor: `${study.gradientFrom}12`,
                  color: study.gradientFrom,
                }}
              >
                {study.capability}
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              className="mb-6 font-display font-bold leading-[1.08] tracking-[-0.03em] text-text-primary"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            >
              {study.headline}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mb-10 max-w-[540px] font-body leading-[1.75] text-text-secondary"
              style={{ fontSize: 'clamp(15px, 1.3vw, 17px)' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            >
              {study.description}
            </motion.p>

            {/* Metrics strip */}
            <motion.div
              className="flex flex-wrap gap-10 border-t border-border-subtle pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
            >
              {study.metrics.map((m) => (
                <div key={m.label} className="flex flex-col gap-1.5">
                  <span
                    className="font-display font-semibold leading-none tracking-[-0.03em]"
                    style={{
                      fontSize: 'clamp(26px, 3vw, 38px)',
                      backgroundImage: gradientBg,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {m.prefix}
                    <CountUp to={m.value} suffix={m.suffix} decimals={m.decimals} />
                  </span>
                  <span className="font-body text-[11px] uppercase tracking-[0.1em] text-text-muted">
                    {m.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: gradient visual panel */}
          <motion.div
            className="relative hidden overflow-hidden rounded-2xl lg:block"
            style={{ aspectRatio: '3/4' }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            aria-hidden
          >
            {/* Gradient fill */}
            <div
              className="absolute inset-0 scale-110"
              style={{ background: gradientBg, opacity: 0.92 }}
            />

            {/* Inner glow overlay — creates surface depth */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 60%)',
              }}
            />

            {/* Noise texture */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
                backgroundSize: '200px 200px',
              }}
            />

            {/* Edge shadow for depth */}
            <div
              className="absolute inset-0"
              style={{
                boxShadow: 'inset 0 0 60px rgba(0,0,0,0.3)',
              }}
            />

            {/* Bottom meta badges */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/70 backdrop-blur-sm">
                {study.industry}
              </span>
              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/70 backdrop-blur-sm">
                {study.year}
              </span>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
