'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import type { CaseStudy } from '@/lib/data/work'

const PILLAR_SLUGS: Record<string, string> = {
  'Growth Systems': 'growth-systems',
  'Digital Platforms': 'digital-platforms',
  Performance: 'performance',
  'Brand Presence': 'brand-presence',
}

export default function CSSolution({ study }: { study: CaseStudy }) {
  if (!study.solution && !study.solutionDetail) return null

  const pillars = study.pillarsInvolved ?? []

  return (
    <Section bg="primary" id="solution">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: label + heading + pillars */}
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              The Approach
            </SectionLabel>
            <h2 className="mb-8 font-display text-[clamp(28px,3.5vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary">
              How we built the solution.
            </h2>

            {pillars.length > 0 && (
              <div>
                <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
                  Service pillars engaged
                </span>
                <div className="flex flex-wrap gap-2">
                  {pillars.map((pillar) => (
                    <Link
                      key={pillar}
                      href={`/services/${PILLAR_SLUGS[pillar]}`}
                      className="rounded-full border border-border-subtle bg-bg-elevated px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-text-secondary transition-colors hover:border-accent-primary/40 hover:text-accent-primary"
                    >
                      {pillar}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </ScrollReveal>

          {/* Right: solution detail */}
          <ScrollReveal delay={0.15}>
            {study.solution && study.solutionDetail && (
              <blockquote
                className="mb-6 border-l-2 pl-5"
                style={{ borderColor: study.gradientFrom }}
              >
                <p className="font-body text-[clamp(16px,1.4vw,18px)] font-medium italic leading-[1.7] text-text-primary">
                  &ldquo;{study.solution}&rdquo;
                </p>
              </blockquote>
            )}
            <p className="font-body text-[clamp(15px,1.2vw,16px)] leading-[1.8] text-text-secondary">
              {study.solutionDetail ?? study.solution}
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  )
}
