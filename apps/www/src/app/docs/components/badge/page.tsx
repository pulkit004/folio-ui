import { H1, H2, Lead, Overline } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function BadgeDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Badge</H1>
        <Lead className="mt-3 max-w-2xl">
          Rectangular badge with mono-spaced uppercase text and editorial ink
          borders.
        </Lead>
      </div>

      <InstallBlock name="badge" />
      <Separator />

      <div className="space-y-4">
        <H2>Variants</H2>
        <ComponentPreview>
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="accent">Accent</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="example.tsx">{`import { Badge } from "@/components/ui/badge"

<Badge variant="accent">Featured</Badge>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">variant</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&quot;default&quot; | &quot;secondary&quot; | &quot;outline&quot; | &quot;accent&quot; | &quot;destructive&quot;</td>
                <td className="py-2 pr-4 font-mono text-xs">&quot;default&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Separator />
      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/button" className="text-link">Button</a>{" · "}
        <a href="/docs/components/label" className="text-link">Label</a>
      </p>
    </div>
  );
}
