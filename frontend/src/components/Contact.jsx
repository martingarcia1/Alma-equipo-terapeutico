import { contacto, ubicacion } from '../data'
import Icon from './Icon'
import { Button, Reveal, Section, SectionHeading } from './ui'

function Contact() {
  const q = encodeURIComponent(ubicacion.consulta)
  const mapa = `https://www.google.com/maps?q=${q}&output=embed`
  const comoLlegar = `https://www.google.com/maps/dir/?api=1&destination=${q}`

  const items = [
    { icono: 'telefono', label: 'Teléfono / WhatsApp', valor: contacto.telefono, href: contacto.whatsapp },
    { icono: 'instagram', label: 'Instagram', valor: contacto.instagramUsuario, href: contacto.instagram },
    { icono: 'ubicacion', label: 'Dirección', valor: contacto.direccion },
    { icono: 'reloj', label: 'Horarios', valor: contacto.horarios },
  ]

  return (
    <Section id="contacto">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeading
            eyebrow="Contacto y ubicación"
            title="Estamos para escucharte"
            text="Escribinos para coordinar una entrevista inicial o consultar sobre cualquiera de nuestras áreas."
          />
          <Reveal delay={100}>
            <ul className="space-y-5">
              {items.map((it) => (
                <li key={it.label} className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-salvia-claro text-salvia-oscuro">
                    <Icon name={it.icono} />
                  </span>
                  <div>
                    <span className="block text-xs tracking-widest text-texto-suave uppercase">{it.label}</span>
                    {it.href ? (
                      <a
                        href={it.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-salvia-oscuro hover:text-terracota"
                      >
                        {it.valor}
                      </a>
                    ) : (
                      <span className="font-bold text-salvia-oscuro">{it.valor}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={contacto.whatsapp} external icon="habla">
                WhatsApp
              </Button>
              <Button href={comoLlegar} external icon="ubicacion" variant="secundario">
                Cómo llegar
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="h-full">
          <div className="h-full min-h-[360px] overflow-hidden rounded-[2rem] border-8 border-white shadow-elevada">
            <iframe
              title="Mapa de ubicación de ALMA Equipo Terapéutico"
              src={mapa}
              className="size-full min-h-[344px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export default Contact
