'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

/* ─── Nav Links ──────────────────────────────────────────────── */
const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
] as const

/* ─── Mobile Menu Variants ───────────────────────────────────── */
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const menuItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.06 * i },
  }),
  exit: { opacity: 0, transition: { duration: 0.12 } },
}

/* ─── Component ──────────────────────────────────────────────── */
export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollY = useRef(0)
  const pathname = usePathname()

  /* ── Scroll detection: background + hide/show ── */
  const handleScroll = useCallback(() => {
    const y = window.scrollY
    const prev = lastScrollY.current

    setIsScrolled(y > 72)

    if (y < 80) {
      // Always visible at the very top
      setIsHidden(false)
    } else if (y > prev + 6) {
      // Scrolling down — hide
      setIsHidden(true)
    } else if (y < prev - 6) {
      // Scrolling up — reveal
      setIsHidden(false)
    }

    lastScrollY.current = y
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  /* ── Body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ─── Header ──────────────────────────────────────────── */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          /* Background transitions when scrolled */
          'transition-[background-color,border-color,backdrop-filter,transform] duration-300 ease-out',
          isScrolled || mobileOpen
            ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-border-subtle'
            : 'bg-transparent border-b border-transparent',
          /* Hide on scroll-down, but never hide when mobile menu is open */
          isHidden && !mobileOpen ? '-translate-y-full' : 'translate-y-0',
        )}
      >
        <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-12 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group focus-visible:outline-none"
            aria-label="High Level — Home"
          >
            <span className="font-display font-bold text-xl text-text-primary tracking-[-0.02em] transition-opacity duration-200 group-hover:opacity-80">
              High{' '}
              <span className="text-gradient">Level</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-body text-sm font-medium transition-colors duration-200 relative',
                  'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px]',
                  'after:rounded-full after:bg-accent-primary after:scale-x-0',
                  'after:transition-transform after:duration-300 after:origin-left',
                  'hover:after:scale-x-100',
                  pathname === link.href
                    ? 'text-text-primary after:scale-x-100'
                    : 'text-text-secondary hover:text-text-primary',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">Book a Call</Link>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              'lg:hidden p-2 rounded-md transition-colors duration-200',
              'text-text-secondary hover:text-text-primary',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary',
            )}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* ─── Mobile Menu Overlay ──────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              'fixed inset-0 z-40 lg:hidden',
              'bg-bg-primary/97 backdrop-blur-2xl',
              'flex flex-col pt-[72px]',
            )}
          >
            <nav
              className="flex flex-col items-center justify-center flex-1 gap-1 px-8 pb-12"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'block py-4 font-display font-semibold text-[clamp(24px,6vw,40px)] tracking-[-0.02em]',
                      'transition-colors duration-200',
                      pathname === link.href
                        ? 'text-accent-glow'
                        : 'text-text-secondary hover:text-text-primary',
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                custom={navLinks.length}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full mt-8"
              >
                <Button variant="primary" size="xl" className="w-full" asChild>
                  <Link href="/contact">
                    Book a Call
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </motion.div>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.35 } }}
              exit={{ opacity: 0 }}
              className="pb-8 px-8 text-center"
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-text-muted">
                Portugal · Europe
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
