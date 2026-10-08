import { contacto, navegacion } from '../data'

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

      <p className="mx-auto mt-14 max-w-6xl border-t border-crema/15 px-5 pt-6 text-center text-sm text-crema/60">
        © {new Date().getFullYear()} ALMA Equipo Terapéutico
      </p>
    </footer>
  )
}

export default Footer
