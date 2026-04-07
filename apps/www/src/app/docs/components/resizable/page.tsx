"use client";

import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

export default function ResizableDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Resizable</H1>
        <Lead className="mt-3 max-w-2xl">
          Drag-to-resize panel groups for building editorial layouts with
          adjustable column widths.
        </Lead>
      </div>

      <InstallBlock name="resizable" />

      <Separator />

      <div className="space-y-4">
        <H2>Horizontal Panels</H2>
        <ComponentPreview>
          <div className="h-[200px] w-full max-w-lg border-2 border-line">
            <ResizablePanelGroup orientation="horizontal">
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Panel A</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Panel B</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Vertical Panels</H2>
        <ComponentPreview>
          <div className="h-[300px] w-full max-w-lg border-2 border-line">
            <ResizablePanelGroup orientation="vertical">
              <ResizablePanel defaultSize={40}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Header</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={60}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Content</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Three Columns</H2>
        <ComponentPreview>
          <div className="h-[200px] w-full border-2 border-line">
            <ResizablePanelGroup orientation="horizontal">
              <ResizablePanel defaultSize={25} minSize={15}>
                <div className="flex h-full items-center justify-center p-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Sidebar</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Main</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={25} minSize={15}>
                <div className="flex h-full items-center justify-center p-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Aside</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"

<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize={50}>
    <div>Left panel</div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <div>Right panel</div>
  </ResizablePanel>
</ResizablePanelGroup>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">ResizablePanelGroup</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Container that manages panel sizes. Accepts <code className="bg-muted px-1 font-mono text-xs">direction</code>.</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">ResizablePanel</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Individual panel. Accepts <code className="bg-muted px-1 font-mono text-xs">defaultSize</code>, <code className="bg-muted px-1 font-mono text-xs">minSize</code>, <code className="bg-muted px-1 font-mono text-xs">maxSize</code>.</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">ResizableHandle</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Drag handle between panels. Optional <code className="bg-muted px-1 font-mono text-xs">withHandle</code> shows grip icon.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          The resize handle uses a 1px{" "}
          <code className="bg-muted px-1 font-mono text-xs">bg-line</code>{" "}
          divider. The optional grip icon inherits the editorial border treatment
          with <code className="bg-muted px-1 font-mono text-xs">border-2 border-line bg-paper</code>.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/sidebar" className="text-link hover:text-accent-warm">Sidebar</a>{" · "}
        <a href="/docs/components/scroll-area" className="text-link hover:text-accent-warm">Scroll Area</a>{" · "}
        <a href="/docs/components/separator" className="text-link hover:text-accent-warm">Separator</a>
      </p>
    </div>
  );
}
