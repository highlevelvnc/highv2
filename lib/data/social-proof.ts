/**
 * Social proof data — metrics, testimonials, client marks.
 * Replace with CMS fetch (Contentful / Sanity) for production.
 */

export interface Metric {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  sublabel?: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
  initial: string
}

export interface ClientMark {
  id: string
  /** Two-letter monogram shown in the mark badge */
  monogram: string
  /** Display name shown next to the mark */
  name: string
  /** Short industry descriptor — shown on hover / screen readers */
  segment: string
}

export const metrics: Metric[] = [
  {
    value: 50,
    suffix: '+',
    label: 'Clients Served',
    sublabel: 'Across Europe & UK',
  },
  {
    value: 340,
    suffix: '%',
    label: 'Avg. Pipeline Growth',
    sublabel: 'Within 90 days',
  },
  {
    value: 18,
    label: 'Avg. Engagement',
    sublabel: 'Months per client',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'High Level rebuilt our entire lead generation function in under six weeks. We went from 10 qualified leads per month to over 60 — and the system keeps improving without us touching it.',
    name: 'Ana Rodrigues',
    role: 'CEO',
    company: 'Meridian SaaS',
    initial: 'A',
  },
  {
    id: 't2',
    quote:
      'What impressed me most was the speed and the clarity. Within two weeks we had a growth roadmap I could actually present to my board. Within three months the numbers were speaking for themselves.',
    name: 'James Whitfield',
    role: 'Founder',
    company: 'Forge Supply Co.',
    initial: 'J',
  },
  {
    id: 't3',
    quote:
      'Our organic traffic was essentially zero. They built a content architecture from scratch and within six months SEO became our single highest-converting channel. I didn\'t think it was possible this quickly.',
    name: 'Sofia Almeida',
    role: 'Managing Partner',
    company: 'Arctus Legal',
    initial: 'S',
  },
]

/**
 * Client mark strip.
 * Monogram-style badges used in place of logo assets.
 * Swap `monogram` + `name` fields with actual SVG logos when available.
 */
export const clientMarks: ClientMark[] = [
  { id: 'meridian',  monogram: 'MS', name: 'Meridian',      segment: 'B2B SaaS' },
  { id: 'forge',     monogram: 'FS', name: 'Forge Supply',  segment: 'DTC Commerce' },
  { id: 'arctus',    monogram: 'AL', name: 'Arctus Legal',  segment: 'Professional Services' },
  { id: 'helio',     monogram: 'HD', name: 'Helio Digital', segment: 'Digital Media' },
  { id: 'claros',    monogram: 'CG', name: 'Claros Group',  segment: 'Real Estate' },
  { id: 'vela',      monogram: 'VP', name: 'Vela Partners', segment: 'Private Equity' },
]
