import { useState, useRef, useCallback } from 'react'
import { ArrowLeftRight } from 'lucide-react'

interface SliderProps {
  beforeImg: string
  afterImg: string
  label: string
}

function ComparisonSlider({ beforeImg, afterImg, label }: SliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(pct)
  }, [])

  const handleMouseDown = () => { isDragging.current = true }
  const handleMouseUp = () => { isDragging.current = false }
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX)
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX)

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        <img
          src={afterImg}
          alt="After correction"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={beforeImg}
            alt="Before correction"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ minWidth: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-gold-400 shadow-lg shadow-gold-400/50"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center shadow-2xl shadow-gold-400/50">
            <ArrowLeftRight className="w-5 h-5 text-black" />
          </div>
        </div>
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg text-white text-xs font-bold uppercase tracking-wider">
          Before
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-gold-400/90 backdrop-blur-sm rounded-lg text-black text-xs font-bold uppercase tracking-wider">
          After
        </div>
      </div>
      <p className="text-center text-gray-400 mt-3 text-sm font-medium">{label}</p>
    </div>
  )
}

export default function BeforeAfter() {
  const comparisons = [
    {
      beforeImg: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&h=600&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop',
      label: 'Luxury Sedan — Full Paint Correction',
    },
    {
      beforeImg: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
      label: 'Sports Car — Swirl Mark Removal',
    },
    {
      beforeImg: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&h=600&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=800&h=600&fit=crop',
      label: 'Yacht — Marine Surface Restoration',
    },
  ]

  return (
    <section id="results" className="py-20 sm:py-28 bg-[#0a0a0a] relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 text-sm font-bold uppercase tracking-widest">Proven Results</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 leading-tight">
            Real Paint Correction <span className="shimmer-text">Results</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            See dramatic transformations where scratches, swirl marks, and dull paint are restored to a mirror-gloss finish. Drag the slider to compare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comparisons.map((c, i) => (
            <ComparisonSlider key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}