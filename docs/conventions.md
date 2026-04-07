# Development Conventions

## Package Manager

- Use **pnpm**. Do not use npm or yarn.
- `@chankay/site-shell` and `@chankay/brand-assets` are local monorepo packages located in the `package/` directory.

## TypeScript

- Strict mode is enabled (extends `astro/tsconfigs/strict`).
- `tsconfig.json` defines path aliases `@components/*` and `@layouts/*`, but the codebase consistently uses **relative imports**. Keep it consistent — new code should also use relative paths.

## Astro Components

- Every component must define a `Props` interface in its frontmatter and destructure via `Astro.props`.
- All pages use `BaseLayout` (`src/layouts/BaseLayout.astro`) as the root layout. It loads site-shell CDN resources, fonts, and meta tags.
- There are two pages: `src/pages/index.astro` (landing page) and `src/pages/diff/index.astro` (comparison tool). The comparison tool uses `?concept=`, `?from=`, and `?to=` query params for state.

## Content Collections

- The only collection is `concepts`, with type `data` (YAML).
- Data is fetched via `getCollection('concepts')`. In `index.astro`, `entry.id` is parsed to extract category / concept / language.
- Schema changes must be applied to both `src/content/config.ts` and all existing YAML files.

## Styling

- **Use only Tailwind utility classes** — no global CSS files.
- Component-level `<style>` blocks are only for fine-tuning the Astro `<Code>` component and interactive effects.
- Colors must use site-shell semantic tokens (see [site-shell.md](site-shell.md)). The only exception is the code block dark background (`bg-gray-950`).
- Use Tailwind's default breakpoints for responsive layout. Code comparison area uses `grid-cols-1 md:grid-cols-2`.

## Client-Side Interaction

- Concept switching, URL updates, and hover highlighting are all handled in the `<script>` block at the bottom of `index.astro`, using native DOM APIs and `history.pushState()`.
- Do not introduce frontend frameworks (React / Vue / Svelte). Use Astro `<script>` tags with vanilla JS for interactivity.
- Support Astro View Transitions by listening for `astro:after-swap` to re-bindinteractive behavior.

## Build & Dev

```bash
pnpm dev       # start dev server
pnpm build     # production build
pnpm preview   # preview production build
```
