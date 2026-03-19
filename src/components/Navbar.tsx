import { useState } from 'react'
import ScrollToTop from './ScrollToTop'

interface NavbarProps {
  isDark: boolean
  setIsDark: (v: boolean) => void
}

export default function Navbar({ isDark, setIsDark }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50
        bg-white/75 dark:bg-gray-950/80 backdrop-blur-xl
        border-b border-gray-200/60 dark:border-white/8
        shadow-sm dark:shadow-[0_1px_0_rgba(255,255,255,0.05)]
        transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center
              shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] transition-shadow duration-200">
              <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l4-8 4 4 4-8" />
              </svg>
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              Journexa
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {['Features', 'Analytics', 'Pricing', 'About'].map(link => (
              <a key={link} href="#"
                className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400
                  hover:text-emerald-600 dark:hover:text-emerald-400
                  hover:bg-emerald-50 dark:hover:bg-emerald-500/10
                  transition-all duration-200">
                {link}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">

            {/* Dark / Light toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle dark mode"
              className="w-9 h-9 rounded-xl flex items-center justify-center
                bg-gray-100 dark:bg-white/8 text-gray-500 dark:text-gray-400
                hover:bg-emerald-50 dark:hover:bg-emerald-500/15
                hover:text-emerald-600 dark:hover:text-emerald-400
                hover:shadow-[0_0_12px_rgba(16,185,129,0.3)]
                transition-all duration-200">
              {isDark ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Sign In */}
            <a href="#" className="hidden md:block px-4 py-2 rounded-xl text-sm font-medium
              text-gray-600 dark:text-gray-300
              hover:text-gray-900 dark:hover:text-white
              hover:bg-gray-100 dark:hover:bg-white/8
              transition-all duration-200">
              Sign In
            </a>

            {/* CTA */}
            <a href="#" className="hidden md:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl
              bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-bold
              shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.65)]
              hover:scale-105 active:scale-100 transition-all duration-200">
              Get Started
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open menu"
              className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center
                bg-gray-100 dark:bg-white/8 text-gray-600 dark:text-gray-400
                hover:bg-gray-200 dark:hover:bg-white/15 transition-colors">
              {mobileOpen
                ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-white/8
            bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl
            px-6 py-5 flex flex-col gap-2">
            {['Features', 'Analytics', 'Pricing', 'About'].map(link => (
              <a key={link} href="#"
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300
                  hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-colors">
                {link}
              </a>
            ))}
            <div className="border-t border-gray-100 dark:border-white/8 pt-3 mt-1 flex flex-col gap-2">
              <a href="#" className="px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Sign In</a>
              <a href="#" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-bold
                shadow-[0_0_20px_rgba(16,185,129,0.35)]">
                Get Started Free →
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ScrollToTop lives inside Navbar for reuse */}
      <ScrollToTop />
    </>
  )
}
