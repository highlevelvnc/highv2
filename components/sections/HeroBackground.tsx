'use client'

/**
 * HeroBackground — the full-bleed visual layer beneath hero content.
 *
 * Layer stack (bottom → top):
 *  1. Solid bg-primary base
 *  2. Multi-stop radial glow: primary purple at top-center (elevated from 18% → 32%)
 *  3. Secondary purple glow: shifted left, softer
 *  4. Blue accent glow: right offset
 *  5. Vignette rim: darkens edges for depth
 *  6. Dot grid pattern
 *  7. R3F particle field (desktop only, skip on reduced-motion)
 *  8. Bottom fade-out into next section
 */

import { useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { prefersReducedMotion } from '@/lib/utils'

/* ── Lazy-load the heavy Three.js canvas — no SSR ── */
const HeroParticles = dynamic(() => import('./HeroParticles'), {
  ssr: false,
  loading: () => null,
})

export default function HeroBackground() {
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const skipParticles = useRef(false)

  /* Track mouse position as NDC (-1..1) for the particle system */
  useEffect(() => {
    skipParticles.current = prefersReducedMotion()
    if (skipParticles.current) return

    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x:  (e.clientX / window.innerWidth)  * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">

      {/* ── 1. Base ── */}
      <div className="absolute inset-0 bg-bg-primary" />

      {/* ── 2. Primary glow — top center, large, vivid ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% -5%, rgba(108,58,255,0.32) 0%, rgba(108,58,255,0.08) 50%, transparent 70%)',
        }}
      />

      {/* ── 3. Secondary purple — upper-left offset ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 20% 10%, rgba(108,58,255,0.12) 0%, transparent 60%)',
        }}
      />

      {/* ── 4. Blue accent — right-center ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 78% 35%, rgba(59,130,246,0.09) 0%, transparent 60%)',
        }}
      />

      {/* ── 5. Edge vignette — creates depth / focus on center ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(5,5,8,0.55) 100%)',
        }}
      />

      {/* ── 6. Dot grid pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* ── 7. R3F particle field (desktop only, not on reduced-motion) ── */}
      <div className="absolute inset-0 hidden md:block">
        <HeroParticles mouseRef={mouseRef} />
      </div>

      {/* ── 8. Bottom fade — blends into next section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background:
            'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)',
        }}
      />
    </div>
  )
}
