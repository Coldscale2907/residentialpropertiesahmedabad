import { CheckCircle2, MapPin, Building2, TrendingUp } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import MobileStickyBar from '@/components/MobileStickyBar'
import SectionCTA from '@/components/SectionCTA'
import { property, company } from '@/lib/property'

export default function Home() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '919898989898'
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '919898989898'

  return (
    <>
      <Navigation waNumber={waNumber} phone={phone} />

      <main className="pb-14 md:pb-0">
        {/* Hero */}
        <section
          id="overview"
          className="relative section-padding bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(31,41,51,0.55), rgba(31,41,51,0.75)), url(${property.images[0]})` }}
        >
          <div className="container-max grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
            <div className="text-white">
              <p className="text-green-light font-semibold text-sm tracking-wide uppercase mb-3">
                {property.location} &middot; {property.status}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{property.name}</h1>
              <p className="text-xl text-white/90 mb-6">{property.tagline}</p>
              <div className="gold-line mb-6" />
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2 border border-white/20">
                  <span className="text-white/60 block text-xs">Configuration</span>
                  {property.configurations}
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2 border border-white/20">
                  <span className="text-white/60 block text-xs">Unit Size</span>
                  {property.unitSize.split('·')[0]}
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2 border border-white/20">
                  <span className="text-white/60 block text-xs">Price</span>
                  {property.priceFrom}
                </div>
              </div>
            </div>

            {/* Hero pre-register form */}
            <LeadForm waNumber={waNumber} phone={phone} source="hero_form" showConnectFooter />
          </div>
        </section>

        {/* About the project */}
        <section className="section-padding bg-white">
          <div className="container-max grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark-text mb-2">About {property.name}</h2>
              <div className="gold-line mb-6" />
              <p className="text-gray-600 mb-6">{property.description}</p>
              <ul className="space-y-3">
                {property.highlights.slice(0, 4).map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="text-green shrink-0 mt-0.5" size={16} /> {h}
                  </li>
                ))}
              </ul>
              <SectionCTA waNumber={waNumber} phone={phone} source="about_cta" label="Request Brochure" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={property.aboutImages[0]} alt={`${property.name} exterior`} className="rounded-xl object-cover w-full h-full col-span-2 aspect-video" />
              <img src={property.aboutImages[1]} alt={`${property.name} interior`} className="rounded-xl object-cover w-full aspect-square" />
              <img src={property.aboutImages[2]} alt={`${property.name} amenity`} className="rounded-xl object-cover w-full aspect-square" />
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-dark-text text-center mb-2">Why Choose {property.name}</h2>
            <div className="gold-line mx-auto mb-10" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {property.highlights.map((highlight) => (
                <div key={highlight} className="bg-white rounded-xl p-6 shadow-sm border border-border-gray flex gap-3 items-start">
                  <CheckCircle2 className="text-green shrink-0" size={20} />
                  <span className="text-sm text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
            <SectionCTA waNumber={waNumber} phone={phone} source="highlights_cta" label="Get Full Brochure" />
          </div>
        </section>

        {/* Pricing / Configuration */}
        <section className="section-padding bg-beige/30">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-dark-text text-center mb-2">Configuration &amp; Pricing</h2>
            <div className="gold-line mx-auto mb-10" />
            <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-border-gray">
              <table className="w-full text-sm text-left">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-6 py-4">Configuration</th>
                    <th className="px-6 py-4">RERA Area</th>
                    <th className="px-6 py-4">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-gray">
                    <td className="px-6 py-4 font-semibold text-dark-text">3 BHK</td>
                    <td className="px-6 py-4 text-gray-600">1,379 – 1,850 sq ft (approx.)</td>
                    <td className="px-6 py-4 text-gray-600">{property.priceFrom}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-dark-text">4 BHK Penthouse</td>
                    <td className="px-6 py-4 text-gray-600">1,850 – 2,365 sq ft RERA / up to 4,548 sq ft SBU</td>
                    <td className="px-6 py-4 text-gray-600">Price on Request</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <SectionCTA waNumber={waNumber} phone={phone} source="pricing_cta" label="Get Best Price" />
          </div>
        </section>

        {/* Living, Done Right */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <p className="text-green font-semibold text-sm tracking-wide uppercase text-center mb-2">
              {property.livingSection.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-dark-text text-center mb-2">{property.livingSection.heading}</h2>
            <div className="gold-line mx-auto mb-4" />
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">{property.livingSection.subheading}</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {property.livingSection.features.map((feature) => (
                <div key={feature.title} className="rounded-xl overflow-hidden shadow-sm border border-border-gray bg-white">
                  <img src={feature.image} alt={feature.title} className="w-full aspect-[4/3] object-cover" />
                  <div className="p-5">
                    <h3 className="font-playfair font-bold text-dark-text text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <SectionCTA waNumber={waNumber} phone={phone} source="living_cta" label="Learn More" />
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="section-padding bg-beige/30">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-dark-text text-center mb-2">Amenities</h2>
            <div className="gold-line mx-auto mb-10" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {property.amenities.map((amenity) => (
                <div key={amenity} className="bg-white rounded-lg px-5 py-4 shadow-sm border border-border-gray text-sm text-gray-700 flex items-center gap-2">
                  <CheckCircle2 className="text-green shrink-0" size={16} />
                  {amenity}
                </div>
              ))}
            </div>
            <SectionCTA waNumber={waNumber} phone={phone} source="amenities_cta" label="Request All Amenities" />
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="section-padding bg-white">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-dark-text text-center mb-2">Gallery</h2>
            <div className="gold-line mx-auto mb-10" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {property.images.slice(1).map((image, i) => (
                <img
                  key={image}
                  src={image}
                  alt={`${property.name} gallery photo ${i + 1}`}
                  className="aspect-[4/3] rounded-xl object-cover w-full"
                />
              ))}
            </div>
            <SectionCTA waNumber={waNumber} phone={phone} source="gallery_cta" label="View More Photos" />
          </div>
        </section>

        {/* Location + Map */}
        <section id="location" className="section-padding bg-white">
          <div className="container-max grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark-text mb-2">Location</h2>
              <div className="gold-line mb-6" />
              <p className="flex items-center gap-2 text-gray-700 text-lg mb-4">
                <MapPin className="text-green shrink-0" size={20} />
                {property.location}
              </p>
              <p className="text-gray-600 mb-6">
                Direct entry point to the main Shantigram Road, well connected within Ahmedabad, with easy access to
                schools, hospitals, and retail, set within a low-density, green residential township.
              </p>
              <a
                href={property.mapPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-navy underline underline-offset-4 mb-4"
              >
                Get Directions on Google Maps →
              </a>
              <SectionCTA waNumber={waNumber} phone={phone} source="location_cta" label="Request Location Details" />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border-gray">
              <iframe
                title="Shivalik Greenfield location map"
                src={`https://www.google.com/maps?q=${property.mapCoords.lat},${property.mapCoords.lng}&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* About Slabs and Beams Realty */}
        <section className="section-padding bg-charcoal text-white">
          <div className="container-max text-center max-w-3xl mx-auto">
            <Building2 className="text-green-light mx-auto mb-4" size={32} />
            <h2 className="text-3xl font-bold mb-2">About {company.name}</h2>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-white/80 mb-8">{company.tagline}</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {company.stats.map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-5">
                  <div className="text-2xl font-bold text-green-light">{stat.value}</div>
                  <div className="text-xs text-white/60 mt-1 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="text-white/70 text-sm mb-8">{company.description}</p>
            <SectionCTA waNumber={waNumber} phone={phone} source="about_company_cta" label="Talk to an Advisor" dark />
          </div>
        </section>

        {/* Final Contact */}
        <section id="contact" className="section-padding bg-navy">
          <div className="container-max grid md:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <TrendingUp className="text-green-light mb-4" size={28} />
              <h2 className="text-3xl font-bold mb-4">Interested in {property.name}?</h2>
              <p className="text-white/70 mb-6">
                Share your details and our team will get back to you with pricing, floor plans, and site visit options.
              </p>
            </div>
            <LeadForm waNumber={waNumber} phone={phone} source="footer_form" showConnectFooter />
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp waNumber={waNumber} />
      <MobileStickyBar waNumber={waNumber} phone={phone} />
    </>
  )
}
