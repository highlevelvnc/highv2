'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * ScrollProgress — thin gradient progress bar at the top of the viewport.
 *
 * Shows how far the user has scrolled down the page.
 * Uses Framer Motion's useScroll for accurate progress tracking
 * and useSpring for a smooth, non-jittery animation.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #6C3AFF 0%, #3B82F6 50%, #10B981 100%)',
      }}
      aria-hidden="true"
    />
  )
}
