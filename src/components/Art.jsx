/* Icons, logo and the illustrations of the design, drawn as inline SVG. */

const paths = {
  code: <path d="M8 8 4 12l4 4M16 8l4 4-4 4M13.5 6l-3 12" />,
  pen: <path d="M4 20l4-1L19 8a2.1 2.1 0 0 0-3-3L5 16zM14 7l3 3" />,
  funnel: <path d="M4 5h16l-6 7v6l-4 2v-8z" />,
  bars: <path d="M5 20v-6M10 20V9M15 20v-9M20 20V4" />,
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />,
  arrow: <path d="M4 12h15M13 6l6 6-6 6" />,
  chevron: <path d="m9 6 6 6-6 6" />,
  down: <path d="m6 9 6 6 6-6" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  plus: <path d="M12 7v10M7 12h10" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  book: <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 1 4 17.5zM13 4h5.5A1.5 1.5 0 0 1 20 5.5v12a1.5 1.5 0 0 1-1.5 1.5H13z" />,
  star: <path d="m12 3 2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L3.4 9.3l6-.7z" />,
  like: <path d="M7 11v9H4v-9zM7 11l4-7c1.5 0 2.5 1 2.2 2.6L12.6 10H19a2 2 0 0 1 2 2.3l-1.2 6A2 2 0 0 1 17.8 20H7" />,
  people: <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM15 11a3 3 0 1 0 0-6M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14c3.3 0 6 2.7 6 6" />,
  check: <path d="m5 12 4.5 4.5L19 7" />,
}

export function Icon({ name, className = '', filled = false }) {
  return (
    <svg className={`icon ${className}`} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

export function Logo({ small = false }) {
  return (
    <span className={`logo ${small ? 'small' : ''}`}>
      <svg viewBox="0 0 40 56" aria-hidden="true">
        <path fill="#1d8cf8" d="M20 0 6 14l4 4-6 6 16 32 16-32-6-6 4-4z" />
        <path fill="#7cc0ff" d="M20 0v56L10 18l4-4z" />
        <path fill="#0b5cc4" d="M20 0l6 14 4 4-10 38z" />
      </svg>
      <span className="logo-text"><b>FAROBIY</b><small>IT ACADEMY</small></span>
    </span>
  )
}

/** The low-poly iceberg from the contact block. */
export function Iceberg({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 240 140" aria-hidden="true">
      <polygon points="20,90 70,30 95,55 120,10 150,50 175,35 225,90" fill="#2b8cf4" />
      <polygon points="70,30 95,55 60,90" fill="#7cc0ff" />
      <polygon points="120,10 150,50 110,90" fill="#a9d6ff" />
      <polygon points="120,10 95,55 110,90" fill="#4fa6ff" />
      <polygon points="175,35 225,90 160,90" fill="#0e63c9" />
      <polygon points="150,50 175,35 160,90 110,90" fill="#1d7be6" />
      <polygon points="20,90 70,30 60,90" fill="#0b55b0" />
      <polygon points="20,90 225,90 200,140 45,140" fill="#bfe1ff" />
      <polygon points="60,90 110,90 95,140 70,140" fill="#e3f2ff" />
      <polygon points="160,90 205,90 185,140 160,140" fill="#9bcdfb" />
      <polygon points="110,90 160,90 150,140 100,140" fill="#d2eaff" />
    </svg>
  )
}

/** A person working at a desk — the course-card illustration, tinted by the card colour. */
export function DeskArt({ accent = '#3a78b5', variant = 0, className = '' }) {
  const shirt = ['#ffffff', '#f6c45a', '#ff8a65', '#ffffff'][variant]
  const hair = ['#2d2a32', '#5b3a29', '#2d2a32', '#7a4b2a'][variant]
  return (
    <svg className={className} viewBox="0 0 200 150" aria-hidden="true">
      <ellipse cx="105" cy="140" rx="85" ry="7" fill="#000" opacity=".08" />
      {/* plant */}
      <rect x="20" y="104" width="20" height="30" rx="3" fill="#fff" stroke="#263238" strokeWidth="1.5" />
      <path d="M30 104c-14-10-12-30-2-36 2 12 6 22 2 36zM30 104c10-14 26-14 30-8-10 2-20 4-30 8zM30 104c-10-6-24-2-26 4 10 0 18-2 26-4z" fill={accent} opacity=".85" />
      {/* desk */}
      <rect x="55" y="88" width="130" height="6" rx="2" fill="#37474f" />
      <rect x="62" y="94" width="5" height="44" fill="#37474f" />
      <rect x="172" y="94" width="5" height="44" fill="#37474f" />
      {/* monitor + laptop */}
      <rect x="112" y="40" width="62" height="40" rx="3" fill="#263238" />
      <rect x="116" y="44" width="54" height="32" rx="1.5" fill="#fff" />
      <rect x="120" y="49" width="26" height="3" rx="1.5" fill={accent} />
      <rect x="120" y="56" width="40" height="3" rx="1.5" fill="#cfd8dc" />
      <rect x="120" y="63" width="32" height="3" rx="1.5" fill="#cfd8dc" />
      <rect x="140" y="80" width="6" height="8" fill="#263238" />
      <path d="M86 74h30l-4 14H90z" fill="#455a64" />
      {/* person */}
      <path d="M70 138l4-34h18l6 34" fill="#37474f" />
      <path d="M68 104c-2-20 6-38 22-38s20 18 18 38z" fill={shirt} stroke="#263238" strokeWidth="1.5" />
      <path d="M96 80c8 2 14 4 22 6l-2 6c-8-1-16-3-22-6z" fill={shirt} stroke="#263238" strokeWidth="1.5" />
      <circle cx="88" cy="52" r="11" fill="#f2c09e" />
      <path d="M77 50c0-9 7-14 14-12 6 1 9 6 8 11-5-4-12-4-22 1z" fill={hair} />
      <rect x="60" y="120" width="36" height="5" rx="2" fill={accent} />
      {/* floating cards */}
      <rect x="150" y="12" width="34" height="22" rx="3" fill="#fff" stroke={accent} strokeWidth="1.5" />
      <rect x="155" y="18" width="16" height="3" rx="1.5" fill={accent} />
      <rect x="155" y="24" width="24" height="3" rx="1.5" fill="#cfd8dc" />
      <circle cx="60" cy="28" r="9" fill={accent} opacity=".25" />
      <path d="M56 28l3 3 6-6" stroke={accent} strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

/** The hand-drawn blue swoosh under the highlighted hero words. */
export function Swoosh() {
  return (
    <svg className="swoosh" viewBox="0 0 220 18" preserveAspectRatio="none" aria-hidden="true">
      <path d="M2 12C60 3 150 2 218 10M30 15c50-6 110-7 150-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}
