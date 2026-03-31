'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeInLeft, fadeInRight } from '@/lib/motion'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import { featuredInsight, formatInsightDate } from '@/lib/data/insights'

export default function InsightsFeatured() {
  const insight = featuredInsight

  const gradientStyle = insight.gradientVia
    ? `linear-gradient(135deg, ${insight.gradientFrom} 0%, ${insight.gradientVia} 50%, ${insight.gradientTo} 100%)`
    : `linear-gradient(135deg, ${insight.gradientFrom} 0%, ${insight.gradientTo} 100%)`

  return (
    <Section bg="secondary" id="insights-featured">
      <Container>
        {/* Featured label */}
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
          Featured Article
        </p>

        {/* Card */}
        <Link
          href={`/insights/${insight.slug}`}
          className="group block overflow-hidden rounded-2xl border border-border-subtle bg-bg-elevated transition-all duration-300 hover:border-border-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
          aria-label={`Read: ${insight.title}`}
        >
          <div className="grid lg:grid-cols-[5fr_7fr]">
            {/* Visual slab */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[380px]"
            >
              <div
                className="absolute inset-0 scale-100 transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ background: gradientStyle }}
              />
              {/* Noise */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
                  backgroundSize: '200px 200px',
                }}
              />
              {/* Category badge */}
              <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-sm">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/80">
                  {insight.category}
                </span>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col justify-between p-8 sm:p-10 lg:p-12"
            >
              <div>
                {/* Meta */}
                <div className="mb-5 flex items-center gap-3">
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
                <h2 className="mb-5 font-display text-[clamp(22px,3vw,34px)] font-semibold leading-[1.2] tracking-[-0.02em] text-text-secondary transition-colors duration-300 group-hover:text-text-primary">
                  {insight.title}
                </h2>

                {/* Excerpt */}
                <p className="mb-8 font-body text-[15px] leading-relaxed text-text-muted">
                  {insight.excerpt}
                </p>
              </div>

              {/* CTA */}
              <div className="inline-flex items-center gap-2 font-body text-[14px] font-medium text-text-muted transition-colors duration-200 group-hover:text-accent-primary">
                Read article
                <ArrowUpRight
                  size={15}
                  className="transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          </div>
        </Link>
      </Container>
    </Section>
  )
}
