'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Clock } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'

const details = [
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    primary: 'hello@highlevel.agency',
    secondary: 'For new business enquiries',
  },
  {
    id: 'location',
    icon: MapPin,
    label: 'Based in',
    primary: 'Lisbon, Portugal',
    secondary: 'Serving clients across Europe & UK',
  },
  {
    id: 'hours',
    icon: Clock,
    label: 'Response time',
    primary: 'Within 1 business day',
    secondary: 'Mon – Fri, 09:00 – 18:00 WET',
  },
] as const

export default function ContactDetails() {
  return (
    <Section bg="primary" id="contact-details">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: heading */}
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <SectionLabel withLine className="mb-5">
                Details
              </SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="mb-5 font-display text-[clamp(28px,4vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary">
                Prefer a direct line?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="font-body text-[15px] leading-relaxed text-text-secondary">
                We work with a small number of clients at any one time. If you
                have a specific question before committing to the form, reach out
                directly — we&apos;re a small team and we read everything.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: detail cards */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            {details.map((detail) => {
              const Icon = detail.icon
              return (
                <motion.div
                  key={detail.id}
                  variants={fadeInUp}
                  className="group flex items-start gap-5 rounded-2xl border border-border-subtle bg-bg-elevated p-6 transition-all duration-300 hover:border-border-hover"
                >
                  {/* Icon */}
                  <div
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03]"
                    aria-hidden="true"
                  >
                    <Icon size={18} className="text-accent-primary opacity-80" />
                  </div>

                  {/* Content */}
                  <div>
                    <p className="mb-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
                      {detail.label}
                    </p>
                    <p className="mb-0.5 font-display text-[16px] font-semibold tracking-[-0.01em] text-text-primary">
                      {detail.primary}
                    </p>
                    <p className="font-body text-[13px] text-text-muted">
                      {detail.secondary}
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
