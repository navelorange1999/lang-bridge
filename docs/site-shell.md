# Site Shell Integration

`BaseLayout.astro` gives both pages a shared Chankay navbar, footer, and theme tokens. On the demo gateway, the v1 head marker and the header and footer slots let the gateway compose the shell into the initial HTML. The gateway also supplies matching styles, tokens, and theme controls. Gateway asset URLs use the commit-specific release path, including favicon links. The standalone build uses the v2.0.0 site-shell web components and CDN tokens.

## Requirements

1. **Use the shared shell in `BaseLayout.astro`** for the page header and footer. Standalone builds use `<chankay-site-shell>`:
   - Header: `<chankay-site-shell position="header" site-name="LangBridge" repo-url="...">`
   - Footer: `<chankay-site-shell position="footer">`

2. **Always use site-shell theme tokens for colors.** Do not hardcode color values (e.g. no `text-indigo-700`, `bg-purple-50`, etc.). Instead use the semantic token classes defined in `tailwind.config.mjs`:
   - `text-primary`, `bg-primary`, `text-primary-foreground` — brand primary color
   - `text-foreground`, `bg-background` — page-level text and background
   - `bg-card`, `text-card-foreground`, `border-border` — card surfaces
   - `text-muted-foreground`, `bg-muted` — secondary/muted text and surfaces
   - `bg-secondary`, `text-secondary-foreground` — section headers, callout backgrounds
   - `bg-accent`, `text-accent-foreground` — accent badges and highlights
   - `bg-destructive`, `text-destructive` — warnings and error states
   - `ring-ring`, `border-input` — form controls
   - Opacity modifiers like `bg-primary/15` or `text-destructive/80` are acceptable.

3. **Token source**: The gateway injects the shared tokens stylesheet. The standalone build loads `@chankay/site-shell/tokens.css` from the CDN in `<head>`. The Tailwind config maps these variables so they are available as utility classes.

4. **Brand assets**: Favicon and logo files from `@chankay/brand-assets` live in `public/favicon/`. The standalone shell reads the brand logo from `/favicon/website-logo.svg` by default. The gateway supplies the shell's brand logo separately.

5. **Font stack**: The token file defines `--font-sans` (Montserrat), `--font-serif` (Merriweather), and `--font-mono` (Source Code Pro). These are mapped to `font-sans`, `font-serif`, and `font-mono` in Tailwind.

## What NOT to do

- Keep the gateway's v1 marker and slots and the standalone web components in the shared layout.
- Do not use Tailwind's built-in color palette (e.g. `indigo-600`, `purple-100`, `blue-50`, `amber-50`) for UI chrome. Use the semantic token classes instead.
- Do not inline the tokens.css file; load it from the versioned CDN URL.
- Do not use `latest` for the site-shell CDN imports; always pin an explicit version.
- The only exception for non-token colors is the code block dark background (`bg-gray-900 text-gray-100`), which is intentionally outside the token system.
