'use client'

import {
  useRef,
  useCallback,
  type ReactNode,
  type CSSProperties,
} from 'react'
import { motion, useMotionValue, useSpring, type Variants } from 'framer-motion'

/* ─── Config ─────────────────────────────────────────────── */

const SPRING = { stiffness: 300, damping: 30, mass: 0.5 }
const MAX_TILT = 8 // degrees

interface TiltCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  /** Max tilt angle in degrees. Default 8 */
  tilt?: number
  /** Show specular highlight that follows the mouse. Default true */
  glare?: boolean
  /** Framer Motion variants for entrance animation */
  variants?: Variants
  as?: 'div' | 'article' | 'figure'
}

/**
 * TiltCard — 3D perspective card that follows the mouse.
 *
 * Applies rotateX/rotateY based on mouse position within the card.
 * Includes a specular highlight (glare) that follows the cursor,
 * simulating a glossy surface catching light.
 *
 * Performance: uses CSS transform3d (GPU-composited), no re-renders.
 * The motion values + springs handle interpolation outside React.
 */
export default function TiltCard({
  children,
  className = '',
  style,
  tilt = MAX_TILT,
  glare = true,
  variants,
  as = 'div',
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)

  const springRotateX = useSpring(rotateX, SPRING)
  const springRotateY = useSpring(rotateY, SPRING)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width // 0→1
      const y = (e.clientY - rect.top) / rect.height // 0→1

      // Map to tilt degrees (inverted for natural feel)
      rotateX.set((y - 0.5) * -tilt * 2)
      rotateY.set((x - 0.5) * tilt * 2)

      // Glare position
      glareX.set(x * 100)
      glareY.set(y * 100)
    },
    [tilt, rotateX, rotateY, glareX, glareY],
  )

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
    glareX.set(50)
    glareY.set(50)
  }, [rotateX, rotateY, glareX, glareY])

  const MotionTag = motion[as] as typeof motion.div

  return (
    <div className="perspective-[800px]" style={{ perspective: '800px' }}>
      <MotionTag
        ref={ref}
        className={className}
        style={{
          ...style,
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
        }}
        variants={variants}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}

        {/* Specular glare highlight */}
        {glare && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle 250px at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.06) 0%, transparent 70%)`,
            }}
            aria-hidden="true"
          />
        )}
      </MotionTag>
    </div>
  )
}
