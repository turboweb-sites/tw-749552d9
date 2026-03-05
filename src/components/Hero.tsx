import { Phone, ArrowRight, MapPin, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&h=1080&fit=crop"
          alt="Luxury car paint correction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="w-full h-full bg-gradient-to-bl from-gold-400/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-gold-400/30 rounded-full px-4 py-2 mb-8">
              <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
              <span className="text-gold-400 text-sm font-medium">Premium Mobile Service Across South Florida</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight animate-fade-in-up">
            Remove Scratches.{' '}
            <span className="shimmer-text">Restore a Perfect Shine.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl animate-fade-in-up-delay-1">
            Professional paint correction and ceramic coating for cars, boats, and yachts across South Florida. Mirror-like gloss without repainting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in-up-delay-2">
            <a
              href="tel:+15618868790"
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-gold-500 hover:to-gold-600 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-400/30 pulse-glow"
            >
              <Phone className="w-5 h-5" />
              Call Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 bg-white/5 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-gold-400/50 transition-all duration-300 backdrop-blur-sm"
            >
              Get Free Estimate
            </a>
          </div>

          <a
            href="tel:+15618868790"
            className="inline-flex items-center gap-2 mt-6 text-gold-400 text-xl font-bold hover:text-gold-500 transition-colors animate-fade-in-up-delay-2"
          >
            <Phone className="w-5 h-5" />
            +1 (561) 886-8790
          </a>

          <div className="flex items-center gap-2 mt-8 text-gray-400 text-sm animate-fade-in-up-delay-3">
            <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>Miami • Fort Lauderdale • Hollywood • Boca Raton • West Palm Beach</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  )
}