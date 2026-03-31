'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import { Button } from '@/components/ui/button'

export default function InsightsClosing() {
  return (
    <Section bg="primary" id="insights-closing">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
              A thought to leave you with
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <motion.h2
              className="mb-6 font-display text-[clamp(28px,4.5vw,52px)] font-bold leading-[1.1] tracking-[-0.03em] text-text-primary"
            >
              Companies that scale well
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                usually think well first.
              </span>
            </motion.h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mb-10 font-body text-[15px] leading-relaxed text-text-secondary">
              Good strategy precedes good execution. The ideas in these articles are
              the same frameworks we apply with clients — tested in real
              engagements, not written in the abstract.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact" className="group">
                  Book a Discovery Call
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  )
}
