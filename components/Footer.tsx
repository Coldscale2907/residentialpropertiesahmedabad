import { property } from '@/lib/property'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-10 px-4 md:px-8 lg:px-16">
      <div className="container-max text-center space-y-2">
        <p className="font-playfair text-lg">{property.name}</p>
        <p className="text-sm text-white/60">{property.location}</p>
        <p className="text-xs text-white/40">RERA Reg. No: {property.reraNumber}</p>
        <p className="text-xs text-white/40 pt-4">
          &copy; {new Date().getFullYear()} {property.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
