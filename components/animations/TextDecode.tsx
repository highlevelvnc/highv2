'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'

/* ─── Config ─────────────────────────────────────────────── */

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
const FRAME_DURATION = 30 // ms per scramble frame
const STAGGER_PER_CHAR = 40 // ms delay between characters starting to resolve

interface TextDecodeProps {
  /** The text to reveal */
  text: string
  /** Delay before the animation starts (ms). Default 0 */
  delay?: number
  /** Additional className for the container */
  className?: string
  /** Whether to trigger only once. Default true */
  once?: boolean
  /** Style applied to each character span */
  charStyle?: React.CSSProperties
}

/**
 * TextDecode — characters scramble through random glyphs before settling.
 *
 * Creates a terminal/hacker "decoding" effect. Each character starts as
 * a random glyph, cycles through several random characters, then lands
 * on the correct one. Characters resolve left-to-right with a stagger.
 *
 * Spaces are preserved and never scrambled.
 * Respects prefers-reduced-motion (shows text immediately).
 */
export default function TextDecode({
  text,
  delay = 0,
  className = '',
  once = true,
  charStyle,
}: TextDecodeProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once, amount: 0.5 })
  const [displayChars, setDisplayChars] = useState<string[]>(() =>
    text.split('').map((c) => (c === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])),
  )
  const [resolved, setResolved] = useState(false)
  const frameRef = useRef<number>(0)

  const animate = useCallback(() => {
    const chars = text.split('')
    const totalChars = chars.length
    let frame = 0
    const framesPerChar = Math.ceil(STAGGER_PER_CHAR / FRAME_DURATION)
    const totalFrames = totalChars * framesPerChar + 8 // extra frames for last char scramble

    const tick = () => {
      frame++
      const newDisplay = chars.map((char, i) => {
        if (char === ' ') return ' '
        const charResolveFrame = i * framesPerChar
        if (frame >= charResolveFrame + 8) {
          return char // resolved
        }
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      })
      setDisplayChars(newDisplay)

      if (frame < totalFrames) {
        frameRef.current = window.setTimeout(tick, FRAME_DURATION)
      } else {
        setDisplayChars(chars)
        setResolved(true)
      }
    }

    frameRef.current = window.setTimeout(tick, FRAME_DURATION)
  }, [text])

  useEffect(() => {
    if (!isInView) return

    /* Respect reduced motion */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayChars(text.split(''))
      setResolved(true)
      return
    }

    const delayTimer = window.setTimeout(animate, delay)
    return () => {
      clearTimeout(delayTimer)
      clearTimeout(frameRef.current)
    }
  }, [isInView, delay, animate, text])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
      aria-label={text}
    >
      {displayChars.map((char, i) => (
        <span
          key={i}
          style={{
            ...charStyle,
            display: 'inline-block',
            minWidth: char === ' ' ? '0.22em' : undefined,
            opacity: resolved || text[i] === char ? 1 : 0.5,
            transition: 'opacity 0.15s ease',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </motion.span>
  )
}
