# Portfolio 2026

Personal portfolio site built with React, TypeScript, and Vite.

## Stack

- **Framework**: React 19 + TypeScript
- **Build**: Vite
- **Linting**: ESLint (flat config) with typescript-eslint, react-hooks, react-refresh
- **Formatting**: Prettier (integrated via eslint-plugin-prettier)

## Commands

```bash
npm run dev          # start dev server (http://localhost:5173)
npm run build        # type-check + production build
npm run preview      # preview production build locally
npm run lint         # check for lint errors
npm run lint:fix     # auto-fix lint errors
npm run format       # format all files with Prettier
npm run format:check # check formatting without writing
```

## Code Style

Prettier config (`.prettierrc`):

- No semicolons
- Single quotes
- 2-space indent
- Trailing commas (ES5)
- 100-char print width

ESLint warnings for Prettier violations — run `npm run lint:fix` or `npm run format` to resolve.

## Project Structure

```
src/
  assets/           # photos and project screenshots (WebP used by the site; PNG/JPG sources kept
                    #   for scripts/convert-images.js)
  components/
    sections/       # full-page sections (NavBar, Hero, About, Principles,
    │               #   Experience, Skillset, Work, Contact)
    ui/             # reusable primitives (Button, PrincipleCard, ProjectCard, ProjectModal,
                    #   ResumeModal, SectionLabel, SkillBar, StatItem)
  data/             # all site content as typed TS exports (one file per section, plus resumes.ts)
  hooks/            # useModalBehavior (focus trap/return, scroll lock, Escape), useModalClose
  types/            # shared TypeScript interfaces (src/types/index.ts)
  App.tsx           # root — skip link + sections in order
  index.css         # global design tokens (CSS custom properties), resets, focus + motion rules
  main.tsx          # entry point (imports self-hosted fonts)
public/
  favicon.svg, og-image.jpg, robots.txt
scripts/
  convert-images.js # PNG/JPG -> WebP via sharp
```

Page sections rendered in order: NavBar → Hero → About → Principles → Experience → Skillset → Work → Contact.

## Styling

- **CSS Modules** — each component has a co-located `.module.css` file.
- **Global tokens** — all design values live in `src/index.css` as CSS custom properties (`--color-*`, `--font-*`, `--text-*`, `--space-*`, `--ease-*`). Use tokens; do not hardcode values.
- **Design palette**: dark background (`#000`), warm text (`#ede8e3`), red accent (`#cb132c`).
- **Typography**: `Cormorant Garamond` (serif, headings) + `Inter` (sans, body), self-hosted via `@fontsource`.
- **Layout**: `.container` and `.siteFrame` are the two global layout classes defined in `index.css`. Max content width is `1280px`.

## Data Architecture

All content is decoupled from components. Each section reads from a matching file in `src/data/`:

| File            | Exports                      |
| --------------- | ---------------------------- |
| `nav.ts`        | `nav: NavData`               |
| `hero.ts`       | `hero: HeroData`             |
| `about.ts`      | `about: AboutData`           |
| `principles.ts` | `principles: PrinciplesData` |
| `experience.ts` | `experience: ExperienceData` |
| `skillset.ts`   | `skillset: SkillsetData`     |
| `work.ts`       | `work: WorkData`             |
| `contact.ts`    | `contact: ContactData`       |
| `resumes.ts`    | `resumes: ResumeOption[]`    |

All interfaces are defined in `src/types/index.ts`. To add or edit content, update the data file only — do not hardcode content in components.

## Accessibility and security conventions

- Section titles render as `<h2>` through `SectionLabel`; pass `headingId` and set
  `aria-labelledby` on the `<section>`. Don't add other `<h2>`s inside a section.
- Modals use `useModalBehavior` + `useModalClose`. Don't reimplement focus handling per modal.
- Use `:focus-visible` (global style in `index.css`); never remove outlines without a replacement.
- Animations must respect `prefers-reduced-motion` (handled globally in `index.css`).
- Keep small text at 4.5:1 contrast or better; use `--color-accent-text`, not `--color-accent`.
- The production CSP lives in `vite.config.ts`. Update it if you add an external host.
