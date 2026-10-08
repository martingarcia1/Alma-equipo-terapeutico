import { proceso } from '../data'
import Icon from './Icon'
import { Reveal, Section, SectionHeading } from './ui'

function Process() {
  return (
    <Section id="como-trabajamos" className="relative overflow-hidden bg-bosque">
      <div aria-hidden="true" className="absolute -top-32 -right-32 size-96 rounded-full bg-salvia-oscuro blur-3xl" />

      <div className="relative">
        <SectionHeading
          light
          eyebrow="Cómo trabajamos"
          title="Un camino que recorremos juntos"
          text="Desde la primera consulta hasta cada logro, el proceso se construye en equipo: con el paciente, su familia y todos los profesionales involucrados."
        />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute top-8 right-[12%] left-[12%] hidden border-t-2 border-dashed border-crema/25 lg:block"
          />
          <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {proceso.map((p, i) => (
              <li key={p.titulo}>
                <Reveal delay={i * 150}>
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <span className="grid size-16 shrink-0 place-items-center rounded-full bg-terracota text-white ring-8 ring-bosque">
                      <Icon name={p.icono} size={28} />
                    </span>
                    <span className="font-serif text-lg text-terracota-claro italic">Paso {i + 1}</span>
                  </div>
                  <h3 className="mt-4 text-2xl text-crema md:text-3xl">{p.titulo}</h3>
                  <p className="mt-2 text-crema/75">{p.texto}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}

export default Process
