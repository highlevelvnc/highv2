'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { cn, prefersReducedMotion } from '@/lib/utils'

export interface CountUpProps {
  /** Target number to count to */
  to: number
  /** Starting value (default 0) */
  from?: number
  /** Animation duration in ms (default 1800) */
  duration?: number
  /** String prepended to the number, e.g. "+" or "€" */
  prefix?: string
  /** String appended to the number, e.g. "%" or "M+" */
  suffix?: string
  /** Decimal places to display (default 0) */
  decimals?: number
  className?: string
}

/**
 * Animates a number from `from` to `to` when it enters the viewport.
 * Respects prefers-reduced-motion — shows final value immediately if set.
 * Uses requestAnimationFrame with an ease-out-cubic curve.
 */
export default function CountUp({
  to,
  from = 0,
  duration = 1800,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
}: CountUpProps) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const rafRef = useRef<number>(0)
  const isInView = useInView(spanRef as React.RefObject<Element>, {
    once: true,
    amount: 0.8,
  })
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!isInView) return

    if (prefersReducedMotion()) {
      setValue(to)
      return
    }

    const start = performance.now()
    const range = to - from

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(from + range * eased)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setValue(to) // pin to exact final value
      }
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isInView, from, to, duration])

  return (
    <span ref={spanRef} className={cn(className)} aria-live="off">
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
