export default function StatsBar() {
  return (
    <section className="px-6 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Neon glow border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 via-cyan-600 to-violet-600 opacity-50 dark:opacity-70 blur-sm rounded-3xl" />

          <div className="relative rounded-3xl bg-gray-950 dark:bg-gray-900 border border-white/10 p-10 text-center overflow-hidden">
            {/* Background blobs inside */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-32 bg-emerald-500/15 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-cyan-500/15 rounded-full blur-3xl" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl" />
            </div>

            <p className="relative text-xs font-bold text-emerald-400 uppercase tracking-[0.25em] mb-8
              drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
              Trusted by traders worldwide
            </p>

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '2M+',   label: 'Trades Journaled',      color: 'from-emerald-400 to-teal-300' },
                { value: '$4.2B', label: 'Volume Tracked',        color: 'from-cyan-400 to-blue-300' },
                { value: '94%',   label: 'Better Decisions',      color: 'from-violet-400 to-purple-300' },
                { value: '10K+',  label: 'Active Members',        color: 'from-amber-400 to-yellow-300' },
              ].map(s => (
                <div key={s.label} className="group">
                  <div className={`text-4xl md:text-5xl font-black bg-gradient-to-b ${s.color} bg-clip-text text-transparent
                    group-hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.5)] transition-all duration-300`}>
                    {s.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
