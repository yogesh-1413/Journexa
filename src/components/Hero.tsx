interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <section className="relative pt-36 pb-24 px-6 overflow-hidden">

      {/* ── Neon background blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 left-1/4 w-[500px] h-[500px] bg-emerald-500/15 dark:bg-emerald-400/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-32 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 dark:bg-cyan-400/10 rounded-full blur-[90px]" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/10 dark:bg-violet-400/8 rounded-full blur-[120px]" />
        {/* Neon grid lines overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
          bg-emerald-50/80 dark:bg-emerald-500/10
          border border-emerald-300/60 dark:border-emerald-500/30
          text-emerald-700 dark:text-emerald-400
          shadow-[0_0_15px_rgba(16,185,129,0.15)] dark:shadow-[0_0_20px_rgba(16,185,129,0.1)]
          text-xs font-semibold tracking-wider uppercase mb-7 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,1)] animate-pulse" />
          Now in Beta — Free for Early Traders
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6">
          <span className="text-gray-900 dark:text-white">Trade Smarter.</span>
          <br />
          <span className="relative bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent
            drop-shadow-[0_0_30px_rgba(16,185,129,0.4)]">
            Journal Better.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
          Journexa is the all-in-one trading journal built for serious traders. Track every trade,
          analyze your edge, and finally understand{' '}
          <span className="text-gray-800 dark:text-gray-200 font-semibold">what makes you profitable</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl
              bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-base font-bold
              shadow-[0_0_30px_rgba(16,185,129,0.45)] hover:shadow-[0_0_50px_rgba(16,185,129,0.65)]
              hover:scale-105 active:scale-100 transition-all duration-200">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Start Journaling Free
          </a>
          <a href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl
              bg-white/80 dark:bg-white/5 backdrop-blur-sm
              border border-gray-200 dark:border-white/10
              text-gray-800 dark:text-gray-200 text-base font-semibold
              hover:border-emerald-400 dark:hover:border-emerald-500/60
              hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]
              hover:text-emerald-600 dark:hover:text-emerald-400
              transition-all duration-200">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo
          </a>
        </div>

        {/* Stats row */}
        <div className="inline-flex flex-wrap justify-center gap-px rounded-2xl overflow-hidden
          border border-gray-200 dark:border-white/10
          shadow-xl dark:shadow-[0_0_40px_rgba(16,185,129,0.05)]
          bg-gray-200 dark:bg-white/5">
          {[
            { label: 'Trades Logged', value: '2M+', icon: '📊' },
            { label: 'Active Traders', value: '10K+', icon: '👥' },
            { label: 'Avg Win Rate Lift', value: '+34%', icon: '📈' },
            { label: 'Countries', value: '85+', icon: '🌍' },
          ].map((stat) => (
            <div key={stat.label} className="flex-1 min-w-28 bg-white dark:bg-gray-950 px-5 py-4 text-center">
              <div className="text-xl mb-0.5">{stat.icon}</div>
              <div className="text-2xl font-black text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-[11px] text-gray-500 dark:text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
