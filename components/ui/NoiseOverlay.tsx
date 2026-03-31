'use client'

/**
 * NoiseOverlay — subtle animated film grain over the entire viewport.
 *
 * Uses an SVG feTurbulence filter inlined as a data-URI background.
 * The animation shifts background-position to create a living grain.
 * Renders at 0.018 opacity — barely perceptible but adds analog texture
 * to the dark surfaces, making the site feel less "flat CSS".
 *
 * Fixed position, covers the full viewport, pointer-events: none.
 * Costs nearly nothing in GPU/CPU — single composited layer.
 */
export default function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
      style={{
        opacity: 0.018,
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        backgroundRepeat: 'repeat',
        backgroundSize: '180px 180px',
        animation: 'grainShift 0.5s steps(3) infinite',
      }}
    />
  )
}
