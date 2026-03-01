# Demo6 — Storybook Theme Pipeline

Demo for a lecture: design team maintains a theme in Storybook, builds it, and delivers to a product project.

## Project Structure

Monorepo with two sub-projects:
- `Storybook/` — theme source + Storybook stories (MUI 7, Storybook 8, Vite 6)
- `Demo_project/` — React app consuming the built theme (MUI 7, Vite 7, React Router 7)

Theme source: `Storybook/src/theme/` (palette.ts, typography.ts, components/*.ts, index.ts)
Theme build output: `Storybook/theme-build/`
Theme destination: `Demo_project/src/theme/` (overwritten by pipeline)

## Key Commands (run from root)

- `npm run build:theme` — build theme via tsup → `Storybook/theme-build/`
- `npm run deliver:theme` — copy built theme into Demo_project
- `npm run pipeline` — build + deliver in one step
- `npm run storybook` — launch Storybook on :6006
- `npm run dev` — launch Demo_project on :5173

## Architecture Decisions

- All color tokens live in `Storybook/src/theme/palette.ts` — single source of truth
- tsup builds ESM with `.js`/`.d.ts` extensions (outExtension configured explicitly)
- `@mui/material`, `@mui/material/styles`, `@emotion/*` are tsup externals — must be installed in Demo_project
- Component overrides: one file per component in `Storybook/src/theme/components/`
- No tests — this is a demo project

## Gotchas

- `Demo_project/src/theme/` is auto-generated — do NOT edit directly, edit `Storybook/src/theme/` and run pipeline
- MUI versions must match between Storybook and Demo_project (both use @mui/material ^7.3.8)
- tsup may output `.mjs`/`.d.mts` without the explicit `outExtension` config in tsup.config.ts
- `skipLibCheck: true` needed in both tsconfigs for the copied theme types to work

## Sub-project CLAUDE.md files

- `agents/orchestrator/CLAUDE.md` — orchestrator agent instructions
- `docs/mui_docs/CLAUDE.md` — local MUI docs usage
