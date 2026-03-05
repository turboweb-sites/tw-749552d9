import { Award, Wrench, Eye, Anchor, Truck, CheckCircle2 } from 'lucide-react'

const reasons = [
  { icon: Award, title: 'Specialized Expertise', desc: 'Dedicated paint correction specialists, not general detailers.' },
  { icon: Wrench, title: 'Premium Equipment', desc: 'Professional-grade machines, compounds, and polishing pads.' },
  { icon: Eye, title: 'Attention to Detail', desc: 'Every inch inspected under professional lighting systems.' },
  { icon: Anchor, title: 'Cars, Boats & Yachts', desc: 'Experienced with luxury vehicles and marine surfaces.' },
  { icon: Truck, title: 'Mobile Service', desc: 'We come to you anywhere across South Florida.' },
  { icon: CheckCircle2, title: 'Guaranteed Results', desc: 'We stand behind every job with a satisfaction guarantee.' },
]

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-28 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&h=1080&fit=crop"
          alt="Luxury car"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-[#0d0d0d]/95" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 text-sm font-bold uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 leading-tight">
            Luxury Paint Correction <span className="shimmer-text">Experts</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Professional finish that looks like new. Remove years of damage from your paint with precision and care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <div key={i} className="flex items-start gap-5 glass-card rounded-2xl p-6 hover:border-gold-400/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{r.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}