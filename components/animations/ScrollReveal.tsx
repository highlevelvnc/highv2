'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp } from '@/lib/motion'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
  once?: boolean
  threshold?: number
}

/**
 * Wraps children in a scroll-triggered reveal animation.
 * Uses Framer Motion's useInView for performant intersection detection.
 * Respects prefers-reduced-motion automatically via Framer Motion.
 */
export default function ScrollReveal({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
  once = true,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const mergedVariants: Variants = delay
    ? {
        hidden: variants.hidden,
        visible: {
          ...(variants.visible as object),
          transition: {
            ...(typeof variants.visible === 'object' &&
            'transition' in variants.visible
              ? (variants.visible.transition as object)
              : {}),
            delay,
          },
        },
      }
    : variants

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={mergedVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
