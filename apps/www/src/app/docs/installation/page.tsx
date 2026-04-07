import { H1, H2, H3, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/components/docs/component-preview";

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Getting Started</Overline>
        <H1 className="mt-2">Installation</H1>
        <Lead className="mt-3 max-w-2xl">
          Get folio-ui running in your project in under 5 minutes.
        </Lead>
      </div>

      <Separator />

      <div className="space-y-4">
        <H2>Prerequisites</H2>
        <ul className="list-inside list-disc space-y-1 text-sm">
          <li>Node.js 18+</li>
          <li>React 19 + Next.js 15+ (or Vite / Remix)</li>
          <li>Tailwind CSS v4</li>
          <li>shadcn/ui initialized in your project</li>
        </ul>
      </div>

      <div className="space-y-4">
        <H2>New project</H2>
        <p className="max-w-prose text-sm leading-7">
          Start a new Next.js project and initialize shadcn:
        </p>
        <CodeBlock filename="terminal">{`npx create-next-app@latest my-editorial-site
cd my-editorial-site
npx shadcn@latest init`}</CodeBlock>
      </div>

      <div className="space-y-4">
        <H2>Add the editorial theme</H2>
        <p className="max-w-prose text-sm leading-7">
          Replace your <code className="bg-muted px-1 font-mono text-xs">globals.css</code> with
          the folio-ui design tokens. Copy the full token block from the{" "}
          <a href="/docs/theming">theming page</a>, or install the base theme:
        </p>
        <CodeBlock filename="terminal">{`npx shadcn@latest add https://folio-ui.com/r/theme.json`}</CodeBlock>
        <Caption>
          This copies the editorial CSS tokens, font imports, and base layer
          styles into your project.
        </Caption>
      </div>

      <div className="space-y-4">
        <H2>Add fonts</H2>
        <p className="max-w-prose text-sm leading-7">
          folio-ui uses three Google Fonts. The theme CSS imports them
          automatically via <code className="bg-muted px-1 font-mono text-xs">@import url()</code>.
          If you prefer <code className="bg-muted px-1 font-mono text-xs">next/font</code>, configure
          Instrument Serif, Space Grotesk, and Space Mono manually.
        </p>
      </div>

      <div className="space-y-4">
        <H2>Install your first component</H2>
        <CodeBlock filename="terminal">{`npx shadcn@latest add https://folio-ui.com/r/button.json`}</CodeBlock>
        <p className="max-w-prose text-sm leading-7">
          Then use it:
        </p>
        <CodeBlock filename="page.tsx">{`import { Button } from "@/components/ui/button"

export default function Page() {
  return <Button>Subscribe</Button>
}`}</CodeBlock>
      </div>

      <div className="space-y-4">
        <H2>Using a registry namespace</H2>
        <p className="max-w-prose text-sm leading-7">
          For convenience, add the folio registry to your{" "}
          <code className="bg-muted px-1 font-mono text-xs">components.json</code>:
        </p>
        <CodeBlock filename="components.json">{`{
  "registries": {
    "@folio": "https://folio-ui.com/r/{name}.json"
  }
}`}</CodeBlock>
        <p className="max-w-prose text-sm leading-7">
          Then install any component by name:
        </p>
        <CodeBlock filename="terminal">{`npx shadcn add @folio/button @folio/card @folio/typography`}</CodeBlock>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        Next: <a href="/docs/theming" className="text-link hover:text-accent-warm">Theming →</a>
      </p>
    </div>
  );
}
