import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full flex items-center justify-center
        bg-gradient-to-br from-emerald-500 to-cyan-500
        shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:shadow-[0_0_35px_rgba(16,185,129,0.85)]
        hover:scale-110 active:scale-95
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'}`}
    >
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}
