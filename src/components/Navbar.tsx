import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#results' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-black/50 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center font-black text-black text-lg">
              P
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-tight">Pro Paint Correction</span>
              <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Florida</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gold-400 transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+15618868790"
              className="flex items-center gap-2 text-gold-400 hover:text-gold-500 transition-colors font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>(561) 886-8790</span>
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-gold-400 to-gold-600 text-black px-6 py-2.5 rounded-lg font-bold text-sm hover:from-gold-500 hover:to-gold-600 transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/25"
            >
              Free Estimate
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-fade-in-up">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-300 hover:text-gold-400 transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
              <a
                href="tel:+15618868790"
                className="flex items-center justify-center gap-2 text-gold-400 font-semibold py-3"
              >
                <Phone className="w-4 h-4" />
                (561) 886-8790
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-gradient-to-r from-gold-400 to-gold-600 text-black px-6 py-3 rounded-lg font-bold text-sm text-center"
              >
                Free Estimate
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}