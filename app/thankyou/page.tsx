import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import MobileStickyBar from '@/components/MobileStickyBar'
import SectionCTA from '@/components/SectionCTA'
import { property } from '@/lib/property'

export const metadata: Metadata = {
  title: `Thank You | ${property.name}`,
  description: 'Thank you for your interest. Our team will be in touch shortly.',
  robots: { index: false, follow: false },
}

export default function ThankYou() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '919898989898'
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '919898989898'

  return (
    <>
      <Navigation waNumber={waNumber} phone={phone} />

      <main>
        <section className="section-padding min-h-[70vh] flex items-center bg-gradient-to-b from-beige/40 to-soft-white">
          <div className="container-max text-center max-w-xl mx-auto">
            <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-green" />
            </div>
            <h1 className="text-4xl font-bold text-dark-text mb-4">Thank You!</h1>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-gray-600 mb-2">
              Your request has been received. Our team will get in touch with you shortly with pricing,
              floor plans, and site visit details for {property.name}.
            </p>
            <p className="text-gray-500 text-sm mb-8">
              In the meantime, feel free to reach out directly on WhatsApp or by phone.
            </p>
            <SectionCTA waNumber={waNumber} phone={phone} source="thankyou_cta" label="Chat on WhatsApp" />
            <a
              href="/"
              className="inline-block mt-8 text-sm font-semibold text-navy underline underline-offset-4"
            >
              ← Back to Home
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp waNumber={waNumber} />
      <MobileStickyBar waNumber={waNumber} phone={phone} />
    </>
  )
}
