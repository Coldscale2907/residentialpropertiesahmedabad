'use client'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppURL, trackWhatsApp } from '@/lib/utils'
import { property } from '@/lib/property'

interface FloatingWhatsAppProps {
  waNumber: string
}

export default function FloatingWhatsApp({ waNumber }: FloatingWhatsAppProps) {
  return (
    <div className="hidden md:flex fixed bottom-8 right-8 z-50 group">
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-charcoal text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Chat with us
      </span>
      <button
        onClick={() => {
          trackWhatsApp('floating')
          window.open(getWhatsAppURL(waNumber, property.whatsappMessage), '_blank')
        }}
        className="relative w-[60px] h-[60px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:bg-green-600 transition-colors wa-pulse"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  )
}
