# Contributing to folio-ui

## Development Setup

```bash
git clone https://github.com/pulkit-verma/folio-ui.git
cd folio-ui
pnpm install
pnpm dev
```

The docs site runs at `http://localhost:3000`.

## Adding a Component

Each component requires 5 things:

1. **Component file** at `apps/www/src/components/ui/[name].tsx`
2. **Registry mirror** at `registry/default/ui/[name].tsx` (identical to #1)
3. **Doc page** at `apps/www/src/app/docs/components/[name]/page.tsx`
4. **Registry entry** in `registry.json`
5. **Nav entry** in `apps/www/src/lib/docs-nav.ts` (alphabetical order)

## Design Rules

All components must follow the editorial design system:

- No `rounded-*` classes (all corners are sharp)
- `border-2 border-line` for card-level borders
- `shadow-hard` / `shadow-hard-sm` for hard offset shadows
- `font-serif` for headings, `font-mono text-xs uppercase tracking-widest` for labels
- `bg-paper` / `bg-popover` for warm surface colors
- `"use client"` directive on all Radix-wrapping components
- `React.forwardRef` with `displayName` on all forwarded components

See [CLAUDE.md](CLAUDE.md) for the complete design token reference.

## Pull Requests

- One component per PR when possible
- Ensure `pnpm build` passes with zero errors
- Keep registry mirror and www component identical
- Add the component to both `registry.json` and `docs-nav.ts`
