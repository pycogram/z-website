export function OccultGlyph({ className = "", size = 400 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 400 400"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
    >
      {/* Outer rings */}
      <circle cx="200" cy="200" r="192" />
      <circle cx="200" cy="200" r="168" strokeDasharray="2 5" />
      <circle cx="200" cy="200" r="140" />
      <circle cx="200" cy="200" r="110" strokeDasharray="1 7" />
      <circle cx="200" cy="200" r="80" />
      <circle cx="200" cy="200" r="50" strokeDasharray="2 3" />

      {/* Star of David / dual triangle — agent network topology */}
      <polygon points="200,40 348,284 52,284" />
      <polygon points="200,360 52,116 348,116" strokeWidth="0.35" opacity="0.55" />

      {/* Radial spokes — 12 agents in a ring */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        const r = (n: number) => Math.round(n * 1000) / 1000;
        const x1 = r(200 + Math.cos(a) * 50);
        const y1 = r(200 + Math.sin(a) * 50);
        const x2 = r(200 + Math.cos(a) * 192);
        const y2 = r(200 + Math.sin(a) * 192);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.3" opacity="0.6" />;
      })}

      {/* Agent nodes on outer ring */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const r = (n: number) => Math.round(n * 1000) / 1000;
        const x = r(200 + Math.cos(a) * 140);
        const y = r(200 + Math.sin(a) * 140);
        return <circle key={i} cx={x} cy={y} r="3" fill="currentColor" opacity="0.5" />;
      })}

      {/* Center marker */}
      <circle cx="200" cy="200" r="6" fill="currentColor" opacity="0.6" />
      <text
        x="200"
        y="222"
        textAnchor="middle"
        fontSize="11"
        fontFamily="JetBrains Mono, monospace"
        letterSpacing="3"
        opacity="0.7"
      >
        Z-AI
      </text>
    </svg>
  );
}
