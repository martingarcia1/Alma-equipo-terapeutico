import { contacto, servicios } from '../data'
import Icon from './Icon'
import { Reveal, Section, SectionHeading } from './ui'

function Services() {
  return (
    <Section id="servicios">
      <SectionHeading
        center
        eyebrow="Áreas de atención"
        title="¿En qué podemos acompañarte?"
        text="Cada área aporta su mirada específica, y juntas construyen un abordaje a la medida de cada persona."
      />

      <div className="flex flex-wrap justify-center gap-6">
        {servicios.map((s, i) => (
          <Reveal
            key={s.id}
            delay={(i % 3) * 120}
            className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <article className="group relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-suave transition duration-300 hover:-translate-y-1.5 hover:shadow-elevada">
              <div
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
                  i % 2 ? 'bg-terracota' : 'bg-salvia'
                }`}
              />
              <span
                className={`grid size-16 place-items-center rounded-2xl ${
                  i % 2 ? 'bg-terracota-claro text-terracota' : 'bg-salvia-claro text-salvia-oscuro'
                }`}
              >
                <Icon name={s.icono} size={30} />
              </span>
              <h3 className="mt-6 text-3xl">{s.titulo}</h3>
              <p className="mt-3 text-texto-suave">{s.descripcion}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.temas.map((t) => (
                  <li key={t} className="rounded-full bg-crema px-3 py-1 text-xs font-semibold text-salvia-oscuro">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <p className="text-texto-suave">
          ¿No sabés por dónde empezar?{' '}
          <a
            href={contacto.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-salvia-oscuro underline decoration-terracota decoration-2 underline-offset-4 hover:text-terracota"
          >
            Escribinos y te orientamos
          </a>
        </p>
      </Reveal>
    </Section>
  )
}

export default Services
