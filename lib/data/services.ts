/**
 * Services / capability pillar data.
 * CMS-ready — replace with Contentful / Sanity fetch for production.
 *
 * Each pillar maps to a future route: /services/[slug]
 */

export interface PillarDeliverable {
  name: string
  description: string
}

export interface Pillar {
  id: string
  /** Future route: /services/[slug] */
  slug: string
  name: string
  /** Short outcome-oriented tagline */
  tagline: string
  /** 2–3 sentence strategic description */
  description: string
  /** Problems this pillar solves — 3 bullets */
  solves: string[]
  /** What sits inside this pillar */
  deliverables: PillarDeliverable[]
  gradientFrom: string
  gradientTo: string
  gradientVia?: string
  /** Lucide icon name — used for conditional rendering */
  iconName: 'workflow' | 'globe' | 'gauge' | 'megaphone'
}

export const pillars: Pillar[] = [
  {
    id: 'p-growth',
    slug: 'growth-systems',
    name: 'Growth Systems',
    tagline: 'The infrastructure that turns interest into revenue.',
    description:
      'Most businesses leak pipeline. Leads go uncontacted, follow-up is manual, and there is no clear system connecting marketing to sales to revenue. Growth Systems is how we fix the plumbing — building the automated, data-driven infrastructure that handles everything between top-of-funnel and closed deal.',
    solves: [
      'Leads are falling through the gaps between marketing and sales',
      'Follow-up is manual and inconsistent, costing deal velocity',
      'There is no clear pipeline visibility or revenue attribution',
    ],
    deliverables: [
      {
        name: 'AI Automations',
        description: 'Automated workflows triggered by intent signals — follow-up, routing, nurture, alerts.',
      },
      {
        name: 'CRM Implementation',
        description: 'HubSpot, Pipedrive, or custom CRM — configured for your sales motion, not a default template.',
      },
      {
        name: 'Process Optimisation',
        description: 'Map and streamline the revenue ops process: lead scoring, handoff, deal stages, reporting.',
      },
      {
        name: 'System Integrations',
        description: 'Connect your stack — CRM, email, calendar, ads, analytics — into a single, coherent system.',
      },
      {
        name: 'Outbound Sequencing',
        description: 'Signal-based outbound sequences that reach the right prospect at the right moment.',
      },
      {
        name: 'Revenue Reporting',
        description: 'Live dashboards that connect marketing activity to pipeline and closed revenue.',
      },
    ],
    gradientFrom: '#6C3AFF',
    gradientTo: '#3B82F6',
    iconName: 'workflow',
  },
  {
    id: 'p-platforms',
    slug: 'digital-platforms',
    name: 'Digital Platforms',
    tagline: 'Platforms that convert, not just impress.',
    description:
      'A digital platform is only as valuable as the outcomes it produces. We build high-conversion websites, apps, and custom platforms that are architected around buyer psychology, performance, and scalability — not templates and trend-chasing. The goal is always the same: more qualified action taken.',
    solves: [
      'The website looks fine but does not convert visitors into leads or customers',
      'The platform was not built to scale — adding features or traffic breaks things',
      'There is no clear digital experience strategy — just a collection of pages',
    ],
    deliverables: [
      {
        name: 'High-Conversion Websites',
        description: 'Architectured around conversion psychology: messaging, flow, and CTAs that produce results.',
      },
      {
        name: '3D & Immersive Experiences',
        description: 'Performant WebGL and 3D experiences for product showcases, brand immersion, and storytelling.',
      },
      {
        name: 'Web Applications',
        description: 'Custom web apps: dashboards, portals, internal tools, and SaaS front-ends built to production standards.',
      },
      {
        name: 'Platform Architecture',
        description: 'Technical strategy, stack selection, and scalable architecture for platforms built to last.',
      },
      {
        name: 'UX & Onboarding Design',
        description: 'Onboarding flows, activation journeys, and product UX that reduce churn and surface value faster.',
      },
      {
        name: 'Performance Engineering',
        description: 'Core Web Vitals, Lighthouse scores, edge delivery — platforms that load fast on every device.',
      },
    ],
    gradientFrom: '#0EA5E9',
    gradientTo: '#6C3AFF',
    iconName: 'globe',
  },
  {
    id: 'p-performance',
    slug: 'performance',
    name: 'Performance',
    tagline: 'Acquisition channels built for efficiency, not volume.',
    description:
      'Traffic without conversion is expensive noise. Performance is the discipline of building acquisition channels that are data-driven, continuously optimised, and connected to real revenue outcomes — not just clicks and impressions. We build and run the engines that scale profitably.',
    solves: [
      'Paid channels are generating traffic but the conversion rate is poor',
      'SEO is treated as a cost centre rather than a compounding revenue channel',
      'There is no clear attribution between spend and closed revenue',
    ],
    deliverables: [
      {
        name: 'Paid Traffic Management',
        description: 'Google, Meta, LinkedIn — full-funnel campaign architecture, creative testing, and bid optimisation.',
      },
      {
        name: 'SEO Strategy & Execution',
        description: 'Technical SEO, keyword architecture, pillar content, and link acquisition — built to compound.',
      },
      {
        name: 'AI-Assisted SEO',
        description: 'Programmatic content systems, entity optimisation, and structured data at scale.',
      },
      {
        name: 'Conversion Rate Optimisation',
        description: 'Landing page testing, form optimisation, and UX improvements driven by heatmaps and session data.',
      },
      {
        name: 'Analytics & Attribution',
        description: 'GA4, server-side tracking, and multi-touch attribution models that connect spend to revenue.',
      },
      {
        name: 'Audience & Retargeting',
        description: 'First-party data strategy, lookalike audiences, and retargeting sequences that close the loop.',
      },
    ],
    gradientFrom: '#EC4899',
    gradientTo: '#F59E0B',
    iconName: 'gauge',
  },
  {
    id: 'p-brand',
    slug: 'brand-presence',
    name: 'Brand Presence',
    tagline: 'Positioning that makes growth easier in every channel.',
    description:
      'Strong brand presence is not a luxury — it is infrastructure. When your positioning is clear, your content is consistent, and your authority is established, every other growth lever performs better. Paid costs less. Sales closes faster. Referrals compound. Brand Presence is how we build the asset that underpins everything else.',
    solves: [
      'The company cannot clearly articulate what makes it different — and neither can prospects',
      'There is content being produced but it is not building authority or generating inbound',
      'The brand does not reflect the quality of the product or team, which is hurting sales',
    ],
    deliverables: [
      {
        name: 'Brand Positioning',
        description: 'ICP definition, differentiation narrative, messaging architecture, and tone of voice — the strategic layer beneath everything.',
      },
      {
        name: 'Content Systems',
        description: 'Editorial calendars, pillar content, distribution strategy, and repurposing systems that create leverage.',
      },
      {
        name: 'Social Media',
        description: 'LinkedIn, Instagram, X — platform-native content strategies built around authority and consistent audience growth.',
      },
      {
        name: 'Thought Leadership',
        description: 'Executive content, ghostwritten articles, and strategic publishing that builds credibility in your market.',
      },
      {
        name: 'Authority Assets',
        description: 'Case studies, white papers, research reports, and frameworks that your sales team can deploy.',
      },
      {
        name: 'Visual Identity Support',
        description: 'Brand guidelines, presentation systems, and design assets that maintain consistency across touchpoints.',
      },
    ],
    gradientFrom: '#10B981',
    gradientVia: '#0EA5E9',
    gradientTo: '#6C3AFF',
    iconName: 'megaphone',
  },
]

