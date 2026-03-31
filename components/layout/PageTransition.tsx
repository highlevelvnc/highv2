'use client'

import { type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

/**
 * PageTransition — cinematic blur + depth route transition.
 *
 * Enter: page rises from below with a camera-focus blur dissolve.
 * Exit:  page floats slightly upward while blurring out.
 *
 * The blur-dissolve creates a "depth-of-field shift" feeling —
 * as if the camera is re-focusing on a new layer of the scene.
 *
 * AnimatePresence initial={false} prevents the enter animation
 * on the very first page load (hero handles its own entrance).
 * Subsequent navigations get the full transition.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 14, filter: 'blur(5px)' }}
        animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
        exit={{
          opacity: 0,
          y: -6,
          filter: 'blur(2px)',
          transition: { duration: 0.2, ease: [0.65, 0, 0.35, 1] },
        }}
        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
