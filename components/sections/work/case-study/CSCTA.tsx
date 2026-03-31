'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import { Button } from '@/components/ui/button'

export default function CSCTA() {
  return (
    <Section bg="secondary">
      <Container>
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-bg-elevated px-8 py-16 text-center sm:px-12 lg:px-20 lg:py-20">
            {/* Gradient top border */}
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(108,58,255,0.6) 30%, rgba(59,130,246,0.6) 70%, transparent)',
              }}
              aria-hidden
            />
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
              aria-hidden
              style={{
                width: '600px',
                height: '300px',
                background:
                  'radial-gradient(ellipse at center top, rgba(108,58,255,0.12) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />

            <div className="relative">
              <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.15em] text-accent-primary">
                Ready to build
              </p>
              <h2 className="mb-5 font-display text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-text-primary">
                Build something that performs.
              </h2>
              <p
                className="mx-auto mb-10 max-w-[440px] font-body leading-[1.75] text-text-secondary"
                style={{ fontSize: 'clamp(15px,1.2vw,16px)' }}
              >
                Tell us what you&apos;re working toward. We&apos;ll tell you exactly what it will
                take.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
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
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
