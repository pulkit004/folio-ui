"use client";

import { useState } from "react";
import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import { ChevronsUpDown } from "lucide-react";

export default function CollapsibleDoc() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Collapsible</H1>
        <Lead className="mt-3 max-w-2xl">
          An expandable section that shows and hides content. Built on Radix
          primitives for accessible open/close behaviour.
        </Lead>
      </div>

      <InstallBlock name="collapsible" />

      <Separator />

      <div className="space-y-4">
        <H2>Default</H2>
        <ComponentPreview>
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full max-w-sm space-y-2"
          >
            <div className="flex items-center justify-between border-2 border-line px-4 py-3">
              <span className="font-mono text-xs uppercase tracking-widest">
                3 items
              </span>
              <CollapsibleTrigger asChild>
                <button className="inline-flex h-8 w-8 items-center justify-center border-2 border-line bg-paper transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </button>
              </CollapsibleTrigger>
            </div>
            <div className="border-2 border-line px-4 py-3 font-sans text-sm">
              Item one
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="border-2 border-line px-4 py-3 font-sans text-sm">
                Item two
              </div>
              <div className="border-2 border-line px-4 py-3 font-sans text-sm">
                Item three
              </div>
            </CollapsibleContent>
          </Collapsible>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from "lucide-react"

const [isOpen, setIsOpen] = useState(false)

<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <div className="flex items-center justify-between border-2 border-line px-4 py-3">
    <span className="font-mono text-xs uppercase tracking-widest">
      3 items
    </span>
    <CollapsibleTrigger asChild>
      <button className="inline-flex h-8 w-8 items-center justify-center border-2 border-line">
        <ChevronsUpDown className="h-4 w-4" />
      </button>
    </CollapsibleTrigger>
  </div>
  <div className="border-2 border-line px-4 py-3 text-sm">
    Always visible
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="border-2 border-line px-4 py-3 text-sm">
      Hidden item
    </div>
  </CollapsibleContent>
</Collapsible>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">Collapsible</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Root container (accepts open, onOpenChange)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">CollapsibleTrigger</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Button that toggles visibility</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">CollapsibleContent</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Content area that shows/hides</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Collapsible is a headless primitive with no default styling. In the
          demo above we wrap items in{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-2 border-line</code>{" "}
          cards and use the{" "}
          <code className="bg-muted px-1 font-mono text-xs">ChevronsUpDown</code>{" "}
          icon for the toggle. This keeps it consistent with the editorial
          card language. For more structured disclosure, consider{" "}
          <a href="/docs/components/accordion" className="text-link hover:text-accent-warm">Accordion</a>.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/accordion" className="text-link hover:text-accent-warm">Accordion</a>{" \u00b7 "}
        <a href="/docs/components/tabs" className="text-link hover:text-accent-warm">Tabs</a>
      </p>
    </div>
  );
}
