/**
 * Insights / editorial data.
 * CMS-ready — replace with Contentful / Sanity fetch for production.
 * Each article links to /insights/[slug] for future detail pages.
 */

export interface Insight {
  id: string
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  /** Mark exactly one article as featured */
  featured?: boolean
  gradientFrom: string
  gradientTo: string
  gradientVia?: string
}

export const INSIGHT_CATEGORIES = [
  'All',
  'Demand Gen',
  'SEO & Content',
  'Growth Systems',
  'Brand & Positioning',
] as const

export type InsightCategory = (typeof INSIGHT_CATEGORIES)[number]

export const insights: Insight[] = [
  {
    id: 'i1',
    slug: 'signal-based-outbound',
    category: 'Demand Gen',
    title: 'Why signal-based outbound outperforms traditional prospecting by 4x',
    excerpt:
      'Most outbound fails because it treats everyone the same. Intent signals change the equation — here is how to build sequences that reach the right person at the right moment.',
    date: '2025-03-18',
    readTime: '6 min read',
    featured: true,
    gradientFrom: '#6C3AFF',
    gradientTo: '#3B82F6',
  },
  {
    id: 'i2',
    slug: 'content-moat-strategy',
    category: 'SEO & Content',
    title: 'Building a content moat: the pillar-page architecture that drives compounding returns',
    excerpt:
      'One-off blog posts do not build authority. The structural approach that does involves keyword hierarchy, internal linking, and editorial cadence — all mapped to buyer intent.',
    date: '2025-02-28',
    readTime: '8 min read',
    gradientFrom: '#8B5CF6',
    gradientTo: '#EC4899',
  },
  {
    id: 'i3',
    slug: 'crm-revenue-attribution',
    category: 'Growth Systems',
    title: 'How to build a revenue attribution model that your CFO will actually trust',
    excerpt:
      'Attribution is broken at most companies. Here is the CRM architecture and data model that fixes it — without expensive tooling or six months of implementation.',
    date: '2025-02-10',
    readTime: '7 min read',
    gradientFrom: '#10B981',
    gradientTo: '#0EA5E9',
  },
  {
    id: 'i4',
    slug: 'linkedin-b2b-playbook',
    category: 'Demand Gen',
    title: 'The B2B LinkedIn playbook that actually converts in 2025',
    excerpt:
      'Most LinkedIn strategies optimise for impressions. The ones that generate pipeline optimise for a very different set of signals — and they work from a completely different content architecture.',
    date: '2025-01-22',
    readTime: '9 min read',
    gradientFrom: '#3B82F6',
    gradientVia: '#6C3AFF',
    gradientTo: '#8B5CF6',
  },
  {
    id: 'i5',
    slug: 'landing-page-conversion',
    category: 'Brand & Positioning',
    title: 'Why most landing pages fail — and the structural fix that doubles conversion',
    excerpt:
      'Bad landing pages rarely fail because of design. They fail because of hierarchy, specificity, and the absence of a clear primary action. Here is the framework we use to fix them.',
    date: '2025-01-08',
    readTime: '5 min read',
    gradientFrom: '#F59E0B',
    gradientTo: '#EC4899',
  },
  {
    id: 'i6',
    slug: 'growth-stack-architecture',
    category: 'Growth Systems',
    title: 'Building a growth stack: the tools, integrations, and order of operations',
    excerpt:
      'The tools you choose matter less than the order you implement them and the data model you build underneath. Here is how to avoid the most common RevOps mistakes.',
    date: '2024-12-14',
    readTime: '10 min read',
    gradientFrom: '#6C3AFF',
    gradientVia: '#8B5CF6',
    gradientTo: '#EC4899',
  },
  {
    id: 'i7',
    slug: 'ai-marketing-automation',
    category: 'Growth Systems',
    title: 'AI in marketing: what to automate, what to protect, and what to ignore',
    excerpt:
      'AI does not replace growth strategy — it executes it faster. The real decision is where human judgment creates defensible advantage and where automation compounds it.',
    date: '2024-11-29',
    readTime: '7 min read',
    gradientFrom: '#0EA5E9',
    gradientTo: '#10B981',
  },
  {
    id: 'i8',
    slug: 'b2b-positioning-strategy',
    category: 'Brand & Positioning',
    title: 'Positioning for B2B: how to become the obvious choice in a crowded category',
    excerpt:
      'Most B2B brands are positioned around what they do, not why it matters. The companies that close more deals at higher prices are positioned around the specific outcome they deliver best.',
    date: '2024-11-10',
    readTime: '8 min read',
    gradientFrom: '#10B981',
    gradientVia: '#0EA5E9',
    gradientTo: '#6C3AFF',
  },
  {
    id: 'i9',
    slug: 'paid-to-organic-handoff',
    category: 'SEO & Content',
    title: 'The paid-to-organic handoff: using ads to fund content compounding',
    excerpt:
      'Paid traffic can fund your organic moat — if you know how to use it. Here is the framework for converting paid audience data into organic content that keeps producing indefinitely.',
    date: '2024-10-25',
    readTime: '6 min read',
    gradientFrom: '#EC4899',
    gradientTo: '#8B5CF6',
  },
]

export const featuredInsight = insights.find((i) => i.featured) ?? insights[0]

export const nonFeaturedInsights = insights.filter((i) => !i.featured)

export function formatInsightDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
