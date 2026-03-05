import { useState, useEffect } from 'react'
import { Phone, X } from 'lucide-react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 600 && !dismissed) {
        setVisible(true)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [dismissed])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-fade-in-up">
      <button
        onClick={() => { setVisible(false); setDismissed(true) }}
        className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
      <a
        href="tel:+15618868790"
        className="flex items-center gap-3 bg-gradient-to-r from-gold-400 to-gold-600 text-black px-6 py-3 rounded-full font-bold shadow-2xl shadow-gold-400/30 hover:shadow-gold-400/50 transition-all duration-300 hover:scale-105 pulse-glow"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline">Call (561) 886-8790</span>
        <span className="sm:hidden">Call Now</span>
      </a>
    </div>
  )
}