const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const glyphs = {
  1: (
    <g {...line}>
      <rect x="28" y="22" width="64" height="46" rx="6" />
      <rect x="42" y="34" width="36" height="26" rx="4" />
      <line x1="60" y1="84" x2="60" y2="68" />
      <circle cx="60" cy="64" r="3.5" fill="currentColor" stroke="none" />
    </g>
  ),
  2: (
    <g {...line}>
      <line x1="18" y1="76" x2="104" y2="76" />
      <line x1="18" y1="76" x2="18" y2="14" />
      <line x1="26" y1="34" x2="104" y2="34" strokeDasharray="4 5" />
      <polyline points="26,60 36,44 46,58 56,26 66,50 76,38 86,64 96,46 104,54" />
    </g>
  ),
  3: (
    <g {...line}>
      <rect x="18" y="16" width="84" height="58" rx="2" />
      <line x1="60" y1="16" x2="60" y2="42" />
      <line x1="60" y1="56" x2="60" y2="74" />
      <circle cx="32" cy="30" r="3" fill="currentColor" stroke="none" />
      <circle cx="88" cy="30" r="3" fill="currentColor" stroke="none" />
      <circle cx="32" cy="62" r="3" fill="currentColor" stroke="none" />
      <line x1="70" y1="56" x2="82" y2="56" />
      <line x1="76" y1="50" x2="76" y2="62" />
    </g>
  ),
  4: (
    <g {...line}>
      <circle cx="60" cy="45" r="31" />
      <line x1="84" y1="45" x2="91" y2="45" />
      <line x1="36" y1="45" x2="29" y2="45" />
      <line x1="80.5" y1="33" x2="86.5" y2="29.5" />
      <line x1="39.5" y1="57" x2="33.5" y2="60.5" />
      <line x1="80.5" y1="57" x2="86.5" y2="60.5" />
      <line x1="39.5" y1="33" x2="33.5" y2="29.5" />
      <line x1="60" y1="45" x2="60" y2="24" />
      <circle cx="60" cy="45" r="3" fill="currentColor" stroke="none" />
    </g>
  ),
};

export default function ProjectGlyph({ variant, className = "" }) {
  return (
    <svg viewBox="0 0 120 90" className={`h-full w-full text-signal ${className}`} aria-hidden="true">
      {glyphs[variant] ?? glyphs[1]}
    </svg>
  );
}