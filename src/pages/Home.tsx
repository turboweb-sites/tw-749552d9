import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import BeforeAfter from '../components/BeforeAfter'
import Services from '../components/Services'
import Process from '../components/Process'
import WhyUs from '../components/WhyUs'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Instagram from '../components/Instagram'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingCTA from '../components/FloatingCTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Problem />
      <BeforeAfter />
      <Services />
      <Process />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <Instagram />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  )
}