'use client'

/**
 * HeroParticles — React Three Fiber particle field for hero section.
 *
 * Features:
 *  - 90 particles: ~85% small dots + ~15% larger "node" anchors
 *  - Custom GLSL shader: soft glowing discs, additive blending (real glow effect)
 *  - Per-particle size attribute for size variation
 *  - Mouse-reactive: particles within interaction radius are attracted toward cursor
 *  - Connection lines between nearby particles (network/energy feel)
 *  - 1-second fade-in via uFadeIn uniform
 *  - Visibility API pause (stops animating when tab is hidden)
 *  - Reduced-motion: component not rendered (caller's responsibility)
 *
 * mouseRef: { x, y } in NDC space (-1..1), updated by HeroBackground
 */

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/* ── Constants ─────────────────────────────────────────────────── */
const PARTICLE_COUNT = 90
const MAX_LINE_PAIRS = PARTICLE_COUNT * (PARTICLE_COUNT - 1) // upper bound (actual max = n*(n-1)/2 ≈ 4005)
const LINE_BUF_FLOATS = MAX_LINE_PAIRS * 6  // 6 floats per line segment

/* ── GLSL Shaders ──────────────────────────────────────────────── */
const VERT = /* glsl */ `
  attribute float aSize;
  attribute float aBaseOpacity;
  uniform float uFadeIn;
  uniform float uTime;
  varying float vOpacity;

  void main() {
    float breathe = sin(uTime * 0.6 + position.x * 2.5 + position.y * 1.8) * 0.1 + 0.9;
    vOpacity = aBaseOpacity * breathe * uFadeIn;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize;
    gl_Position = projectionMatrix * mvPosition;
  }
`

const FRAG = /* glsl */ `
  precision highp float;
  varying float vOpacity;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv);
    if (dist > 0.5) discard;

    float core = smoothstep(0.12, 0.0, dist);
    float halo = smoothstep(0.5, 0.06, dist) * 0.35;
    float alpha = (core + halo) * vOpacity;

    float t = clamp(dist * 2.2, 0.0, 1.0);
    vec3 purple = vec3(0.424, 0.227, 1.0);
    vec3 blue   = vec3(0.231, 0.510, 0.961);
    vec3 col    = mix(purple, blue, t);

    gl_FragColor = vec4(col, alpha);
  }
`

/* ── ParticleSystem (renders inside Canvas) ────────────────────── */
interface PSProps {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>
}

