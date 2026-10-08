import { contacto, servicios } from '../data'
import Icon from './Icon'
import Sprout from './Sprout'
import { Button, Reveal } from './ui'

function Hero() {
  return (
    <section id="inicio" className="relative -mt-20 overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div aria-hidden="true" className="absolute -top-40 -left-40 size-[32rem] rounded-full bg-salvia-claro blur-3xl" />
      <div aria-hidden="true" className="absolute -right-32 bottom-0 size-[26rem] rounded-full bg-terracota-claro blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold text-salvia-oscuro shadow-suave">
            <span className="size-2 rounded-full bg-terracota" />
            Equipo terapéutico interdisciplinario
          </span>

          <h1 className="mt-6 text-5xl leading-[1.05] font-medium md:text-6xl lg:text-7xl">
            Un espacio pensado para{' '}
            <em className="text-terracota">acompañar</em>, <em className="text-terracota">contener</em> y{' '}
            <em className="text-terracota">transformar</em>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-texto-suave md:text-xl">
            Cinco disciplinas trabajando juntas para que cada persona crezca a su ritmo, con su
            familia acompañada en cada paso.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={contacto.whatsapp} external icon="habla">
              Pedir una entrevista
            </Button>
            <Button href="#servicios" variant="secundario">
              Conocer las áreas
            </Button>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-salvia-oscuro">
            {['Abordaje interdisciplinario', 'Atención personalizada', 'Trabajo con la familia'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Icon name="brote" size={18} className="text-terracota" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-full max-w-xs sm:max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem] bg-gradient-to-b from-salvia-claro via-arena to-terracota-claro shadow-elevada">
            <Sprout className="absolute inset-x-0 bottom-6 mx-auto w-3/4" />
          </div>

          <div className="absolute top-16 -left-4 animate-flotar rounded-2xl bg-white px-4 py-3 shadow-elevada motion-reduce:animate-none sm:-left-10">
            <p className="text-xs font-bold uppercase tracking-widest text-texto-suave">Áreas</p>
            <p className="font-serif text-3xl font-semibold text-salvia-oscuro">{servicios.length}</p>
          </div>

          <div className="absolute -right-2 bottom-24 flex animate-flotar items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-elevada [animation-delay:-3.5s] motion-reduce:animate-none sm:-right-8">
            <span className="grid size-10 place-items-center rounded-full bg-terracota-claro text-terracota">
              <Icon name="corazon" size={20} />
            </span>
            <p className="text-sm leading-tight font-bold text-salvia-oscuro">
              Cada paso
              <br />
              <span className="font-semibold text-texto-suave">es un logro</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
