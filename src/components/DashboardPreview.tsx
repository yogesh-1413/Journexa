export default function DashboardPreview() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <div className="text-center mb-8">
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            — Live Preview —
          </p>
        </div>

        <div className="relative group">
          {/* Outer neon glow ring */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 rounded-3xl opacity-20 dark:opacity-30 blur-sm group-hover:opacity-40 dark:group-hover:opacity-50 transition-opacity duration-500" />

          <div className="relative rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/80 backdrop-blur-sm shadow-2xl overflow-hidden">

            {/* Window chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 bg-gray-100 dark:bg-gray-800/80 border-b border-gray-200 dark:border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-400 shadow-[0_0_6px_rgba(248,113,113,0.8)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
              <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <div className="ml-4 h-5 rounded-lg bg-gray-200 dark:bg-gray-700 w-48" />
              <div className="ml-auto flex gap-2">
                <div className="h-5 w-16 rounded-lg bg-gray-200 dark:bg-gray-700" />
                <div className="h-5 w-10 rounded-lg bg-emerald-500/30 dark:bg-emerald-500/20" />
              </div>
            </div>

            {/* Dashboard body */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* P&L Gradient Card */}
              <div className="md:col-span-1 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-600 p-5 text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
                <div className="relative">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Total P&L</div>
                  <div className="text-4xl font-black mb-1">+$24,830</div>
                  <div className="text-sm opacity-80 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    +12.4% this month
                  </div>
                  <div className="mt-4 text-xs opacity-60">vs. last month: +$21,390</div>
                </div>
              </div>

              {/* Mini stats grid */}
              <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Win Rate', value: '68.4%', color: 'text-emerald-500', glow: 'shadow-[0_0_15px_rgba(16,185,129,0.12)]', bar: 'bg-emerald-500', width: 'w-[68%]' },
                  { label: 'Profit Factor', value: '2.31', color: 'text-cyan-500', glow: 'shadow-[0_0_15px_rgba(6,182,212,0.12)]', bar: 'bg-cyan-500', width: 'w-[70%]' },
                  { label: 'Avg RR', value: '1:2.4', color: 'text-violet-500', glow: 'shadow-[0_0_15px_rgba(139,92,246,0.12)]', bar: 'bg-violet-500', width: 'w-[60%]' },
                  { label: 'Total Trades', value: '142', color: 'text-amber-500', glow: 'shadow-[0_0_15px_rgba(245,158,11,0.12)]', bar: 'bg-amber-500', width: 'w-[55%]' },
                ].map(s => (
                  <div key={s.label} className={`rounded-xl bg-gray-50 dark:bg-gray-800/80 p-4 ${s.glow} dark:${s.glow} border border-gray-100 dark:border-white/5`}>
                    <div className={`text-2xl font-black ${s.color} mb-0.5`}>{s.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{s.label}</div>
                    <div className="h-1 rounded-full bg-gray-200 dark:bg-gray-700">
                      <div className={`h-1 rounded-full ${s.bar} ${s.width}`} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Trade list */}
              <div className="md:col-span-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 overflow-hidden border border-gray-100 dark:border-white/5">
                <div className="px-4 py-3 border-b border-gray-200 dark:border-white/5 flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Recent Trades</span>
                  <span className="text-xs text-emerald-500 dark:text-emerald-400 font-semibold cursor-pointer hover:underline">View All →</span>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-white/5">
                  {[
                    { pair: 'AAPL', dir: 'LONG',  pnl: '+$840',   rr: '1:3.2', time: '09:32 AM', win: true },
                    { pair: 'TSLA', dir: 'SHORT', pnl: '-$210',   rr: '1:0.8', time: '10:15 AM', win: false },
                    { pair: 'SPY',  dir: 'LONG',  pnl: '+$1,240', rr: '1:4.1', time: '11:05 AM', win: true },
                  ].map((trade) => (
                    <div key={trade.pair + trade.time} className="flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`px-2 py-0.5 rounded-md text-xs font-bold ${trade.win ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.2)]' : 'bg-red-100 dark:bg-red-500/20 text-red-500 shadow-[0_0_8px_rgba(239,68,68,0.2)]'}`}>{trade.dir}</div>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{trade.pair}</span>
                        <span className="text-gray-400 text-xs hidden sm:block">{trade.time}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400 text-xs hidden sm:block">RR {trade.rr}</span>
                        <span className={`font-bold ${trade.win ? 'text-emerald-500' : 'text-red-500'}`}>{trade.pnl}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
