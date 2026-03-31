'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { staggerContainer } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import ArticleCard from '@/components/shared/ArticleCard'
import {
  nonFeaturedInsights,
  INSIGHT_CATEGORIES,
  type InsightCategory,
} from '@/lib/data/insights'

export default function InsightsGrid() {
  const [active, setActive] = useState<InsightCategory>('All')

  const filtered =
    active === 'All'
      ? nonFeaturedInsights
      : nonFeaturedInsights.filter((i) => i.category === active)

  return (
    <Section bg="primary" id="insights-grid">
      <Container>
        {/* Header */}
        <div className="mb-10">
          <ScrollReveal>
            <SectionLabel withLine className="mb-5">
              All Articles
            </SectionLabel>
          </ScrollReveal>
        </div>

        {/* Category filter */}
        <ScrollReveal delay={0.05}>
          <div
            className="mb-10 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter articles by category"
          >
            {INSIGHT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                aria-controls="articles-grid"
                onClick={() => setActive(cat)}
                className={cn(
                  'rounded-full border px-5 py-2.5 font-body text-[13px] font-medium transition-all duration-200',
                  active === cat
                    ? 'border-accent-primary/50 bg-accent-primary/10 text-text-primary'
                    : 'border-border-subtle bg-bg-elevated text-text-muted hover:border-border-hover hover:text-text-secondary',
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div id="articles-grid" role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={staggerContainer(0.07)}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.length > 0 ? (
                filtered.map((insight) => (
                  <ArticleCard key={insight.id} insight={insight} />
                ))
              ) : (
                /* Empty state — shouldn't occur with current data but is defensive */
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-16 text-center font-body text-[15px] text-text-muted"
                >
                  No articles in this category yet.
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  )
}
