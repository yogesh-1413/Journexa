export default function Features() {
  const features = [
    {
      icon: '📒', title: 'Trade Log',
      desc: 'Log every trade with entry, exit, screenshots, and custom tags. Never miss a detail again.',
      gradient: 'from-emerald-500 to-teal-500',
      glow: 'hover:shadow-[0_0_35px_rgba(16,185,129,0.2)] dark:hover:shadow-[0_0_35px_rgba(16,185,129,0.15)]',
      border: 'hover:border-emerald-400/60 dark:hover:border-emerald-500/40',
      iconRing: 'shadow-[0_0_15px_rgba(16,185,129,0.4)]',
      accent: 'text-emerald-500',
    },
    {
      icon: '📈', title: 'Performance Analytics',
      desc: 'Visualize your edge with P&L curves, win rate by session, instrument, and strategy.',
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] dark:hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]',
      border: 'hover:border-cyan-400/60 dark:hover:border-cyan-500/40',
      iconRing: 'shadow-[0_0_15px_rgba(6,182,212,0.4)]',
      accent: 'text-cyan-500',
    },
    {
      icon: '🧠', title: 'Psychology Tracker',
      desc: 'Log your mindset, discipline score and emotional state for every trade. Break bad habits.',
      gradient: 'from-violet-500 to-purple-600',
      glow: 'hover:shadow-[0_0_35px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_35px_rgba(139,92,246,0.15)]',
      border: 'hover:border-violet-400/60 dark:hover:border-violet-500/40',
      iconRing: 'shadow-[0_0_15px_rgba(139,92,246,0.4)]',
      accent: 'text-violet-500',
    },
    {
      icon: '🎯', title: 'Risk Management',
      desc: 'Built-in R:R calculator, position sizer, max drawdown alerts and daily loss limits.',
      gradient: 'from-amber-500 to-orange-500',
      glow: 'hover:shadow-[0_0_35px_rgba(245,158,11,0.2)] dark:hover:shadow-[0_0_35px_rgba(245,158,11,0.15)]',
      border: 'hover:border-amber-400/60 dark:hover:border-amber-500/40',
      iconRing: 'shadow-[0_0_15px_rgba(245,158,11,0.4)]',
      accent: 'text-amber-500',
    },
    {
      icon: '📅', title: 'Daily Review',
      desc: 'Structured end-of-day prompts to reflect, review, and improve your process every session.',
      gradient: 'from-rose-500 to-pink-600',
      glow: 'hover:shadow-[0_0_35px_rgba(244,63,94,0.2)] dark:hover:shadow-[0_0_35px_rgba(244,63,94,0.15)]',
      border: 'hover:border-rose-400/60 dark:hover:border-rose-500/40',
      iconRing: 'shadow-[0_0_15px_rgba(244,63,94,0.4)]',
      accent: 'text-rose-500',
    },
    {
      icon: '🏆', title: 'Goal Tracking',
      desc: 'Set monthly profit targets and milestones. Track streaks and stay accountable.',
      gradient: 'from-teal-500 to-emerald-600',
      glow: 'hover:shadow-[0_0_35px_rgba(20,184,166,0.2)] dark:hover:shadow-[0_0_35px_rgba(20,184,166,0.15)]',
      border: 'hover:border-teal-400/60 dark:hover:border-teal-500/40',
      iconRing: 'shadow-[0_0_15px_rgba(20,184,166,0.4)]',
      accent: 'text-teal-500',
    },
  ]

  return (
    <section className="relative px-6 pb-24 overflow-hidden">
      {/* Background neon blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-500/8 dark:bg-violet-500/6 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/8 dark:bg-cyan-500/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
            bg-violet-50 dark:bg-violet-500/10
            border border-violet-200 dark:border-violet-500/20
            text-violet-600 dark:text-violet-400
            shadow-[0_0_15px_rgba(139,92,246,0.1)]
            text-xs font-semibold uppercase tracking-wider mb-4">
            ✦ Everything You Need
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Your trading edge,
            <br />
            <span className="bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent
              drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              finally visible
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
            Every tool you need to understand your trades, sharpen your strategy, and grow your account consistently.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group relative rounded-2xl p-6
                bg-white dark:bg-gray-900/70 backdrop-blur-sm
                border border-gray-200/80 dark:border-white/8
                ${f.border} ${f.glow}
                hover:-translate-y-1.5
                transition-all duration-300 cursor-pointer overflow-hidden`}
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-2xl mb-4 ${f.iconRing} group-hover:scale-105 transition-transform duration-300`}>
                {f.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>

              <div className={`mt-4 flex items-center gap-1 text-xs font-semibold ${f.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                Explore feature
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
