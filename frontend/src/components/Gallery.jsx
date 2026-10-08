import { contacto, galeria } from '../data'
import Icon from './Icon'
import { Button, Reveal, Section, SectionHeading } from './ui'

// Mosaico: la primera foto ocupa el doble de espacio en pantallas grandes.
const tamanos = [
  'md:col-span-2 md:row-span-2',
  '',
  '',
  '',
  '',
]

const fondos = [
  'from-salvia-claro to-salvia/40',
  'from-terracota-claro to-arena',
  'from-arena to-salvia-claro',
  'from-salvia-claro to-terracota-claro',
  'from-terracota-claro to-salvia-claro',
]

function Gallery() {
  return (
    <Section id="en-accion" className="bg-white">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="ALMA en acción"
          title="Así acompañamos, día a día"
          text="Sesiones, espacios y momentos compartidos: una ventana a lo que pasa en ALMA."
        />
        <Reveal className="mb-12 md:mb-16">
          <Button href={contacto.instagram} external icon="instagram" variant="secundario">
            Seguinos en Instagram
          </Button>
        </Reveal>
      </div>

      <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[200px]">
        {galeria.map((g, i) => (
          <Reveal key={g.titulo} delay={i * 80} className={`h-full ${tamanos[i] ?? ''}`}>
            <figure className="group relative h-full overflow-hidden rounded-3xl">
              {g.imagen ? (
                <img
                  src={g.imagen}
                  alt={g.titulo}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 group-hover:scale-105"
                />
              ) : (
                <div className={`grid size-full place-items-center bg-gradient-to-br ${fondos[i % fondos.length]}`}>
                  <Icon name={g.icono} size={i === 0 ? 72 : 48} className="text-salvia-oscuro/40" />
                </div>
              )}
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bosque/80 to-transparent p-5 pt-12 font-serif text-xl text-crema md:text-2xl">
                {g.titulo}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Gallery
