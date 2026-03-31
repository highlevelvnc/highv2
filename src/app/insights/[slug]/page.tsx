import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { insights } from '@/lib/data/insights'
import { insightContent } from '@/lib/data/insight-content'
import ArticleHero from '@/components/sections/insights/ArticleHero'
import ArticleBody from '@/components/sections/insights/ArticleBody'
import ArticleInlineCTA from '@/components/sections/insights/ArticleInlineCTA'
import ArticleRelated from '@/components/sections/insights/ArticleRelated'
import ArticleClosing from '@/components/sections/insights/ArticleClosing'

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const insight = insights.find((i) => i.slug === slug)
  if (!insight) return {}
  return {
    title: `${insight.title} — High Level`,
    description: insight.excerpt,
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
    },
    alternates: { canonical: `/insights/${slug}` },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const insight = insights.find((i) => i.slug === slug)
  if (!insight) notFound()

  const content = insightContent[slug] ?? []

  // Related: same category, excluding current article, max 3
  const related = insights
    .filter((i) => i.slug !== slug && i.category === insight.category)
    .slice(0, 3)

  // If fewer than 2 related in same category, pad from other categories
  const padded =
    related.length < 2
      ? [
          ...related,
          ...insights
            .filter(
              (i) =>
                i.slug !== slug &&
                i.category !== insight.category &&
                !related.find((r) => r.slug === i.slug),
            )
            .slice(0, 3 - related.length),
        ]
      : related

  return (
    <>
      <ArticleHero insight={insight} />
      <ArticleBody content={content} />
      <ArticleInlineCTA />
      <ArticleRelated articles={padded} />
      <ArticleClosing />
    </>
  )
}
