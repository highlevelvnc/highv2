/**
 * Digital Platforms service page content.
 * CMS-ready — each export maps to a dedicated section on /services/digital-platforms.
 *
 * Follows the same interface pattern as growth-systems.ts.
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
  name: 'Digital Platforms',
  tagline: 'Platforms that convert, not just impress.',
  gradientFrom: '#0EA5E9',
  gradientTo: '#6C3AFF',
}

/* ─── Problems ───────────────────────────────────────────────── */
export const problems: Problem[] = [
  {
    id: 'p1',
    headline: 'The site looks fine — but it does not convert',
    detail:
      'Design without conversion architecture is expensive decoration. Most underperforming websites fail not because of how they look but because the hierarchy is wrong, the copy does not do its job, and there is no clear primary action for visitors to take.',
  },
  {
    id: 'p2',
    headline: 'Landing pages disconnected from acquisition strategy',
    detail:
      'Running paid traffic to a generic homepage is one of the most common ways to burn media budget. Without pages engineered around the specific intent of each campaign and audience, every click costs more than it should.',
  },
  {
    id: 'p3',
    headline: 'No clear path for visitors to follow',
    detail:
      'When a website tries to say everything, it communicates nothing. Visitors who cannot quickly understand what you do, who it is for, and what to do next will leave — regardless of how much traffic you have sent them.',
  },
  {
    id: 'p4',
    headline: 'A digital presence that signals the wrong level',
    detail:
      'For B2B and premium service businesses, the quality of the digital experience is a proxy for the quality of the work. A generic template site communicates generic capability — even when the actual product is exceptional.',
  },
  {
    id: 'p5',
    headline: 'Fragmented experience across touchpoints',
    detail:
      'When the website, landing pages, and campaigns look and feel different, trust erodes at every transition. A fragmented digital experience creates friction exactly where you need confidence — in the moments closest to conversion.',
  },
  {
    id: 'p6',
    headline: 'Platforms built for today, not for scale',
    detail:
      'Template-driven builds hit a ceiling. Adding features, running campaigns, or onboarding a larger team surfaces brittleness that was always there. Growth-stage businesses need platforms architected to scale — not migrated urgently when things break.',
  },
]

/* ─── Deliverables ───────────────────────────────────────────── */
export const deliverables: Deliverable[] = [
  {
    id: 'd1',
    name: 'High-Conversion Websites',
    what:
      'Strategically architected websites built around buyer psychology, clear hierarchy, and primary action paths — not templates and aesthetic trends.',
    why:
      'The website is the most visited asset in your business. A one-percentage-point improvement in conversion rate compounds across every acquisition channel you run — paid, organic, referral, and outbound alike.',
    outcome: 'More qualified actions taken from existing traffic, lower effective CPL.',
  },
  {
    id: 'd2',
    name: 'Landing Pages & Funnel Systems',
    what:
      'Campaign-specific landing pages built around the intent of each audience and ad set — with consistent messaging, fast load times, and conversion-first layouts.',
    why:
      'A landing page aligned to the specific promise of an ad converts at 3–5x the rate of a generic homepage. Funnel architecture is one of the highest-leverage improvements available to any paid channel.',
    outcome: 'Lower cost-per-conversion, higher ROAS, more efficient acquisition spend.',
  },
  {
    id: 'd3',
    name: '3D & Immersive Experiences',
    what:
      'Performant WebGL and 3D web experiences for product showcases, brand differentiation, immersive storytelling, and award-winning digital presence.',
    why:
      'In categories where every competitor has a polished flat website, an immersive experience creates a differentiation signal that cannot be easily replicated. Premium perception translates directly to premium pricing power.',
    outcome: 'Stronger brand authority, longer session times, higher recall and shareability.',
  },
  {
    id: 'd4',
    name: 'Web Applications & Portals',
    what:
      'Custom web apps, client portals, internal tools, and SaaS front-ends built to production standards — performant, accessible, and maintainable.',
    why:
      'Off-the-shelf tools create dependency on someone else\'s roadmap and pricing. A custom platform built around your specific workflow gives you a durable operational advantage that compounds over time.',
    outcome: 'Operational leverage, reduced tool costs, a platform that grows with you.',
  },
  {
    id: 'd5',
    name: 'Platform Architecture & Technical Strategy',
    what:
      'Stack selection, scalability planning, and technical architecture for platforms that need to last — not be rebuilt every two years.',
    why:
      'Most platform problems are architecture decisions made too early or too casually. Getting the technical foundation right before building reduces the cost of every future change by an order of magnitude.',
    outcome: 'Scalable infrastructure, lower long-term development cost, fewer crises.',
  },
  {
    id: 'd6',
    name: 'UX, Onboarding & Conversion Design',
    what:
      'User experience design for onboarding flows, activation journeys, product interfaces, and conversion-critical pages — grounded in session data, not aesthetic preference.',
    why:
      'Friction at the wrong moment costs deals. Whether it is a SaaS onboarding flow, a service booking process, or a high-value enquiry form, the experience design determines how many users reach the outcome they came for.',
    outcome: 'Higher activation, lower churn, more completions at every funnel stage.',
  },
]

