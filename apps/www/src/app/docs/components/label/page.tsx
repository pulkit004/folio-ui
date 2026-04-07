import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function LabelDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Label</H1>
        <Lead className="mt-3 max-w-2xl">
          Form label in mono-spaced uppercase tracking — the column header
          treatment.
        </Lead>
      </div>

      <InstallBlock name="label" />

      <Separator />

      <div className="space-y-4">
        <H2>Default with input</H2>
        <ComponentPreview>
          <div className="grid w-full max-w-sm gap-1.5">
            <Label htmlFor="email">Email address</Label>
            <Input type="email" id="email" placeholder="editor@folio.press" />
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Standalone</H2>
        <ComponentPreview>
          <Label>Section title</Label>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function Page() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="name">Full name</Label>
      <Input type="text" id="name" placeholder="Jane Doe" />
    </div>
  )
}`}</CodeBlock>
      </div>

      <div className="space-y-4">
        <H2>API Reference</H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-line">
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Prop</th>
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Type</th>
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/20">
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">htmlFor</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">string</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">className</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">string</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Labels render in{" "}
          <code className="bg-muted px-1 font-mono text-xs">font-mono text-xs uppercase tracking-widest</code>{" "}
          — the same typographic treatment used for column headers and
          navigation items in print editorial layouts. This creates a clear
          visual hierarchy between the label and the input content below it.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/input" className="text-link hover:text-accent-warm">Input</a>{" \u00b7 "}
        <a href="/docs/components/textarea" className="text-link hover:text-accent-warm">Textarea</a>
      </p>
    </div>
  );
}
