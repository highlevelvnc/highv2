import type { Variants, Transition } from 'framer-motion'

/* ─── Shared Transitions ─────────────────────────────────────── */
export const easeOutExpo: Transition = {
  ease: [0.16, 1, 0.3, 1],
  duration: 0.8,
}

export const easeInOut: Transition = {
  ease: [0.65, 0, 0.35, 1],
  duration: 0.6,
}

export const spring: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 30,
}

/* ─── Fade Variants ──────────────────────────────────────────── */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

/* ─── Scale Variants ─────────────────────────────────────────── */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

/* ─── Stagger Container ──────────────────────────────────────── */
export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

/* ─── Text Reveal (clip from below) ─────────────────────────── */
export const textReveal: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

/* ─── Hero Entrance Sequence ─────────────────────────────────── */
export const heroLabel: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
  },
}

export const heroHeadline: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.5,
    },
  },
}

export const heroWord: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
}

export const heroSubheadline: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.0 },
  },
}

export const heroCTA: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: 1.2,
    },
  },
}

/* ─── Card Hover ─────────────────────────────────────────────── */
export const cardHover = {
  rest: {
    y: 0,
    boxShadow: '0 0 0 rgba(0,0,0,0)',
    borderColor: 'rgba(255,255,255,0.06)',
  },
  hover: {
    y: -4,
    boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
    borderColor: 'rgba(255,255,255,0.12)',
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
}

/* ─── Line Draw ──────────────────────────────────────────────── */
export const lineGrow: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}
