import { property, company } from '@/lib/property'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-10 pb-24 md:py-10 px-4 md:px-8 lg:px-16">
      <div className="container-max flex flex-col items-center text-center gap-3">
        <img src={property.reraQr} alt="RERA QR Code" className="w-20 h-20 rounded bg-white p-1" />
        <p className="font-playfair text-lg">{property.name}</p>
        <p className="text-sm text-white/60">{property.location}</p>
        <p className="text-xs text-white/40 max-w-2xl break-words">RERA Reg. No: {property.reraNumber}</p>
        <p className="text-xs text-white/40">Marketed by {company.name}</p>
        <p className="text-xs text-white/30 max-w-3xl pt-4 leading-relaxed">{company.disclaimer}</p>
        <p className="text-xs text-white/40 pt-4">
          &copy; {new Date().getFullYear()} {property.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
