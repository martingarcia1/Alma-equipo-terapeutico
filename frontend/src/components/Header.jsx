import { useEffect, useState } from 'react'
import { contacto, navegacion } from '../data'

function Header() {
  const [abierto, setAbierto] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const cerrar = () => setAbierto(false)

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        scrolled || abierto ? 'bg-crema/95 shadow-suave backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" onClick={cerrar} className="flex flex-col leading-none">
          <span className="font-serif text-3xl font-semibold tracking-[0.14em] text-salvia-oscuro">
            ALMA
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.24em] text-texto-suave">
            Equipo Terapéutico
          </span>
        </a>

        <button
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          onClick={() => setAbierto(!abierto)}
        >
          <span className={`h-0.5 w-6 bg-salvia-oscuro transition ${abierto ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-salvia-oscuro transition ${abierto ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-salvia-oscuro transition ${abierto ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>

        <nav
          className={`${
            abierto ? 'flex' : 'hidden'
          } absolute inset-x-0 top-20 flex-col gap-1 border-t border-salvia-oscuro/10 bg-crema px-5 pt-4 pb-6 shadow-suave lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navegacion.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={cerrar}
              className="py-2 font-semibold text-texto transition-colors hover:text-terracota lg:py-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href={contacto.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-3 rounded-full bg-salvia-oscuro px-5 py-2.5 text-center font-bold text-white transition hover:bg-bosque lg:mt-0"
          >
            Pedir turno
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
