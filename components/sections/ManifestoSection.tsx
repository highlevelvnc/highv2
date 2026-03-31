'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { lineGrow } from '@/lib/motion'

/* ─── Manifesto bullet points ────────────────────────────────── */
const pillars = [
  {
    label: 'Systems over campaigns',
    body: 'We build lasting infrastructure, not one-off campaigns that expire.',
  },
  {
    label: 'AI-native by design',
    body: 'Intelligence and automation are built into every deliverable from day one.',
  },
  {
    label: 'Full-stack digital',
    body: 'One partner for everything: web, ads, SEO, CRM, apps, and automation.',
  },
  {
    label: 'Revenue-obsessed',
    body: 'Every decision is tied to measurable business growth. Not vanity metrics.',
  },
]

/* ─── Component ──────────────────────────────────────────────── */
export default function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.2,
  })

  return (
    <section
      ref={ref}
      className="relative bg-bg-secondary overflow-hidden"
      style={{ paddingTop: 'var(--section-padding-y)', paddingBottom: 'var(--section-padding-y)' }}
      aria-label="Our manifesto"
    >
      <Container>
        <div className="max-w-[900px]">
          {/* ── Decorative top line ── */}
          <motion.div
            className="h-[2px] w-16 rounded-full bg-accent-gradient mb-10"
            variants={lineGrow}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          />

          {/* ── Label ── */}
          <SectionLabel withLine={false}>Our Position</SectionLabel>

          {/* ── Main statement ── */}
          <h2
            className="font-display font-semibold tracking-[-0.025em] text-text-primary mt-4 mb-8 leading-[1.1]"
            style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
          >
            <motion.span
              className="block overflow-hidden"
              initial={{ opacity: 0 }}
              animate={
                isInView ? { opacity: 1 } : { opacity: 0 }
              }
              transition={{ duration: 0.01 }}
            >
              {/* Line 1 */}
              {["We're", 'not', 'an', 'agency.'].map((word, i) => (
                <span key={i} className="overflow-hidden inline-block mr-[0.22em] leading-[1.1]">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '110%', opacity: 0 }}
                    animate={
                      isInView
                        ? { y: '0%', opacity: 1 }
                        : { y: '110%', opacity: 0 }
                    }
                    transition={{
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.1 + i * 0.08,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.span>

            <span className="block mt-1">
              {/* Line 2 */}
              {["We're", 'a', 'growth', 'engineering', 'company.'].map(
                (word, i) => (
                  <span
                    key={i}
                    className="overflow-hidden inline-block mr-[0.22em] leading-[1.1]"
                  >
                    <motion.span
                      className="inline-block"
                      style={
                        word === 'growth' || word === 'engineering'
                          ? {
                              background:
                                'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                            }
                          : {}
                      }
                      initial={{ y: '110%', opacity: 0 }}
                      animate={
                        isInView
                          ? { y: '0%', opacity: 1 }
                          : { y: '110%', opacity: 0 }
                      }
                      transition={{
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.45 + i * 0.08,
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ),
              )}
            </span>
          </h2>

          {/* ── Supporting body ── */}
          <motion.p
            className="font-body text-text-secondary leading-[1.8] max-w-[680px] mb-16"
            style={{ fontSize: 'clamp(17px, 1.8vw, 20px)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          >
            While other agencies sell campaigns, we build the systems that make
            campaigns obsolete. We combine AI, automation, and strategic design
            to create digital infrastructure that compounds growth over time.
          </motion.p>

          {/* ── Four pillars ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 1.0 + i * 0.1,
                }}
              >
                {/* Dash + label */}
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="block w-4 h-px bg-accent-primary flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-display font-semibold text-[15px] text-text-primary">
                    {pillar.label}
                  </span>
                </div>
                <p className="font-body text-sm text-text-muted leading-relaxed pl-7">
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ── Decorative bottom line ── */}
          <motion.div
            className="h-[2px] w-16 rounded-full mt-16"
            style={{
              background: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
              transformOrigin: 'right',
            }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
          />
        </div>
      </Container>
    </section>
  )
}
