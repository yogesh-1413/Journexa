export default function Footer() {
  const cols = [
    { title: 'Product',  links: ['Features', 'Analytics', 'Pricing', 'Changelog', 'Roadmap'] },
    { title: 'Company',  links: ['About', 'Blog', 'Careers', 'Press'] },
    { title: 'Legal',    links: ['Privacy', 'Terms', 'Security', 'Cookies'] },
  ]

  return (
    <footer className="relative border-t border-gray-200 dark:border-white/8 bg-white dark:bg-gray-950 px-6 py-14 overflow-hidden">
      {/* Faint neon blob top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-24 bg-emerald-500/5 dark:bg-emerald-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">

          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center
                shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l4-8 4 4 4-8" />
                </svg>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">Journexa</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mb-5">
              The smartest trading journal for serious traders. Track, analyze, and improve your trading performance.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                { label: 'Discord', path: 'M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z' },
                { label: 'YouTube', path: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zm-12.2 9.02V8.56l5.74 3.44-5.74 3.44z' },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center
                    bg-gray-100 dark:bg-white/8 text-gray-500 dark:text-gray-400
                    hover:bg-emerald-50 dark:hover:bg-emerald-500/15
                    hover:text-emerald-600 dark:hover:text-emerald-400
                    hover:shadow-[0_0_10px_rgba(16,185,129,0.3)]
                    transition-all duration-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <div className="text-xs font-bold text-gray-900 dark:text-gray-200 uppercase tracking-wider mb-4">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="border-t border-gray-100 dark:border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400">© 2026 Journexa, Inc. All rights reserved.</p>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,1)] animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
