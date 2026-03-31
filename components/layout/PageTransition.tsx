'use client'

import { type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

/**
 * Wraps page content with a subtle fade + upward reveal on route change.
 *
 * AnimatePresence initial={false} prevents the enter animation from
 * running on the very first page load — the hero already has its own
 * entrance sequence. Subsequent navigations get the transition.
 *
 * Exit animation is intentionally simpler (fade only) to avoid fighting
 * with Next.js App Router's page swap timing.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
