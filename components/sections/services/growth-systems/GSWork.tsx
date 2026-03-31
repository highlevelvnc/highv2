'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { Button } from '@/components/ui/button'
import { allWork } from '@/lib/data/work'

const relatedWork = allWork.filter((cs) => cs.capability === 'Growth Systems')

export default function GSWork() {
  if (relatedWork.length === 0) return null

  return (
    <Section bg="secondary" id="gs-work">
      <Container>
        {/* Header */}
        <div className="mb-12 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <ScrollReveal>
              <SectionLabel withLine className="mb-4">
                Proof of concept
              </SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="font-display text-[clamp(26px,3.5vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-text-primary">
                Systems work we have built.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.1}>
            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
              <Link href="/work" className="group">
                View all work
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </ScrollReveal>
        </div>

        {/* Case study cards */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {relatedWork.map((cs) => {
            const gradientStyle = cs.gradientVia
              ? `linear-gradient(135deg, ${cs.gradientFrom} 0%, ${cs.gradientVia} 50%, ${cs.gradientTo} 100%)`
              : `linear-gradient(135deg, ${cs.gradientFrom} 0%, ${cs.gradientTo} 100%)`

            return (
              <motion.article
                key={cs.id}
                variants={fadeInUp}
                className="group overflow-hidden rounded-2xl border border-border-subtle bg-bg-elevated transition-all duration-300 hover:border-border-hover"
              >
                {/* Gradient band */}
                <div
                  className="relative h-[180px] overflow-hidden"
                  style={{ background: gradientStyle }}
                >
                  {/* Noise */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
                      backgroundSize: '200px 200px',
                    }}
                    aria-hidden="true"
                  />

                  {/* Metrics overlay */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-end gap-6 p-6">
                    {cs.metrics.slice(0, 3).map((metric) => (
                      <div key={metric.label}>
                        <p className="font-display text-[22px] font-bold text-white">
                          {metric.prefix ?? ''}
                          {metric.value}
                          {metric.suffix ?? ''}
                        </p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/70">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-7">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
                      {cs.client}
                    </span>
                    <span className="h-px w-3 bg-border-hover" aria-hidden="true" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
                      {cs.industry}
                    </span>
                  </div>

                  <h3 className="mb-3 font-display text-[18px] font-semibold leading-snug tracking-[-0.01em] text-text-secondary transition-colors duration-300 group-hover:text-text-primary">
                    {cs.headline}
                  </h3>

                  {cs.challenge && (
                    <p className="mb-5 font-body text-[13px] leading-relaxed text-text-muted">
                      {cs.challenge}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-subtle bg-bg-primary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Mobile view all link */}
        <ScrollReveal delay={0.1}>
          <div className="mt-8 sm:hidden">
            <Button variant="secondary" size="md" asChild className="w-full">
              <Link href="/work">View All Work</Link>
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