/* ─── Outcomes ───────────────────────────────────────────────── */
export const outcomes: Outcome[] = [
  {
    id: 'o1',
    headline: 'More qualified action from the traffic you already have',
    detail:
      'Before spending more on acquisition, improving what happens when traffic arrives is almost always the higher-leverage move. A platform built to convert extracts more value from every channel running above it.',
  },
  {
    id: 'o2',
    headline: 'Paid traffic becomes significantly more efficient',
    detail:
      'Every pound spent on ads lands on a page built to receive it. Campaign-specific landing pages, aligned messaging, and fast load times reduce cost-per-conversion directly — without touching the ad account.',
  },
  {
    id: 'o3',
    headline: 'The platform becomes a positioning signal',
    detail:
      'In premium and B2B markets, the quality of the digital experience communicates the quality of the business before any conversation happens. A platform that signals capability closes the credibility gap before sales has to.',
  },
  {
    id: 'o4',
    headline: 'User journeys become intentional, not accidental',
    detail:
      'Designed conversion paths, clear primary actions, and logical information architecture guide visitors toward the right outcome — rather than leaving them to navigate a site that was never planned with a destination in mind.',
  },
  {
    id: 'o5',
    headline: 'The platform scales without breaking',
    detail:
      'Architected correctly from the start, a digital platform can absorb new campaigns, new team members, new markets, and new product lines without the structural debt that forces a rebuild every 18 months.',
  },
  {
    id: 'o6',
    headline: 'Sales cycles shorten at the top of the funnel',
    detail:
      'When a prospect has already understood your positioning, seen your work, and decided on fit before the first call — the discovery conversation is shorter, warmer, and closes faster. The platform does the pre-selling.',
  },
]

/* ─── Fit profiles ───────────────────────────────────────────── */
export const fitProfiles: FitProfile[] = [
  {
    id: 'f1',
    label: 'Investing in traffic but losing users on weak pages',
    description:
      'The acquisition is working but the conversion is not. The platform is the constraint — not the channel above it.',
  },
  {
    id: 'f2',
    label: 'On a template site that no longer reflects the business',
    description:
      'You have outgrown the build. The business has evolved but the digital presence still looks like the first year.',
  },
  {
    id: 'f3',
    label: 'Premium or B2B businesses where the website is the first credibility signal',
    description:
      'In high-value categories, buyers form an opinion before they make contact. The platform needs to do positioning work before a human does.',
  },
  {
    id: 'f4',
    label: 'SaaS or product companies with conversion or onboarding friction',
    description:
      'Traffic is coming in and signing up — but the activation rate is too low or churn is happening in the first 30 days. The UX layer is the problem.',
  },
  {
    id: 'f5',
    label: 'Clinics, agencies, professional services, real estate, growth-stage companies',
    description:
      'Any business where the digital experience is the primary first impression — and where that impression is currently underselling the actual capability.',
  },
]
