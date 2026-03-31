'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertCircle, ArrowRight, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { scaleIn } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import { FormInput, FormTextarea } from '@/components/ui/FormField'
import { Button } from '@/components/ui/button'

/* ─────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────── */

const SERVICE_OPTIONS = [
  'Growth Systems',
  'Digital Platforms',
  'Performance Marketing',
  'Brand & Positioning',
  'Not sure yet',
]

const BUDGET_OPTIONS = [
  'Under €5k',
  '€5k – €15k',
  '€15k – €50k',
  '€50k+',
  'Let\u2019s discuss',
]

/* ─────────────────────────────────────────────────────────
   Pill select
───────────────────────────────────────────────────────── */

function PillSelect({
  options,
  selected,
  onChange,
  multi = false,
}: {
  options: string[]
  selected: string[]
  onChange: (value: string[]) => void
  multi?: boolean
}) {
  function toggle(opt: string) {
    if (multi) {
      onChange(
        selected.includes(opt)
          ? selected.filter((s) => s !== opt)
          : [...selected, opt],
      )
    } else {
      onChange(selected.includes(opt) ? [] : [opt])
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = selected.includes(opt)
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={cn(
              'rounded-full border px-4 py-2 font-body text-[13px] font-medium transition-all duration-200',
              active
                ? 'border-accent-primary/60 bg-accent-primary/10 text-text-primary'
                : 'border-border-subtle bg-bg-elevated text-text-muted hover:border-border-hover hover:text-text-secondary',
            )}
            aria-pressed={active}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Success state
───────────────────────────────────────────────────────── */

function SuccessPanel() {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center py-20 text-center"
    >
      <div
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-full"
        style={{ background: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)' }}
        aria-hidden="true"
      >
        <CheckCircle2 size={28} className="text-white" />
      </div>
      <h3 className="mb-3 font-display text-[24px] font-semibold tracking-[-0.02em] text-text-primary">
        Message received.
      </h3>
      <p className="max-w-sm font-body text-[15px] leading-relaxed text-text-secondary">
        We&apos;ll review your brief and respond within one business day with a
        qualified reply — not a template.
      </p>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────
   Form
───────────────────────────────────────────────────────── */

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState<string[]>([])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      website: formData.get('website'),
      services: selectedServices,
      budget: selectedBudget[0] ?? null,
      message: formData.get('message'),
    }

    try {
      // TODO: Connect to your API/backend
      // Example:
      // const res = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload),
      // })
      // if (!res.ok) throw new Error('Submission failed')

      // Simulated delay — remove when wiring real API
      await new Promise((r) => setTimeout(r, 900))
      console.log('Contact form payload:', payload)

      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section bg="primary" id="form">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
          {/* Left: context copy */}
          <div className="lg:pt-2">
            <ScrollReveal>
              <SectionLabel withLine className="mb-5">
                The Form
              </SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="mb-5 font-display text-[clamp(28px,4vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary">
                Tell us{' '}
                <span
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  everything.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="font-body text-[15px] leading-relaxed text-text-secondary">
                The more context you give us, the better our response. There&apos;s
                no such thing as too much detail here.
              </p>
            </ScrollReveal>

            {/* Trust signals */}
            <ScrollReveal delay={0.2}>
              <ul className="mt-8 space-y-3">
                {[
                  'Response within 1 business day',
                  'No sales calls unless you want one',
                  'NDA available on request',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-body text-[13px] text-text-muted"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Right: form */}
          <ScrollReveal delay={0.05}>
            <div className="rounded-2xl border border-border-subtle bg-bg-elevated p-8 sm:p-10">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <SuccessPanel key="success" />
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
                  >
                    {/* Row 1: Name + Company */}
                    <div className="mb-5 grid gap-5 sm:grid-cols-2">
                      <FormInput
                        id="name"
                        name="name"
                        label="Your name"
                        placeholder="Ana Rodrigues"
                        required
                        autoComplete="name"
                      />
                      <FormInput
                        id="company"
                        name="company"
                        label="Company"
                        placeholder="Meridian SaaS"
                        autoComplete="organization"
                      />
                    </div>

                    {/* Row 2: Email + Website */}
                    <div className="mb-5 grid gap-5 sm:grid-cols-2">
                      <FormInput
                        id="email"
                        name="email"
                        type="email"
                        label="Work email"
                        placeholder="ana@meridian.io"
                        required
                        autoComplete="email"
                      />
                      <FormInput
                        id="website"
                        name="website"
                        type="url"
                        label="Website"
                        placeholder="https://meridian.io"
                        autoComplete="url"
                      />
                    </div>

                    {/* Services */}
                    <div className="mb-5" role="group" aria-labelledby="services-label">
                      <p id="services-label" className="mb-2 font-body text-[13px] font-medium tracking-[0.02em] text-text-secondary">
                        Services you&apos;re interested in
                      </p>
                      <PillSelect
                        options={SERVICE_OPTIONS}
                        selected={selectedServices}
                        onChange={setSelectedServices}
                        multi
                      />
                    </div>

                    {/* Budget */}
                    <div className="mb-5" role="group" aria-labelledby="budget-label">
                      <p id="budget-label" className="mb-2 font-body text-[13px] font-medium tracking-[0.02em] text-text-secondary">
                        Monthly budget range
                      </p>
                      <PillSelect
                        options={BUDGET_OPTIONS}
                        selected={selectedBudget}
                        onChange={setSelectedBudget}
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-7">
                      <FormTextarea
                        id="message"
                        name="message"
                        label="Tell us about your situation"
                        placeholder="What's the business context? Where are you now, and where do you need to be? What have you already tried?"
                        rows={6}
                        required
                      />
                    </div>

                    {/* Error banner */}
                    {status === 'error' && (
                      <div className="mb-5 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
                        <AlertCircle size={16} className="shrink-0 text-red-400" />
                        <p className="font-body text-[13px] text-red-400">
                          Something went wrong. Please try again or email us directly.
                        </p>
                      </div>
                    )}

                    {/* Submit */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={status === 'submitting'}
                      className="w-full"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight size={16} />
                        </>
                      )}
                    </Button>

                    <p className="mt-4 text-center font-body text-[12px] text-text-muted">
                      We respond to every message within one business day.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  )
}
