'use client'

import Link from 'next/link'
import { useRef, useCallback } from 'react'
import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeInUp } from '@/lib/motion'
import { formatInsightDate, type Insight } from '@/lib/data/insights'

interface ArticleCardProps {
  insight: Insight
  variants?: Variants
  className?: string
}

/**
 * Reusable editorial article card.
 * Used on both the homepage InsightsSection and the /insights index page.
 *
 * Visual upgrades:
 *  - Mouse-tracking spotlight (CSS custom props --sx / --sy, no re-renders)
 *  - Gradient top accent line reveals on hover
 *  - Gradient visual area has inner glow overlay for depth
 *  - Article title transitions to text-primary on hover (preserved)
 */
export default function ArticleCard({
  insight,
  variants = fadeInUp,
  className,
}: ArticleCardProps) {
  const gradientStyle = insight.gradientVia
    ? `linear-gradient(135deg, ${insight.gradientFrom} 0%, ${insight.gradientVia} 50%, ${insight.gradientTo} 100%)`
    : `linear-gradient(135deg, ${insight.gradientFrom} 0%, ${insight.gradientTo} 100%)`

  const cardRef = useRef<HTMLElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width)  * 100
    const y = ((e.clientY - rect.top)  / rect.height) * 100
    el.style.setProperty('--sx', `${x}%`)
    el.style.setProperty('--sy', `${y}%`)
  }, [])

  const handleMouseLeave = useCallback(() => {
    cardRef.current?.style.removeProperty('--sx')
    cardRef.current?.style.removeProperty('--sy')
  }, [])

  return (
    <motion.article
      ref={cardRef}
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-bg-elevated transition-all duration-300 hover:border-border-hover',
        className,
      )}
    >
      {/* Mouse-tracking spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle 200px at var(--sx, 50%) var(--sy, 50%), rgba(108,58,255,0.1) 0%, transparent 70%)',
        }}
      />

      {/* Gradient top accent — appears on hover */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${insight.gradientFrom}90 40%, ${insight.gradientTo}90 60%, transparent 100%)`,
        }}
      />

      <Link
        href={`/insights/${insight.slug}`}
        className="flex flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-inset"
      >
        {/* Visual area */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <div
            className="absolute inset-0 scale-100 transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ background: gradientStyle }}
          />

          {/* Inner glow for surface depth */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 60%)',
            }}
          />

          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
              backgroundSize: '200px 200px',
            }}
          />

          {/* Category badge */}
          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/80">
              {insight.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Meta */}
          <div className="mb-3 flex items-center gap-3">
            <time
              dateTime={insight.date}
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted"
            >
              {formatInsightDate(insight.date)}
            </time>
            <span className="h-px w-3 bg-border-hover" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
              {insight.readTime}
            </span>
          </div>

          {/* Title */}
          <h3
            className={cn(
              'mb-3 flex-1 font-display text-[17px] font-semibold leading-snug tracking-[-0.01em]',
              'text-text-secondary transition-colors duration-300 group-hover:text-text-primary',
            )}
          >
            {insight.title}
          </h3>

          {/* Read link */}
          <div className="mt-2 flex items-center gap-1.5">
            <span className="font-body text-[13px] font-medium text-text-muted transition-colors duration-200 group-hover:text-accent-primary">
              Read article
            </span>
            <ArrowUpRight
              size={14}
              className="text-text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-primary"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
