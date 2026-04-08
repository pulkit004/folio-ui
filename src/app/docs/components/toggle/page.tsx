import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import { Bold, Italic, Underline } from "lucide-react";

export default function ToggleDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Toggle</H1>
        <Lead className="mt-3 max-w-2xl">
          Sharp-cornered toggle with ink fill on active state.
        </Lead>
      </div>

      <InstallBlock name="toggle" />

      <Separator />

      <div className="space-y-4">
        <H2>Default</H2>
        <ComponentPreview>
          <Toggle aria-label="Toggle bold">
            <Bold />
          </Toggle>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Outline variant</H2>
        <ComponentPreview>
          <Toggle variant="outline" aria-label="Toggle italic">
            <Italic />
          </Toggle>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>With text labels</H2>
        <ComponentPreview>
          <Toggle aria-label="Toggle bold">
            <Bold /> Bold
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic /> Italic
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline /> Underline
          </Toggle>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Sizes</H2>
        <ComponentPreview>
          <Toggle size="sm" aria-label="Small toggle">
            <Bold />
          </Toggle>
          <Toggle size="default" aria-label="Default toggle">
            <Bold />
          </Toggle>
          <Toggle size="lg" aria-label="Large toggle">
            <Bold />
          </Toggle>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"

export default function Page() {
  return (
    <div className="flex gap-2">
      <Toggle aria-label="Toggle bold">
        <Bold /> Bold
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic /> Italic
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle underline">
        <Underline /> Underline
      </Toggle>
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
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&quot;default&quot; | &quot;outline&quot;</td>
                <td className="py-2 pr-4 font-mono text-xs">&quot;default&quot;</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">size</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&quot;default&quot; | &quot;sm&quot; | &quot;lg&quot;</td>
                <td className="py-2 pr-4 font-mono text-xs">&quot;default&quot;</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">pressed</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">defaultPressed</td>
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
          The active state fills with ink, creating a clear pressed/unpressed
          distinction. This mirrors the bold binary of a rubber stamp — either
          pressed or not. The outline variant adds a{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-2 border-line</code>{" "}
          for contexts where the toggle sits alongside bordered elements like
          inputs or cards.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/button" className="text-link hover:text-accent-warm">Button</a>{" \u00b7 "}
        <a href="/docs/components/badge" className="text-link hover:text-accent-warm">Badge</a>
      </p>
    </div>
  );
}
