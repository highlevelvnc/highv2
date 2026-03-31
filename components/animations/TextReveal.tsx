'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TextRevealProps {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  delay?: number
  stagger?: number
  once?: boolean
}

/**
 * Reveals text word-by-word with a clip/mask animation.
 * Each word slides up from behind an invisible mask.
 * Accepts only string children for word-splitting.
 */
export default function TextReveal({
  children,
  className,
  as: Tag = 'h2',
  delay = 0,
  stagger = 0.08,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, {
    once,
    amount: 0.3,
  })

  const words = children.split(' ')

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement>}
      className={cn('flex flex-wrap gap-x-[0.25em] gap-y-0', className)}
      aria-label={children}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="overflow-hidden leading-[1.15] inline-block"
          aria-hidden="true"
        >
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={
              isInView
                ? { y: '0%', opacity: 1 }
                : { y: '110%', opacity: 0 }
            }
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * stagger,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
