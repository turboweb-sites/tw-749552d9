import { AlertTriangle, Sparkles, ArrowRight } from 'lucide-react'

export default function Problem() {
  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-400/[0.02] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="glass-card rounded-2xl p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-400">The Problem</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Most vehicles suffer from <span className="text-white font-semibold">swirl marks, light scratches, oxidation, and dull paint</span>. These imperfections ruin the appearance of even the most expensive cars, boats, and yachts — making them look years older than they are.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Swirl Marks', 'Scratches', 'Oxidation', 'Dull Paint', 'Water Spots'].map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full bg-red-500/10 text-red-300 text-sm border border-red-500/20">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 sm:p-10 border-gold-400/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-xl font-bold text-gold-400">Our Solution</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our professional paint correction and polishing services <span className="text-white font-semibold">remove these defects and restore a deep, mirror-like shine</span>. We bring your vehicle's paint back to its original showroom condition — or better.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Mirror Finish', 'Deep Gloss', 'Scratch-Free', 'Protection', 'Showroom Look'].map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full bg-gold-400/10 text-gold-400 text-sm border border-gold-400/20">
                  {item}
                </span>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 mt-6 text-gold-400 font-semibold hover:text-gold-500 transition-colors group">
              Get a free estimate today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}