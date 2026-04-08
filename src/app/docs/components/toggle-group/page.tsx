"use client";

import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export default function ToggleGroupDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Toggle Group</H1>
        <Lead className="mt-3 max-w-2xl">
          A set of two-state toggles that can operate as single or multiple
          selection. Shares variant styling with Toggle.
        </Lead>
      </div>

      <InstallBlock name="toggle-group" />

      <Separator />

      <div className="space-y-4">
        <H2>Single selection</H2>
        <ComponentPreview>
          <ToggleGroup type="single" defaultValue="bold">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline />
            </ToggleGroupItem>
          </ToggleGroup>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Multiple selection</H2>
        <ComponentPreview>
          <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline />
            </ToggleGroupItem>
          </ToggleGroup>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Outline variant, small size</H2>
        <ComponentPreview>
          <ToggleGroup type="single" variant="outline" size="sm" defaultValue="left">
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight />
            </ToggleGroupItem>
          </ToggleGroup>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

// Single selection
<ToggleGroup type="single" defaultValue="bold">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline />
  </ToggleGroupItem>
</ToggleGroup>

// Multiple selection with outline variant
<ToggleGroup type="multiple" variant="outline" size="sm">
  <ToggleGroupItem value="bold">
    <Bold />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic">
    <Italic />
  </ToggleGroupItem>
</ToggleGroup>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">type</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&quot;single&quot; | &quot;multiple&quot;</td>
                <td className="py-2 pr-4 font-mono text-xs">required</td>
              </tr>
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
                <td className="py-2 pr-4 font-mono text-xs">value</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">string | string[]</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">defaultValue</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">string | string[]</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">onValueChange</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">(value: string | string[]) =&gt; void</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">disabled</td>
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
          Toggle Group reuses{" "}
          <code className="bg-muted px-1 font-mono text-xs">toggleVariants</code>{" "}
          from the Toggle component via React context. This ensures variant
          and size styling stays in sync between standalone toggles and
          grouped toggles. The 1px gap between items gives a clean
          separation without extra borders.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/toggle" className="text-link hover:text-accent-warm">Toggle</a>{" \u00b7 "}
        <a href="/docs/components/radio-group" className="text-link hover:text-accent-warm">Radio Group</a>
      </p>
    </div>
  );
}
