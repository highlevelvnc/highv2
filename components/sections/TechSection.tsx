'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { prefersReducedMotion } from '@/lib/utils'
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '@/lib/motion'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import SectionHeadline from '@/components/shared/SectionHeadline'
import BodyText from '@/components/shared/BodyText'

/* ─────────────────────────────────────────────────────────
   Feature list
───────────────────────────────────────────────────────── */

const features = [
  { label: 'AI-driven content and campaign intelligence', nodeId: 'ai' },
  { label: 'CRM architecture and customer data pipelines', nodeId: 'crm' },
  { label: 'SEO and organic authority infrastructure', nodeId: 'seo' },
  { label: 'Web platform and conversion optimisation', nodeId: 'web' },
  { label: 'Marketing automation and nurture logic', nodeId: 'automation' },
  { label: 'Performance attribution and revenue reporting', nodeId: 'analytics' },
]

/* ─────────────────────────────────────────────────────────
   Diagram nodes
   6 satellites at r=155 from center (240,240)
───────────────────────────────────────────────────────── */

interface DiagramNode {
  id: string
  label: string
  sublabel: string
  x: number
  y: number
  delay: number
  flowDur: string
}

const CENTER = { x: 240, y: 240 }

const diagramNodes: DiagramNode[] = [
  { id: 'seo',        label: 'SEO',      sublabel: 'Organic',     x: 240, y: 85,  delay: 0.1, flowDur: '2.5s' },
  { id: 'crm',        label: 'CRM',      sublabel: 'Customer',    x: 374, y: 162, delay: 0.2, flowDur: '2.2s' },
  { id: 'web',        label: 'Web',      sublabel: 'Platform',    x: 374, y: 318, delay: 0.3, flowDur: '2.8s' },
  { id: 'automation', label: 'Flow',     sublabel: 'Automation',  x: 240, y: 395, delay: 0.4, flowDur: '2.4s' },
  { id: 'analytics',  label: 'Data',     sublabel: 'Attribution', x: 106, y: 318, delay: 0.5, flowDur: '2.6s' },
  { id: 'content',    label: 'Content',  sublabel: 'Brand',       x: 106, y: 162, delay: 0.6, flowDur: '2.3s' },
]

/* ─────────────────────────────────────────────────────────
   SVG Diagram — desktop only
───────────────────────────────────────────────────────── */

