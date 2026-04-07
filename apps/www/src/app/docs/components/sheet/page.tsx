import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function SheetDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Sheet</H1>
        <Lead className="mt-3 max-w-2xl">
          A slide-out panel anchored to any edge of the viewport — the sidebar
          insert of the editorial layout.
        </Lead>
      </div>

      <InstallBlock name="sheet" />

      <Separator />

      <div className="space-y-4">
        <H2>Right Sheet (Default)</H2>
        <ComponentPreview>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Right</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>
                  Browse the editorial sections and archives.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <a href="#" className="text-sm hover:text-accent-warm">Features</a>
                <a href="#" className="text-sm hover:text-accent-warm">Opinion</a>
                <a href="#" className="text-sm hover:text-accent-warm">Culture</a>
                <a href="#" className="text-sm hover:text-accent-warm">Archives</a>
              </div>
            </SheetContent>
          </Sheet>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Left Sheet</H2>
        <ComponentPreview>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Left</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Table of Contents</SheetTitle>
                <SheetDescription>
                  Jump to any section in the current article.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <a href="#" className="text-sm hover:text-accent-warm">Introduction</a>
                <a href="#" className="text-sm hover:text-accent-warm">Background</a>
                <a href="#" className="text-sm hover:text-accent-warm">Analysis</a>
                <a href="#" className="text-sm hover:text-accent-warm">Conclusion</a>
              </div>
            </SheetContent>
          </Sheet>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Sheet with Form</H2>
        <ComponentPreview>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Submit Letter</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Letter to the Editor</SheetTitle>
                <SheetDescription>
                  Share your thoughts on our latest publication.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>Name</Label>
                  <Input placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <Label>Subject</Label>
                  <Input placeholder="Re: ..." />
                </div>
              </div>
              <SheetFooter>
                <Button>Send</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">side</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&quot;top&quot; | &quot;right&quot; | &quot;bottom&quot; | &quot;left&quot;</td>
                <td className="py-2 pr-4 font-mono text-xs">&quot;right&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Each side variant uses a directional border (e.g.{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-l-2</code>{" "}
          for the right sheet) to maintain the ink-rule language. The panel
          slides in with a 300ms ease-in-out, matching the measured pace of
          editorial transitions.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/dialog" className="text-link hover:text-accent-warm">Dialog</a>{" · "}
        <a href="/docs/components/dropdown-menu" className="text-link hover:text-accent-warm">Dropdown Menu</a>{" · "}
        <a href="/docs/components/accordion" className="text-link hover:text-accent-warm">Accordion</a>
      </p>
    </div>
  );
}
