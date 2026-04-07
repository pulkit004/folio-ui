import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function SeparatorDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Separator</H1>
        <Lead className="mt-3 max-w-2xl">
          2px ink rule — the same weight used in broadsheet newspapers.
        </Lead>
      </div>

      <InstallBlock name="separator" />

      <Separator />

      <div className="space-y-4">
        <H2>Horizontal</H2>
        <ComponentPreview>
          <div className="w-full max-w-md space-y-4">
            <p className="text-sm font-sans">Above the rule</p>
            <Separator />
            <p className="text-sm font-sans">Below the rule</p>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Vertical</H2>
        <ComponentPreview>
          <div className="flex h-8 items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest">Editorial</span>
            <Separator orientation="vertical" />
            <span className="font-mono text-xs uppercase tracking-widest">Design</span>
            <Separator orientation="vertical" />
            <span className="font-mono text-xs uppercase tracking-widest">Systems</span>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Decorative section break</H2>
        <ComponentPreview>
          <div className="w-full max-w-md space-y-6">
            <p className="text-sm font-sans">
              The first section of content ends here, establishing the context
              for what follows below the rule.
            </p>
            <Separator decorative />
            <p className="text-sm font-sans">
              A new section begins. The decorative separator provides visual
              breathing room between distinct content blocks.
            </p>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <div className="space-y-4">
      <h2 className="font-serif text-xl">Section One</h2>
      <p>Content above the rule.</p>
      <Separator />
      <h2 className="font-serif text-xl">Section Two</h2>
      <p>Content below the rule.</p>
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
                <td className="py-2 pr-4 font-mono text-xs">orientation</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&quot;horizontal&quot; | &quot;vertical&quot;</td>
                <td className="py-2 pr-4 font-mono text-xs">&quot;horizontal&quot;</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">decorative</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="py-2 pr-4 font-mono text-xs">false</td>
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
          The 2px rule weight matches the border treatment used on cards and
          inputs throughout the system. In print, horizontal rules at this
          weight signal section breaks without overwhelming the page. The
          vertical variant works as a column divider — common in multi-column
          newspaper layouts.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/typography" className="text-link hover:text-accent-warm">Typography</a>{" \u00b7 "}
        <a href="/docs/components/card" className="text-link hover:text-accent-warm">Card</a>
      </p>
    </div>
  );
}
