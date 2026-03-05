import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center font-black text-black text-lg">
                P
              </div>
              <div>
                <div className="text-white font-bold leading-tight">Pro Paint Correction</div>
                <div className="text-gold-400 text-xs font-medium tracking-widest uppercase">Florida</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional paint correction, polishing, and ceramic coating for cars, boats, and yachts across South Florida.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Paint Correction</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Professional Polishing</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Ceramic Coating</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Headlight Restoration</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Boat & Yacht Polishing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Service Area</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Miami</li>
              <li>Fort Lauderdale</li>
              <li>Hollywood</li>
              <li>Boca Raton</li>
              <li>West Palm Beach</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+15618868790" className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +1 (561) 886-8790
              </a>
              <a href="mailto:info@propaintcorrectionfl.com" className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@propaintcorrectionfl.com
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                South Florida (Mobile)
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Pro Paint Correction FL. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Paint Correction Miami | Scratch Removal | Ceramic Coating | Boat Polishing
          </p>
        </div>
      </div>
    </footer>
  )
}