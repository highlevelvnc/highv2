'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import SectionHeadline from '@/components/shared/SectionHeadline'
import ArticleCard from '@/components/shared/ArticleCard'
import { insights } from '@/lib/data/insights'

/* Show the first 3 on the homepage */
const homeInsights = insights.slice(0, 3)

export default function InsightsSection() {
  return (
    <Section bg="secondary" id="insights">
      <Container>
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <ScrollReveal>
              <SectionLabel withLine className="mb-5">
                Insights
              </SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <SectionHeadline size="lg" gradient>
                Thinking on growth,
                <br />
                systems, and scale.
              </SectionHeadline>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <Link
              href="/insights"
              className="group inline-flex items-center gap-1.5 font-body text-[14px] font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              All articles
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {homeInsights.map((insight) => (
            <ArticleCard key={insight.id} insight={insight} />
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
