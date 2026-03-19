export default function Testimonials() {
  const testimonials = [
    {
      name: 'Arjun M.', role: 'Equity Swing Trader', avatar: 'AM',
      avatarGrad: 'from-emerald-400 to-cyan-500',
      quote: '"Journexa completely changed how I view my trading. I discovered I was overtrading on Mondays — costing me 40% of my P&L. Now I journal every session."',
      featured: false,
    },
    {
      name: 'Sofia R.', role: 'Forex Day Trader', avatar: 'SR',
      avatarGrad: 'from-violet-400 to-pink-500',
      quote: '"The psychology tracker alone is worth it. I stopped revenge trading after tracking my emotional state for just 2 weeks. Incredible self-awareness tool."',
      featured: true,
    },
    {
      name: 'Derek C.', role: 'Futures Scalper', avatar: 'DC',
      avatarGrad: 'from-amber-400 to-orange-500',
      quote: '"10x better than spreadsheets. The analytics dashboard shows me exactly which setups are working and which ones to cut. My profit factor went from 1.2 to 2.4."',
      featured: false,
    },
  ]

  return (
    <section className="relative px-6 pb-24 overflow-hidden">
      {/* Neon blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-violet-500/8 dark:bg-violet-500/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-3">
            What traders are saying
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Real results from real traders using Journexa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-6 transition-all duration-300
                ${t.featured
                  ? 'bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800 border border-violet-400/30 shadow-[0_0_50px_rgba(139,92,246,0.35)] text-white scale-105'
                  : 'bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-white/8 text-gray-800 dark:text-gray-200 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] hover:-translate-y-1'
                }`}
            >
              {t.featured && (
                <>
                  {/* Inner glow blob */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-violet-400/20 rounded-full blur-2xl" />
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full
                    bg-white text-violet-700 text-xs font-bold shadow-lg
                    shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                    ⭐ Most Loved
                  </div>
                </>
              )}

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-sm ${t.featured ? 'text-yellow-300 drop-shadow-[0_0_4px_rgba(253,224,71,0.8)]' : 'text-amber-400'}`}>★</span>
                ))}
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${t.featured ? 'text-violet-100' : 'text-gray-600 dark:text-gray-400'}`}>
                {t.quote}
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarGrad} flex items-center justify-center text-white text-xs font-bold
                  shadow-[0_0_12px_rgba(16,185,129,0.4)]`}>
                  {t.avatar}
                </div>
                <div>
                  <div className={`text-sm font-bold ${t.featured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{t.name}</div>
                  <div className={`text-xs ${t.featured ? 'text-violet-200' : 'text-gray-400'}`}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
