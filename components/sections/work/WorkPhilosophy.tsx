'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Cpu, BarChart3 } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'

const principles = [
  {
    icon: TrendingUp,
    label: 'Pipeline & Revenue',
    body: 'Qualified leads, booked demos, closed revenue. Not impressions, not engagement, not reach.',
  },
  {
    icon: DollarSign,
    label: 'Efficiency Metrics',
    body: 'CAC, ROAS, time-to-value, deal velocity. The numbers that make a CFO care.',
  },
  {
    icon: Cpu,
    label: 'System Performance',
    body: 'Automation coverage, data accuracy, operational throughput. Infrastructure should compound.',
  },
  {
    icon: BarChart3,
    label: 'Market Positioning',
    body: 'Organic share, category ownership, LP enquiries. Long-term brand equity is measurable.',
  },
]

export default function WorkPhilosophy() {
  return (
    <Section bg="secondary" id="work-philosophy">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[5fr_7fr] lg:items-start lg:gap-24">
          {/* Left: heading block */}
          <div>
            <ScrollReveal>
              <SectionLabel withLine className="mb-5">
                Our Standard
              </SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="mb-6 font-display text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-text-primary">
                We measure
                <br />
                <span
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  what matters.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mb-6 font-body text-[15px] leading-relaxed text-text-secondary">
                Most agencies optimise for metrics that look good in a report. We
                optimise for the ones that show up on your P&amp;L.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-body text-[15px] leading-relaxed text-text-secondary">
                No vanity metrics. No surface-level redesigns. No work that
                can&apos;t be tied to a business outcome. Every engagement starts
                with the question: what does success actually look like in twelve
                months?
              </p>
            </ScrollReveal>
          </div>

          {/* Right: principle grid */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {principles.map((p) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.label}
                  variants={fadeInUp}
                  className="group flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-elevated p-6 transition-all duration-300 hover:border-border-hover"
                >
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]"
                    aria-hidden="true"
                  >
                    <Icon size={16} className="text-accent-primary opacity-80" />
                  </div>
                  <div>
                    <p className="mb-1.5 font-display text-[15px] font-semibold tracking-[-0.01em] text-text-primary">
                      {p.label}
                    </p>
                    <p className="font-body text-[13px] leading-relaxed text-text-secondary">
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
