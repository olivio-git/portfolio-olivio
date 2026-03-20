# portfolio-olivio

Portfolio personal de [Olivio Subelza](https://oliviodev.com) — Desarrollador Full-Stack.

## Stack

- [Astro](https://astro.build) — framework principal
- TypeScript
- Tailwind CSS
- i18n — soporte en español e inglés

## Características

- Diseño minimalista con soporte para modo oscuro/claro
- Multiidioma (ES / EN)
- Secciones: Hero, Proyectos, Servicios, Contacto
- CV descargable
- Deploy automático via GitHub Actions → VPS (Caddy)

## Correr en local

```bash
npm install
npm run dev
```

El servidor de desarrollo corre en `http://localhost:4321`.

## Comandos

| Comando           | Acción                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Instala dependencias                        |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`  |
| `npm run build`   | Build de producción en `./dist/`            |
| `npm run preview` | Preview del build antes de deployar         |

## Estructura

```
/
├── public/              # Assets estáticos (imágenes, CV, favicon)
├── src/
│   ├── components/      # Componentes Astro (Navbar, Hero, etc.)
│   ├── content/         # Proyectos en Markdown
│   ├── i18n/            # Traducciones ES/EN
│   ├── layouts/         # Layout principal
│   ├── pages/           # Rutas ([lang]/index.astro)
│   └── styles/          # CSS global
└── .github/workflows/   # CI/CD — deploy automático al hacer push a main
```

## Deploy

Cada `git push` a `main` dispara un workflow de GitHub Actions que:

1. Instala dependencias y hace build
2. Copia el `dist/` al VPS via SCP
3. Caddy sirve los archivos en `https://oliviodev.com` con HTTPS automático
