import { servicios, valores } from '../data'
import Icon from './Icon'
import { Reveal, Section, SectionHeading } from './ui'

// Diagrama: la persona en el centro y las áreas alrededor, trabajando en conjunto.
function Orbita() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm pb-6 sm:max-w-md">
      <div aria-hidden="true" className="absolute inset-[12%] rounded-full border-2 border-dashed border-salvia/40" />
      <div aria-hidden="true" className="absolute inset-[24%] rounded-full bg-salvia-claro/60" />
      <div className="absolute inset-[30%] grid place-items-center rounded-full bg-salvia-oscuro p-4 text-center shadow-elevada">
        <p className="font-serif text-xl leading-tight text-crema sm:text-2xl">
          La persona
          <br />
          <span className="text-terracota-claro italic">y su familia</span>
        </p>
      </div>

      {servicios.map((s, i) => {
        const angulo = ((-90 + (i * 360) / servicios.length) * Math.PI) / 180
        return (
          <div
            key={s.id}
            className="absolute flex w-28 -translate-x-1/2 -translate-y-8 flex-col items-center gap-1.5 text-center"
            style={{ left: `${50 + 38 * Math.cos(angulo)}%`, top: `${50 + 38 * Math.sin(angulo)}%` }}
          >
            <span className="grid size-14 place-items-center rounded-full bg-white text-salvia-oscuro shadow-suave ring-4 ring-crema sm:size-16">
              <Icon name={s.icono} size={26} />
            </span>
            <span className="text-xs leading-tight font-bold text-salvia-oscuro sm:text-sm">{s.titulo}</span>
          </div>
        )
      })}
    </div>
  )
}

function About() {
  return (
    <Section id="nosotros" className="bg-white">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Nosotros"
            title="Una mirada integral para acompañar cada proceso"
            text="En ALMA creemos que cada proceso terapéutico es único. Por eso reunimos a profesionales de distintas disciplinas que piensan y trabajan en conjunto, con un mismo objetivo: que cada persona pueda desplegar todo su potencial."
          />
          <Reveal delay={100}>
            <blockquote className="border-l-4 border-terracota pl-6 font-serif text-2xl text-salvia-oscuro italic md:text-3xl">
              “No trabajamos sobre un diagnóstico: acompañamos a una persona, con su historia y su
              familia.”
            </blockquote>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <Orbita />
        </Reveal>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {valores.map((v, i) => (
          <Reveal key={v.titulo} delay={i * 120}>
            <article className="group h-full rounded-3xl bg-crema p-8 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-elevada">
              <div className="flex items-center justify-between">
                <span className="grid size-14 place-items-center rounded-2xl bg-salvia-claro text-salvia-oscuro transition group-hover:bg-salvia-oscuro group-hover:text-crema">
                  <Icon name={v.icono} size={26} />
                </span>
                <span className="font-serif text-4xl text-terracota/50">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-3xl">{v.titulo}</h3>
              <p className="mt-2 text-texto-suave">{v.texto}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default About
