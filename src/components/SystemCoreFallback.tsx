export function SystemCoreFallback() {
  return (
    <div className="relative grid h-[340px] w-full place-items-center overflow-hidden rounded-xl2 border border-border/60 bg-panel/40 cc-surface">
      <div className="absolute inset-0 opacity-60 cc-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.18),transparent_60%)]" />
      <svg width="220" height="220" viewBox="0 0 220 220" aria-hidden>
        <defs>
          <linearGradient id="ccg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(56,189,248,0.9)" />
            <stop offset="1" stopColor="rgba(167,139,250,0.8)" />
          </linearGradient>
        </defs>
        <circle
          cx="110"
          cy="110"
          r="64"
          fill="rgba(16,20,29,0.8)"
          stroke="url(#ccg)"
          strokeWidth="2"
        />
        <circle
          cx="110"
          cy="110"
          r="82"
          fill="none"
          stroke="rgba(45,212,191,0.35)"
          strokeWidth="2"
        />
        <circle cx="170" cy="80" r="7" fill="rgba(56,189,248,0.9)" />
        <circle cx="55" cy="70" r="7" fill="rgba(45,212,191,0.9)" />
        <circle cx="110" cy="175" r="7" fill="rgba(167,139,250,0.9)" />
      </svg>
      <div className="absolute bottom-3 text-center text-xs font-mono text-muted">
        System Core (static)
      </div>
    </div>
  );
}
