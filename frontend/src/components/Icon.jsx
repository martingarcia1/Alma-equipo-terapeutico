const paths = {
  manos: (
    <path d="M7 11V6a1.5 1.5 0 0 1 3 0v4m0-5a1.5 1.5 0 0 1 3 0v5m0-4a1.5 1.5 0 0 1 3 0v5m0-2a1.5 1.5 0 0 1 3 0v4a7 7 0 0 1-7 7h-1a6 6 0 0 1-5.2-3L3.6 14a1.5 1.5 0 0 1 2.6-1.5L7 14" />
  ),
  habla: (
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.2-4.3A8 8 0 1 1 21 12zM9 11h.01M13 11h.01M17 11h.01" />
  ),
  hoja: <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l7-7" />,
  corazon: (
    <path d="M12 20s-7-4.4-9-9a4.5 4.5 0 0 1 9-3 4.5 4.5 0 0 1 9 3c-2 4.6-9 9-9 9z" />
  ),
  libro: (
    <path d="M12 6c-2-1.5-5-2-8-2v14c3 0 6 .5 8 2m0-14c2-1.5 5-2 8-2v14c-3 0-6 .5-8 2m0-14v14" />
  ),
  brote: (
    <path d="M12 21v-9m0 0c0-4-3-6-7-6 0 4 3 6 7 6zm0-2c0-4 3-7 7-7 0 4-3 7-7 7z" />
  ),
  lupa: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.4-4.4" />
    </>
  ),
  equipo: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 19a6 6 0 0 1 12 0m0-4.5a5 5 0 0 1 6 4.5" />
    </>
  ),
  casa: <path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z" />,
  flecha: <path d="M5 12h14m-5-5 5 5-5 5" />,
  telefono: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  ubicacion: (
    <>
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  reloj: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
}

function Icon({ name, size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  )
}

export default Icon
