import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react'

const images = [
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1525609004556-c46c90e6e09b?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=400&fit=crop',
]

export default function Instagram() {
  return (
    <section className="py-20 sm:py-28 bg-[#0d0d0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <InstagramIcon className="w-8 h-8 text-gold-400" />
            <span className="text-gold-400 text-sm font-bold uppercase tracking-widest">Follow Our Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Real Transformations on <span className="shimmer-text">Instagram</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            See hundreds of before & after transformations, client testimonials, and behind-the-scenes content.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {images.map((img, i) => (
            <div key={i} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
              <img
                src={img}
                alt={`Paint correction result ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <InstagramIcon className="w-5 h-5" />
            Follow @ProPaintCorrectionFL
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}