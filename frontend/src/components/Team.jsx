import { equipo } from '../data'
import { Reveal, Section, SectionHeading } from './ui'

const iniciales = (nombre) => {
  const partes = nombre.trim().split(/\s+/)
  return (partes[0][0] + (partes.length > 1 ? partes.at(-1)[0] : '')).toUpperCase()
}

function Team() {
  return (
    <Section id="equipo">
      <SectionHeading
        center
        eyebrow="Equipo"
        title="Profesionales que te acompañan"
        text="Un equipo comprometido, en formación constante, que comparte una misma forma de cuidar."
      />

      <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
        {equipo.map((p, i) => (
          <Reveal key={p.id} delay={i * 100}>
            <article className="group text-center">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[200px] overflow-hidden rounded-t-full rounded-b-3xl bg-gradient-to-b from-salvia-claro to-arena shadow-suave transition duration-300 group-hover:-translate-y-1 group-hover:shadow-elevada">
                {p.foto ? (
                  <img src={p.foto} alt={p.nombre} loading="lazy" className="size-full object-cover" />
                ) : (
                  <span className="grid size-full place-items-center font-serif text-5xl text-salvia-oscuro/60">
                    {iniciales(p.nombre)}
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-2xl">{p.nombre}</h3>
              <p className="mt-1 inline-block rounded-full bg-terracota-claro px-3 py-0.5 text-sm font-bold text-terracota">
                {p.area}
              </p>
              <p className="mt-2 text-sm text-texto-suave">{p.matricula}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Team
