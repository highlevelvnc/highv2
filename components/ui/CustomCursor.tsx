'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { isBrowser, prefersReducedMotion } from '@/lib/utils'

/**
 * Minimal cursor enhancement — a spring-lagged ring that orbits the native cursor.
 * The native cursor is preserved (no cursor:none), so all cursor states
 * (pointer, text, default, resize) remain accessible.
 *
 * Only renders on fine-pointer (mouse) devices.
 * Snaps to cursor position on first move to avoid a spring-from-offscreen flash.
 * Disabled entirely on prefers-reduced-motion.
 */
export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)

  // Spring physics — slight lag creates the "orbiting" quality
  const ringX = useSpring(mx, { stiffness: 200, damping: 28, mass: 0.4 })
  const ringY = useSpring(my, { stiffness: 200, damping: 28, mass: 0.4 })

  useEffect(() => {
    if (!isBrowser) return
    if (prefersReducedMotion()) return

    // Touch / coarse-pointer devices: skip entirely
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)

      if (!visible) {
        // Snap ring to exact cursor position before revealing
        // to avoid the spring animating in from off-screen
        ringX.jump(e.clientX)
        ringY.jump(e.clientY)
        setVisible(true)
      }
    }

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setIsPointer(
        !!el.closest('a, button, [role="button"], label, [tabindex="0"]'),
      )
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [mx, my, ringX, ringY, visible])

  if (!visible) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-accent-primary"
      style={{
        translateX: '-50%',
        translateY: '-50%',
        x: ringX,
        y: ringY,
      }}
      animate={{
        width: isPointer ? 38 : 28,
        height: isPointer ? 38 : 28,
        opacity: isPointer ? 0.5 : 0.22,
      }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    />
  )
}
