import { useState } from 'react'
import { Phone, ArrowRight, ChevronRight } from 'lucide-react'

const categories = [
  {
    id: 'paint-correction',
    name: 'Paint Correction',
    services: [
      {
        title: 'Stage 1 Paint Enhancement',
        price: '$250',
        priceNote: 'Starting at',
        image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&h=400&fit=crop',
        description: 'A single-step machine polish designed for newer vehicles or well-maintained paint. Removes light swirl marks, minor marring, and enhances overall gloss for a clean, refreshed appearance.',
        duration: '3–4 hours',
      },
      {
        title: 'Stage 2 Paint Correction',
        price: '$450',
        priceNote: 'Starting at',
        image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&h=400&fit=crop',
        description: 'Our most popular service. A two-step compound and polish process that removes moderate scratches, swirl marks, water spots, and oxidation. Restores up to 80% of paint clarity and depth.',
        duration: '5–7 hours',
        popular: true,
      },
      {
        title: 'Stage 3 Paint Restoration',
        price: '$700',
        priceNote: 'Starting at',
        image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop',
        description: 'The ultimate multi-stage correction for heavily damaged or neglected paint. Three rounds of cutting, correcting, and refining deliver a flawless, mirror-like finish with 95%+ defect elimination.',
        duration: '8–12 hours',
      },
    ],
  },
  {
    id: 'ceramic-coating',
    name: 'Ceramic Coating',
    services: [
      {
        title: 'Lite Ceramic Shield',
        price: '$599',
        priceNote: 'Starting at',
        image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=400&fit=crop',
        description: 'Entry-level professional ceramic coating paired with a single-stage polish. Provides 1–2 years of hydrophobic protection, UV resistance, and enhanced gloss for daily drivers.',
        duration: '1 day',
      },
      {
        title: 'Premium Ceramic Package',
        price: '$999',
        priceNote: 'Starting at',
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&h=400&fit=crop',
        description: 'Full two-stage paint correction followed by a professional-grade ceramic coating. Creates an extreme hydrophobic barrier with 3–5 years of durable protection against chemicals, UV, and contaminants.',
        duration: '1–2 days',
        popular: true,
      },
      {
        title: 'Ultimate Ceramic Armor',
        price: '$1,499',
        priceNote: 'Starting at',
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop',
        description: 'Our flagship package. Multi-stage paint restoration plus a multi-layer ceramic coating system for maximum thickness and longevity. Includes wheel coating, glass coating, and a complete aftercare kit.',
        duration: '2–3 days',
      },
    ],
  },
  {
    id: 'headlights',
    name: 'Headlights',
    services: [
      {
        title: 'Headlight Restoration',
        price: '$80',
        priceNote: 'Starting at',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&h=400&fit=crop',
        description: 'Complete restoration of foggy, yellowed, or hazed headlight lenses. Multi-step wet sanding and machine polishing followed by a UV-resistant sealant for long-lasting clarity.',
        duration: '1–2 hours',
      },
      {
        title: 'Headlight Restoration + Coating',
        price: '$150',
        priceNote: 'Starting at',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop',
        description: 'Full headlight restoration paired with a professional ceramic coating layer for maximum UV protection and durability. Keeps your headlights crystal clear for years, not months.',
        duration: '2–3 hours',
        popular: true,
      },
    ],
  },
  {
    id: 'marine',
    name: 'Boat & Yacht',
    services: [
      {
        title: 'Boat Polish & Protect',
        price: '$30/ft',
        priceNote: 'Starting at',
        image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=600&h=400&fit=crop',
        description: 'Restore your vessel\'s shine with professional marine-grade compounding and polishing. Removes oxidation from gelcoat and fiberglass, followed by a protective marine sealant application.',
        duration: 'Varies by size',
      },
      {
        title: 'Full Yacht Restoration',
        price: '$45/ft',
        priceNote: 'Starting at',
        image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&h=400&fit=crop',
        description: 'Complete multi-stage restoration for yachts and larger vessels. Heavy oxidation removal, compound correction, fine polish, and premium marine ceramic coating for long-term protection on the water.',
        duration: 'Varies by size',
        popular: true,
      },
    ],
  },
]

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState('paint-correction')

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0]

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,85,0.03),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold-400 text-sm font-bold uppercase tracking-widest">Service Pricing</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 leading-tight">
            Transparent Rates, <span className="shimmer-text">Exceptional Value</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Every vehicle is unique — final pricing depends on size, paint condition, and chosen service. Contact us for a complimentary personalized quote.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-black shadow-lg shadow-gold-400/25'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:border-gold-400/30 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {currentCategory.services.map((service, i) => (
            <div
              key={i}
              className={`relative glass-card rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1 group ${
                service.popular ? 'border-gold-400/40 shadow-xl shadow-gold-400/10' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-gold-400 to-gold-600 text-black text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Price overlay */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-gray-400 text-xs font-medium block">{service.priceNote}</span>
                  <span className="text-gold-400 text-3xl font-black">{service.price}</span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <span className="text-gray-300 text-xs font-medium">{service.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className={`mt-6 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-black hover:from-gold-500 hover:to-gold-600 hover:shadow-lg hover:shadow-gold-400/25'
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-gold-400/30'
                  }`}
                >
                  Get a Quote
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Row */}
        <div className="grid sm:grid-cols-3 gap-4 mt-14">
          <div className="glass-card rounded-xl p-5 text-center border-white/5 hover:border-gold-400/20 transition-all duration-300">
            <div className="text-gold-400 text-2xl font-black mb-1">100%</div>
            <div className="text-gray-400 text-sm">Satisfaction Guaranteed</div>
          </div>
          <div className="glass-card rounded-xl p-5 text-center border-white/5 hover:border-gold-400/20 transition-all duration-300">
            <div className="text-gold-400 text-2xl font-black mb-1">Free</div>
            <div className="text-gray-400 text-sm">Estimates & Consultations</div>
          </div>
          <div className="glass-card rounded-xl p-5 text-center border-white/5 hover:border-gold-400/20 transition-all duration-300">
            <div className="text-gold-400 text-2xl font-black mb-1">Mobile</div>
            <div className="text-gray-400 text-sm">We Come to You</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 glass-card rounded-2xl p-8 max-w-2xl mx-auto border-gold-400/10">
          <p className="text-gray-300 text-lg mb-2">
            Need a custom package or have a special project?
          </p>
          <p className="text-gray-400 text-sm mb-5">
            We handle everything from daily drivers to exotic supercars and 100ft+ yachts. Call for a <span className="text-gold-400 font-semibold">free, no-obligation estimate</span>.
          </p>
          <a
            href="tel:+15618868790"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-gold-500 hover:to-gold-600 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-400/30"
          >
            <Phone className="w-5 h-5" />
            +1 (561) 886-8790
          </a>
        </div>
      </div>
    </section>
  )
}