/**
 * About page data.
 * CMS-ready — replace individual fields with Contentful / Sanity fetch for production.
 */

export interface Principle {
  number: string
  title: string
  body: string
}

export interface WorkTrait {
  number: string
  title: string
  body: string
}

export interface RetentionReason {
  id: string
  title: string
  body: string
}

export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  /** Monogram for placeholder avatar */
  monogram: string
  gradientFrom: string
  gradientTo: string
}

/* ─────────────────────────────────────────────────────────
   Philosophy principles
───────────────────────────────────────────────────────── */

export const principles: Principle[] = [
  {
    number: '01',
    title: 'Systems over tactics',
    body: 'A tactic produces a result once. A system produces results continuously and improves over time. We always ask: how do we make this compound rather than repeat?',
  },
  {
    number: '02',
    title: 'Infrastructure over improvisation',
    body: 'Growth built on ad hoc decisions is fragile. Growth built on documented systems, automation, and deliberate process is defensible. We build the latter.',
  },
  {
    number: '03',
    title: 'Data over guesswork',
    body: 'Every hypothesis has a measurement attached to it. We define what success looks like before we start, and we measure it honestly when we finish.',
  },
  {
    number: '04',
    title: 'Long-term compounding over short-term hacks',
    body: 'Most tactics that work quickly stop working. Most systems that compound slowly become impossible to replicate. We choose accordingly.',
  },
  {
    number: '05',
    title: 'Business outcomes over vanity metrics',
    body: 'Impressions, followers, traffic. None of these put money in the bank unless connected to an acquisition or revenue mechanism. We track the ones that do.',
  },
]

/* ─────────────────────────────────────────────────────────
   Engagement / how we work traits
───────────────────────────────────────────────────────── */

export const workTraits: WorkTrait[] = [
  {
    number: '01',
    title: 'Diagnosis before prescription',
    body: 'Every engagement starts with a structured audit of where the business actually is — not where the brief says it is. We challenge assumptions before committing to a direction.',
  },
  {
    number: '02',
    title: 'Tailored scope, never packages',
    body: 'There are no off-the-shelf retainers here. Every scope is built around your specific stage, bottleneck, and commercial objectives — even if that means recommending less work.',
  },
  {
    number: '03',
    title: 'High accountability, short cycles',
    body: 'Most engagements produce first results within 30 days. We move in tight iteration cycles with clear owners, defined outputs, and honest post-mortems when something does not land.',
  },
  {
    number: '04',
    title: 'Access to senior people',
    body: 'You work with the people who design the strategy, not account managers interpreting it. We keep client numbers deliberately low to protect that quality.',
  },
  {
    number: '05',
    title: 'Commercial fluency',
    body: 'We speak in P&L terms — pipeline, CAC, LTV, payback period. Our work is always connected to the commercial outcomes that matter to founders, operators, and commercial leadership.',
  },
]

/* ─────────────────────────────────────────────────────────
   Why clients stay
───────────────────────────────────────────────────────── */

export const retentionReasons: RetentionReason[] = [
  {
    id: 'r-clarity',
    title: 'Strategic clarity',
    body: 'Every decision comes with a clear rationale. Clients always know why something is being built, what it is designed to achieve, and how success will be measured.',
  },
  {
    id: 'r-execution',
    title: 'Execution that holds',
    body: 'The work performs. Not by luck, but because every build is validated against real data, real buyer behaviour, and real revenue outcomes — not internal assumptions.',
  },
  {
    id: 'r-compounding',
    title: 'Systems that compound',
    body: 'The things we build in month one make month six easier. Clients stay because the infrastructure they have invested in continues to produce returns long after delivery.',
  },
  {
    id: 'r-adaptability',
    title: 'Adaptability without chaos',
    body: 'Markets shift. Strategies evolve. We adjust quickly — but within a disciplined framework, not through reactive pivots that destroy the coherence of the work.',
  },
  {
    id: 'r-alignment',
    title: 'Business alignment',
    body: 'We track to revenue and pipeline, not deliverable count. Clients value that we are accountable to the same commercial outcomes they are — not insulated from them.',
  },
  {
    id: 'r-continuity',
    title: 'Embedded continuity',
    body: 'Over time, we develop a deep understanding of the business, the market, and the decision-making context. That institutional knowledge is difficult to replace and highly valuable.',
  },
]

/* ─────────────────────────────────────────────────────────
   Team
───────────────────────────────────────────────────────── */

export const team: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Founder',
    title: 'Founder & Growth Lead',
    bio: 'Built and scaled revenue infrastructure for B2B SaaS, DTC, and professional services businesses across the UK and Europe. Background spans performance marketing, CRM architecture, revenue operations, and digital platform strategy — with a consistent focus on systems that compound rather than campaigns that peak and fade. High Level exists because the best businesses do not need more activity. They need better infrastructure.',
    monogram: 'HL',
    gradientFrom: '#6C3AFF',
    gradientTo: '#3B82F6',
  },
]

/* ─────────────────────────────────────────────────────────
   Credibility stats shown in team section
───────────────────────────────────────────────────────── */

export const credibilityStats = [
  { value: 50, suffix: '+', label: 'Clients Served' },
  { value: 18, label: 'Avg. Months per Client' },
  { value: 4, label: 'Countries Active' },
]
