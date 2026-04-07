# folio-ui — Design System Rules

> Components for the editorial web. An open-source design system built on shadcn/ui.

## Token Definitions

Tokens are defined in `apps/www/src/app/globals.css` using CSS custom properties:

- **Colors**: `:root` block contains both shadcn standard tokens (`--background`, `--primary`, etc.) and editorial extensions (`--paper`, `--ink`, `--accent-warm`, `--quote-bg`, etc.)
- **Typography**: `@theme inline` exposes `--font-serif` (Instrument Serif), `--font-sans` (Space Grotesk), `--font-mono` (Space Mono)
- **Radius**: All `--radius-*` tokens set to `0px` — no border-radius anywhere
- **Shadows**: `--shadow-hard` (8px 8px 0), `--shadow-hard-sm` (4px 4px 0), `--shadow-hard-hover` (6px 6px 0) — hard offset, zero blur
- **Format**: Hex color values, exposed to Tailwind v4 via `@theme inline` with `--color-*` prefix

Figma Variables (in file `aAlDYgWu3sR28hZBELHdyi`) mirror these tokens exactly: Collections "Colors" (29 vars), "Radius" (6 vars), "Spacing" (16 vars).

## Component Library

- **Location**: `apps/www/src/components/ui/` (docs site) and `registry/default/ui/` (registry source)
- **Architecture**: React + forwardRef, Radix UI primitives for a11y, CVA for variant management, `cn()` for class merging
- **Variants follow consistent naming**: `default`, `secondary`, `outline`, `ghost`, `accent`, `destructive`, `link`
- **Sizes follow consistent naming**: `sm`, `default`, `lg`, `icon`

### Key editorial design rules for components:
- **Borders**: Always `border-2 border-line` for card-level components. `border` (1px) for smaller elements like badges.
- **Shadows**: Cards get `shadow-hard`. Buttons get `shadow-hard-sm`. Shadows shift on hover/active (`translate-x/y`).
- **Typography in components**: Headings use `font-serif`. Labels/nav/badges use `font-mono text-xs uppercase tracking-widest`. Body text uses `font-sans` (default).
- **No border-radius**: Never add `rounded-*` classes. All corners are sharp.
- **Color palette**: Warm tones only. No cold grays. Use `--paper`/`--paper-2` for backgrounds, `--ink` for text, `--accent-warm` for highlights.

## Frameworks & Libraries

- **Framework**: React 19 + Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`)
- **Primitives**: Radix UI
- **Variant management**: class-variance-authority (CVA)
- **Class merging**: clsx + tailwind-merge via `cn()` utility
- **Icons**: Lucide React
- **Build**: Turborepo monorepo, pnpm workspace

## Icon System

- **Library**: `lucide-react`
- **Usage**: `import { IconName } from "lucide-react"`
- **Sizing**: Via `[&_svg]:size-4` in component classes or explicit `size={16}` prop

## Styling Approach

- **Methodology**: Tailwind utility classes composed via CVA variants
- **Global styles**: `globals.css` with `:root` tokens + `@theme inline` + `@layer base`
- **Responsive**: Mobile-first with `md:` and `lg:` breakpoints
- **Key patterns**:
  - `shadow-hard` / `shadow-hard-sm` for the signature hard offset shadow
  - `border-2 border-line` for editorial borders
  - `font-serif` / `font-mono` / `font-sans` for the three-voice type system
  - `text-muted-foreground` for secondary text, `text-muted-2` for meta/timestamps
  - `bg-paper` / `bg-paper-2` for surface colors

## Project Structure

```
folio-ui/
├── apps/www/                   # Next.js docs site
│   └── src/
│       ├── app/                # Pages (globals.css, layout, page)
│       ├── components/ui/      # Component source (47 components)
│       └── lib/utils.ts        # cn() utility
├── registry/
│   └── default/
│       ├── ui/                 # Registry component source (mirrors apps/www)
│       ├── lib/utils.ts        # Registry utils
│       ├── example/            # Demo files (TBD)
│       └── hooks/              # Custom hooks (TBD)
├── registry.json               # shadcn registry manifest (48 items)
├── PLAN.md                     # Master implementation plan
├── turbo.json                  # Turborepo config
└── package.json                # Root workspace
```

## Design-First Workflow

Before coding any new component:
1. Inspect shadcn baseline in Figma via MCP (`get_design_context`, `get_variable_defs`)
2. Apply editorial tokens in Figma via `use_figma`
3. Screenshot-verify via `get_screenshot`
4. Only then write React code
5. Link back via `add_code_connect_map`

Figma file key: `aAlDYgWu3sR28hZBELHdyi`
