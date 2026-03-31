'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal, CountUp } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import type { CaseStudy } from '@/lib/data/work'

function RelatedCard({ study }: { study: CaseStudy }) {
  const gradientBg = study.gradientVia
    ? `linear-gradient(135deg, ${study.gradientFrom} 0%, ${study.gradientVia} 50%, ${study.gradientTo} 100%)`
    : `linear-gradient(135deg, ${study.gradientFrom} 0%, ${study.gradientTo} 100%)`

  const primaryMetric = study.metrics[0]

  return (
    <motion.article variants={fadeInUp}>
      <Link
        href={`/work/${study.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-bg-elevated transition-all duration-300 hover:border-white/10 hover:shadow-2xl"
      >
        {/* Gradient band */}
        <div
          className="h-1.5 w-full flex-shrink-0"
          style={{ background: gradientBg }}
          aria-hidden
        />

        <div className="flex flex-1 flex-col gap-4 p-6">
          {/* Capability + client */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-accent-primary/25 bg-accent-primary/8 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-accent-primary">
              {study.capability}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
              {study.client}
            </span>
          </div>

          {/* Headline */}
          <h3 className="flex-1 font-display text-[15px] font-semibold leading-snug tracking-[-0.01em] text-text-primary">
            {study.headline}
          </h3>

          {/* Primary metric + arrow */}
          <div className="flex items-end justify-between border-t border-border-subtle pt-4">
            <div className="flex flex-col gap-1">
              <span
                className="font-display text-[22px] font-semibold leading-none tracking-[-0.02em]"
                style={{
                  backgroundImage: gradientBg,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {primaryMetric.prefix}
                <CountUp
                  to={primaryMetric.value}
                  suffix={primaryMetric.suffix}
                  decimals={primaryMetric.decimals}
                />
              </span>
              <span className="font-body text-[11px] uppercase tracking-[0.08em] text-text-muted">
                {primaryMetric.label}
              </span>
            </div>
            <ArrowUpRight
              size={18}
              className="text-text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-text-primary"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function CSRelated({ studies }: { studies: CaseStudy[] }) {
  if (studies.length === 0) return null

  return (
    <Section bg="primary" id="related-work">
      <Container>
        <div className="mb-12 flex items-end justify-between gap-8">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              More Work
            </SectionLabel>
            <h2 className="font-display text-[clamp(28px,3.5vw,40px)] font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary">
              Related case studies.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link
              href="/work"
              className="hidden shrink-0 font-mono text-[12px] uppercase tracking-[0.1em] text-text-muted transition-colors hover:text-text-secondary sm:block"
            >
              View all work &rarr;
            </Link>
          </ScrollReveal>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {studies.map((study) => (
            <RelatedCard key={study.id} study={study} />
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
