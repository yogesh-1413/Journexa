import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DashboardPreview from './components/DashboardPreview'
import Features from './components/Features'
import StatsBar from './components/StatsBar'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? 'dark' : ''}>
      <div
        className="min-h-screen bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Navbar renders ScrollToTop automatically inside it */}
        <Navbar isDark={isDark} setIsDark={setIsDark} />

        <main>
          <Hero />
          <DashboardPreview />
          <Features />
          <StatsBar />
          <Testimonials />
          <Pricing />
          <CTABanner />
        </main>

        <Footer />
      </div>
    </div>
  )
}