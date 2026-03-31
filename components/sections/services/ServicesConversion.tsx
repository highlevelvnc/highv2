'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Briefcase, MessageSquare } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'

const paths = [
  {
    id: 'call',
    icon: Calendar,
    label: 'Option A',
    title: 'Book a Discovery Call',
    description:
      'A 30-minute conversation to discuss your situation, goals, and where the highest leverage is. No pitch, no obligation.',
    cta: 'Schedule a Call',
    href: '/contact',
    primary: true,
  },
  {
    id: 'work',
    icon: Briefcase,
    label: 'Option B',
    title: 'Explore our work',
    description:
      'Browse case studies across all four pillars. See how we\'ve approached similar problems to yours — with real metrics.',
    cta: 'View Case Studies',
    href: '/work',
    primary: false,
  },
  {
    id: 'brief',
    icon: MessageSquare,
    label: 'Option C',
    title: 'Tell us what you\'re building',
    description:
      'Not ready for a call? Send a written brief. We read everything and respond with a qualified, specific reply.',
    cta: 'Send a Brief',
    href: '/contact#form',
    primary: false,
  },
] as const

export default function ServicesConversion() {
  return (
    <Section bg="secondary" id="services-conversion">
      <Container>
        {/* Header */}
        <div className="mb-14 max-w-lg">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              Next Steps
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mb-5 font-display text-[clamp(32px,5vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-text-primary">
              Three ways to{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                move forward.
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-[15px] leading-relaxed text-text-secondary">
              Choose the path that fits where you are right now. There is no
              pressure and no wrong entry point.
            </p>
          </ScrollReveal>
        </div>

        {/* Path cards */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {paths.map((path) => {
            const Icon = path.icon
            return (
              <motion.div
                key={path.id}
                variants={fadeInUp}
                className="group relative flex flex-col rounded-2xl border bg-bg-elevated p-8 transition-all duration-300 hover:border-border-hover"
                style={{
                  borderColor: path.primary
                    ? 'rgba(108, 58, 255, 0.35)'
                    : undefined,
                }}
              >
                {/* Primary glow */}
                {path.primary && (
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-100"
                    style={{
                      background:
                        'radial-gradient(ellipse at top center, rgba(108,58,255,0.07) 0%, transparent 70%)',
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Hover glow for non-primary */}
                {!path.primary && (
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(108,58,255,0.04)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                )}

                <div className="relative flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={
                      path.primary
                        ? { background: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)' }
                        : { border: '1px solid rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.03)' }
                    }
                    aria-hidden="true"
                  >
                    <Icon
                      size={18}
                      className={path.primary ? 'text-white' : 'text-text-muted'}
                    />
                  </div>

                  {/* Label */}
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
                    {path.label}
                  </p>

                  {/* Title */}
                  <h3 className="mb-3 font-display text-[18px] font-semibold tracking-[-0.01em] text-text-primary">
                    {path.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-8 flex-1 font-body text-[14px] leading-relaxed text-text-secondary">
                    {path.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={path.href}
                    className={
                      path.primary
                        ? 'inline-flex items-center justify-center rounded-full bg-accent-gradient px-6 py-2.5 font-body text-[14px] font-semibold text-white transition-all duration-300 hover:shadow-[0_0_24px_rgba(108,58,255,0.4)] hover:scale-[1.02]'
                        : 'group/link inline-flex items-center gap-1.5 font-body text-[14px] font-medium text-text-muted transition-colors duration-200 hover:text-text-primary'
                    }
                  >
                    {path.cta}
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
