# Enrique Travesí — portfolio

Personal site in English and Spanish (`/en`, `/es`). Next.js 15 (App Router), TypeScript, Tailwind CSS 4, `next-intl` for the locale routes and MDX for case studies.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where things live

| What | File |
| --- | --- |
| Email, LinkedIn, GitHub, CV switch, site URL | `src/content/site.ts` |
| All page copy, English | `src/content/en.ts` |
| All page copy, Spanish | `src/content/es.ts` |
| "Why hire me, explained" weights | `src/content/weights.ts` |
| Case study text | `src/content/projects/{en,es}/<slug>.mdx` |
| Picture credits (shown in the footer) | `src/content/image-credits.json` |
| Styles and colour tokens (light and dark) | `src/app/globals.css` |

## Before publishing

1. **GitHub**: put the profile URL in `site.github` (the links appear on their own).
2. **CV**: save a PDF without the phone number as `public/Enrique_Travesi_Ortega_CV.pdf` and set `cvAvailable: true`.
3. **Domain**: set `NEXT_PUBLIC_SITE_URL` in Vercel (used by the sitemap, canonical URLs and social cards).

## Add a project

1. Add an entry to `work.projects` in both `en.ts` and `es.ts` (title, status, summary, optional picture).
2. For a case-study page, give it a `slug`, write `src/content/projects/en/<slug>.mdx` and `src/content/projects/es/<slug>.mdx`, and add the slug to the `slugs` list in `src/app/[locale]/projects/[slug]/page.tsx` and to `paths` in `src/app/sitemap.ts`.
3. When a planned project ships, change its `status` and add the repository link in the summary or the case study.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com: **Add New → Project**, import the repository, keep the defaults (framework: Next.js) and deploy.
3. **Settings → Environment Variables**: `NEXT_PUBLIC_SITE_URL=https://your-domain`.
4. **Settings → Domains** to connect a custom domain.

## Pictures

All photographs come from Wikimedia Commons under public domain or CC BY-SA 4.0; each is credited in the footer with a link to its source page. They show Madrid and the world of finance, not the projects themselves.
