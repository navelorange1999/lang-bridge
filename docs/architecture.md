# Architecture & File Structure

```
src/
  pages/
    index.astro                — landing page with animated Hello World (Typed.js)
    diff/
      index.astro              — comparison tool, sidebar + detail layout, query params control state
  layouts/
    BaseLayout.astro           — root layout, loads site-shell CDN, fonts, meta
  components/
    HeroCodeBlock.astro        — dark code display block for landing page hero
    LanguagePills.astro        — pill-button language selector for landing page
    Sidebar.astro              — concept navigation sidebar, grouped by category
    LanguageSelector.astro     — language pair selector (auto-submit)
    ConceptBlock.astro         — two-column code comparison, sections aligned by blank lines
    CodeBlock.astro            — single-language code block (utility component)
  content/
    config.ts                  — Zod schema definition
    concepts/
      {category}/{concept}/{language}.yaml
  utils/
    strings.ts                 — capitalize() utility
public/
  favicon/                     — brand assets from @chankay/brand-assets
package/                       — local monorepo packages (site-shell, brand-assets)
tailwind.config.mjs            — Tailwind config + site-shell token mappings
astro.config.mjs               — Astro configuration
tsconfig.json                  — TypeScript strict + path aliases
```

## Data Flow

```
getCollection('concepts')
  → parse entry.id to extract category / concept / language
  → aggregate into Map<conceptId, { title, category, order, languages }>
  → filter to concepts that exist in both the from and to languages
  → Sidebar renders navigation list
  → ConceptBlock renders two-column comparison for the active concept
  → client-side JS handles concept switching + URL updates
```
