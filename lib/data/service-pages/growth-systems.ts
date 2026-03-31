/**
 * Growth Systems service page content.
 * CMS-ready — each export maps to a dedicated section on /services/growth-systems.
 *
 * Pattern is identical for other service pages (digital-platforms, performance, brand-presence).
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
  name: 'Growth Systems',
  tagline: 'The infrastructure that turns interest into revenue.',
  gradientFrom: '#6C3AFF',
  gradientTo: '#3B82F6',
}

/* ─── Problems ───────────────────────────────────────────────── */
export const problems: Problem[] = [
  {
    id: 'p1',
    headline: 'Leads arrive but disappear',
    detail:
      'Marketing generates interest, but without a defined routing and follow-up system, leads age out before anyone acts. The gap between "enquiry received" and "conversation started" is where most pipeline is lost.',
  },
  {
    id: 'p2',
    headline: 'Manual tasks are creating a ceiling',
    detail:
      'When your team spends time on data entry, chasing approvals, and updating spreadsheets, they have less time for the work that actually closes deals. Manual operations do not scale — they become the bottleneck.',
  },
  {
    id: 'p3',
    headline: 'No visibility across the pipeline',
    detail:
      'Without a connected CRM and reporting layer, leadership is guessing. You cannot optimise what you cannot see — and you cannot forecast with confidence when the data lives in three different places.',
  },
  {
    id: 'p4',
    headline: 'Tools that do not talk to each other',
    detail:
      'Most growing businesses end up with a stack of disconnected tools — a CRM that does not sync with email, a calendar that does not log to the deal record, an ads platform with no revenue attribution. The result is friction at every step.',
  },
  {
    id: 'p5',
    headline: 'Growth creating operational chaos',
    detail:
      'Scaling without systems means more leads, more deals, and more customers — all managed by the same broken process. Revenue grows, but so does the chaos. The foundation needs to be built before the volume increases.',
  },
]

/* ─── Deliverables ───────────────────────────────────────────── */
export const deliverables: Deliverable[] = [
  {
    id: 'd1',
    name: 'AI Automations',
    what:
      'Intelligent workflows that trigger on intent signals — follow-up sequences, lead routing, internal alerts, and nurture flows that run without human input.',
    why:
      'Speed is the largest variable in lead conversion. Automated follow-up reaches a lead within minutes, not hours — and does it consistently, every time.',
    outcome: 'Faster response, higher contact rate, lower cost per conversion.',
  },
  {
    id: 'd2',
    name: 'CRM Implementation',
    what:
      'Full CRM setup and configuration — HubSpot, Pipedrive, or custom builds — structured around your actual sales motion, not a default template that forces you to work around it.',
    why:
      'A misconfigured CRM creates more work than it saves. The right configuration gives your team clarity, reduces admin, and surfaces the data that actually matters.',
    outcome: 'Cleaner pipeline, better handoffs, full deal visibility.',
  },
  {
    id: 'd3',
    name: 'Process Optimisation',
    what:
      'Revenue operations process mapping and redesign — lead scoring, qualification criteria, stage definitions, handoff protocols, and accountability structures.',
    why:
      'Most process problems are not technology problems — they are clarity problems. Defining the process before automating it prevents you from automating broken workflows.',
    outcome: 'Shorter sales cycles, fewer dropped deals, team alignment.',
  },
  {
    id: 'd4',
    name: 'System Integrations',
    what:
      'Connecting your existing stack into a coherent, data-consistent system — CRM, email, calendar, forms, ads platforms, analytics, and payment tools talking to each other correctly.',
    why:
      'Data fragmentation costs more than the integration does. When your tools are connected, you get attribution, you get automation, and you eliminate manual data transfer entirely.',
    outcome: 'One source of truth, fewer errors, full attribution.',
  },
  {
    id: 'd5',
    name: 'Lead Routing & Follow-Up Systems',
    what:
      'Rules-based and AI-assisted routing that sends the right lead to the right person — with the right follow-up sequence triggered automatically based on source, intent, and qualification data.',
    why:
      'Generic follow-up is ignored. Contextual follow-up — arriving at the right moment, referencing the right signals — converts. This is the system that makes that happen at scale.',
    outcome: 'Higher contact rates, better-qualified conversations, reduced sales overhead.',
  },
  {
    id: 'd6',
    name: 'Revenue Reporting & Visibility',
    what:
      'Live dashboards and reporting infrastructure that connects marketing activity to pipeline, pipeline to closed revenue, and every stage to the inputs that drive it.',
    why:
      'You cannot make confident growth decisions without reliable data. A reporting layer built on real attribution data eliminates guesswork and surfaces where to invest next.',
    outcome: 'Leadership confidence, optimisable acquisition, accurate forecasting.',
  },
]

/* ─── Outcomes ───────────────────────────────────────────────── */
export const outcomes: Outcome[] = [
  {
    id: 'o1',
    headline: 'Leads get followed up — every time',
    detail:
      'Automated routing means no lead ages out, no enquiry goes unanswered, and the right person gets notified immediately. Speed of response is one of the highest-leverage variables in B2B conversion.',
  },
  {
    id: 'o2',
    headline: 'Fewer opportunities fall through the cracks',
    detail:
      'Deal stage automation, follow-up sequences, and task assignment rules mean the human element is reserved for the work that requires judgment — not remembering to send an email.',
  },
  {
    id: 'o3',
    headline: 'Operations become a platform, not a constraint',
    detail:
      'When your ops layer is built correctly, every new sales rep, every new channel, and every new market can be onboarded into the system — not bolted onto a spreadsheet.',
  },
  {
    id: 'o4',
    headline: 'Sales and marketing stop working against each other',
    detail:
      'Shared definitions, connected data, and clear handoff rules eliminate the "marketing blames sales, sales blames marketing" dynamic. One system, one view, one set of numbers.',
  },
  {
    id: 'o5',
    headline: 'Paid traffic and content become more valuable',
    detail:
      'Every lead generated by ads or SEO is only as valuable as what happens next. When the system that receives, routes, and follows up is working correctly, acquisition ROI improves automatically.',
  },
  {
    id: 'o6',
    headline: 'Leadership has the visibility to make decisions',
    detail:
      'Real-time pipeline data, channel attribution, and conversion reporting replace guesswork with evidence. You stop reacting and start steering.',
  },
]

/* ─── Fit profiles ───────────────────────────────────────────── */
export const fitProfiles: FitProfile[] = [
  {
    id: 'f1',
    label: 'Generating leads but lacking follow-up structure',
    description:
      'Marketing is working but the revenue is not following. The gap is in the system between interest and conversion.',
  },
  {
    id: 'f2',
    label: 'Scaling with increasing operational friction',
    description:
      'Revenue is growing but so is the chaos. The infrastructure was not built for the volume you are now handling.',
  },
  {
    id: 'f3',
    label: 'Running disconnected tools and manual processes',
    description:
      'Your stack is built from accumulated decisions, not architecture. Tools do not sync, data does not flow, and your team fills the gaps manually.',
  },
  {
    id: 'f4',
    label: 'Investing in ads or content without proper lead handling',
    description:
      'Traffic is coming in but the conversion is inconsistent. The spend is sound — the system that receives it is not.',
  },
  {
    id: 'f5',
    label: 'Clinics, agencies, real estate, professional services, SaaS',
    description:
      'Any business with a defined sales motion — enquiry, qualification, proposal, close — benefits immediately from systems that handle that motion with precision.',
  },
]
