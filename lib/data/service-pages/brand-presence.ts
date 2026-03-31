/**
 * Brand Presence service page content.
 * CMS-ready — each export maps to a dedicated section on /services/brand-presence.
 *
 * Follows the same interface pattern as growth-systems.ts, digital-platforms.ts,
 * and performance.ts. Replace with a Contentful / Sanity fetch when migrating to CMS.
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
  name: 'Brand Presence',
  tagline: 'Positioning that makes growth easier in every channel.',
  gradientFrom: '#10B981',
  gradientTo: '#6C3AFF',
  gradientVia: '#0EA5E9',
}

/* ─── Problems ───────────────────────────────────────────────── */
export const problems: Problem[] = [
  {
    id: 'p1',
    headline: 'Nobody can articulate what makes you different',
    detail:
      'If your team, your sales people, and your prospects all give different answers to "why you over a competitor," the positioning is broken. Unclear differentiation forces every channel to work harder — paid costs more, organic ranks for less, and sales has to rebuild the case from scratch on every call.',
  },
  {
    id: 'p2',
    headline: 'Content is creating volume, not authority',
    detail:
      'Publishing without a strategy produces a content library that nobody finds and nobody remembers. Authority comes from a deliberate point of view, consistent editorial voice, and content mapped to the specific conversations your buyers are already having — not a calendar of general topics.',
  },
  {
    id: 'p3',
    headline: 'The brand undersells the quality of the business',
    detail:
      'For many growth-stage companies, the product or service is stronger than its market perception. When the digital presence, messaging, and positioning do not reflect the actual calibre of the work, the brand is costing you deals — not helping close them.',
  },
  {
    id: 'p4',
    headline: 'Inconsistent messaging across every touchpoint',
    detail:
      'When the website says one thing, the sales deck says another, and LinkedIn says a third, trust erodes at every transition. Buyers experience the brand as fragmented — and fragmented brands do not command premium pricing or confident referrals.',
  },
  {
    id: 'p5',
    headline: 'No thought leadership and no category point of view',
    detail:
      'The conversations that shape buying decisions in your category are happening without you. Businesses that are present in those conversations — through editorial, executive content, and genuine frameworks — build buyer preference before the first sales interaction.',
  },
  {
    id: 'p6',
    headline: 'Brand treated as aesthetics, not commercial strategy',
    detail:
      'When brand investment is framed as "looking better," the business misses the real argument: strong positioning reduces CAC, increases close rates, supports premium pricing, and accelerates referrals. Brand presence is infrastructure — not a line item to defer until things slow down.',
  },
]

/* ─── Deliverables ───────────────────────────────────────────── */
export const deliverables: Deliverable[] = [
  {
    id: 'd1',
    name: 'Brand Positioning',
    what:
      'ICP definition, competitive differentiation, messaging architecture, tone of voice, and the core narrative that sits beneath everything — the strategic layer that makes every other channel more effective.',
    why:
      'Everything downstream of positioning performs better when the positioning is correct. Paid copy converts higher. SEO content ranks for the right terms. Sales has a clear, consistent argument. Positioning is the multiplier applied to every other investment in growth.',
    outcome: 'Clearer differentiation, consistent messaging, higher close rates at every channel.',
  },
  {
    id: 'd2',
    name: 'Content Systems',
    what:
      'Editorial strategy, keyword-mapped content architecture, pillar pages, repurposing frameworks, and distribution systems — designed to build topical authority and organic demand rather than produce content for its own sake.',
    why:
      'Content without a system produces effort without compounding. A content system built on strategic intent — mapped to buyer psychology and search behaviour — accumulates authority over time and generates inbound demand that gets cheaper the longer it runs.',
    outcome: 'Compounding organic demand, growing inbound, lower effective CPL over time.',
  },
  {
    id: 'd3',
    name: 'Social Media',
    what:
      'Platform-native content strategies for LinkedIn, Instagram, and X — built around consistent audience growth, authority positioning, and engagement that moves buyers through the funnel, not just accumulates followers.',
    why:
      'Social media done well functions as a top-of-funnel trust layer. Buyers who have seen your thinking, your frameworks, and your point of view are meaningfully warmer when they eventually enter a sales conversation — and less likely to need convincing on price.',
    outcome: 'Warmer inbound conversations, stronger positioning, growing audience equity.',
  },
  {
    id: 'd4',
    name: 'Thought Leadership',
    what:
      'Executive content, ghostwritten articles, strategic op-eds, and a publishing programme designed to build credibility at the individual and company level within the markets that matter most.',
    why:
      'In B2B and professional services, deals are disproportionately won by the company perceived as the most knowledgeable. Thought leadership is not about personal branding — it is about owning the intellectual frame in which buying decisions are made.',
    outcome: 'Category authority, higher deal win rates, reduced reliance on price-based selling.',
  },
  {
    id: 'd5',
    name: 'Authority Assets',
    what:
      'Case studies, white papers, research reports, frameworks, and sales enablement content — the materials that turn proof and expertise into deployable commercial tools.',
    why:
      'Sales teams close faster when they have evidence that travels without them. Authority assets — particularly well-crafted case studies and original frameworks — do positioning work in asynchronous sales interactions and reduce the number of touchpoints needed to convert.',
    outcome: 'Shorter sales cycles, stronger social proof, more effective outbound and referral.',
  },
  {
    id: 'd6',
    name: 'Visual Identity Support',
    what:
      'Brand guidelines, design system documentation, presentation templates, and visual assets — the consistency layer that ensures positioning is expressed coherently across every touchpoint.',
    why:
      'Inconsistent visual execution undermines even strong strategic positioning. When the brand looks different on the website, the deck, and the social channels, the cognitive load on the buyer increases — and trust decreases before a word is spoken.',
    outcome: 'Consistent brand expression, reduced design overhead, professional authority at scale.',
  },
]

