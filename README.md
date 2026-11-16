# Portfolio 2026

Personal portfolio site for Ansel Colvin, built with React 19, TypeScript, and Vite.

## Getting started

Requires Node 22+ (see `.nvmrc`).

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # type-check + production build into dist/
npm run preview      # serve the production build locally
npm run lint         # ESLint
npm run format       # Prettier
```

## How it's organised

- `src/data/` holds all site content as typed exports, one file per section. To change copy, edit
  the data file, not the component.
- `src/components/sections/` are the page sections; `src/components/ui/` are reusable pieces.
- `src/index.css` holds the global design tokens (colors, type scale, spacing). Components use
  tokens from there rather than hardcoded values.
- `src/hooks/` holds shared hooks (modal focus trap, scroll lock, and close animation).
- `scripts/convert-images.js` converts source PNG/JPG screenshots to WebP (`node scripts/convert-images.js`).

See `CLAUDE.md` for the full conventions.

## Production notes

- Fonts are self-hosted via `@fontsource`; there are no third-party requests at runtime.
- The production build injects a strict Content Security Policy `<meta>` tag (see
  `vite.config.ts`). If you add an external script, style, image, or font host, allow it there.
- `frame-ancestors` cannot be set from a `<meta>` tag. Set it as an HTTP header at your host
  (for example `Content-Security-Policy: frame-ancestors 'none'`).