/** System synergies — how pillars amplify each other */
export const synergies = [
  {
    id: 'syn-1',
    pillarA: 'Digital Platforms',
    pillarB: 'Performance',
    outcome:
      'A high-conversion platform makes every pound spent on paid traffic work harder. Better landing systems lower CPL directly.',
  },
  {
    id: 'syn-2',
    pillarA: 'Brand Presence',
    pillarB: 'Performance',
    outcome:
      'Strong content and positioning reduce paid CAC over time. Audiences warmed by content convert at a significantly higher rate.',
  },
  {
    id: 'syn-3',
    pillarA: 'Growth Systems',
    pillarB: 'Performance',
    outcome:
      'A proper CRM and automation layer means no lead generated by paid or organic is ever lost. Every lead is followed up, scored, and routed correctly.',
  },
  {
    id: 'syn-4',
    pillarA: 'Brand Presence',
    pillarB: 'Growth Systems',
    outcome:
      'Authority content gives outbound sequences a reason to exist. Prospects who have seen your thinking are 3–5x more likely to respond.',
  },
  {
    id: 'syn-5',
    pillarA: 'Digital Platforms',
    pillarB: 'Brand Presence',
    outcome:
      'A website built on strong positioning converts at a category level — not just for one keyword or campaign. Brand and platform compound together.',
  },
]

/** Starting point scenarios for self-segmentation */
export const startingPoints = [
  {
    id: 'sp-1',
    bottleneck: 'We are not generating enough qualified leads',
    recommendation: 'Growth Systems' as const,
    detail:
      'Start by building the acquisition and routing infrastructure. Fix the plumbing before scaling the volume.',
    slug: 'growth-systems',
  },
  {
    id: 'sp-2',
    bottleneck: 'Our website and platforms are not converting',
    recommendation: 'Digital Platforms' as const,
    detail:
      'Fix the conversion layer first. Spending on traffic without a high-converting destination is expensive.',
    slug: 'digital-platforms',
  },
  {
    id: 'sp-3',
    bottleneck: 'We are spending on acquisition but ROI is unclear',
    recommendation: 'Performance' as const,
    detail:
      'Build the attribution model and channel discipline first. Measure before scaling.',
    slug: 'performance',
  },
  {
    id: 'sp-4',
    bottleneck: 'Our brand does not reflect our actual capability',
    recommendation: 'Brand Presence' as const,
    detail:
      'Positioning and authority work makes everything downstream — ads, SEO, sales — easier and cheaper.',
    slug: 'brand-presence',
  },
]
