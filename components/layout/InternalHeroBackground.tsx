/**
 * InternalHeroBackground — shared visual layer for all internal page heroes.
 *
 * Mirrors the homepage HeroBackground layer stack (minus the r3f particles)
 * so every internal page feels part of the same premium visual system.
 *
 * Layer stack (bottom → top):
 *  1. bg-bg-primary base
 *  2. Primary glow — configurable position + color
 *  3. Secondary accent glow — offset for depth
 *  4. Edge vignette — pushes focus inward
 *  5. Dot grid — subtle, consistent with homepage
 *  6. Bottom fade — blends into first content section
 *
 * Usage:
 *   <InternalHeroBackground />                         ← defaults (top-center purple)
 *   <InternalHeroBackground glowAt="15% -5%" />       ← left-anchored
 *   <InternalHeroBackground glowAt="80% 10%" glowColor="rgba(108,58,255,0.22)" />
 */

interface InternalHeroBackgroundProps {
  /** CSS position of primary glow, e.g. "40% -5%", "80% 20%" */
  glowAt?: string
  /** CSS rgba color for primary glow */
  glowColor?: string
  /** CSS position of secondary glow */
  secondaryAt?: string
  /** CSS rgba color for secondary glow */
  secondaryColor?: string
}

export default function InternalHeroBackground({
  glowAt      = '40% -5%',
  glowColor   = 'rgba(108,58,255,0.20)',
  secondaryAt = '78% 40%',
  secondaryColor = 'rgba(59,130,246,0.07)',
}: InternalHeroBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* 1. Base */}
      <div className="absolute inset-0 bg-bg-primary" />

      {/* 2. Primary glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 85% 65% at ${glowAt}, ${glowColor} 0%, transparent 65%)`,
        }}
      />

      {/* 3. Secondary accent */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 45% 40% at ${secondaryAt}, ${secondaryColor} 0%, transparent 55%)`,
        }}
      />

      {/* 4. Edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 35%, rgba(5,5,8,0.5) 100%)',
        }}
      />

      {/* 5. Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* 6. Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)',
        }}
      />
    </div>
  )
}
