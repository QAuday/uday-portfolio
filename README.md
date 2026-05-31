# Uday Kiran — Developer Portfolio

A modern, performant personal portfolio built with Next.js 16, Tailwind CSS v4, and shadcn/ui. Designed to showcase projects, skills, and experience with smooth animations and a clean, professional aesthetic.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Component Library | shadcn/ui (Radix + Nova preset) |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Package Manager | npm |

## Project Structure

```
uday-portfolio/
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   ├── components/       # Reusable UI components
│   │   └── ui/           # shadcn/ui primitives
│   └── lib/              # Utilities and helpers
├── docs/                 # Architecture notes and design decisions
├── assets/
│   ├── screenshots/      # App screenshots for README / docs
│   └── resume/           # Resume files
└── public/               # Static assets
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev      # Start dev server with hot reload
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Planned Sections

- **Hero** — Animated introduction and call-to-action
- **About** — Background, skills, and personal summary
- **Projects** — Showcase with live demos and source links
- **Experience** — Timeline of professional roles
- **Contact** — Form with validation (React Hook Form + Zod)

## Deployment

Deploy to [Vercel](https://vercel.com) with zero configuration — push to main and it ships.

---

Built by Uday Kiran
