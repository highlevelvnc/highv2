'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { fadeIn, heroLabel, heroSubheadline } from '@/lib/motion'
import { formatInsightDate, type Insight } from '@/lib/data/insights'
import Container from '@/components/shared/Container'

interface ArticleHeroProps {
  insight: Insight
}

export default function ArticleHero({ insight }: ArticleHeroProps) {
  const gradientStyle = insight.gradientVia
    ? `linear-gradient(135deg, ${insight.gradientFrom} 0%, ${insight.gradientVia} 50%, ${insight.gradientTo} 100%)`
    : `linear-gradient(135deg, ${insight.gradientFrom} 0%, ${insight.gradientTo} 100%)`

  return (
    <>
      {/* Full-bleed gradient banner */}
      <div
        className="relative h-[320px] w-full overflow-hidden sm:h-[400px]"
        style={{ background: gradientStyle }}
        aria-hidden="true"
      >
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
            backgroundSize: '200px 200px',
          }}
        />
        {/* Bottom fade to page background */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg-primary to-transparent" />
      </div>

      {/* Article header — reading column */}
      <div className="relative bg-bg-primary pb-0 pt-10 sm:pt-14">
        <Container>
          <div className="mx-auto max-w-[700px]">
            {/* Back link */}
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <Link
                href="/insights"
                className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted transition-colors duration-200 hover:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:rounded-sm"
              >
                <ArrowLeft size={12} aria-hidden="true" />
                All Insights
              </Link>
            </motion.div>

            {/* Category */}
            <motion.p
              variants={heroLabel}
              initial="hidden"
              animate="visible"
              className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted"
            >
              {insight.category}
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="mb-6 font-display text-[clamp(26px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-text-primary"
            >
              {insight.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              variants={heroSubheadline}
              initial="hidden"
              animate="visible"
              className="mb-8 font-body text-[17px] leading-relaxed text-text-secondary"
            >
              {insight.excerpt}
            </motion.p>

            {/* Meta row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-center gap-4 border-b border-border-subtle pb-10"
            >
              <time
                dateTime={insight.date}
                className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted"
              >
                {formatInsightDate(insight.date)}
              </time>
              <span className="h-px w-4 bg-border-hover" aria-hidden="true" />
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
                {insight.readTime}
              </span>
              <span className="h-px w-4 bg-border-hover" aria-hidden="true" />
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
                High Level
              </span>
            </motion.div>
          </div>
        </Container>
      </div>
    </>
  )
}
