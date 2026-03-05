import { Check, Star, Phone, ArrowRight } from 'lucide-react'

const packages = [
  {
    name: 'Basic Polish',
    tagline: 'Refresh & Enhance',
    description: 'Single-stage polish to remove light swirls and enhance gloss.',
    features: [
      'Hand wash & decontamination',
      'Single-stage machine polish',
      'Light swirl removal',
      'Gloss enhancement',
      'Sealant application',
    ],
    popular: false,
  },
  {
    name: 'Paint Enhancement',
    tagline: 'Most Popular Choice',
    description: 'Two-stage correction for noticeable scratch and swirl removal.',
    features: [
      'Full decontamination & clay bar',
      'Two-stage machine correction',
      'Moderate scratch removal',
      'Deep gloss restoration',
      'Paint sealant protection',
      'Trim restoration',
    ],
    popular: true,
  },
  {
    name: 'Full Correction',
    tagline: 'Maximum Perfection',
    description: 'Multi-stage correction for heavily damaged or neglected paint.',
    features: [
      'Complete surface decontamination',
      'Multi-stage machine correction',
      'Heavy scratch & defect removal',
      'Mirror-like finish',
      'Paint depth measurement',
      'Premium sealant or coating prep',
    ],
    popular: false,
  },
  {
    name: 'Ceramic Coating',
    tagline: 'Ultimate Protection',
    description: 'Full correction plus professional ceramic coating for lasting protection.',
    features: [
      'Full paint correction included',
      'Professional ceramic coating',
      'Hydrophobic protection',
      'UV & chemical resistance',
      '2+ years durability',
      'Maintenance instructions',
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,85,0.03),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 text-sm font-bold uppercase tracking-widest">Packages</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 leading-tight">
            Choose Your <span className="shimmer-text">Perfect Package</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Price depends on vehicle size and condition. Contact us for a free, personalized estimate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative glass-card rounded-2xl p-7 flex flex-col transition-all duration-500 hover:-translate-y-1 ${
                pkg.popular ? 'border-gold-400/40 shadow-xl shadow-gold-400/10' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-gold-400 to-gold-600 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <Star className="w-3 h-3 fill-black" />
                    Most Popular
                  </div>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                <p className="text-gold-400 text-sm font-medium mt-1">{pkg.tagline}</p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">{pkg.description}</p>
              </div>
              <div className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-black hover:from-gold-500 hover:to-gold-600 hover:shadow-lg hover:shadow-gold-400/25'
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-gold-400/30'
                }`}
              >
                Get Estimate
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 glass-card rounded-2xl p-8 max-w-2xl mx-auto">
          <p className="text-gray-300 text-lg mb-4">
            Not sure which package is right for you? Call us for expert advice and a <span className="text-gold-400 font-semibold">free estimate</span>.
          </p>
          <a
            href="tel:+15618868790"
            className="inline-flex items-center gap-2 text-gold-400 font-bold text-xl hover:text-gold-500 transition-colors"
          >
            <Phone className="w-5 h-5" />
            +1 (561) 886-8790
          </a>
        </div>
      </div>
    </section>
  )
}