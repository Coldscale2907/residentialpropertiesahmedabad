'use client'
import { Phone, MessageCircle } from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp, trackCall } from '@/lib/utils'
import { property } from '@/lib/property'

interface SectionCTAProps {
  waNumber: string
  phone: string
  source: string
  label?: string
  dark?: boolean
}

export default function SectionCTA({ waNumber, phone, source, label = 'Enquire Now', dark = false }: SectionCTAProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
      <a
        href={getWhatsAppURL(waNumber, property.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsApp(source)}
        className="flex items-center gap-2 bg-green text-white hover:bg-green-light transition-colors px-6 py-3 rounded-full text-sm font-semibold"
      >
        <MessageCircle size={16} /> {label}
      </a>
      <a
        href={`tel:+${phone}`}
        onClick={() => trackCall(source)}
        className={
          dark
            ? 'flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 transition-colors px-6 py-3 rounded-full text-sm font-semibold'
            : 'flex items-center gap-2 border border-navy text-navy hover:bg-navy hover:text-white transition-colors px-6 py-3 rounded-full text-sm font-semibold'
        }
      >
        <Phone size={16} /> Call Now
      </a>
    </div>
  )
}
