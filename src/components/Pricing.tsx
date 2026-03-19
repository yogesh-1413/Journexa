export default function Pricing() {
  const plans = [
    {
      name: 'Free', price: '$0', period: 'forever', desc: 'Perfect to get started',
      features: ['Up to 20 trades/month', 'Basic P&L tracking', 'Trade log & notes', 'Mobile app access'],
      cta: 'Start Free',
      ctaClass: 'bg-gray-100 dark:bg-white/8 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-white/10 hover:border-emerald-400 hover:text-emerald-600 dark:hover:border-emerald-500/50 dark:hover:text-emerald-400',
      cardClass: 'bg-white dark:bg-gray-900/70 border-gray-200 dark:border-white/8',
      glowClass: '',
      popular: false,
    },
    {
      name: 'Pro', price: '$12', period: '/month', desc: 'For serious traders',
      features: ['Unlimited trades', 'Advanced analytics', 'Psychology tracker', 'Goal tracking', 'CSV/Broker import', 'Priority support'],
      cta: 'Start Pro — Free Trial',
      ctaClass: 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:scale-[1.02]',
      cardClass: 'bg-white dark:bg-gray-900/80 border-emerald-400/60 dark:border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.12)] dark:shadow-[0_0_50px_rgba(16,185,129,0.1)]',
      glowClass: 'shadow-[0_0_60px_rgba(16,185,129,0.1)]',
      popular: true,
    },
    {
      name: 'Elite', price: '$29', period: '/month', desc: 'For funds & prop traders',
      features: ['Everything in Pro', 'Multi-account support', 'Team dashboard', 'API access', 'Custom reports', 'Dedicated manager'],
      cta: 'Contact Sales',
      ctaClass: 'bg-gray-100 dark:bg-white/8 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-white/10 hover:border-violet-400 hover:text-violet-600 dark:hover:border-violet-500/50 dark:hover:text-violet-400',
      cardClass: 'bg-white dark:bg-gray-900/70 border-gray-200 dark:border-white/8',
      glowClass: '',
      popular: false,
    },
  ]

  return (
    <section className="relative px-6 pb-24 overflow-hidden">
      {/* Background neon blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-64 bg-emerald-500/6 dark:bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
            bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20
            text-cyan-600 dark:text-cyan-400
            shadow-[0_0_12px_rgba(6,182,212,0.1)]
            text-xs font-semibold uppercase tracking-wider mb-4">
            💳 Simple Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-3">
            Invest in your edge
          </h2>
          <p className="text-gray-500 dark:text-gray-400">Start free. Upgrade when you're ready.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1
                ${plan.cardClass} ${plan.glowClass}
                ${plan.popular ? 'scale-[1.03]' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full
                  bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs font-bold
                  shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                  ✦ Most Popular
                </div>
              )}

              <div className="mb-4">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{plan.name}</div>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-400 mb-2 text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{plan.desc}</p>
              </div>

              <div className="border-t border-gray-100 dark:border-white/8 my-5" />

              <ul className="space-y-3 mb-6">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 drop-shadow-[0_0_4px_rgba(16,185,129,0.6)]"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 ${plan.ctaClass}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
