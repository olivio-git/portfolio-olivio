export const en = {
  nav: {
    work: "Work",
    services: "Services",
    contact: "Contact",
  },
  hero: {
    greeting: "Hello! I'm a full-stack developer based in Bolivia!",
    name: "Olivio Subelza",
    role: "Full-Stack Developer ( Frontend / Backend / Mobile )",
    cta_work: "See work",
    cta_contact: "Let's talk",
    cta_cv: "CV",
  },
  about: {
    label: "About me",
    title: "Who am I?",
    bio: [
      "I'm Olivio, a *full-stack* developer from Tarija, Bolivia. What I enjoy most is taking a loose idea and turning it into *something people actually end up using* — from the very first screen all the way down to the backend that holds it up.",
      "I work with *React*, *Node.js* and *React Native*, but more than the tools I care about solving the real problem underneath: code that's easy to follow, interfaces that feel comfortable, and systems that hold up as they grow. I'm always chasing the next challenge to keep getting better.",
    ],
    timeline_label: "My journey",
    timeline: [
      { year: "2023", text: "Finished the Full Stack bootcamp (Soy Henry) and joined CBA Tarija as a Full-Stack developer." },
      { year: "2024", text: "Freelance at R&R: multitenant backend with Node.js and WebSockets, plus a React Native mobile app." },
      { year: "2025", text: "Kicked off my degree project (an ERP with 6 microservices, Kafka and AI) and joined TPS Intermotors as Frontend & Technical Coordinator." },
      { year: "2026", text: "Graduated in Systems Engineering from UPDS." },
    ],
  },
  projects: {
    title: "Selected work",
    view_case: "View case study",
    view_code: "Code",
    view_demo: "Live demo",
    status: {
      live: "Live",
      wip: "In progress",
      archived: "Archived",
    },
    type: {
      product: "Product",
      client: "Client",
      game: "Game",
      library: "Library",
    },
  },
  services: {
    title: "How I can help",
    sub: "I build complete products, from idea to deployment.",
    items: [
      {
        title: "MVPs & Products",
        desc: "Take your idea to production fast. Modern stack, clean code.",
      },
      {
        title: "APIs & Backend",
        desc: "REST or GraphQL APIs, microservices, auth, databases.",
      },
      {
        title: "Web & Mobile Apps",
        desc: "React, React Native, interfaces that work great on any device.",
      },
    ],
  },
  tech: {
    label: "Stack",
    title: "Technologies I use",
    sub: "The tools I use to build products every day.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile",
      devops: "DevOps & Tools",
    },
  },
  contact: {
    title: "Let's talk",
    sub: "Have a project in mind? Reach out.",
    email_label: "Email",
    or: "or find me on",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      message_placeholder: "Tell me about your project...",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
      error: "Something went wrong. Try again or email me directly.",
    },
  },
  footer: {
    built: "Built with",
    rights: "All rights reserved.",
  },
} as const;
