'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import type { CaseStudy } from '@/lib/data/work'

const PILLAR_INFO: Record<string, { slug: string; description: string }> = {
  'Growth Systems': {
    slug: 'growth-systems',
    description:
      'CRM implementation, AI automations, process design, and revenue operations infrastructure.',
  },
  'Digital Platforms': {
    slug: 'digital-platforms',
    description:
      'High-conversion websites, landing pages, and custom platform builds.',
  },
  Performance: {
    slug: 'performance',
    description:
      'Paid acquisition, SEO, CRO, and revenue attribution infrastructure.',
  },
  'Brand Presence': {
    slug: 'brand-presence',
    description:
      'Brand positioning, content systems, and authority asset development.',
  },
}

export default function CSCapabilities({ study }: { study: CaseStudy }) {
  const pillars = study.pillarsInvolved ?? [study.capability]
  const gradientBg = study.gradientVia
    ? `linear-gradient(90deg, ${study.gradientFrom}, ${study.gradientVia}, ${study.gradientTo})`
    : `linear-gradient(90deg, ${study.gradientFrom}, ${study.gradientTo})`

  return (
    <Section bg="primary" id="capabilities">
      <Container>
        <div className="mb-12">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              Service Pillars
            </SectionLabel>
            <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary">
              How we delivered this.
            </h2>
          </ScrollReveal>
        </div>

        <div
          className={`grid gap-4 sm:grid-cols-2 ${pillars.length >= 3 ? 'lg:grid-cols-3' : ''}`}
        >
          {pillars.map((pillar, i) => {
            const info = PILLAR_INFO[pillar]
            if (!info) return null
            return (
              <ScrollReveal key={pillar} delay={i * 0.08}>
                <Link
                  href={`/services/${info.slug}`}
                  className="group relative flex h-full flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-elevated p-6 transition-all duration-300 hover:border-white/12 hover:shadow-xl"
                >
                  {/* Gradient top accent — appears on hover */}
                  <div
                    className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: gradientBg }}
                    aria-hidden
                  />
                  <div className="flex items-start justify-between">
                    <span className="rounded-full border border-accent-primary/25 bg-accent-primary/8 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-accent-primary">
                      {pillar}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="mt-0.5 text-text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </div>
                  <p className="font-body text-[14px] leading-relaxed text-text-secondary">
                    {info.description}
                  </p>
                  <span className="mt-auto font-mono text-[12px] uppercase tracking-[0.1em] text-text-muted transition-colors group-hover:text-accent-primary">
                    Explore this service &rarr;
                  </span>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
