'use client'

import { motion } from 'framer-motion'
import { fadeInLeft, fadeInRight } from '@/lib/motion'
import { ScrollReveal, CountUp } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { team, credibilityStats } from '@/lib/data/about'

/* ─────────────────────────────────────────────────────────
   Visual placeholder — gradient slab with pattern overlay
───────────────────────────────────────────────────────── */

function TeamVisual({ member }: { member: (typeof team)[number] }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-bg-elevated">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, ${member.gradientFrom}33 0%, ${member.gradientTo}1A 50%, transparent 80%)`,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Monogram — large, centred */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-display text-[clamp(64px,10vw,120px)] font-bold tracking-[-0.04em] leading-none select-none"
          style={{
            backgroundImage: `linear-gradient(135deg, ${member.gradientFrom} 0%, ${member.gradientTo} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            opacity: 0.18,
          }}
          aria-hidden="true"
        >
          {member.monogram}
        </span>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background: 'linear-gradient(to top, rgba(14,14,22,0.8) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Identity overlay at bottom */}
      <div className="absolute bottom-0 inset-x-0 p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">
          High Level
        </p>
        <p className="font-display text-[20px] font-semibold tracking-[-0.02em] text-white/80">
          {member.title}
        </p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────── */

export default function AboutTeam() {
  const founder = team[0]

  return (
    <Section bg="primary" id="about-team">
      <Container>
        {/* Header */}
        <div className="mb-14 max-w-lg">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              The Team
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(28px,4.5vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-text-primary">
              Built by operators,{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                not spectators.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Two-col: visual + bio */}
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-20">
          {/* Visual */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <TeamVisual member={founder} />
          </motion.div>

          {/* Bio block */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col"
          >
            {/* Bio */}
            <p className="mb-8 font-body text-[15px] leading-[1.8] text-text-secondary">
              {founder.bio}
            </p>

            {/* Key points */}
            <ul className="mb-10 space-y-3">
              {[
                'Growth systems architect — not a generalist marketer',
                'Worked across B2B SaaS, DTC, professional services, and PE-backed businesses',
                'Execution-first: every strategy gets built, measured, and refined',
                'No intermediaries — clients work directly with the people doing the work',
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 font-body text-[14px] text-text-secondary"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="mb-8 h-px bg-border-subtle" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {credibilityStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    className="font-display text-[clamp(24px,3vw,36px)] font-semibold leading-none tracking-[-0.03em]"
                    style={{
                      backgroundImage:
                        'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="font-body text-[12px] uppercase tracking-[0.08em] text-text-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
