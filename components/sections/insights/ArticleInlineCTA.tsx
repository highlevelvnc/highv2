'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/animations'
import Container from '@/components/shared/Container'
import { Button } from '@/components/ui/button'

export default function ArticleInlineCTA() {
  return (
    <section className="relative bg-bg-secondary py-14 sm:py-16" aria-label="Work with us">
      <Container>
        <div className="mx-auto max-w-[700px]">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-elevated px-8 py-10">
              {/* Gradient top border */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(108,58,255,0.5) 35%, rgba(59,130,246,0.5) 65%, transparent 100%)',
                }}
                aria-hidden="true"
              />

              {/* Ambient glow */}
              <div
                className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                aria-hidden="true"
                style={{
                  width: '400px',
                  height: '200px',
                  background:
                    'radial-gradient(ellipse at center, rgba(108,58,255,0.08) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />

              <div className="relative">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
                  If this resonates
                </p>
                <h2 className="mb-4 font-display text-[clamp(20px,3vw,28px)] font-bold leading-snug tracking-[-0.02em] text-text-primary">
                  This is the kind of thinking we bring
                  <br className="hidden sm:block" /> to every engagement.
                </h2>
                <p className="mb-7 font-body text-[15px] leading-relaxed text-text-secondary">
                  Strategy without execution is just theory. If you want frameworks like this
                  applied to your specific business — let&apos;s talk.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button variant="primary" size="md" asChild>
                    <Link href="/contact" className="group">
                      Book a Discovery Call
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="md" asChild>
                    <Link href="/services">See How We Work</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
