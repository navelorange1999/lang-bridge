# LangBridge

> Learn a new programming language from the one you already know.

LangBridge is a side-by-side programming language comparison tool for developers who already know one language and want to quickly pick up another. Instead of starting from scratch, it maps concepts between languages so you can transfer existing knowledge efficiently.

## Features

- **Side-by-side syntax comparison** — pick any two languages and compare them concept by concept
- **Concept-based learning** — organized by topic (variables, loops, async, etc.), not by language pair
- **Section-aligned code blocks** — code examples are split into matching sections so differences stand out
- **Shareable URLs** — `/?from=typescript&to=python&concept=variables`
- **Sidebar navigation** — concepts grouped by category with a sticky sidebar

## Supported Languages

TypeScript, Python, Go, Rust, C++, Java

## Concepts

| Category | Concepts |
|---|---|
| Basics | Variables, Data Types, Operators, Strings |
| Control Flow | Conditionals, Loops |
| Functions & Organization | Functions, Closures, Modules |
| Data Structures | Arrays, Maps |
| Types & Objects | Structs |
| Advanced | Async, Package Management |

## Tech Stack

- [Astro](https://astro.build/) — static site generation
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [@chankay/site-shell](docs/site-shell.md) — shared navbar, theme tokens, brand assets
- Content Collections + Zod — structured YAML content with validation

## Project Structure

```
src/
  pages/
    index.astro              — single page, query params control state
  layouts/
    BaseLayout.astro         — root layout, site-shell CDN, fonts, meta
  components/
    Sidebar.astro            — concept navigation grouped by category
    LanguageSelector.astro   — language pair selector (auto-submit)
    ConceptBlock.astro       — two-column code comparison
    CodeBlock.astro          — single-language code block
  content/
    config.ts                — Zod schema
    concepts/
      {category}/{concept}/{language}.yaml
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:4321/?from=typescript&to=python`.

## Adding Content

### New Concept

1. Create `src/content/concepts/{category}/{concept}/` with one YAML file per language (all 6)
2. Use the same `title`, `order`, and section IDs across all language files

### New Language

Add a `{language}.yaml` file to every existing concept directory following the same section structure.

See [Concept Content Guidelines](docs/concepts.md) for the full YAML schema and conventions.

## Documentation

- [Project Overview](docs/overview.md)
- [Design & Layout](docs/design.md)
- [Architecture & File Structure](docs/architecture.md)
- [Concept Content Guidelines](docs/concepts.md)
- [Development Conventions](docs/conventions.md)
- [Site Shell Integration](docs/site-shell.md)

## License

MIT
