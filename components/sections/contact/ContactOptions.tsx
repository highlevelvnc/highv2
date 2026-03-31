'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, FileText, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'

const options = [
  {
    id: 'call',
    icon: Calendar,
    label: 'Discovery Call',
    title: 'Book a 30-min call',
    description:
      'Prefer to talk first? Book a no-obligation discovery call. We\u2019ll cover your situation, goals, and whether we\u2019re a fit — no pitch, no pressure.',
    cta: 'Schedule a Call',
    href: '#form',
    accent: true,
  },
  {
    id: 'brief',
    icon: FileText,
    label: 'Written Brief',
    title: 'Send us a brief',
    description:
      'Know what you need? Fill in the form below with as much detail as you\u2019d like. We read every submission and respond with a qualified proposal.',
    cta: 'Go to the Form',
    href: '#form',
    accent: false,
  },
] as const

export default function ContactOptions() {
  return (
    <Section bg="secondary" id="contact-options">
      <Container>
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {options.map((opt) => {
            const Icon = opt.icon
            return (
              <motion.div
                key={opt.id}
                variants={fadeInUp}
                className="group relative flex flex-col rounded-2xl border border-border-subtle bg-bg-elevated p-8 transition-all duration-300 hover:border-border-hover"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(108,58,255,0.06)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div
                  className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: opt.accent
                      ? 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)'
                      : undefined,
                    border: opt.accent ? undefined : '1px solid rgba(255,255,255,0.08)',
                    backgroundColor: opt.accent ? undefined : 'rgba(255,255,255,0.04)',
                  }}
                  aria-hidden="true"
                >
                  <Icon
                    size={18}
                    className={opt.accent ? 'text-white' : 'text-text-muted'}
                  />
                </div>

                {/* Label */}
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-accent-primary">
                  {opt.label}
                </p>

                {/* Title */}
                <h3 className="mb-3 font-display text-[20px] font-semibold tracking-[-0.02em] text-text-primary sm:text-[22px]">
                  {opt.title}
                </h3>

                {/* Description */}
                <p className="mb-8 flex-1 font-body text-[14px] leading-relaxed text-text-secondary">
                  {opt.description}
                </p>

                {/* CTA */}
                <Link
                  href={opt.href}
                  className="group/link inline-flex items-center gap-2 font-body text-[14px] font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
                >
                  {opt.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
