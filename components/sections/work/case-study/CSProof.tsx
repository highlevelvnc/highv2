'use client'

import { Quote } from 'lucide-react'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import type { CaseStudy } from '@/lib/data/work'

export default function CSProof({ study }: { study: CaseStudy }) {
  const gradientBg = study.gradientVia
    ? `linear-gradient(135deg, ${study.gradientFrom} 0%, ${study.gradientVia} 50%, ${study.gradientTo} 100%)`
    : `linear-gradient(135deg, ${study.gradientFrom} 0%, ${study.gradientTo} 100%)`

  /* ── Quote block */
  if (study.quote) {
    return (
      <Section bg="secondary">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div
                className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full"
                style={{ background: gradientBg }}
                aria-hidden
              >
                <Quote size={18} className="text-white" />
              </div>
              <blockquote>
                <p className="mb-8 font-display text-[clamp(20px,2.5vw,28px)] font-medium leading-[1.55] tracking-[-0.01em] text-text-primary">
                  &ldquo;{study.quote.text}&rdquo;
                </p>
                <footer className="flex flex-col items-center gap-1.5">
                  <cite className="font-body text-[14px] font-medium not-italic text-text-secondary">
                    {study.quote.author}
                  </cite>
                  <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-text-muted">
                    {study.quote.role}
                  </span>
                </footer>
              </blockquote>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    )
  }

  /* ── Editorial fallback: key insight */
  if (study.impact) {
    return (
      <Section bg="secondary">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <SectionLabel withLine className="mb-5">
                Key Insight
              </SectionLabel>
              <div
                className="rounded-2xl border border-border-subtle p-8 lg:p-10"
                style={{
                  background: `linear-gradient(135deg, ${study.gradientFrom}0a 0%, transparent 60%)`,
                }}
              >
                <div
                  className="mb-5 h-0.5 w-16 rounded-full"
                  style={{ background: gradientBg }}
                  aria-hidden
                />
                <p className="font-body text-[clamp(16px,1.5vw,18px)] leading-[1.8] text-text-secondary">
                  {study.impact}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    )
  }

  return null
}