function TechDiagram() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const reduced = prefersReducedMotion()

  return (
    <div ref={ref} className="relative w-full max-w-[440px] mx-auto" aria-hidden="true">
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="center-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6C3AFF" />
          </radialGradient>

          {/* Paths for animateMotion — defined in defs so they don't render */}
          {diagramNodes.map((node) => (
            <path
              key={`mp-${node.id}`}
              id={`mp-${node.id}`}
              d={`M${CENTER.x},${CENTER.y} L${node.x},${node.y}`}
            />
          ))}
        </defs>

        {/* Connection lines */}
        {diagramNodes.map((node) => (
          <motion.path
            key={`line-${node.id}`}
            d={`M${CENTER.x},${CENTER.y} L${node.x},${node.y}`}
            stroke="rgba(108,58,255,0.2)"
            strokeWidth={1}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.7, delay: node.delay, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}

        {/* Traveling dots */}
        {!reduced &&
          diagramNodes.map((node) => (
            <circle key={`dot-${node.id}`} r={2} fill="#6C3AFF" opacity={0.7}>
              <animateMotion
                dur={node.flowDur}
                repeatCount="indefinite"
                begin={`${node.delay + 0.8}s`}
              >
                {/* eslint-disable-next-line react/no-unknown-property */}
                <mpath href={`#mp-${node.id}`} />
              </animateMotion>
            </circle>
          ))}

        {/* Center pulse ring */}
        {!reduced && (
          <motion.circle
            cx={CENTER.x}
            cy={CENTER.y}
            r={46}
            fill="none"
            stroke="rgba(108,58,255,0.25)"
            strokeWidth={1}
            animate={{ r: [46, 70], opacity: [0.25, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeOut' }}
          />
        )}

        {/* Center node */}
        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={34}
          fill="url(#center-grad)"
          filter="url(#node-glow)"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.text
          x={CENTER.x} y={CENTER.y - 5}
          textAnchor="middle" dominantBaseline="middle"
          fill="white" fontSize={13} fontWeight={700}
          fontFamily="var(--font-space-grotesk), system-ui"
          letterSpacing="-0.02em"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          AI
        </motion.text>
        <motion.text
          x={CENTER.x} y={CENTER.y + 10}
          textAnchor="middle" dominantBaseline="middle"
          fill="rgba(255,255,255,0.55)" fontSize={8}
          fontFamily="var(--font-jetbrains-mono), monospace"
          letterSpacing="0.1em"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          CORE
        </motion.text>

        {/* Satellite nodes */}
        {diagramNodes.map((node) => (
          <g key={`node-${node.id}`}>
            <motion.circle
              cx={node.x} cy={node.y} r={22}
              fill="rgba(18,18,28,0.95)"
              stroke="rgba(108,58,255,0.3)"
              strokeWidth={1}
              filter="url(#node-glow)"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: node.delay + 0.3, ease: [0.16, 1, 0.3, 1] }}
            />

            {!reduced && (
              <motion.circle
                cx={node.x} cy={node.y} r={22}
                fill="none"
                stroke="rgba(108,58,255,0.18)"
                strokeWidth={1}
                animate={{ r: [22, 34], opacity: [0.18, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: node.delay + 1.2, ease: 'easeOut' }}
              />
            )}

            <motion.text
              x={node.x} y={node.y - 3}
              textAnchor="middle" dominantBaseline="middle"
              fill="rgba(245,245,247,0.9)"
              fontSize={9.5} fontWeight={600}
              fontFamily="var(--font-space-grotesk), system-ui"
              letterSpacing="-0.01em"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: node.delay + 0.5 }}
            >
              {node.label}
            </motion.text>
            <motion.text
              x={node.x} y={node.y + 8}
              textAnchor="middle" dominantBaseline="middle"
              fill="rgba(161,161,170,0.65)"
              fontSize={7}
              fontFamily="var(--font-jetbrains-mono), monospace"
              letterSpacing="0.07em"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: node.delay + 0.65 }}
            >
              {node.sublabel}
            </motion.text>
          </g>
        ))}
      </svg>

      {/* Ambient glow behind diagram */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(108,58,255,0.2) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Mobile badge grid — lightweight alternative to SVG
───────────────────────────────────────────────────────── */

function TechBadgeGrid() {
  return (
    <motion.div
      variants={staggerContainer(0.06)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-3 gap-2.5"
      aria-hidden="true"
    >
      {diagramNodes.map((node) => (
        <motion.div
          key={node.id}
          variants={fadeInUp}
          className="flex flex-col items-center rounded-xl border border-border-subtle bg-bg-primary px-3 py-4 text-center"
        >
          <span className="font-display text-[13px] font-semibold text-text-primary">
            {node.label}
          </span>
          <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-text-muted">
            {node.sublabel}
          </span>
        </motion.div>
      ))}
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────── */

export default function TechSection() {
  return (
    <Section bg="elevated" id="technology">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
          {/* Left: text content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionLabel withLine className="mb-5">
              The Engine
            </SectionLabel>

            <SectionHeadline size="lg" gradient className="mb-6">
              Systems that learn,
              <br />
              adapt, and scale.
            </SectionHeadline>

            <BodyText size="lg" muted className="mb-10">
              We build growth infrastructure that compounds. Every channel, tool,
              and workflow is connected — so data flows between them, insights
              surface automatically, and performance improves without doubling
              headcount.
            </BodyText>

            <motion.ul
              variants={staggerContainer(0.07, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-3.5"
            >
              {features.map((f) => (
                <motion.li
                  key={f.nodeId}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-accent-primary"
                    aria-hidden="true"
                  />
                  <span className="font-body text-[15px] leading-relaxed text-text-secondary">
                    {f.label}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: diagram (desktop) / badge grid (mobile) */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center justify-center"
          >
            {/* Desktop SVG diagram */}
            <div className="hidden lg:block w-full">
              <TechDiagram />
            </div>

            {/* Mobile badge grid */}
            <div className="lg:hidden w-full">
              <TechBadgeGrid />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
