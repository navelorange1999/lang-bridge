# Design Philosophy & Page Layout

## Design Philosophy

Minimalist and spacious. Let typography and whitespace do the work — avoid decorative borders, colored cards, badges, and emoji icons. The only accent color is `primary`, used sparingly on interactive elements (sidebar active state, links). Everything else is `foreground`, `muted-foreground`, and `border`.

## Page Layout

Two-part layout below the sticky navbar:

1. **Sticky navbar** — `<chankay-site-shell position="header">`, sticky at `top: 0`.
2. **Body** — full-width flex container:
   - **Left sidebar** (`<aside>`, `w-60`): sticky below navbar. Top section holds the `LanguageSelector` (language pair displayed as `JavaScript / Python` using transparent inline selects, auto-submit on change, no button). Below that, a flat list of concept links — no section header, no grouping. Active item: `bg-primary/10 text-primary font-medium`.
   - **Main area** (`<main>`): content centered at `max-w-3xl` with generous padding (`py-14 px-10`, larger on `lg`). Displays one concept at a time.

The active concept is controlled by the `?concept=` URL query param. If omitted, the first available concept is shown. Sidebar links preserve `?from=` and `?to=`.

Do **not** render all concepts on a single page.

## Component Design Rules

- **ConceptBlock**: bare `<article>`. Large `text-3xl` title, small muted subtitle, then a two-column code grid with generous `mt-10` spacing. "Mental Shift" and "Gotchas" are plain text sections with small uppercase `tracking-widest` headings — no colored backgrounds, no borders, no icons. Gotcha items use a tiny `bg-border` dot as bullet.
- **CodeBlock**: a small uppercase `tracking-widest` language label above a `bg-gray-950 text-gray-300 rounded-lg` code area. No tab bar, no header background, no badge.
- **LanguageSelector**: two transparent `<select>` elements separated by a `/` character. No labels, no border, no button (auto-submits on change). `<noscript>` fallback provides a submit link.
