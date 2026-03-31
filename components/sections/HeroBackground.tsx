'use client'

import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '@/lib/utils'

/* ─── Particle Types ─────────────────────────────────────────── */
interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

/* ─── Particle Canvas (Desktop Only) ────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    if (prefersReducedMotion()) return

    /* ── Setup ── */
    const PARTICLE_COUNT = 80
    const CONNECTION_DIST = 140
    const ACCENT_R = 108
    const ACCENT_G = 58
    const ACCENT_B = 255

    let animId: number
    let particles: Particle[] = []
    let w = 0
    let h = 0

    function resize() {
      w = canvas!.offsetWidth
      h = canvas!.offsetHeight
      canvas!.width = w
      canvas!.height = h
    }

    function createParticle(): Particle {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      }
    }

    function init() {
      resize()
      particles = Array.from({ length: PARTICLE_COUNT }, createParticle)
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h)

      /* ── Update positions ── */
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }

      /* ── Draw connections ── */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.12
            ctx!.beginPath()
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            ctx!.strokeStyle = `rgba(${ACCENT_R},${ACCENT_G},${ACCENT_B},${alpha})`
            ctx!.lineWidth = 0.7
            ctx!.stroke()
          }
        }
      }

      /* ── Draw particles ── */
      for (const p of particles) {
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${ACCENT_R},${ACCENT_G},${ACCENT_B},${p.opacity})`
        ctx!.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    /* ── Visibility API — pause when tab is hidden ── */
    function handleVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(animId)
      } else {
        animId = requestAnimationFrame(draw)
      }
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    document.addEventListener('visibilitychange', handleVisibility)
    init()
    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      resizeObserver.disconnect()
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

/* ─── Hero Background Component ──────────────────────────────── */
export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* ── Base gradient (always rendered) ── */}
      <div className="absolute inset-0 bg-bg-primary" />

      {/* ── Radial glow at top center ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,58,255,0.18) 0%, transparent 65%)',
        }}
      />

      {/* ── Secondary glow (subtle blue offset) ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 70% 30%, rgba(59,130,246,0.06) 0%, transparent 60%)',
        }}
      />

      {/* ── Subtle dot grid pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Canvas particles (hidden on mobile via CSS) ── */}
      <div className="absolute inset-0 hidden md:block">
        <ParticleCanvas />
      </div>

      {/* ── Bottom fade-out to next section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)',
        }}
      />
    </div>
  )
}
