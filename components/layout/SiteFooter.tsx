import Link from 'next/link'
import { Linkedin, Instagram, Twitter } from 'lucide-react'
import Container from '@/components/shared/Container'

/* ─── Data ───────────────────────────────────────────────────── */

const serviceLinks = [
  { label: 'Demand Generation', href: '/services/demand-generation' },
  { label: 'Content & SEO', href: '/services/content-seo' },
  { label: 'Brand & Positioning', href: '/services/brand-positioning' },
  { label: 'Growth Infrastructure', href: '/services/growth-infrastructure' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/#process' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

const resourceLinks = [
  { label: 'Growth Diagnostic', href: '/diagnostic' },
  { label: 'Case Studies', href: '/work' },
  { label: 'The Framework', href: '/framework' },
  { label: 'Book a Call', href: '/contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'X / Twitter', href: '#', icon: Twitter },
]

/* ─── Nav column ─────────────────────────────────────────────── */

function FooterCol({
  heading,
  links,
}: {
  heading: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
        {heading}
      </p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-body text-[14px] text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ─── Component ──────────────────────────────────────────────── */

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle bg-bg-primary">
      <Container>
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-10 lg:py-20">
          {/* Brand column */}
          <div className="space-y-5">
            <Link
              href="/"
              aria-label="High Level — Home"
              className="inline-block"
            >
              <span className="font-display text-xl font-bold tracking-[-0.02em] text-text-primary">
                High{' '}
                <span className="bg-accent-gradient bg-clip-text text-transparent">
                  Level
                </span>
              </span>
            </Link>

            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
              Digital Growth Infrastructure
            </p>

            <p className="max-w-[280px] font-body text-[14px] leading-relaxed text-text-muted">
              Building the AI-powered systems, platforms, and strategies that
              turn ambitious businesses into category leaders.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 pt-1">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-text-muted transition-colors duration-200 hover:text-text-primary"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <FooterCol heading="Services" links={serviceLinks} />
          <FooterCol heading="Company" links={companyLinks} />
          <FooterCol heading="Resources" links={resourceLinks} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border-subtle py-6 sm:flex-row">
          <p className="font-body text-[13px] text-text-muted">
            &copy; {year} High Level. Portugal &middot; Europe.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="font-body text-[13px] text-text-muted transition-colors duration-200 hover:text-text-secondary"
            >
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-border-hover" aria-hidden="true" />
            <Link
              href="/terms"
              className="font-body text-[13px] text-text-muted transition-colors duration-200 hover:text-text-secondary"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
