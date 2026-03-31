'use client'

import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import ArticleCard from '@/components/shared/ArticleCard'
import type { Insight } from '@/lib/data/insights'

interface ArticleRelatedProps {
  articles: Insight[]
}

export default function ArticleRelated({ articles }: ArticleRelatedProps) {
  if (articles.length === 0) return null

  return (
    <Section bg="primary" id="related-articles">
      <Container>
        <div className="mb-10">
          <ScrollReveal>
            <SectionLabel withLine className="mb-2">
              Related Reading
            </SectionLabel>
          </ScrollReveal>
        </div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {articles.map((article) => (
            <ArticleCard key={article.id} insight={article} />
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
