/**
 * Performance service page content.
 * CMS-ready — each export maps to a dedicated section on /services/performance.
 *
 * Follows the same interface pattern as growth-systems.ts and digital-platforms.ts.
 * Replace with a Contentful / Sanity fetch when migrating to a headless CMS.
 */

export interface Problem {
  id: string
  headline: string
  detail: string
}

export interface Deliverable {
  id: string
  name: string
  what: string
  why: string
  outcome: string
}

export interface Outcome {
  id: string
  headline: string
  detail: string
}

export interface FitProfile {
  id: string
  label: string
  description: string
}

/* ─── Service meta ───────────────────────────────────────────── */
export const meta = {
  name: 'Performance',
  tagline: 'Acquisition channels built for efficiency, not volume.',
  gradientFrom: '#EC4899',
  gradientTo: '#F59E0B',
}

/* ─── Problems ───────────────────────────────────────────────── */
export const problems: Problem[] = [
  {
    id: 'p1',
    headline: 'Paid spend is running but profitability is unclear',
    detail:
      'Traffic is coming in and the dashboard looks active, but whether any of it is generating profitable revenue is another question entirely. Without proper attribution and conversion tracking, spend decisions are based on proxy metrics — not actual business outcomes.',
  },
  {
    id: 'p2',
    headline: 'SEO is being treated as content output, not infrastructure',
    detail:
      'Publishing articles without a keyword architecture, topic authority strategy, or technical foundation does not build organic demand — it produces a content library that ranks for nothing. SEO that compounds is built from a structural strategy, not a content calendar.',
  },
  {
    id: 'p3',
    headline: 'No reliable model for what is actually driving revenue',
    detail:
      'Last-click attribution assigns all credit to the last touchpoint before conversion and punishes every channel above it. Without a multi-touch model wired to closed revenue, budget decisions are systematically wrong — cutting what works and scaling what does not.',
  },
  {
    id: 'p4',
    headline: 'Channels operating in silos with disconnected objectives',
    detail:
      'When paid, organic, and email teams are each optimising their own channel metrics, the shared objective — profitable revenue growth — gets lost. Siloed performance creates local optima that collectively underperform a coordinated strategy.',
  },
  {
    id: 'p5',
    headline: 'Scaling spend before improving efficiency',
    detail:
      'Doubling budget on a system with a poor conversion rate doubles the waste, not the results. The right order is always to improve efficiency first — sharpen the targeting, fix the landing experience, tighten the attribution — then increase the investment.',
  },
  {
    id: 'p6',
    headline: 'Acquisition performance undermined by weak conversion paths',
    detail:
      'Even a well-built paid or SEO campaign stalls if the pages it sends traffic to are not built to convert. Performance is a full-funnel discipline — the channel and the destination both have to work together, or neither performs at its potential.',
  },
]

/* ─── Deliverables ───────────────────────────────────────────── */
export const deliverables: Deliverable[] = [
  {
    id: 'd1',
    name: 'Paid Traffic Management',
    what:
      'Full-funnel campaign architecture and ongoing management across Google, Meta, and LinkedIn — including audience strategy, creative testing frameworks, bid optimisation, and budget allocation logic.',
    why:
      'Most paid channels underperform not because the platform is wrong but because the architecture is weak. Proper campaign structure, creative rotation, and audience segmentation determine whether you are paying for results or paying for activity.',
    outcome: 'Lower cost-per-acquisition, higher ROAS, scalable paid channel with clear unit economics.',
  },
  {
    id: 'd2',
    name: 'SEO Strategy & Execution',
    what:
      'Keyword architecture, technical SEO, pillar-page content systems, internal linking structure, and link acquisition — built to compound over time rather than spike and decay.',
    why:
      'Organic search is one of the few acquisition channels where the return improves with time and scale. A properly architected SEO programme becomes increasingly difficult for competitors to displace — and increasingly cheap per lead as it matures.',
    outcome: 'Compounding inbound demand, lower effective CPL over time, reduced dependence on paid.',
  },
  {
    id: 'd3',
    name: 'AI-Assisted SEO',
    what:
      'Programmatic content systems, entity optimisation, structured data implementation, and AI-assisted keyword clustering — used to build topical authority and search coverage at a scale that would be cost-prohibitive by hand.',
    why:
      'Google\'s understanding of content is increasingly semantic and entity-based, not keyword-by-keyword. Building topical authority through structured, interlinked content clusters is the mechanism by which modern SEO compounds.',
    outcome: 'Faster topical authority, broader search coverage, sustainable rankings at scale.',
  },
  {
    id: 'd4',
    name: 'Conversion Rate Optimisation',
    what:
      'Landing page testing, form optimisation, UX analysis using heatmaps and session recordings, and structured experimentation — applied to the pages and funnels where conversion improvement has the highest commercial leverage.',
    why:
      'A 1% improvement in conversion rate on a high-traffic page reduces cost-per-acquisition across every channel above it simultaneously. CRO is one of the highest-ROI activities in growth — and one of the most systematically underfunded.',
    outcome: 'Lower effective CPL, higher return from existing traffic, improved channel efficiency.',
  },
  {
    id: 'd5',
    name: 'Analytics & Revenue Attribution',
    what:
      'GA4 configuration, server-side tracking implementation, multi-touch attribution modelling, and revenue reporting infrastructure — wired to actual closed revenue, not surface-level engagement metrics.',
    why:
      'You cannot make reliable growth decisions without reliable data. Broken tracking and incomplete attribution result in budget being misallocated systematically — and the problem compounds with every decision made on top of the bad data.',
    outcome: 'Accurate attribution, confident budget decisions, measurable ROI across every channel.',
  },
  {
    id: 'd6',
    name: 'Audience Strategy & Retargeting',
    what:
      'First-party data strategy, lookalike audience construction, sequential retargeting systems, and suppression logic — designed to maximise the value of every visitor your acquisition channels generate.',
    why:
      'Most businesses spend heavily to acquire traffic and almost nothing to convert the portion that does not take action on the first visit. A well-built retargeting system recovers a significant share of that acquisition investment.',
    outcome: 'Higher overall conversion rate, lower blended CPL, more efficient acquisition spend.',
  },
]

