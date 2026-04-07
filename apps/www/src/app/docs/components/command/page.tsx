"use client";

import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react";

export default function CommandDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Command</H1>
        <Lead className="mt-3 max-w-2xl">
          A command palette for fast keyboard-driven navigation and search.
          Built on cmdk with editorial styling.
        </Lead>
      </div>

      <InstallBlock name="command" />

      <Separator />

      <div className="space-y-4">
        <H2>Default</H2>
        <ComponentPreview>
          <Command className="max-w-[450px] shadow-hard">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Smile />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <Calculator />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User />
                  <span>Profile</span>
                  <CommandShortcut>Ctrl+P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard />
                  <span>Billing</span>
                  <CommandShortcut>Ctrl+B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings />
                  <span>Settings</span>
                  <CommandShortcut>Ctrl+S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

// Inline command palette
<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

// Dialog variant (triggered by keyboard shortcut)
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">Command</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Root container wrapping cmdk</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">CommandDialog</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Command inside a Dialog overlay</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">CommandInput</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Search input with icon</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">CommandList</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Scrollable results container</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">CommandEmpty</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Shown when no results match</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">CommandGroup</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Groups items under a heading</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">CommandItem</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Selectable item row</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">CommandShortcut</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Right-aligned keyboard shortcut hint</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">CommandSeparator</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Visual divider between groups</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Group headings use{" "}
          <code className="bg-muted px-1 font-mono text-xs">font-mono uppercase tracking-widest</code>{" "}
          to match the editorial label convention. The empty state uses{" "}
          <code className="bg-muted px-1 font-mono text-xs">font-serif italic</code>{" "}
          for a softer, typographic feel. Separators are a 2px{" "}
          <code className="bg-muted px-1 font-mono text-xs">bg-line</code>{" "}
          rule rather than a hairline.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/dialog" className="text-link hover:text-accent-warm">Dialog</a>{" \u00b7 "}
        <a href="/docs/components/dropdown-menu" className="text-link hover:text-accent-warm">Dropdown Menu</a>
      </p>
    </div>
  );
}