/* ─── Outcomes ───────────────────────────────────────────────── */
export const outcomes: Outcome[] = [
  {
    id: 'o1',
    headline: 'Higher willingness to pay — without justifying the premium',
    detail:
      'When positioning is clear and authority is established, price becomes less of the conversation. Buyers who already understand the value of what you do — and believe you do it better than the alternatives — do not need to be convinced on price. They need to be convinced it is available.',
  },
  {
    id: 'o2',
    headline: 'Sales conversations start warmer and close faster',
    detail:
      'Buyers who have consumed your content, seen your frameworks, and followed your point of view arrive at the first call already partially sold. The discovery conversation is shorter because the positioning has already done the work that used to happen in the first three sales touchpoints.',
  },
  {
    id: 'o3',
    headline: 'Every acquisition channel performs more efficiently',
    detail:
      'Paid ads convert at higher rates when the brand is already familiar. SEO content earns links because the domain has authority. Outbound gets more replies when the prospect has already seen your thinking. Strong brand presence is a rising tide that lifts every channel above it.',
  },
  {
    id: 'o4',
    headline: 'You become the recognisable choice in a crowded category',
    detail:
      'Most markets are saturated with businesses offering the same service with the same claims. The companies that escape commoditisation are the ones with a distinctive point of view, consistent presence, and a clear narrative about why their approach produces better outcomes.',
  },
  {
    id: 'o5',
    headline: 'Referral velocity increases significantly',
    detail:
      'Unclear positioning makes you difficult to recommend. When someone cannot easily describe what you do and who you do it for, they hesitate — even when they are genuinely enthusiastic. Strong positioning makes referrals effortless: the person recommending you sounds smart, and the person receiving the recommendation already understands the fit.',
  },
  {
    id: 'o6',
    headline: 'Presence and authority compound over time',
    detail:
      'Unlike paid traffic, brand presence is cumulative. Content published this year continues generating inbound next year. Authority earned today reduces acquisition cost tomorrow. Thought leadership that earns links and citations continues working without ongoing investment. Brand is the only channel where the return improves automatically.',
  },
]

/* ─── Fit profiles ───────────────────────────────────────────── */
export const fitProfiles: FitProfile[] = [
  {
    id: 'f1',
    label: 'Strong delivery, weak market perception',
    description:
      'The work is excellent — the clients who use you know it — but the external perception does not match the internal reality. The business is being undersold by its own brand.',
  },
  {
    id: 'f2',
    label: 'Founders who know their company is undervalued',
    description:
      'There is a gap between what the business actually does and what the market believes it does. The opportunity cost of that gap is real — in deal quality, pricing, and the calibre of inbound enquiries.',
  },
  {
    id: 'f3',
    label: 'Producing content without strategic effect',
    description:
      'Blog posts are going out, social media is active, but there is no measurable impact on inbound, authority, or sales conversations. The content is being made; the strategy is missing.',
  },
  {
    id: 'f4',
    label: 'Entering or competing in a more crowded market',
    description:
      'Category dynamics are shifting and differentiation is getting harder. The business needs a positioning strategy that carves out a defensible position — not just better messaging on the same claims.',
  },
  {
    id: 'f5',
    label: 'Businesses that need authority before scaling acquisition',
    description:
      'Scaling paid or outbound into a market where brand recognition is near zero is expensive. Building a foundational presence first — then scaling acquisition into a warm audience — is the more capital-efficient order of operations.',
  },
]
