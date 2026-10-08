// Piezas de interfaz compartidas entre secciones.
import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">{children}</div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, text, center = false, light = false }) {
  return (
    <Reveal className={`mb-12 max-w-2xl md:mb-16 ${center ? 'mx-auto text-center' : ''}`}>
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${
          light ? 'text-terracota-claro' : 'text-terracota'
        }`}
      >
        {eyebrow}
      </p>
      <h2 className={`text-4xl leading-tight md:text-5xl ${light ? 'text-crema' : ''}`}>{title}</h2>
      {text && (
        <p className={`mt-5 text-lg ${light ? 'text-crema/80' : 'text-texto-suave'}`}>{text}</p>
      )}
    </Reveal>
  )
}

const variantes = {
  primario: 'bg-salvia-oscuro text-white hover:bg-bosque shadow-suave',
  secundario: 'border-2 border-salvia-oscuro/30 text-salvia-oscuro hover:border-salvia-oscuro hover:bg-white',
  claro: 'bg-white text-salvia-oscuro hover:bg-crema shadow-suave',
}

export function Button({ href, variant = 'primario', icon, external = false, className = '', children }) {
  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-bold transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracota ${variantes[variant]} ${className}`}
    >
      {icon && <Icon name={icon} size={20} />}
      {children}
      <Icon name="flecha" size={18} className="transition-transform group-hover:translate-x-1" />
    </a>
  )
}

// Aparición suave al entrar en pantalla (se desactiva con "reducir movimiento").
export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
