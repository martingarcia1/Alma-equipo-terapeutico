import { contacto, navegacion } from '../data'
import Icon from './Icon'

function Footer() {
  return (
    <footer className="bg-bosque pt-16 pb-8 text-crema/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <span className="font-serif text-4xl font-semibold tracking-[0.14em] text-crema">ALMA</span>
          <p className="mt-1 text-xs tracking-[0.24em] uppercase">Equipo Terapéutico</p>
          <p className="mt-5 max-w-xs font-serif text-xl text-crema italic">
            Un espacio pensado para acompañar, contener y transformar.
          </p>
        </div>

        <nav aria-label="Secciones">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-terracota-claro uppercase">Secciones</p>
          <ul className="space-y-2">
            {navegacion.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-terracota-claro uppercase">Contacto</p>
          <ul className="space-y-2">
            <li>
              <a href={contacto.whatsapp} target="_blank" rel="noreferrer" className="hover:text-white">
                WhatsApp · {contacto.telefono}
              </a>
            </li>
            <li>
              <a href={contacto.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
                Instagram · {contacto.instagramUsuario}
              </a>
            </li>
            <li>{contacto.direccion}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-crema/15 px-5 pt-6 text-center text-sm text-crema/60 md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} ALMA Equipo Terapéutico</p>

        <p>
          Desarrollado por{' '}
          <a
            href="https://www.sergiomartin.com.ar"
            target="_blank"
            rel="noreferrer"
            title="Desarrollador de Software"
            className="font-semibold text-crema/80 transition-colors hover:text-terracota-claro"
          >
            Sergio Martín García
          </a>
          <span className="mx-2 text-crema/30">·</span>
          <a
            href="https://www.instagram.com/juda.solutions/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram de Juda Solutions"
            className="inline-flex items-center gap-1 align-middle transition-colors hover:text-terracota-claro"
          >
            <Icon name="instagram" size={16} />
            juda.solutions
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
