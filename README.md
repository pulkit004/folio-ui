# folio-ui

Components for the editorial web. An open-source design system built on [shadcn/ui](https://ui.shadcn.com) that brings the structure and warmth of print design to the screen.

## Features

- **47 components** styled with an editorial aesthetic — warm paper tones, serif headings, hard offset shadows, sharp corners
- **Three-voice typography** — Instrument Serif for headings, Space Grotesk for body, Space Mono for labels
- **shadcn registry** — install individual components via the shadcn CLI, no npm package required
- **Radix UI primitives** — full accessibility out of the box
- **Tailwind CSS v4** — CSS-first configuration, no `tailwind.config.js`

## Quick Start

```bash
# Add the folio-ui registry to your project
npx shadcn@latest add https://folio-ui.com/r/button

# Or add multiple components
npx shadcn@latest add https://folio-ui.com/r/card https://folio-ui.com/r/badge
```

## Components

Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Command, Context Menu, Dialog, Drawer, Dropdown Menu, Hover Card, Input, Input OTP, Label, Menubar, Navigation Menu, Pagination, Popover, Progress, Radio Group, Resizable, Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Spinner, Switch, Table, Tabs, Textarea, Toggle, Toggle Group, Tooltip, Typography

## Documentation

Visit [folio-ui.com](https://folio-ui.com) for full documentation, live previews, and installation guides.

## Design Philosophy

folio-ui applies the conventions of print editorial design to web components:

- **No border-radius** — all corners are sharp, signaling intention
- **2px ink borders** — the same weight used in broadsheet newspapers
- **Hard offset shadows** — 8px offset, zero blur, like a paper stack
- **Warm palette** — cream paper backgrounds, ink-dark text, warm orange accents

## Development

```bash
git clone https://github.com/pulkit-verma/folio-ui.git
cd folio-ui
pnpm install
pnpm dev
```

The docs site runs at `http://localhost:3000`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and guidelines.

## License

[MIT](LICENSE)
