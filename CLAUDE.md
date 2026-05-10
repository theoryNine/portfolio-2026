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
  assets/           # static assets (photos, sitegrab PNGs, icons)
  components/
    sections/       # full-page sections (NavBar, Hero, About, Principles,
    │               #   Experience, Skillset, Work, Contact)
    ui/             # reusable primitives (Button, PrincipleCard, ProjectCard,
                    #   SectionLabel, SkillBar, StatItem)
  data/             # all site content as typed TS exports (one file per section)
  types/            # shared TypeScript interfaces (src/types/index.ts)
  App.tsx           # root — composes sections in order
  index.css         # global design tokens (CSS custom properties) + resets
  main.tsx          # entry point
public/
  favicon.svg
  icons.svg         # SVG sprite used for icons
```

Page sections rendered in order: NavBar → Hero → About → Principles → Experience → Skillset → Work → Contact.

## Styling

- **CSS Modules** — each component has a co-located `.module.css` file.
- **Global tokens** — all design values live in `src/index.css` as CSS custom properties (`--color-*`, `--font-*`, `--text-*`, `--space-*`, `--ease-*`). Use tokens; do not hardcode values.
- **Design palette**: dark background (`#000`), warm text (`#ede8e3`), red accent (`#cb132c`).
- **Typography**: `Cormorant Garamond` (serif, headings) + `Inter` (sans, body) via Google Fonts.
- **Layout**: `.container` and `.siteFrame` are the two global layout classes defined in `index.css`. Max content width is `1280px`.

## Data Architecture

All content is decoupled from components. Each section reads from a matching file in `src/data/`:

| File | Exports |
|---|---|
| `nav.ts` | `nav: NavData` |
| `hero.ts` | `hero: HeroData` |
| `about.ts` | `about: AboutData` |
| `principles.ts` | `principles: PrinciplesData` |
| `experience.ts` | `experience: ExperienceData` |
| `skillset.ts` | `skillset: SkillsetData` |
| `work.ts` | `work: WorkData` |
| `contact.ts` | `contact: ContactData` |

All interfaces are defined in `src/types/index.ts`. To add or edit content, update the data file only — do not hardcode content in components.
