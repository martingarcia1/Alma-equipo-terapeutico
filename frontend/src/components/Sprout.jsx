// Ilustración del brote: el motivo de crecimiento de la marca.
function Sprout({ className = '' }) {
  return (
    <svg viewBox="0 0 200 260" className={className} aria-hidden="true">
      <ellipse cx="100" cy="246" rx="64" ry="9" className="fill-terracota/30" />
      <g className="origin-bottom [transform-box:fill-box] animate-mecer motion-reduce:animate-none">
        <path
          d="M100 246C100 200 95 160 100 92"
          className="fill-none stroke-salvia-oscuro"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path d="M100 176C68 172 46 150 44 120c30 0 52 22 56 56z" className="fill-salvia" />
        <path d="M100 134c32-4 54-26 56-56-30 2-52 24-56 56z" className="fill-salvia-oscuro" />
        <path d="M100 94c-13-12-16-32-6-48 13 12 15 32 6 48z" className="fill-salvia" />
        <path d="M70 150c8 2 18 8 30 22" className="fill-none stroke-crema/60" strokeWidth="2" strokeLinecap="round" />
        <path d="M130 104c-8 2-18 10-30 26" className="fill-none stroke-crema/50" strokeWidth="2" strokeLinecap="round" />
      </g>
      <circle cx="46" cy="70" r="5" className="fill-terracota/60" />
      <circle cx="160" cy="150" r="4" className="fill-terracota/50" />
      <circle cx="150" cy="40" r="3" className="fill-salvia/60" />
    </svg>
  )
}

export default Sprout
