'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import { ScrollReveal } from '@/components/animations'
import Container from '@/components/shared/Container'
import type { ContentBlock } from '@/lib/data/insight-content'

interface ArticleBodyProps {
  content: ContentBlock[]
}

export default function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <section className="relative bg-bg-primary py-14 sm:py-16" aria-label="Article content">
      <Container>
        <motion.div
          className="mx-auto max-w-[700px]"
          variants={staggerContainer(0.06)}
          initial="hidden"
          animate="visible"
        >
          {content.map((block, idx) => {
            if (block.type === 'paragraph') {
              return (
                <motion.p
                  key={idx}
                  variants={fadeInUp}
                  className="mb-6 font-body text-[16px] leading-[1.8] text-text-secondary"
                >
                  {block.text}
                </motion.p>
              )
            }

            if (block.type === 'heading') {
              if (block.level === 2) {
                return (
                  <ScrollReveal key={idx}>
                    <h2 className="mb-5 mt-12 font-display text-[clamp(22px,3vw,30px)] font-bold leading-tight tracking-[-0.02em] text-text-primary first:mt-0">
                      {block.text}
                    </h2>
                  </ScrollReveal>
                )
              }
              return (
                <ScrollReveal key={idx}>
                  <h3 className="mb-4 mt-10 font-display text-[clamp(18px,2.5vw,22px)] font-semibold leading-snug tracking-[-0.01em] text-text-primary first:mt-0">
                    {block.text}
                  </h3>
                </ScrollReveal>
              )
            }

            if (block.type === 'list') {
              return (
                <ScrollReveal key={idx}>
                  <ul className="mb-6 space-y-3" role="list">
                    {block.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-3 font-body text-[16px] leading-[1.7] text-text-secondary"
                      >
                        <span
                          className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{
                            background: 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
                          }}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              )
            }

            if (block.type === 'callout') {
              return (
                <ScrollReveal key={idx}>
                  <blockquote className="relative my-10 overflow-hidden rounded-2xl border border-border-subtle bg-bg-elevated px-7 py-7">
                    {/* Gradient left border accent */}
                    <div
                      className="absolute inset-y-0 left-0 w-[3px] rounded-full"
                      style={{
                        background: 'linear-gradient(180deg, #6C3AFF 0%, #3B82F6 100%)',
                      }}
                      aria-hidden="true"
                    />
                    <p className="font-body text-[16px] font-medium italic leading-[1.7] text-text-primary">
                      {block.text}
                    </p>
                  </blockquote>
                </ScrollReveal>
              )
            }

            return null
          })}
        </motion.div>
      </Container>
    </section>
  )
}
