import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos M.',
    vehicle: 'Tesla Model S',
    text: 'Incredible work. My Tesla had swirl marks all over from the previous owner. Now it looks better than when it came from the factory. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Jennifer R.',
    vehicle: '2023 Porsche Cayenne',
    text: 'The team came to my house and spent hours perfecting every panel. The ceramic coating made the paint look absolutely stunning. Worth every penny.',
    rating: 5,
  },
  {
    name: 'Michael D.',
    vehicle: '42ft Sea Ray Yacht',
    text: 'They transformed my yacht\'s oxidized gelcoat into a mirror finish. Professional, punctual, and the results speak for themselves. Will be a repeat customer.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 text-sm font-bold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 leading-tight">
            What Our Clients <span className="shimmer-text">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 hover:border-gold-400/20 transition-all duration-300">
              <Quote className="w-10 h-10 text-gold-400/20 mb-4" />
              <p className="text-gray-300 leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>
              <div>
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-gold-400 text-sm">{t.vehicle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}