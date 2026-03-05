import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0a0a0a] relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1920&h=1080&fit=crop"
          alt="Luxury car"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 text-sm font-bold uppercase tracking-widest">Get Started</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 leading-tight">
            Bring Your Paint <span className="shimmer-text">Back to Life</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Contact Pro Paint Correction FL today for professional paint restoration. Free estimates available.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-5">
                <a href="tel:+15618868790" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call Us</p>
                    <p className="text-white font-bold text-lg group-hover:text-gold-400 transition-colors">+1 (561) 886-8790</p>
                  </div>
                </a>
                <a href="mailto:info@propaintcorrectionfl.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email Us</p>
                    <p className="text-white font-semibold group-hover:text-gold-400 transition-colors">info@propaintcorrectionfl.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Service Area</p>
                    <p className="text-white font-semibold">South Florida — Mobile Service</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Hours</p>
                    <p className="text-white font-semibold">Mon–Sat: 8AM – 6PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border-gold-400/20">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="w-5 h-5 text-gold-400" />
                <h4 className="text-white font-bold">Quick Response</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                We respond to all inquiries within 1 hour during business hours. Call now for immediate assistance.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+15618868790"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-gold-400 to-gold-600 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-gold-500 hover:to-gold-600 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-400/30 pulse-glow"
              >
                <Phone className="w-5 h-5" />
                Call Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="glass-card rounded-2xl p-12 text-center border-gold-400/20">
                <div className="w-20 h-20 rounded-full bg-gold-400/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
                <p className="text-gray-400 text-lg">
                  We've received your request and will contact you shortly with a free estimate.
                </p>
                <a
                  href="tel:+15618868790"
                  className="inline-flex items-center gap-2 mt-6 text-gold-400 font-bold text-lg hover:text-gold-500 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Or call us now: (561) 886-8790
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 sm:p-10 space-y-6">
                <h3 className="text-xl font-bold text-white mb-2">Get Your Free Estimate</h3>
                <p className="text-gray-400 text-sm mb-6">Fill out the form and we'll get back to you within 1 hour.</p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/25 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/25 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/25 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Vehicle Type</label>
                    <input
                      type="text"
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/25 transition-colors"
                      placeholder="2024 Porsche 911"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/25 transition-colors appearance-none"
                    >
                      <option value="" className="bg-gray-900">Select a service</option>
                      <option value="paint-correction" className="bg-gray-900">Paint Correction</option>
                      <option value="polishing" className="bg-gray-900">Professional Polishing</option>
                      <option value="ceramic-coating" className="bg-gray-900">Ceramic Coating</option>
                      <option value="headlight" className="bg-gray-900">Headlight Restoration</option>
                      <option value="boat-yacht" className="bg-gray-900">Boat & Yacht Polishing</option>
                      <option value="not-sure" className="bg-gray-900">Not Sure — Need Advice</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Tell Us More</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/25 transition-colors resize-none"
                    placeholder="Describe the condition of your paint, any specific scratches or issues..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-400 to-gold-600 text-black py-4 rounded-xl font-bold text-lg hover:from-gold-500 hover:to-gold-600 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-400/30 flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Get My Free Estimate
                </button>

                <p className="text-gray-500 text-xs text-center">
                  By submitting this form, you agree to be contacted about our services. We'll never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}