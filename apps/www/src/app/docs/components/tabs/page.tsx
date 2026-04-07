import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function TabsDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Tabs</H1>
        <Lead className="mt-3 max-w-2xl">
          Section switcher with mono-spaced labels and active-state hard shadow
          — the editorial tab bar for organizing content views.
        </Lead>
      </div>

      <InstallBlock name="tabs" />

      <Separator />

      <div className="space-y-4">
        <H2>Basic Tabs</H2>
        <ComponentPreview>
          <Tabs defaultValue="features" className="w-full max-w-lg">
            <TabsList>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="opinion">Opinion</TabsTrigger>
              <TabsTrigger value="culture">Culture</TabsTrigger>
            </TabsList>
            <TabsContent value="features">
              <div className="border-2 border-line bg-paper-2 p-4">
                <p className="font-serif text-lg">Featured Stories</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Long-form journalism and investigative pieces from our
                  editorial team.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="opinion">
              <div className="border-2 border-line bg-paper-2 p-4">
                <p className="font-serif text-lg">Opinion &amp; Commentary</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Perspectives and analysis from our columnists and guest
                  contributors.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="culture">
              <div className="border-2 border-line bg-paper-2 p-4">
                <p className="font-serif text-lg">Arts &amp; Culture</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reviews, profiles, and essays on books, film, music, and
                  visual arts.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">First</TabsTrigger>
    <TabsTrigger value="tab2">Second</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    First tab content.
  </TabsContent>
  <TabsContent value="tab2">
    Second tab content.
  </TabsContent>
</Tabs>`}</CodeBlock>
      </div>

      <div className="space-y-4">
        <H2>API Reference</H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-line">
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Component</th>
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/20">
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">Tabs</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Root component with <code className="bg-muted px-1 font-mono text-xs">defaultValue</code> and <code className="bg-muted px-1 font-mono text-xs">value</code> props</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">TabsList</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Container for triggers with ink border and muted background</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">TabsTrigger</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Tab button with active shadow treatment</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">TabsContent</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Panel shown when matching tab is active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          The active tab receives{" "}
          <code className="bg-muted px-1 font-mono text-xs">shadow-hard-sm</code>{" "}
          and a paper background, lifting it above the muted tab bar. This
          mimics the physical feel of a tabbed divider in a print index —
          the active section literally sits in front.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/accordion" className="text-link hover:text-accent-warm">Accordion</a>{" · "}
        <a href="/docs/components/dropdown-menu" className="text-link hover:text-accent-warm">Dropdown Menu</a>{" · "}
        <a href="/docs/components/separator" className="text-link hover:text-accent-warm">Separator</a>
      </p>
    </div>
  );
}