/* ─── Outcomes ───────────────────────────────────────────────── */
export const outcomes: Outcome[] = [
  {
    id: 'o1',
    headline: 'Paid spend produces clearly measurable returns',
    detail:
      'When attribution is working correctly and campaigns are structured for conversion rather than activity, ROAS becomes a number you can rely on — and a lever you can pull with confidence rather than guess at.',
  },
  {
    id: 'o2',
    headline: 'Organic demand begins compounding',
    detail:
      'SEO built on the right architectural foundation starts slowly and accelerates. Two years into a well-executed programme, organic often surpasses paid as the primary revenue channel — at a fraction of the ongoing cost.',
  },
  {
    id: 'o3',
    headline: 'You know exactly what is driving revenue',
    detail:
      'Multi-touch attribution wired to closed deals answers the question most growth teams cannot: which channel, which campaign, which piece of content is actually generating profitable customers — and which is producing noise.',
  },
  {
    id: 'o4',
    headline: 'Acquisition waste drops significantly',
    detail:
      'Tighter targeting, better creative, improved conversion paths, and proper audience exclusions systematically reduce the portion of spend that produces nothing. Lower CAC on the same budget means faster scaling or better margins — usually both.',
  },
  {
    id: 'o5',
    headline: 'Scaling becomes a confident, data-backed decision',
    detail:
      'When the unit economics are clear and the system is working efficiently, the decision to increase investment is straightforward. You are not betting on an outcome — you are deploying more capital into a mechanism with a known return.',
  },
  {
    id: 'o6',
    headline: 'The performance layer supports every other growth activity',
    detail:
      'A well-built performance system makes everything above it more valuable. Better attribution improves CRM decisions. Better SEO reduces dependence on paid. Better CRO makes every channel more efficient. Performance is the operating layer of growth.',
  },
]

/* ─── Fit profiles ───────────────────────────────────────────── */
export const fitProfiles: FitProfile[] = [
  {
    id: 'f1',
    label: 'Investing in paid traffic but unclear on profitability',
    description:
      'Spend is running, dashboards look active, but whether any of it is producing profitable revenue is difficult to answer with confidence.',
  },
  {
    id: 'f2',
    label: 'Traffic coming in but conversion rates are weak',
    description:
      'The channels are generating visitors but the conversion from visit to enquiry, trial, or sale is not reflecting the investment. The bottleneck is further down the funnel.',
  },
  {
    id: 'f3',
    label: 'Needing stronger organic search visibility',
    description:
      'Competitors are ranking for high-intent searches and generating inbound leads at scale. The business needs a structured SEO strategy — not more blog posts.',
  },
  {
    id: 'f4',
    label: 'Missing reliable tracking and attribution',
    description:
      'The data that exists is incomplete or misleading. GA4 is not configured correctly, conversions are not mapped to revenue, and budget decisions are made on guesswork.',
  },
  {
    id: 'f5',
    label: 'Founders and operators who want acquisition tied to revenue',
    description:
      'Not interested in impressions, sessions, or engagement rates. Want a direct, auditable line between marketing activity and closed revenue — and the decision-making clarity that comes with it.',
  },
]
