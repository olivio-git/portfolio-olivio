export const es = {
  nav: {
    work: "Trabajo",
    services: "Servicios",
    contact: "Contacto",
  },
  hero: {
    greeting: "¡Hola! Soy desarrollador full-stack desde Bolivia!",
    name: "Olivio Subelza",
    role: "Desarrollador Full-Stack ( Frontend / Backend / Mobile )",
    cta_work: "Ver trabajo",
    cta_contact: "Hablemos",
    cta_cv: "CV",
  },
  about: {
    label: "Sobre mí",
    title: "¿Quién soy?",
    bio: [
      "Soy Olivio, desarrollador *full-stack* de Tarija, Bolivia. Lo que más me gusta es agarrar una idea suelta y convertirla en *algo que la gente termina usando de verdad* — desde la primera pantalla hasta el backend que la sostiene.",
      "Trabajo con *React*, *Node.js* y *React Native*, pero más que las herramientas me importa resolver bien el problema de fondo: código que se entiende, interfaces que se sienten cómodas y sistemas que aguantan cuando crecen. Siempre ando buscando el próximo reto para seguir mejorando.",
    ],
    timeline_label: "Mi camino",
    timeline: [
      { year: "2023", text: "Terminé el bootcamp Full Stack (Soy Henry) y entré a CBA Tarija como desarrollador Full-Stack." },
      { year: "2024", text: "Freelance en R&R: backend multitenant con Node.js y WebSockets, más una app móvil en React Native." },
      { year: "2025", text: "Arranqué mi proyecto de grado (ERP con 6 microservicios, Kafka e IA) y entré a TPS Intermotors como Frontend & Coordinador Técnico." },
      { year: "2026", text: "Egresé de Ingeniería de Sistemas en la UPDS." },
    ],
  },
  projects: {
    title: "Proyectos seleccionados",
    view_case: "Ver caso de estudio",
    view_code: "Código",
    view_demo: "Demo en vivo",
    status: {
      live: "En vivo",
      wip: "En progreso",
      archived: "Archivado",
    },
    type: {
      product: "Producto",
      client: "Cliente",
      game: "Juego",
      library: "Librería",
    },
  },
  services: {
    title: "¿En qué puedo ayudarte?",
    sub: "Desarrollo productos completos, desde la idea hasta el deploy.",
    items: [
      {
        title: "MVPs & Productos",
        desc: "Llevamos tu idea a producción rápido. Stack moderno, código limpio.",
      },
      {
        title: "APIs & Backend",
        desc: "APIs REST o GraphQL, microservicios, autenticación, bases de datos.",
      },
      {
        title: "Apps Web & Móvil",
        desc: "React, React Native, interfaces que funcionan bien en cualquier dispositivo.",
      },
    ],
  },
  tech: {
    label: "Stack",
    title: "Tecnologías que uso",
    sub: "Las herramientas con las que construyo productos día a día.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Móvil",
      devops: "DevOps & Herramientas",
    },
  },
  contact: {
    title: "Hablemos",
    sub: "¿Tenés un proyecto en mente? Escribime.",
    email_label: "Email",
    or: "o encontrame en",
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      message_placeholder: "Contame sobre tu proyecto...",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado! Te respondo pronto.",
      error: "Algo salió mal. Intentá de nuevo o escribime directo.",
    },
  },
  footer: {
    built: "Construido con",
    rights: "Todos los derechos reservados.",
  },
} as const;
