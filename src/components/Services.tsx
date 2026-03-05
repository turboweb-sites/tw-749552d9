import { Sparkles, Shield, Sun, Car, Anchor, Paintbrush } from 'lucide-react'

const services = [
  {
    icon: Paintbrush,
    title: 'Paint Correction',
    description: 'Multi-stage polishing process that removes scratches, swirl marks, and imperfections while restoring depth and clarity to your paint.',
    features: ['Scratch Removal', 'Swirl Mark Elimination', 'Color Depth Restoration'],
  },
  {
    icon: Sparkles,
    title: 'Professional Polishing',
    description: 'Advanced polishing that eliminates dullness and restores your vehicle\'s original gloss for a showroom-quality finish.',
    features: ['Gloss Enhancement', 'Surface Refinement', 'Mirror Finish'],
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    description: 'Long-lasting protection creating a durable, glossy, hydrophobic layer that shields your paint from the elements.',
    features: ['Hydrophobic Layer', 'UV Protection', '2+ Years Durability'],
  },
  {
    icon: Sun,
    title: 'Headlight Restoration',
    description: 'Remove oxidation and yellowing to restore crystal-clear headlights, improving both appearance and nighttime visibility.',
    features: ['Oxidation Removal', 'Clarity Restoration', 'UV Sealant'],
  },
  {
    icon: Anchor,
    title: 'Boat & Yacht Polishing',
    description: 'Restore deep shine and remove oxidation from marine surfaces. Specialized compounds for gelcoat and marine paint.',
    features: ['Gelcoat Restoration', 'Oxidation Treatment', 'Marine Protection'],
  },
  {
    icon: Car,
    title: 'Mobile Service',
    description: 'We come to you anywhere across South Florida. Professional equipment, professional results — at your convenience.',
    features: ['On-Site Service', 'Full Equipment', 'South Florida Wide'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0d0d0d] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,85,0.03),transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 text-sm font-bold uppercase tracking-widest">Our Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 leading-tight">
            Premium Paint <span className="shimmer-text">Correction Services</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Transform scratched paint into showroom finish. Precision polishing for perfect results on cars, boats, and yachts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="glass-card rounded-2xl p-8 hover:border-gold-400/30 transition-all duration-500 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-400/10 flex items-center justify-center mb-6 group-hover:bg-gold-400/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-5">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}