'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Workflow, Globe, Gauge, Megaphone, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { startingPoints, pillars } from '@/lib/data/services'

const iconMap = {
  'Growth Systems': Workflow,
  'Digital Platforms': Globe,
  'Performance': Gauge,
  'Brand Presence': Megaphone,
} as const

export default function ServicesStartingPoint() {
  return (
    <Section bg="primary" id="starting-point">
      <Container>
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              Where to Begin
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mb-5 font-display text-[clamp(32px,5vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-text-primary">
              Start where the{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                bottleneck is.
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-[15px] leading-relaxed text-text-secondary">
              Every business has a rate-limiting constraint. The highest-leverage
              move is identifying it correctly before committing to a direction.
              Use the situations below to orient yourself.
            </p>
          </ScrollReveal>
        </div>

        {/* Scenario cards */}
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {startingPoints.map((sp) => {
            const pillar = pillars.find((p) => p.name === sp.recommendation)
            const Icon = iconMap[sp.recommendation]
            const gradientStyle = pillar
              ? pillar.gradientVia
                ? `linear-gradient(135deg, ${pillar.gradientFrom} 0%, ${pillar.gradientVia} 50%, ${pillar.gradientTo} 100%)`
                : `linear-gradient(135deg, ${pillar.gradientFrom} 0%, ${pillar.gradientTo} 100%)`
              : 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)'

            return (
              <motion.div
                key={sp.id}
                variants={fadeInUp}
                className="group flex flex-col rounded-2xl border border-border-subtle bg-bg-elevated p-7 transition-all duration-300 hover:border-border-hover"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Bottleneck label */}
                <div className="mb-5 flex items-start gap-3">
                  <span
                    className="mt-0.5 shrink-0 font-mono text-[22px] font-bold leading-none text-text-muted/30"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p className="font-display text-[17px] font-semibold leading-snug tracking-[-0.01em] text-text-primary sm:text-[18px]">
                    {sp.bottleneck}
                  </p>
                </div>

                {/* Divider */}
                <div className="mb-5 h-px bg-border-subtle" />

                {/* Recommendation */}
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: gradientStyle }}
                    aria-hidden="true"
                  >
                    <Icon size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">
                      Start with
                    </p>
                    <p className="font-display text-[14px] font-semibold tracking-[-0.01em] text-text-primary">
                      {sp.recommendation}
                    </p>
                  </div>
                </div>

                {/* Detail */}
                <p className="mb-6 flex-1 font-body text-[14px] leading-relaxed text-text-secondary">
                  {sp.detail}
                </p>

                {/* Link */}
                <Link
                  href={`/services/${sp.slug}`}
                  className="group/link inline-flex items-center gap-1.5 font-body text-[13px] font-medium text-text-muted transition-colors duration-200 hover:text-text-primary"
                  aria-label={`Learn more about ${sp.recommendation}`}
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom note */}
        <ScrollReveal delay={0.1}>
          <p className="mt-8 text-center font-body text-[14px] text-text-muted">
            Not sure where your bottleneck is?{' '}
            <Link
              href="/contact"
              className="font-medium text-accent-primary underline-offset-2 hover:underline"
            >
              Tell us about your situation
            </Link>{' '}
            and we&apos;ll help you identify it.
          </p>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
