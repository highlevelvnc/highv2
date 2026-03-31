'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { deliverables } from '@/lib/data/service-pages/brand-presence'

export default function BPDeliverables() {
  return (
    <Section bg="primary" id="bp-deliverables">
      <Container>
        <div className="mb-14 max-w-2xl">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              What this layer includes
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="font-display text-[clamp(30px,4.5vw,52px)] font-bold leading-[1.1] tracking-[-0.03em] text-text-primary">
              What we build —
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #10B981 0%, #6C3AFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                and what each part earns.
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="mt-5 font-body text-[16px] leading-relaxed text-text-secondary">
              Brand Presence is not a single deliverable — it is a system of components
              that reinforce each other. Strong positioning makes content more effective.
              Good content makes thought leadership more credible. Authority assets make
              sales faster. Each layer compounds the one above it.
            </p>
          </ScrollReveal>
        </div>

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {deliverables.map((d) => (
            <motion.article
              key={d.id}
              variants={fadeInUp}
              className="flex flex-col gap-5 rounded-2xl border border-border-subtle bg-bg-elevated p-7 transition-colors duration-300 hover:border-border-hover"
            >
              <div
                className="h-[2px] w-10 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #10B981 0%, #6C3AFF 100%)',
                }}
                aria-hidden="true"
              />

              <h3 className="font-display text-[18px] font-semibold leading-snug tracking-[-0.01em] text-text-primary">
                {d.name}
              </h3>

              <div className="flex flex-1 flex-col gap-4">
                <p className="font-body text-[14px] leading-relaxed text-text-secondary">
                  {d.what}
                </p>

                <div className="border-t border-border-subtle pt-4">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
                    Why it matters
                  </p>
                  <p className="font-body text-[13px] leading-relaxed text-text-secondary">
                    {d.why}
                  </p>
                </div>

                <div className="mt-auto rounded-xl border border-border-subtle bg-bg-primary px-4 py-3">
                  <p className="font-mono text-[11px] leading-snug tracking-[0.08em] text-text-muted">
                    <span
                      className="mr-1.5 font-medium"
                      style={{ color: '#34D399' }}
                    >
                      →
                    </span>
                    {d.outcome}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
