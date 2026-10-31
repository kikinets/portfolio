# Enrique Travesí — portfolio

Personal site in English and Spanish (`/en`, `/es`). Next.js 15 (App Router), TypeScript, Tailwind CSS 4, `motion` for animation, `next-intl` for the locale routes and MDX for case studies.

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
| Portrait (hero and social card) | `public/images/enrique.webp`, `public/images/enrique.png` |
| Page sections and UI pieces | `src/components/sections/*`, `src/components/ui/*` |
| Styles and colour tokens (light and dark) | `src/app/globals.css` |

## Before publishing

1. **CV**: save a PDF without the phone number as `public/Enrique_Travesi_Ortega_CV.pdf` and set `cvAvailable: true`.
2. **Domain**: set `NEXT_PUBLIC_SITE_URL` in Vercel (used by the sitemap, canonical URLs and social cards).

## Add a project

1. Planned or in-progress projects live in `building.items` in `en.ts` and `es.ts`; when one ships, change its `status` and add the repository link to its `pitch`.
2. The featured project is `featured` in the same files; its case study is `src/content/projects/{en,es}/<slug>.mdx`, listed in the `slugs` array of `src/app/[locale]/projects/[slug]/page.tsx` and in `paths` in `src/app/sitemap.ts`.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com: **Add New → Project**, import the repository, keep the defaults (framework: Next.js) and deploy.
3. **Settings → Environment Variables**: `NEXT_PUBLIC_SITE_URL=https://your-domain`.
4. **Settings → Domains** to connect a custom domain.

## Portrait

The portrait is a retouched cut-out of the original photo (background replaced, light and colour corrected, hair outline tidied). To change it, replace the two files in `public/images/` keeping the same names: `enrique.webp` at 1200×1500 and `enrique.png` with a transparent background.
