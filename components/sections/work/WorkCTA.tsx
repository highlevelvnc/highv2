'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { scaleIn } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import { Button } from '@/components/ui/button'

export default function WorkCTA() {
  return (
    <Section bg="primary" id="work-cta" className="!overflow-visible">
      <Container>
        <ScrollReveal variants={scaleIn}>
          <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-bg-elevated px-8 py-16 text-center sm:px-16 sm:py-20">
            {/* Decorative gradient top border */}
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(108,58,255,0.6) 30%, rgba(59,130,246,0.6) 70%, transparent 100%)',
              }}
              aria-hidden="true"
            />

            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
              aria-hidden="true"
              style={{
                width: '600px',
                height: '350px',
                background:
                  'radial-gradient(ellipse at center, rgba(108,58,255,0.14) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
                Start a conversation
              </p>

              <h2 className="mb-5 font-display text-[clamp(32px,5.5vw,60px)] font-bold leading-[1.06] tracking-[-0.03em] text-text-primary">
                Ready to build something
                <br />
                <span
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  that performs?
                </span>
              </h2>

              <p className="mx-auto mb-10 max-w-md font-body text-[15px] leading-relaxed text-text-secondary">
                Tell us about your business. We&apos;ll respond within one business
                day with an honest read of the situation and a suggested path
                forward.
              </p>

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
                  <Link href="/services">See Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
