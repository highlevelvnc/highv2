'use client'

/**
 * CustomCursor — two-layer premium cursor enhancement.
 *
 * Layer 1: Inner dot — 6px solid fill, follows cursor exactly (no lag).
 *          Scales to 0 on pointer elements (cursor takes over the ring).
 *
 * Layer 2: Outer ring — spring-lagged orbit. 32px default, 44px on pointers.
 *          Glow (box-shadow) on hover state.
 *
 * Magnetic effect: elements with [data-magnetic] attribute attract the outer
 * ring 35% toward their center. Creates a satisfying gravitational pull on CTAs.
 *
 * Guards:
 *  - fine-pointer only (mouse devices)
 *  - prefers-reduced-motion: disabled entirely
 *  - native cursor preserved (cursor: auto everywhere)
 *  - first-move snap prevents spring-from-offscreen flash
 */

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { isBrowser, prefersReducedMotion } from '@/lib/utils'

const RING_DEFAULT = 28
const RING_POINTER = 42

export default function CustomCursor() {
  const [visible,   setVisible]   = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  /* ── Exact cursor position (no lag) ── */
  const dotX = useMotionValue(-200)
  const dotY = useMotionValue(-200)

  /* ── Spring ring (lagged) ── */
  const rawX = useMotionValue(-200)
  const rawY = useMotionValue(-200)
  const ringX = useSpring(rawX, { stiffness: 180, damping: 24, mass: 0.5 })
  const ringY = useSpring(rawY, { stiffness: 180, damping: 24, mass: 0.5 })

  /* ── Magnetic target ── */
  const magnetRect = useRef<DOMRect | null>(null)

  useEffect(() => {
    if (!isBrowser) return
    if (prefersReducedMotion()) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => {
      const cx = e.clientX
      const cy = e.clientY

      /* Dot follows exactly */
      dotX.set(cx)
      dotY.set(cy)

      /* Check for magnetic element */
      const el = (e.target as HTMLElement).closest('[data-magnetic]')
      if (el) {
        magnetRect.current = (el as HTMLElement).getBoundingClientRect()
      } else {
        magnetRect.current = null
      }

      if (magnetRect.current) {
        const r   = magnetRect.current
        const ecx = r.left + r.width  / 2
        const ecy = r.top  + r.height / 2
        const str = 0.35
        rawX.set(cx + (ecx - cx) * str)
        rawY.set(cy + (ecy - cy) * str)
      } else {
        rawX.set(cx)
        rawY.set(cy)
      }

      if (!visible) {
        /* Snap ring to exact position before revealing */
        ringX.jump(cx)
        ringY.jump(cy)
        setVisible(true)
      }
    }

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setIsPointer(
        !!el.closest('a, button, [role="button"], label, [tabindex="0"], [data-magnetic]'),
      )
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [dotX, dotY, rawX, rawY, ringX, ringY, visible])

  if (!visible) return null

  return (
    <>
      {/* ── Inner dot: exact follow, scales out on pointer ── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-accent-primary"
        style={{
          translateX: '-50%',
          translateY: '-50%',
          x: dotX,
          y: dotY,
        }}
        animate={{
          width:   isPointer ? 0  : 6,
          height:  isPointer ? 0  : 6,
          opacity: isPointer ? 0  : 0.9,
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      />

      {/* ── Outer ring: spring lag, glow on hover ── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-accent-primary"
        style={{
          translateX: '-50%',
          translateY: '-50%',
          x: ringX,
          y: ringY,
        }}
        animate={{
          width:     isPointer ? RING_POINTER : RING_DEFAULT,
          height:    isPointer ? RING_POINTER : RING_DEFAULT,
          opacity:   isPointer ? 0.65 : 0.28,
          boxShadow: isPointer
            ? '0 0 12px 2px rgba(108,58,255,0.35), inset 0 0 8px 1px rgba(108,58,255,0.12)'
            : '0 0 0px 0px transparent',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </>
  )
}
