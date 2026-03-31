import type { Metadata } from 'next'
import ContactHero from '@/components/sections/contact/ContactHero'
import ContactOptions from '@/components/sections/contact/ContactOptions'
import ContactForm from '@/components/sections/contact/ContactForm'
import ContactProcess from '@/components/sections/contact/ContactProcess'
import ContactDetails from '@/components/sections/contact/ContactDetails'
import ContactClosing from '@/components/sections/contact/ContactClosing'

export const metadata: Metadata = {
  title: 'Contact — High Level',
  description:
    'Start a conversation with High Level. Tell us about your business, goals, and where you want to be in twelve months. We respond within one business day.',
  openGraph: {
    title: 'Contact — High Level',
    description:
      'Start a conversation with High Level. Tell us about your business, goals, and where you want to be in twelve months.',
  },
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactOptions />
      <ContactForm />
      <ContactProcess />
      <ContactDetails />
      <ContactClosing />
    </>
  )
}
