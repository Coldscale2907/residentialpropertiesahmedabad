import { CheckCircle2, MapPin } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import MobileStickyBar from '@/components/MobileStickyBar'
import { property } from '@/lib/property'

export default function Home() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '919898989898'
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '919898989898'

  return (
    <>
      <Navigation waNumber={waNumber} phone={phone} />

      <main className="pb-14 md:pb-0">
        {/* Hero */}
        <section id="overview" className="section-padding bg-gradient-to-b from-beige/40 to-soft-white">
          <div className="container-max grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold font-semibold text-sm tracking-wide uppercase mb-3">
                {property.location} &middot; {property.status}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">{property.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{property.tagline}</p>
              <div className="gold-line mb-6" />
              <p className="text-gray-600 mb-8">{property.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-dark-text">
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-border-gray">
                  <span className="text-gray-400 block text-xs">Configuration</span>
                  {property.configurations}
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-border-gray">
                  <span className="text-gray-400 block text-xs">Unit Size</span>
                  {property.unitSize}
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-border-gray">
                  <span className="text-gray-400 block text-xs">Price</span>
                  {property.priceFrom}
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-beige/60 flex items-center justify-center text-gray-400 text-sm">
              [Property hero image]
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-dark-text text-center mb-2">Why Choose {property.name}</h2>
            <div className="gold-line mx-auto mb-10" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {property.highlights.map((highlight) => (
                <div key={highlight} className="bg-white rounded-xl p-6 shadow-sm border border-border-gray flex gap-3 items-start">
                  <CheckCircle2 className="text-gold shrink-0" size={20} />
                  <span className="text-sm text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="section-padding bg-white">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-dark-text text-center mb-2">Gallery</h2>
            <div className="gold-line mx-auto mb-10" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {property.images.map((image, i) => (
                <div key={image} className="aspect-[4/3] rounded-xl bg-beige/60 flex items-center justify-center text-gray-400 text-sm">
                  [Image {i + 1}]
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-dark-text text-center mb-2">Amenities</h2>
            <div className="gold-line mx-auto mb-10" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {property.amenities.map((amenity) => (
                <div key={amenity} className="bg-white rounded-lg px-5 py-4 shadow-sm border border-border-gray text-sm text-gray-700">
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="section-padding bg-white">
          <div className="container-max grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark-text mb-2">Location</h2>
              <div className="gold-line mb-6" />
              <p className="flex items-center gap-2 text-gray-700 text-lg mb-4">
                <MapPin className="text-gold shrink-0" size={20} />
                {property.location}
              </p>
              <p className="text-gray-600">
                Well connected within Ahmedabad, with easy access to schools, hospitals, and retail — set within a
                low-density, green residential enclave.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-beige/60 flex items-center justify-center text-gray-400 text-sm">
              [Map / location image]
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-padding bg-navy">
          <div className="container-max grid md:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">Interested in {property.name}?</h2>
              <p className="text-white/70 mb-6">
                Share your details and our team will get back to you with pricing, floor plans, and site visit options.
              </p>
            </div>
            <LeadForm waNumber={waNumber} phone={phone} source="homepage_form" showConnectFooter />
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp waNumber={waNumber} />
      <MobileStickyBar waNumber={waNumber} phone={phone} />
    </>
  )
}
