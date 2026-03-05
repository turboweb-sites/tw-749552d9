import { Search, Droplets, Sparkles, Shield } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Paint Inspection',
    description: 'Thorough evaluation of your paint condition using professional lighting and measurement tools to identify all defects.',
  },
  {
    icon: Droplets,
    step: '02',
    title: 'Surface Preparation',
    description: 'Complete decontamination including wash, clay bar treatment, and iron removal to prepare the surface for correction.',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'Paint Correction',
    description: 'Multi-stage machine polishing using premium compounds and pads to remove scratches, swirls, and imperfections.',
  },
  {
    icon: Shield,
    step: '04',
    title: 'Protection',
    description: 'Optional ceramic coating application for long-lasting protection, creating a hydrophobic, self-cleaning barrier.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 text-sm font-bold uppercase tracking-widest">Our Process</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 leading-tight">
            How We <span className="shimmer-text">Transform</span> Your Paint
          </h2>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            A proven 4-step process that delivers flawless results every time. Precision at every stage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="relative group">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] right-[-40%] h-px bg-gradient-to-r from-gold-400/30 to-transparent" />
                )}
                <div className="glass-card rounded-2xl p-8 text-center hover:border-gold-400/30 transition-all duration-500 hover:-translate-y-1 h-full">
                  <div className="text-gold-400/30 text-5xl font-black mb-4">{step.step}</div>
                  <div className="w-16 h-16 rounded-2xl bg-gold-400/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-400/20 transition-colors">
                    <Icon className="w-8 h-8 text-gold-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}