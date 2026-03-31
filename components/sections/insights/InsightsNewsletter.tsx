'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { scaleIn } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import { Button } from '@/components/ui/button'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const fieldBase = [
  'h-12 w-full rounded-full border border-border-subtle bg-bg-elevated',
  'font-body text-[15px] text-text-primary placeholder:text-text-muted',
  'px-5 transition-colors duration-200',
  'focus:outline-none focus:border-accent-primary/60 focus:ring-1 focus:ring-accent-primary/20',
  'hover:border-border-hover',
].join(' ')

export default function InsightsNewsletter() {
  const [status, setStatus] = useState<Status>('idle')
  const [email, setEmail] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return

    setStatus('submitting')

    try {
      // TODO: Connect to your email provider (Mailchimp, ConvertKit, Loops, etc.)
      // Example:
      // const res = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // })
      // if (!res.ok) throw new Error('Subscription failed')

      // Simulated delay — remove when wiring real API
      await new Promise((r) => setTimeout(r, 800))

      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section bg="secondary" id="newsletter">
      <Container>
        <ScrollReveal variants={scaleIn}>
          <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-bg-elevated px-8 py-14 sm:px-12 sm:py-16">
            {/* Gradient top border */}
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(108,58,255,0.5) 35%, rgba(59,130,246,0.5) 65%, transparent 100%)',
              }}
              aria-hidden="true"
            />

            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
              aria-hidden="true"
              style={{
                width: '500px',
                height: '250px',
                background:
                  'radial-gradient(ellipse at center, rgba(108,58,255,0.1) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />

            <div className="relative mx-auto max-w-xl text-center">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
                Stay informed
              </p>

              <h2 className="mb-4 font-display text-[clamp(24px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.03em] text-text-primary">
                Stay ahead of{' '}
                <span
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  the curve.
                </span>
              </h2>

              <p className="mb-8 font-body text-[15px] leading-relaxed text-text-secondary">
                Strategic insights on systems, performance, AI, SEO, and digital
                growth — sent when there is something worth reading.
              </p>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                      }}
                      aria-hidden="true"
                    >
                      <CheckCircle2 size={22} className="text-white" />
                    </div>
                    <p className="font-display text-[17px] font-semibold text-text-primary">
                      You&apos;re in.
                    </p>
                    <p className="font-body text-[14px] text-text-muted">
                      We&apos;ll be in touch when there&apos;s something worth reading.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    className="flex flex-col gap-3 sm:flex-row sm:gap-2"
                  >
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="your@company.io"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === 'submitting'}
                      className={fieldBase}
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={status === 'submitting'}
                      className="shrink-0 sm:w-auto"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={15} className="animate-spin" />
                          Subscribing…
                        </>
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight size={15} />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Error message */}
              {status === 'error' && (
                <div className="mt-3 flex items-center justify-center gap-2">
                  <AlertCircle size={14} className="text-red-400" />
                  <p className="font-body text-[13px] text-red-400">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}

              <p className="mt-4 font-body text-[12px] text-text-muted">
                No spam. Unsubscribe any time.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
