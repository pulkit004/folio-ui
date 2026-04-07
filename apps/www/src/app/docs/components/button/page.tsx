import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import { ArrowRight, Loader2, Mail } from "lucide-react";

export default function ButtonDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Button</H1>
        <Lead className="mt-3 max-w-2xl">
          Editorial-styled button with ink borders, hard offset shadow, and
          mono-spaced label text.
        </Lead>
      </div>

      <InstallBlock name="button" />

      <Separator />

      <div className="space-y-4">
        <H2>Variants</H2>
        <ComponentPreview>
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Sizes</H2>
        <ComponentPreview>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>With icon</H2>
        <ComponentPreview>
          <Button>
            Read More <ArrowRight />
          </Button>
          <Button variant="outline">
            <Mail /> Subscribe
          </Button>
        </ComponentPreview>
        <CodeBlock filename="example.tsx">{`import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

<Button>
  Read More <ArrowRight />
</Button>`}</CodeBlock>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex gap-4">
      <Button>Subscribe</Button>
      <Button variant="outline">Learn More</Button>
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
                <td className="py-2 pr-4 font-mono text-xs">variant</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&quot;default&quot; | &quot;secondary&quot; | &quot;outline&quot; | &quot;ghost&quot; | &quot;destructive&quot; | &quot;link&quot;</td>
                <td className="py-2 pr-4 font-mono text-xs">&quot;default&quot;</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">size</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&quot;default&quot; | &quot;sm&quot; | &quot;lg&quot; | &quot;icon&quot;</td>
                <td className="py-2 pr-4 font-mono text-xs">&quot;default&quot;</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">asChild</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="py-2 pr-4 font-mono text-xs">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Labels use <code className="bg-muted px-1 font-mono text-xs">font-mono uppercase tracking-wider</code> —
          the same treatment used for section headers and navigation in print
          magazines. The hard-offset shadow shifts on hover via translate,
          creating a tactile press interaction.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/badge" className="text-link hover:text-accent-warm">Badge</a>{" · "}
        <a href="/docs/components/toggle" className="text-link hover:text-accent-warm">Toggle</a>{" · "}
        <a href="/docs/components/card" className="text-link hover:text-accent-warm">Card</a>
      </p>
    </div>
  );
}