function ParticleSystem({ mouseRef }: PSProps) {
  const { viewport } = useThree()

  /* ── Mutable arrays (survive re-renders, mutated each frame) ── */
  const posArr    = useRef(new Float32Array(PARTICLE_COUNT * 3))
  const velArr    = useRef(new Float32Array(PARTICLE_COUNT * 3))
  const opacArr   = useRef(new Float32Array(PARTICLE_COUNT))
  const sizeArr   = useRef(new Float32Array(PARTICLE_COUNT))
  const lineBuf   = useRef(new Float32Array(LINE_BUF_FLOATS))

  /* ── Refs to BufferAttributes so we can flip needsUpdate ── */
  const ptPosBA   = useRef<THREE.BufferAttribute | null>(null)
  const lnPosBA   = useRef<THREE.BufferAttribute | null>(null)

  /* ── Control refs ── */
  const initialized = useRef(false)
  const pausedRef   = useRef(false)
  const fadeRef     = useRef(0)

  /* ── Geometry (created once) ── */
  const { ptGeo, lnGeo } = useMemo(() => {
    const ptPos = new THREE.BufferAttribute(posArr.current, 3)
    ptPos.setUsage(THREE.DynamicDrawUsage)
    ptPosBA.current = ptPos

    const ptOpac = new THREE.BufferAttribute(opacArr.current, 1)
    const ptSize = new THREE.BufferAttribute(sizeArr.current, 1)

    const ptGeo = new THREE.BufferGeometry()
    ptGeo.setAttribute('position', ptPos)
    ptGeo.setAttribute('aBaseOpacity', ptOpac)
    ptGeo.setAttribute('aSize', ptSize)

    const lnPos = new THREE.BufferAttribute(lineBuf.current, 3)
    lnPos.setUsage(THREE.DynamicDrawUsage)
    lnPosBA.current = lnPos

    const lnGeo = new THREE.BufferGeometry()
    lnGeo.setAttribute('position', lnPos)
    lnGeo.setDrawRange(0, 0)

    return { ptGeo, lnGeo }
  }, [])

  /* ── ShaderMaterial ── */
  const ptMat = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      uFadeIn: { value: 0 },
      uTime:   { value: 0 },
    },
    vertexShader: VERT,
    fragmentShader: FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }), [])

  const lnMat = useMemo(() => new THREE.LineBasicMaterial({
    color: new THREE.Color(0.424, 0.227, 1.0),
    transparent: true,
    opacity: 0.16,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }), [])

  /* ── Visibility API — pause when tab hidden ── */
  useEffect(() => {
    const onVis = () => { pausedRef.current = document.hidden }
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  /* ── Frame loop ── */
  useFrame((state) => {
    if (pausedRef.current) return

    const vw = viewport.width
    const vh = viewport.height

    /* Initialize particle positions once viewport is available */
    if (!initialized.current && vw > 0) {
      const pos  = posArr.current
      const vel  = velArr.current
      const opac = opacArr.current
      const sz   = sizeArr.current
      const speed = Math.min(vw, vh) * 0.0025

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        pos[i * 3 + 0] = (Math.random() - 0.5) * vw * 1.15
        pos[i * 3 + 1] = (Math.random() - 0.5) * vh * 1.15
        pos[i * 3 + 2] = 0

        vel[i * 3 + 0] = (Math.random() - 0.5) * speed
        vel[i * 3 + 1] = (Math.random() - 0.5) * speed
        vel[i * 3 + 2] = 0

        const isNode = Math.random() < 0.13
        sz[i]   = isNode ? 10 + Math.random() * 8 : 3 + Math.random() * 4
        opac[i] = isNode ? 0.55 + Math.random() * 0.3 : 0.18 + Math.random() * 0.25
      }

      if (ptPosBA.current) ptPosBA.current.needsUpdate = true
      ptGeo.attributes.aBaseOpacity.needsUpdate = true
      ptGeo.attributes.aSize.needsUpdate = true

      initialized.current = true
    }

    if (!initialized.current) return

    /* Fade in over ~1.2s */
    if (fadeRef.current < 1) {
      fadeRef.current = Math.min(1, fadeRef.current + 0.014)
      ptMat.uniforms.uFadeIn.value = fadeRef.current
    }
    ptMat.uniforms.uTime.value = state.clock.elapsedTime

    const pos  = posArr.current
    const vel  = velArr.current
    const hw   = vw / 2
    const hh   = vh / 2

    /* Mouse in world space */
    const mx = mouseRef.current.x * hw
    const my = mouseRef.current.y * hh
    const interactR = Math.min(vw, vh) * 0.28
    const interactRSq = interactR * interactR

    /* Update positions */
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3
      const dx = mx - pos[ix]
      const dy = my - pos[ix + 1]
      const dSq = dx * dx + dy * dy

      if (dSq < interactRSq && dSq > 0.0001) {
        const f = 0.0003
        vel[ix]     += dx * f
        vel[ix + 1] += dy * f
      }

      vel[ix]     *= 0.982
      vel[ix + 1] *= 0.982

      pos[ix]     += vel[ix]
      pos[ix + 1] += vel[ix + 1]

      const bw = hw * 1.25
      const bh = hh * 1.25
      if (pos[ix]     >  bw) { vel[ix]     *= -0.85; pos[ix]     =  bw }
      if (pos[ix]     < -bw) { vel[ix]     *= -0.85; pos[ix]     = -bw }
      if (pos[ix + 1] >  bh) { vel[ix + 1] *= -0.85; pos[ix + 1] =  bh }
      if (pos[ix + 1] < -bh) { vel[ix + 1] *= -0.85; pos[ix + 1] = -bh }
    }

    if (ptPosBA.current) ptPosBA.current.needsUpdate = true

    /* Build connection lines */
    const lp      = lineBuf.current
    let   li      = 0
    const connD   = Math.min(vw, vh) * 0.22

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx   = pos[i * 3] - pos[j * 3]
        const dy   = pos[i * 3 + 1] - pos[j * 3 + 1]
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < connD && li + 6 <= LINE_BUF_FLOATS) {
          lp[li++] = pos[i * 3];     lp[li++] = pos[i * 3 + 1]; lp[li++] = 0
          lp[li++] = pos[j * 3];     lp[li++] = pos[j * 3 + 1]; lp[li++] = 0
        }
      }
    }

    lnGeo.setDrawRange(0, li / 3)
    if (lnPosBA.current) lnPosBA.current.needsUpdate = true
  })

  return (
    <>
      <points geometry={ptGeo} material={ptMat} />
      <lineSegments geometry={lnGeo} material={lnMat} />
    </>
  )
}

/* ── Canvas wrapper (exported, dynamically imported) ───────────── */
interface HeroParticlesProps {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>
}

export default function HeroParticles({ mouseRef }: HeroParticlesProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 100 }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      dpr={[1, 1.5]}
    >
      <ParticleSystem mouseRef={mouseRef} />
    </Canvas>
  )
}
