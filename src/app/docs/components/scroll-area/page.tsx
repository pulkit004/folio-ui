import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

const tags = [
  "Typography",
  "Color Theory",
  "Grid Systems",
  "White Space",
  "Hierarchy",
  "Contrast",
  "Alignment",
  "Proximity",
  "Repetition",
  "Balance",
];

export default function ScrollAreaDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Scroll Area</H1>
        <Lead className="mt-3 max-w-2xl">
          Custom scroll area with thin ink scrollbar and squared-off thumb.
        </Lead>
      </div>

      <InstallBlock name="scroll-area" />

      <Separator />

      <div className="space-y-4">
        <H2>Vertical scroll</H2>
        <ComponentPreview>
          <ScrollArea className="h-48 w-64 border-2 border-line bg-paper p-4">
            <div className="space-y-4">
              {tags.map((tag) => (
                <div key={tag}>
                  <p className="text-sm font-sans">{tag}</p>
                  <Separator className="mt-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Horizontal scroll</H2>
        <ComponentPreview>
          <ScrollArea className="w-80 border-2 border-line bg-paper">
            <div className="flex gap-4 p-4">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="shrink-0 border-2 border-line bg-paper-2 px-4 py-2"
                >
                  <p className="font-mono text-xs uppercase tracking-widest whitespace-nowrap">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const items = ["Typography", "Color Theory", "Grid Systems"]

export default function Page() {
  return (
    <ScrollArea className="h-48 w-64 border-2 border-line bg-paper p-4">
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item}>
            <p className="text-sm">{item}</p>
            <Separator className="mt-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
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
                <td className="py-2 pr-4 font-mono text-xs">className</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">string</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">orientation</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&quot;vertical&quot; | &quot;horizontal&quot;</td>
                <td className="py-2 pr-4 font-mono text-xs">&quot;vertical&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          The scrollbar thumb is squared off with no border-radius, matching
          the editorial system. The thin ink scrollbar stays unobtrusive while
          maintaining the design language — a detail borrowed from minimalist
          book-reading interfaces.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/card" className="text-link hover:text-accent-warm">Card</a>
      </p>
    </div>
  );
}
