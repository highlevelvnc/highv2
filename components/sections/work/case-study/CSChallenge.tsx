'use client'

import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import type { CaseStudy } from '@/lib/data/work'

export default function CSChallenge({ study }: { study: CaseStudy }) {
  if (!study.challenge && !study.challengeDetail) return null

  return (
    <Section bg="secondary" id="challenge">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: label + heading */}
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              The Challenge
            </SectionLabel>
            <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary">
              What was broken — and why it mattered.
            </h2>
          </ScrollReveal>

          {/* Right: detail */}
          <ScrollReveal delay={0.15}>
            {study.challenge && study.challengeDetail && (
              <blockquote
                className="mb-6 border-l-2 pl-5"
                style={{ borderColor: study.gradientFrom }}
              >
                <p className="font-body text-[clamp(16px,1.4vw,18px)] font-medium italic leading-[1.7] text-text-primary">
                  &ldquo;{study.challenge}&rdquo;
                </p>
              </blockquote>
            )}
            <p className="font-body text-[clamp(15px,1.2vw,16px)] leading-[1.8] text-text-secondary">
              {study.challengeDetail ?? study.challenge}
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  )
}
