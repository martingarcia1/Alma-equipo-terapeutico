// Datos institucionales. Fuente: perfil de Instagram @alma.equipoterapeutico
// TODO: completar dirección, horarios, equipo y fotos con la información real.

export const contacto = {
  telefono: '381 629-6390',
  whatsapp: 'https://wa.me/5493816296390',
  instagram: 'https://www.instagram.com/alma.equipoterapeutico/',
  instagramUsuario: '@alma.equipoterapeutico',
  direccion: 'Dirección a confirmar',
  horarios: 'Lunes a viernes · horario a confirmar',
}

// Dirección exacta (o nombre tal como figura en Google Maps) para el mapa y "Cómo llegar".
export const ubicacion = {
  consulta: 'San Miguel de Tucumán, Tucumán, Argentina',
}

export const navegacion = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Áreas' },
  { href: '#como-trabajamos', label: 'Cómo trabajamos' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#contacto', label: 'Contacto' },
]

export const servicios = [
  {
    id: 'to',
    titulo: 'Terapia Ocupacional',
    descripcion:
      'Acompañamos el desarrollo de la autonomía en las actividades de la vida diaria, el juego y el aprendizaje.',
    temas: ['Autonomía', 'Integración sensorial', 'Motricidad'],
    icono: 'manos',
  },
  {
    id: 'fono',
    titulo: 'Fonoaudiología',
    descripcion:
      'Evaluación y tratamiento del lenguaje, el habla, la voz y la comunicación en todas las etapas de la vida.',
    temas: ['Lenguaje', 'Habla', 'Comunicación'],
    icono: 'habla',
  },
  {
    id: 'nutri',
    titulo: 'Nutrición',
    descripcion:
      'Planes alimentarios personalizados y educación nutricional para cuidar la salud de cada persona y su familia.',
    temas: ['Hábitos saludables', 'Planes personalizados', 'Educación alimentaria'],
    icono: 'hoja',
  },
  {
    id: 'psico',
    titulo: 'Psicología',
    descripcion:
      'Un espacio de escucha y contención para niños, adolescentes, adultos y familias, respetando los tiempos de cada uno.',
    temas: ['Escucha', 'Contención', 'Orientación familiar'],
    icono: 'corazon',
  },
  {
    id: 'psicoped',
    titulo: 'Psicopedagogía',
    descripcion:
      'Abordaje de las dificultades en el aprendizaje, en articulación con la familia y la escuela.',
    temas: ['Aprendizaje', 'Acompañamiento escolar', 'Estrategias de estudio'],
    icono: 'libro',
  },
]

export const valores = [
  {
    titulo: 'Acompañar',
    texto: 'Caminamos junto a cada paciente y su familia durante todo el proceso terapéutico.',
    icono: 'manos',
  },
  {
    titulo: 'Contener',
    texto: 'Ofrecemos un espacio cálido y seguro, donde cada persona se sienta escuchada.',
    icono: 'corazon',
  },
  {
    titulo: 'Transformar',
    texto: 'Trabajamos de forma interdisciplinaria para generar cambios reales y sostenidos.',
    icono: 'brote',
  },
]

export const proceso = [
  {
    titulo: 'Primer encuentro',
    texto: 'Escuchamos la consulta, conocemos a la persona y a su familia, y lo que necesitan.',
    icono: 'habla',
  },
  {
    titulo: 'Evaluación',
    texto: 'Cada área evalúa desde su mirada para comprender la situación de forma integral.',
    icono: 'lupa',
  },
  {
    titulo: 'Plan en equipo',
    texto: 'Diseñamos juntos objetivos y estrategias, en diálogo con la familia y la escuela.',
    icono: 'equipo',
  },
  {
    titulo: 'Acompañamiento',
    texto: 'Sostenemos el proceso, revisamos avances y celebramos cada paso logrado.',
    icono: 'brote',
  },
]

// Fotos: guardarlas en public/galeria/ y poner la ruta en `imagen` (ej: '/galeria/sesion.jpg').
export const galeria = [
  { titulo: 'Sesiones terapéuticas', imagen: null, icono: 'manos' },
  { titulo: 'Nuestros espacios', imagen: null, icono: 'casa' },
  { titulo: 'Trabajo en equipo', imagen: null, icono: 'equipo' },
  { titulo: 'Aprender jugando', imagen: null, icono: 'libro' },
  { titulo: 'Contenido para familias', imagen: null, icono: 'corazon' },
]

// Reemplazar por los profesionales reales. `foto` es opcional (ej: '/equipo/nombre.jpg').
export const equipo = servicios.map((s) => ({
  id: s.id,
  nombre: 'Nombre Apellido',
  area: s.titulo,
  matricula: 'M.P. 0000',
  foto: null,
}))
