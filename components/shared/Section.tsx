import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

type BgVariant = 'primary' | 'secondary' | 'elevated'

interface SectionProps {
  children: React.ReactNode
  className?: string
  bg?: BgVariant
  id?: string
  as?: React.ElementType
}

const bgMap: Record<BgVariant, string> = {
  primary: 'bg-bg-primary',
  secondary: 'bg-bg-secondary',
  elevated: 'bg-bg-elevated',
}

/**
 * Section wrapper with consistent vertical padding and background variants.
 * Accepts a ref for scroll-tracking hooks (e.g. Framer Motion useScroll).
 */
const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { children, className, bg = 'primary', id, as = 'section' },
  ref,
) {
  return React.createElement(
    as,
    {
      ref,
      id,
      className: cn('relative section-py overflow-hidden', bgMap[bg], className),
    },
    children,
  )
})

export default Section
