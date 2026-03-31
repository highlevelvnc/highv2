import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { featuredWork } from '@/lib/data/work'
import { JsonLd } from '@/components/shared/JsonLd'
import { SITE_URL } from '@/lib/config/site'
import CSHero from '@/components/sections/work/case-study/CSHero'
import CSChallenge from '@/components/sections/work/case-study/CSChallenge'
import CSSolution from '@/components/sections/work/case-study/CSSolution'
import CSResults from '@/components/sections/work/case-study/CSResults'
import CSCapabilities from '@/components/sections/work/case-study/CSCapabilities'
import CSProof from '@/components/sections/work/case-study/CSProof'
import CSRelated from '@/components/sections/work/case-study/CSRelated'
import CSCTA from '@/components/sections/work/case-study/CSCTA'

export function generateStaticParams() {
  return featuredWork.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = featuredWork.find((s) => s.slug === slug)
  if (!study) return {}
  return {
    title: `${study.client} — ${study.industry} Case Study | High Level`,
    description: study.description,
    openGraph: {
      title: study.headline,
      description: study.description,
    },
    alternates: { canonical: `/work/${slug}` },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = featuredWork.find((s) => s.slug === slug)
  if (!study) notFound()

  // Related: same capability first, then others — always 3 results
  const sameCap = featuredWork.filter(
    (s) => s.slug !== slug && s.capability === study.capability,
  )
  const others = featuredWork.filter(
    (s) => s.slug !== slug && s.capability !== study.capability,
  )
  const related = [...sameCap, ...others].slice(0, 3)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE_URL}/work` },
            {
              '@type': 'ListItem',
              position: 3,
              name: study.client,
              item: `${SITE_URL}/work/${slug}`,
            },
          ],
        }}
      />
      <CSHero study={study} />
      <CSChallenge study={study} />
      <CSSolution study={study} />
      <CSResults study={study} />
      <CSCapabilities study={study} />
      <CSProof study={study} />
      <CSRelated studies={related} />
      <CSCTA />
    </>
  )
}
