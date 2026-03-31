import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import PageTransition from '@/components/layout/PageTransition'
import CustomCursor from '@/components/ui/CustomCursor'
import { SITE_URL } from '@/lib/config/site'

/* ─── Fonts ──────────────────────────────────────────────────── */
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500'],
})

/* ─── Metadata ──────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'High Level — Digital Growth Infrastructure',
    template: '%s | High Level',
  },
  description:
    'We engineer digital growth. AI systems, high-conversion platforms, automation that scales. Building the digital infrastructure that turns businesses into market leaders.',
  keywords: [
    'digital marketing',
    'AI automation',
    'CRM implementation',
    'growth engineering',
    'high-conversion websites',
    'SEO',
    'paid traffic',
    'Portugal',
    'Europe',
  ],
  authors: [{ name: 'High Level' }],
  creator: 'High Level',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    alternateLocale: 'en_GB',
    title: 'High Level — Digital Growth Infrastructure',
    description:
      'We engineer digital growth. AI systems, high-conversion platforms, automation that scales.',
    siteName: 'High Level',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High Level — Digital Growth Infrastructure',
    description: 'We engineer digital growth.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#050508',
  width: 'device-width',
  initialScale: 1,
}

/* ─── Root Layout ────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        {/* Custom cursor ring — renders only on fine-pointer devices */}
        <CustomCursor />

        <SiteHeader />

        {/* Page transition wrapper — fade + slight upward motion on route change */}
        <main className="relative">
          <PageTransition>{children}</PageTransition>
        </main>

        <SiteFooter />
      </body>
    </html>
  )
}
