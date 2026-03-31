'use client'

import { useRef, useEffect, type ReactNode } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
} from 'framer-motion'

interface InfiniteMarqueeProps {
  children: ReactNode
  /** Base speed in px/s. Positive = left, negative = right. Default 40 */
  baseVelocity?: number
  /** How much scroll velocity affects speed. Default 3 */
  velocityFactor?: number
  className?: string
}

/**
 * InfiniteMarquee — seamlessly looping scroll strip that responds to page scroll velocity.
 *
 * When the user scrolls, the marquee speeds up proportionally.
 * When idle, it runs at a calm base speed.
 *
 * Uses Framer Motion's useAnimationFrame for butter-smooth animation.
 * Content is duplicated 4x to ensure no gaps at any viewport width.
 */
export default function InfiniteMarquee({
  children,
  baseVelocity = 40,
  velocityFactor = 3,
  className = '',
}: InfiniteMarqueeProps) {
  const baseX = useMotionValue(0)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentWidth = useRef(0)

  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness: 400,
    damping: 90,
  })
  const velocityMultiplier = useTransform(
    smoothVelocity,
    [-1000, 0, 1000],
    [velocityFactor, 0, -velocityFactor],
  )

  /* Measure content width once */
  useEffect(() => {
    if (wrapperRef.current) {
      // First child group width
      const firstGroup = wrapperRef.current.querySelector('[data-marquee-group]')
      if (firstGroup) {
        contentWidth.current = (firstGroup as HTMLElement).offsetWidth
      }
    }
  }, [])

  useAnimationFrame((_, delta) => {
    if (!contentWidth.current) return

    const moveBy =
      baseVelocity * (delta / 1000) +
      velocityMultiplier.get() * (delta / 1000) * 20

    let newX = baseX.get() + moveBy

    // Seamless loop: reset when one full content width has passed
    if (Math.abs(newX) >= contentWidth.current) {
      newX = newX % contentWidth.current
    }

    baseX.set(newX)
  })

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        ref={wrapperRef}
        className="flex whitespace-nowrap"
        style={{ x: baseX }}
      >
        {/* 4 copies for seamless wrap at any width */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            data-marquee-group
            className="flex shrink-0 items-center gap-x-8 pr-8 sm:gap-x-12 sm:pr-12"
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
