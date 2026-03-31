/**
 * Full article content — separate from the insight index for CMS-readiness.
 *
 * Architecture: `insights[]` in insights.ts is the index (metadata only).
 * This file holds the body content, keyed by slug.
 *
 * When migrating to a CMS (Contentful / Sanity / etc.):
 * - Replace this Record with a `getInsightContent(slug: string)` async fetch
 * - The ContentBlock type maps directly to Contentful rich text or Sanity blocks
 * - No changes needed to the rendering layer
 */

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; text: string }

export const insightContent: Record<string, ContentBlock[]> = {
  'signal-based-outbound': [
    {
      type: 'paragraph',
      text: 'Traditional outbound works on a volume hypothesis: send enough messages to enough people and some percentage will respond. The problem is that the denominator keeps growing while the numerator stays flat. Inboxes are more defended, buyers are more selective, and the volume-based model has produced an arms race that nobody in B2B is winning.',
    },
    {
      type: 'paragraph',
      text: 'Signal-based outbound starts from a different hypothesis. Instead of asking "who might be interested?", it asks "who is already showing behaviour that indicates readiness?" The shift sounds subtle. The results are not.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What counts as a signal',
    },
    {
      type: 'paragraph',
      text: 'A signal is any observable behaviour that increases the probability that a prospect is in an active buying window. The strongest signals are not demographic — they are behavioural, temporal, and contextual. The prospect who just hired a Head of Growth is more likely to be thinking about a CRM overhaul than the prospect who has had the same org chart for three years.',
    },
    {
      type: 'list',
      items: [
        'Job change signals — a new decision-maker arriving often triggers a review of existing vendors and tools',
        'Hiring signals — open roles reveal strategic direction (hiring a paid media manager means they are scaling acquisition)',
        'Funding signals — a fresh round creates a 90-day window where budget is available and leadership is willing to spend',
        'Content engagement signals — LinkedIn activity, event attendance, and content downloads indicate active interest in a topic',
        'Technology change signals — installing or uninstalling tools visible via data providers suggests infrastructure reviews',
        'Competitor engagement signals — if they are talking to your competitors, they are in the market',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Building the sequence around the signal',
    },
    {
      type: 'paragraph',
      text: 'The sequence structure changes fundamentally when you have a signal. Instead of a generic value proposition pitched cold, you have an observation and a natural connection. The opening line acknowledges the context — without being creepy — and the first CTA is sized appropriately to where the prospect is in their process.',
    },
    {
      type: 'paragraph',
      text: 'A prospect who just raised a Series A does not need a 45-minute demo. They need a 15-minute conversation with someone who has solved the specific growth problem that typically follows a fundraise in their sector. Sequence design is really context design. Every touchpoint should be smaller and more specific than the one that came before it.',
    },
    {
      type: 'callout',
      text: 'The structural advantage of signal-based outbound is timing. You are not interrupting — you are arriving. The difference in response rates is not marginal. In our engagements, signal-triggered sequences consistently outperform traditional sequences by 3.5–5x on reply rate and 2–3x on qualified meeting rate.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The tooling question',
    },
    {
      type: 'paragraph',
      text: 'Signal-based outbound requires data infrastructure. You need a source for buying signals (Apollo, Clay, LinkedIn Sales Navigator, or a combination), a way to enrich and score prospects when a signal fires, and a sequencing tool that can personalise at scale. The setup cost is higher than a basic outbound sequence. The ongoing cost per qualified meeting is significantly lower.',
    },
    {
      type: 'paragraph',
      text: 'The companies that get this right build a signal library — a documented set of triggers, the ICP criteria that make each trigger relevant, and the sequence logic that fires in response. It runs continuously, surfaces the right prospect at the right moment, and improves over time as reply data feeds back into the model. That is the difference between a campaign and a system.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Where most teams go wrong',
    },
    {
      type: 'list',
      items: [
        'Using signals as decoration — mentioning the job change in line one but sending the same generic pitch below it',
        'Too many signals, too little filtering — treating every observable event as a trigger produces noise, not precision',
        'Skipping the scoring layer — not all signals are equal; a funding round at a company with 5 employees is not the same as one at a company with 200',
        'No feedback loop — the sequence runs but reply data is never used to improve the signal model',
      ],
    },
    {
      type: 'paragraph',
      text: 'Signal-based outbound is not a tactic you bolt onto an existing process. It is a different operating model. The companies that build it correctly find that their outbound function becomes one of their most defensible growth assets — not because the signals are secret, but because the system around them compounds.',
    },
  ],

  'content-moat-strategy': [
    {
      type: 'paragraph',
      text: 'Most content strategies are a collection of one-off articles. A team produces blog posts at a regular cadence, distributes them on social, measures traffic, and calls it a content programme. The problem is that this approach produces a lot of content and very little authority. Individual articles do not compound. A content architecture does.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The pillar page model',
    },
    {
      type: 'paragraph',
      text: 'A content moat is built on a hierarchical structure: pillar pages that cover broad topics comprehensively, cluster content that covers specific aspects in depth, and a systematic internal linking structure that signals topical authority to search engines and creates a coherent reading journey for humans.',
    },
    {
      type: 'list',
      items: [
        'Pillar page — 3,000–5,000 words covering a topic comprehensively; targets a head keyword with high volume and moderate competition',
        'Cluster articles — 1,000–2,000 words each targeting long-tail variations; link back to the pillar and to each other',
        'Internal linking mesh — every cluster links to its pillar; related clusters link to each other; the structure maps your authority to search engine understanding',
        'Regular depth additions — pillar pages are living documents, updated quarterly with new data, examples, and expanded sections',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Mapping content to buyer intent',
    },
    {
      type: 'paragraph',
      text: 'The keyword strategy behind a content moat is not about traffic volume — it is about intent mapping. Every piece of content should be traceable to a stage in the buyer journey and a specific question that stage produces. Top-of-funnel cluster content addresses symptoms. Pillar pages address the problem domain. Bottom-of-funnel content addresses the decision: vendor comparison, case studies, methodology pages.',
    },
    {
      type: 'callout',
      text: 'The companies that build content moats successfully treat content as infrastructure, not output. The goal is not to publish more. It is to own the topic map that your buyers navigate — so that wherever they enter the research journey, they arrive at you.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The editorial calendar structure',
    },
    {
      type: 'paragraph',
      text: 'A content moat requires a publishing cadence that is sustainable and strategically sequenced. The common mistake is starting with cluster content before the pillar exists. Internal links point nowhere, the authority signal is weak, and the cluster articles are effectively orphaned. Build pillars first. Then build clusters. Then build the linking structure. Then distribute.',
    },
    {
      type: 'paragraph',
      text: 'A realistic 12-month structure for a B2B content moat: months 1–3 define the topic hierarchy and produce two pillar pages. Months 4–8 build four cluster articles per pillar. Months 9–12 focus on depth additions, a systematic link-building effort against the pillars, and measuring topical authority gains. Results compound in months 9–18, not months 1–3.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Measuring the moat',
    },
    {
      type: 'list',
      items: [
        'Topical authority score — tools like Semrush Topic Research and Ahrefs show how Google perceives your authority on a topic cluster',
        'Organic share of voice — what percentage of visible rankings on your core topic terms do you hold versus competitors',
        'Inbound lead source — what proportion of inbound leads arrive from organic search, and is it growing as a share',
        'Content-attributed pipeline — MQLs and SQLs that had at least one organic content touchpoint before entering the pipeline',
      ],
    },
  ],

  'crm-revenue-attribution': [
    {
      type: 'paragraph',
      text: 'Revenue attribution is consistently one of the most politically charged topics in B2B companies. Marketing claims credit for every deal. Sales argues that marketing leads are low quality. Finance cannot reconcile any of it with actual revenue. The CFO stops believing any of the numbers. This is not a data problem — it is an architecture problem.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Why most attribution models fail',
    },
    {
      type: 'paragraph',
      text: 'First-touch and last-touch attribution are both wrong for the same reason: they assign 100% of credit to one moment in a multi-touchpoint journey. First-touch overvalues awareness channels. Last-touch overvalues conversion channels. Neither produces the insight a CFO needs to make a budget decision.',
    },
    {
      type: 'list',
      items: [
        'First-touch — credits the first known interaction; overstates top-of-funnel channel value',
        'Last-touch — credits the final interaction before conversion; overvalues retargeting, branded search, and sales outreach',
        'Linear — distributes credit equally across all touchpoints; technically fairer but often misleading for budget allocation',
        'Time-decay — weights recent touchpoints more heavily; better for short sales cycles, misleading for long ones',
        'Data-driven — algorithmically weighted based on actual conversion patterns; requires significant data volume to be reliable',
      ],
    },
    {
      type: 'callout',
      text: 'The model that CFOs actually trust is the one that they helped design. The most important step in building a revenue attribution system is not choosing an algorithm — it is aligning with your CFO and Sales leadership on what questions the system needs to answer. Attribution that answers the wrong question precisely is worthless.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The CRM architecture that makes attribution possible',
    },
    {
      type: 'paragraph',
      text: 'Reliable attribution requires clean CRM data. That means contact-to-account resolution, consistent lead source capture at every entry point, deal stage timestamps that accurately reflect the sales process, and a connection between marketing activity data and the CRM contact record. Most CRMs have this capability. Most are not configured to use it.',
    },
    {
      type: 'list',
      items: [
        'Capture lead source at the first touchpoint — UTM parameters, form field, or direct input — and never overwrite it',
        'Log all meaningful subsequent touchpoints against the contact record — email opens are noise; content downloads, event attendance, and demo requests are signal',
        'Use deal close date and pipeline entry date to calculate sales cycle length — this determines which attribution model is appropriate',
        'Connect closed-won revenue back to the original contact and their lead source — this is the denominator for ROI calculations by channel',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Reporting that earns trust',
    },
    {
      type: 'paragraph',
      text: 'The attribution report that a CFO will trust shows three things: total pipeline generated by source, revenue closed by source, and average sales cycle by source. These three numbers together allow any commercially literate person to evaluate channel efficiency without needing to understand marketing. Build that report. Show it in every leadership meeting. Defend it with source data when questioned.',
    },
    {
      type: 'paragraph',
      text: 'The secondary benefit of a working attribution model is that it resolves the marketing-sales tension. When both teams can see the same data, sourced from the same system, the debate shifts from who deserves credit to how to improve the system. That is a significantly more productive conversation.',
    },
  ],

  'linkedin-b2b-playbook': [
    {
      type: 'paragraph',
      text: 'LinkedIn has become the primary B2B content platform. It has also become almost entirely saturated with content that performs in the algorithm but does nothing for pipeline. The distinction matters: LinkedIn reach is not LinkedIn revenue. The accounts that generate pipeline from LinkedIn are operating from a fundamentally different strategy than the ones chasing impressions.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The content architecture that generates pipeline',
    },
    {
      type: 'paragraph',
      text: 'Pipeline-generating LinkedIn content shares three characteristics: it addresses a specific problem that your ICP has today, it demonstrates a point of view that differentiates your thinking from generic advice, and it ends with a natural next step that requires almost no commitment. It does not explain what your company does. It shows how you think about problems that your buyers have.',
    },
    {
      type: 'list',
      items: [
        'Problem-framing posts — define a problem your ICP recognises, name why standard approaches fail, hint at a better framework',
        'Contrarian takes — a clear, defensible disagreement with received wisdom in your category; these get shared and generate inbound DMs',
        'Behind-the-numbers posts — take a result (client or your own) and walk through what produced it; specificity builds credibility faster than any other format',
        'Process reveals — show how you actually do something that your buyers want to do; practical content creates more trust than aspirational content',
        'Case micro-studies — a single client outcome in 5–7 sentences: the situation, the intervention, the specific result',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'The DM strategy that converts without burning trust',
    },
    {
      type: 'paragraph',
      text: 'LinkedIn DMs work when they are specific, low-commitment, and timed to a signal. A cold DM sent immediately after a connection request is almost universally ignored. A DM sent three weeks after someone has commented on your content twice, referencing something specific they said, has a response rate that is an order of magnitude higher.',
    },
    {
      type: 'callout',
      text: 'The most underused LinkedIn tactic in B2B is the "no CTA" DM. A message that adds a resource, shares an observation, or makes a specific connection — with no ask — builds more goodwill and generates more inbound replies than any outbound pitch. Give first. Ask second. Wait longer than feels comfortable.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Measuring what actually matters',
    },
    {
      type: 'paragraph',
      text: 'LinkedIn analytics show impressions, reactions, and profile views. These are not the metrics that indicate a functioning pipeline strategy. The metrics that matter are: inbound DMs from ICP prospects, connection requests from named accounts on your target list, and content-attributed pipeline (contacts who engaged with your content before entering the pipeline).',
    },
    {
      type: 'paragraph',
      text: 'A founder or sales lead who posts consistently, tracks which posts generate ICP engagement, and uses that data to refine their content focus will build a pipeline asset that compounds over 12–24 months. It does not produce leads in week one. It produces a reputation that makes every other channel — outbound, referrals, events — significantly easier.',
    },
  ],

  'landing-page-conversion': [
    {
      type: 'paragraph',
      text: 'Most landing pages fail because of hierarchy, not design. The visual is fine. The copywriting is competent. But the structure of how information is presented — what appears first, what appears second, what the primary action is — is wrong. Visitors arrive with a specific intent and a narrow attention span. The page rarely meets either.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The structural failures that kill conversion',
    },
    {
      type: 'list',
      items: [
        'Leading with what you do instead of what they get — "We are a growth agency" is not a value proposition. "More qualified pipeline in 90 days" is.',
        'Multiple competing CTAs — three different buttons with three different labels creates decision paralysis; one primary action per page',
        'Social proof positioned at the bottom — testimonials and logos belong above the fold on high-intent pages, not at the end of a long scroll',
        'Form fields that ask for too much — each additional field reduces completion rate by 5–10%; ask for only what you need to qualify the lead at this stage',
        'Headlines that describe the offer instead of the outcome — the visitor does not want the webinar; they want the knowledge the webinar provides',
      ],
    },
    {
      type: 'callout',
      text: 'The single highest-leverage change on most landing pages is replacing a feature-focused headline with an outcome-focused one. "AI-powered outbound sequencing platform" becomes "Three times more qualified meetings from the same team." Same product. Different conversion rate.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The hierarchy that converts',
    },
    {
      type: 'paragraph',
      text: 'A landing page that converts follows a predictable information architecture: the outcome (what they get), the mechanism (how it works in brief), the evidence (who else has gotten this outcome), and the action (one clear, low-friction next step). Every element exists to reduce one type of objection. Outcome reduces "why should I care?". Mechanism reduces "does this actually work?". Evidence reduces "has this worked for people like me?". Action reduces "what do I do next?".',
    },
    {
      type: 'paragraph',
      text: 'The pages that convert best are almost always shorter than the ones that do not. Not because length is inherently bad — but because most long pages are long because they are trying to address every possible objection rather than the specific objection of the specific ICP segment the page is targeting. One page, one ICP segment, one primary objection, one CTA.',
    },
  ],

  'growth-stack-architecture': [
    {
      type: 'paragraph',
      text: 'The question most growth teams ask when building their stack is "which tools should we use?". The more important question is "in what order should we implement them, and what data model needs to exist underneath them?". The tool choices matter less than most people assume. The implementation order and the data architecture beneath everything matters enormously.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The order of operations',
    },
    {
      type: 'paragraph',
      text: 'The most common RevOps mistake is implementing analytics before establishing the data model, and implementing automation before the data being automated is clean. The result is sophisticated tooling built on a foundation that produces unreliable outputs. The correct implementation order follows the principle that each layer should only be built after the layer beneath it is stable.',
    },
    {
      type: 'list',
      items: [
        'Layer 1: Data model — define your objects (lead, contact, account, opportunity), the relationships between them, and the field structure that will support reporting. Do this before selecting any tools.',
        'Layer 2: CRM — implement your CRM against the data model. Configure deal stages to reflect your actual sales process, not the tool defaults.',
        'Layer 3: Capture — connect your website, ads, and outbound tools to the CRM. Ensure lead source is captured consistently at every entry point.',
        'Layer 4: Analytics — build reporting on top of clean CRM data. Attribution models, pipeline reports, and channel ROI dashboards are only reliable if the underlying data is clean.',
        'Layer 5: Automation — automate processes that already work manually. Never automate a process you have not validated by hand.',
        'Layer 6: Enrichment and intelligence — add data enrichment, lead scoring, and signal monitoring once the foundation is solid.',
      ],
    },
    {
      type: 'callout',
      text: 'Automation built on bad data does not fix bad data — it scales it. Every organisation that has spent six months untangling a broken HubSpot setup learned this the hard way. Slow down at layers 1 and 2. The rest goes faster.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Integration architecture',
    },
    {
      type: 'paragraph',
      text: 'A growth stack typically involves 8–15 tools. The integration architecture — how data flows between them — determines whether the stack operates as a coherent system or a collection of disconnected tools. The principle we apply: every tool in the stack should write data to the CRM as the single source of truth. No tool should be the authoritative record for any data type that matters to revenue.',
    },
    {
      type: 'paragraph',
      text: 'Practically, this means your email sequencing tool logs replies in the CRM. Your ads platform syncs lead data to the CRM. Your analytics platform reads from CRM data for revenue attribution. The CRM is the spine. Everything else is a spoke.',
    },
  ],

  'ai-marketing-automation': [
    {
      type: 'paragraph',
      text: 'Every major vendor in the marketing and sales technology space has added "AI" to their product in the last 18 months. Most of what has been labelled AI is more accurately described as machine learning applied to existing data or LLM wrappers around existing workflows. This does not mean it is not useful — it means evaluating it requires more precision than the marketing language suggests.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What is worth automating',
    },
    {
      type: 'paragraph',
      text: 'The first principle of AI automation in marketing is that you should only automate processes where the output can be verified at scale. If the automated output is going out to prospects, customers, or the market under your brand name, you need a quality control layer. Automation that runs without verification is not a productivity gain — it is a reputation liability.',
    },
    {
      type: 'list',
      items: [
        'Lead routing and scoring — rule-based and ML-based scoring models are well-established and reliable; automate this fully',
        'Follow-up sequencing — automated follow-up sequences with personalisation tokens are proven; the personalisation layer is where AI adds value',
        'Content research and briefing — AI tools for keyword research, brief generation, and competitive analysis are reliable; use them as inputs, not outputs',
        'Reporting and anomaly detection — AI-assisted analytics that flags unusual patterns in campaign data or pipeline movement is genuinely high-value',
        'Ad creative testing — programmatic creative generation and testing is mature; use it for hypothesis generation, not final creative decisions',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'What to protect',
    },
    {
      type: 'callout',
      text: 'The outputs that build long-term brand value — your positioning, your point of view, your thought leadership — should not be automated. They should be informed by data and assisted by tools, but they should represent genuine human judgment. The companies that automate their voice lose the thing that makes their brand worth trusting.',
    },
    {
      type: 'list',
      items: [
        'Brand positioning and messaging — this requires genuine understanding of your market, your buyers, and your differentiation. No LLM has that context by default.',
        'Strategic direction — AI can model scenarios and surface data patterns, but investment decisions require human judgment about risk, timing, and context',
        'Client relationships — automation that touches clients should be transparent and human-reviewed; automated "personalisation" at the expense of genuine relationship is a net negative',
        'Content that represents your point of view — thought leadership that is genuinely useful requires expertise that cannot be fully prompted',
      ],
    },
    {
      type: 'paragraph',
      text: 'The sustainable AI advantage in marketing is not using more AI than competitors. It is using AI in the right places — to handle repetitive, verifiable tasks at speed — while protecting the human judgment that creates genuine brand differentiation. The companies that get this balance right will compound their advantage. The ones that automate everything will converge on sameness.',
    },
  ],

  'b2b-positioning-strategy': [
    {
      type: 'paragraph',
      text: 'Most B2B brands are positioned around what they do. "We are a growth agency." "We are a SaaS platform for sales teams." "We are a managed service provider." These descriptions communicate the category but not the reason to choose. They are defensible only until a competitor says the same thing, which happens immediately.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The positioning question that matters',
    },
    {
      type: 'paragraph',
      text: 'Positioning is not about what you do. It is about what you do best, for whom, under what conditions, and with what specific outcome. The positioning question that produces defensible differentiation is not "what are we?" — it is "what is the specific outcome we deliver better than anyone else for a specific type of buyer in a specific situation?"',
    },
    {
      type: 'callout',
      text: 'The strongest B2B positions are uncomfortable. They exclude someone. A positioning statement that tries to appeal to every buyer in a category is not a position — it is a description. The willingness to say "this is not for you" to a significant segment of the market is what makes "this is exactly for you" land for the segment that matters.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The four components of a strong position',
    },
    {
      type: 'list',
      items: [
        'ICP precision — not "B2B SaaS companies" but "B2B SaaS companies between $2M and $15M ARR with a sales team of 3–10 and a founder-led growth motion that is starting to break"',
        'Differentiated mechanism — what is your specific approach that others do not use, and why does it produce better results in your ICP\'s situation',
        'Proof category — what type of outcome do you produce, and what specific metric do you track to demonstrate it',
        'Alternative framing — what are buyers currently doing instead of working with you, and why is that producing suboptimal results',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Testing your position in the market',
    },
    {
      type: 'paragraph',
      text: 'A positioning statement is a hypothesis. The only way to validate it is to take it to market and measure response. The signals that indicate a position is working: your ICP immediately says "that is exactly my problem"; prospects who are not your ICP self-select out early in the conversation; your sales cycle shortens because you spend less time explaining why you are different; and inbound enquiries arrive with context that matches your positioning rather than generic requests.',
    },
    {
      type: 'paragraph',
      text: 'The typical timeline for a positioning change to produce measurable commercial results is 6–12 months. Positioning changes that make the pipeline better in year one make every subsequent year easier — because the compounding effect of being known for one specific thing in a specific market is difficult to replicate quickly.',
    },
  ],

  'paid-to-organic-handoff': [
    {
      type: 'paragraph',
      text: 'Paid acquisition and organic content are usually managed by different teams with different objectives and different reporting lines. The result is that the data from each channel sits in a silo — and a significant source of compounding leverage is left on the table. The most sophisticated growth operations treat paid and organic as a single, integrated system where paid generates immediate data and organic converts that data into compounding returns.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Using paid data to fund organic strategy',
    },
    {
      type: 'paragraph',
      text: 'Paid advertising is expensive but fast. It produces audience data — which messages resonate with which segments, which pain points generate clicks, which headlines produce the highest conversion rate — within days or weeks. Organic content is slow but compounding. It takes 6–12 months to produce meaningful organic returns, but those returns continue indefinitely. The handoff is using the fast data from paid to inform the slow but durable investment in organic.',
    },
    {
      type: 'list',
      items: [
        'Run paid traffic to multiple landing pages with different headline and value proposition variants; use conversion data to identify which message resonates most with your ICP',
        'Test content topics in paid social before investing in long-form organic content; a topic that generates engagement at paid CPCs is worth investing in at organic scale',
        'Use paid retargeting to identify which organic content types bring visitors back; this reveals which content formats create genuine intent, not just traffic',
        'Export search term reports from Google Ads to identify search queries that convert; these become your organic keyword targets',
      ],
    },
    {
      type: 'callout',
      text: 'The economics of this approach improve over time. In month 3, paid is funding organic research. In month 12, organic is reducing the volume of paid spend required. In month 24, organic content is your highest-converting acquisition channel — and paid is an amplification layer rather than a primary one. The companies that integrate these two channels early create an advantage that is structural, not tactical.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The measurement framework',
    },
    {
      type: 'paragraph',
      text: 'Measuring the paid-to-organic handoff requires tracking at the topic and message level, not just the channel level. When an organic article generates a lead, the relevant question is not just "which article?" but "was this topic validated by paid data before we invested in it?". The companies that build this tracking layer can calculate the ROI of their paid-to-organic strategy and make increasingly precise decisions about where to invest.',
    },
    {
      type: 'paragraph',
      text: 'The simplest version of this measurement: create a tagging system in your CMS and CRM that labels whether each piece of content was paid-validated before publication. After 12 months, compare the traffic and lead generation of paid-validated content versus non-validated content. The differential will almost always justify building the integration more formally.',
    },
  ],
}
