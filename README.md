# Rakesh Lal Das — Portfolio

Cinematic portfolio for editor **Rakesh Lal Das** (Faltu · Flight Attendant · Nazar).
Built with Next.js (App Router) + TypeScript, Tailwind CSS, GSAP ScrollTrigger,
Framer Motion and Lenis smooth scroll.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Edit content

All copy, projects, credits, capabilities and social links live in one file:

**`data/site.ts`** — the single source of truth.

Anything marked `// TODO:` there is a placeholder the UI hides or neutralises
until you fill it in. Still to add:

- **Email** — `profile.email` (enables the contact link + mailto)
- **Location** — `profile.location`
- **Social URLs** — `socials[]` (IMDb, LinkedIn, Instagram, YouTube, Vimeo).
  Placeholders show as non-clickable chips until a real URL is set.
- **Project details** — cover images, format, descriptions, gallery, external
  links for each film in `projects[]`.
- **Résumé** — drop a PDF in `/public` and set `profile.resumeUrl`.

### Images

- Profile photo: `public/images/rakesh-lal-das.png`
- Project stills: add to `public/images/projects/` and point `cover` / `gallery`
  at them. Until then each project renders a styled film-frame placeholder.

### Contact form

`app/api/contact/route.ts` validates input but does **not** deliver messages
yet — wire an email/DB/webhook at the `TODO(integration)` marker.
