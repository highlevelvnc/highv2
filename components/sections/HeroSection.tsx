'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import HeroBackground from './HeroBackground'
import {
  heroLabel,
  heroHeadline,
  heroWord,
  heroSubheadline,
  heroCTA,
} from '@/lib/motion'

/* ─── Headline words for per-word animation ──────────────────── */
const headlineLines = [
  ['We', 'Engineer'],
  ['Digital', 'Growth.'],
]

/* ─── Component ──────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 w-full px-5 sm:px-8 flex flex-col items-center text-center max-w-[920px] mx-auto pt-20">
        {/* Category label */}
        <motion.div
          variants={heroLabel}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-3 mb-7"
        >
          <span
            className="block h-px w-8 bg-accent-primary opacity-80 flex-shrink-0"
            aria-hidden="true"
          />
          <span className="font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-accent-primary">
            Digital Growth Infrastructure
          </span>
          <span
            className="block h-px w-8 bg-accent-primary opacity-80 flex-shrink-0"
            aria-hidden="true"
          />
        </motion.div>

        {/* Headline — animated word by word */}
        <motion.h1
          className="font-display font-bold tracking-[-0.03em] text-text-primary mb-7 leading-[1.08]"
          style={{
            fontSize: 'clamp(44px, 8.5vw, 112px)',
          }}
          variants={heroHeadline}
          initial="hidden"
          animate="visible"
          aria-label="We Engineer Digital Growth."
        >
          {headlineLines.map((line, li) => (
            <span
              key={li}
              className="flex flex-wrap justify-center gap-x-[0.22em] gap-y-0"
            >
              {line.map((word, wi) => (
                <span
                  key={wi}
                  className="overflow-hidden inline-block leading-[1.08]"
                  aria-hidden="true"
                >
                  <motion.span
                    className="inline-block"
                    variants={heroWord}
                    style={{
                      /* Last word gets gradient treatment */
                      ...(li === 1 && wi === 1
                        ? {
                            background:
                              'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }
                        : {}),
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="font-body text-text-secondary leading-[1.75] max-w-[480px] mx-auto mb-10"
          style={{ fontSize: 'clamp(16px, 1.4vw, 19px)' }}
          variants={heroSubheadline}
          initial="hidden"
          animate="visible"
        >
          AI systems. High-conversion platforms. Automation that scales.
          We build the digital infrastructure that turns businesses into
          market leaders.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          variants={heroCTA}
          initial="hidden"
          animate="visible"
        >
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact" className="group">
              Start Your Growth Engine
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Button>

          <Button variant="secondary" size="lg" asChild>
            <Link href="/work">See Our Work</Link>
          </Button>
        </motion.div>

        {/* Trust micro-copy */}
        <motion.p
          className="mt-8 font-mono text-[12px] uppercase tracking-[0.1em] text-text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.6, duration: 0.6 } }}
        >
          Portugal · Europe · Remote
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.6 } }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        aria-hidden="true"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
