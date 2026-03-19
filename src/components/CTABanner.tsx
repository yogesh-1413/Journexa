export default function CTABanner() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Neon glow behind */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-600 opacity-60 dark:opacity-80 blur-lg rounded-3xl" />

          <div className="relative rounded-3xl bg-gradient-to-br from-emerald-600 via-cyan-600 to-violet-700 p-12 md:p-16 text-center text-white overflow-hidden">

            {/* Inner blobs */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-16 translate-y-16" />
            </div>

            {/* Decorative chart icon */}
            <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 mb-6
              shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l4-8 4 4 4-8" />
              </svg>
            </div>

            <h2 className="relative text-4xl md:text-5xl font-black mb-4 leading-tight">
              Ready to find your edge?
            </h2>
            <p className="relative text-emerald-100/90 text-lg mb-8 max-w-xl mx-auto">
              Join 10,000+ traders already journaling with Journexa.{' '}
              <span className="text-white font-semibold">No credit card required.</span>
            </p>

            <a href="#"
              className="relative inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl
                bg-white text-emerald-700 text-base font-bold
                shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_8px_40px_rgba(0,0,0,0.2)]
                hover:shadow-[0_0_0_1px_rgba(255,255,255,0.5),0_8px_60px_rgba(0,0,0,0.3)]
                hover:scale-105 active:scale-100 transition-all duration-200">
              Start Journaling Free Today
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <p className="relative mt-4 text-xs text-emerald-200/60">
              Free forever plan · No credit card · Setup in 2 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
