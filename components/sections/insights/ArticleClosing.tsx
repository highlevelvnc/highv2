'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import { Button } from '@/components/ui/button'

export default function ArticleClosing() {
  return (
    <Section bg="secondary" id="article-closing">
      <Container>
        <div className="mx-auto max-w-[700px]">
          <ScrollReveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Back to insights */}
              <Link
                href="/insights"
                className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-text-muted transition-colors duration-200 hover:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:rounded-sm"
              >
                <ArrowLeft
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
                All Insights
              </Link>

              {/* CTA row */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button variant="primary" size="md" asChild>
                  <Link href="/contact" className="group">
                    Work With Us
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </Button>
                <Button variant="secondary" size="md" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Divider + tagline */}
          <ScrollReveal delay={0.1}>
            <div className="mt-14 border-t border-border-subtle pt-10 text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
                High Level — Digital Growth Infrastructure
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  )
}
