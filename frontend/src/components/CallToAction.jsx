import { contacto } from '../data'
import Sprout from './Sprout'
import { Button, Reveal } from './ui'

function CallToAction() {
  return (
    <section className="px-5 py-10">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-terracota to-[#b5785b] px-8 py-14 shadow-elevada md:px-16 md:py-20">
        <Sprout className="pointer-events-none absolute -right-6 -bottom-6 w-48 opacity-25 md:w-64" />
        <div className="relative max-w-2xl">
          <h2 className="text-4xl leading-tight text-white md:text-5xl">
            Dar el primer paso también es parte del proceso
          </h2>
          <p className="mt-5 text-lg text-white/85">
            Contanos qué está pasando y te orientamos sobre el mejor camino para empezar. Estamos
            para escucharte.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={contacto.whatsapp} external icon="habla" variant="claro">
              Escribinos por WhatsApp
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default CallToAction
