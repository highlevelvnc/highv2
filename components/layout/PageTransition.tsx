'use client'

import { type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

/**
 * PageTransition — cinematic scale + blur + fade route transition.
 *
 * Enter:  Page fades in from below with a camera-focus blur dissolve
 *         and slight scale-up from 0.97 → 1.
 *
 * Exit:   Page scales down slightly (0.98) while fading out with blur,
 *         creating a "camera pulling back" effect before the new page enters.
 *
 * The combined scale + blur creates a depth-of-field shift feeling.
 *
 * AnimatePresence initial={false} prevents enter animation on first load.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{
          opacity: 0,
          y: 20,
          scale: 0.97,
          filter: 'blur(8px)',
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
        }}
        exit={{
          opacity: 0,
          y: -10,
          scale: 0.98,
          filter: 'blur(4px)',
          transition: { duration: 0.25, ease: [0.65, 0, 0.35, 1] },
        }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
