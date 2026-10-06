import { Sparkles } from 'lucide-react'
import { property } from '@/lib/property'

export default function OfferBanner() {
  return (
    <div className="bg-gold text-charcoal px-4 py-2.5 text-center text-sm font-semibold flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
      <Sparkles size={16} className="shrink-0" />
      <span className="font-bold">{property.offer.title}</span>
      <span>&middot; {property.offer.highlight}:</span>
      <span className="font-normal">{property.offer.terms}</span>
    </div>
  )
}
