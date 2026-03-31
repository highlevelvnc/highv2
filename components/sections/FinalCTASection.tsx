'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { scaleIn } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { Button } from '@/components/ui/button'

export default function FinalCTASection() {
  return (
    <Section bg="primary" id="contact" className="!overflow-visible">
      <Container>
        <div className="relative">

          {/* ── Outer ambient glow — animated pulse ── */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width:  '900px',
              height: '640px',
              background:
                'radial-gradient(ellipse at center, rgba(108,58,255,0.28) 0%, rgba(59,130,246,0.14) 40%, transparent 70%)',
              filter: 'blur(64px)',
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
              scale:   [1, 1.06, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            aria-hidden="true"
          />

          {/* ── Secondary glow — offset, slower pulse ── */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width:  '600px',
              height: '400px',
              background:
                'radial-gradient(ellipse at 40% 60%, rgba(59,130,246,0.18) 0%, transparent 65%)',
              filter: 'blur(48px)',
            }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              x: [-30, 30, -30],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            aria-hidden="true"
          />

          {/* ── Card ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative overflow-hidden rounded-3xl border border-border-subtle bg-bg-elevated px-8 py-14 text-center sm:px-16 sm:py-20 lg:px-24"
          >
            {/* Gradient top border */}
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(108,58,255,0.7) 30%, rgba(59,130,246,0.7) 70%, transparent 100%)',
              }}
              aria-hidden="true"
            />

            {/* Inner glow — top-center */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(108,58,255,0.14) 0%, transparent 60%)',
              }}
              aria-hidden="true"
            />

            {/* Side glow accents */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 30% 60% at 0% 50%, rgba(108,58,255,0.07) 0%, transparent 70%), radial-gradient(ellipse 30% 60% at 100% 50%, rgba(59,130,246,0.07) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            {/* Content */}
            <ScrollReveal>
              <SectionLabel className="mb-6 justify-center">
                The Next Step
              </SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="mx-auto mb-6 max-w-2xl font-display text-[clamp(32px,5vw,64px)] font-semibold leading-[1.08] tracking-[-0.03em] text-text-primary">
                Ready to build your{' '}
                <span
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  growth engine?
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mx-auto mb-10 max-w-md font-body text-[17px] leading-relaxed text-text-secondary">
                One call. We&apos;ll diagnose the gap, map the opportunity,
                and tell you exactly what we&apos;d do — no obligation, no
                pitch deck.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button variant="primary" size="xl" asChild data-magnetic>
                  <Link href="/contact" className="group">
                    Book a Discovery Call
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </Button>

                <Button variant="secondary" size="xl" asChild>
                  <Link href="/services">See How We Work</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
                No commitment · No jargon · Results or we don&apos;t charge
              </p>
            </ScrollReveal>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
