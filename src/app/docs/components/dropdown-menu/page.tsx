import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Dropdown Menu</H1>
        <Lead className="mt-3 max-w-2xl">
          A contextual menu with ink borders and hard shadow — the editorial
          action palette for compact interfaces.
        </Lead>
      </div>

      <InstallBlock name="dropdown-menu" />

      <Separator />

      <div className="space-y-4">
        <H2>Basic Menu</H2>
        <ComponentPreview>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Editorial</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  New Article
                  <DropdownMenuShortcut>Ctrl+N</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Open Draft
                  <DropdownMenuShortcut>Ctrl+O</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Save
                  <DropdownMenuShortcut>Ctrl+S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Publish
                <DropdownMenuShortcut>Ctrl+P</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>With Submenu</H2>
        <ComponentPreview>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">More Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Sections</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Features</DropdownMenuItem>
              <DropdownMenuItem>Opinion</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Culture</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Books</DropdownMenuItem>
                  <DropdownMenuItem>Film</DropdownMenuItem>
                  <DropdownMenuItem>Music</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem disabled>Archives (coming soon)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Duplicate</DropdownMenuItem>
    <DropdownMenuItem>Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">DropdownMenu</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Root component managing open state</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DropdownMenuTrigger</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Element that toggles the menu</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DropdownMenuContent</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">The menu panel with borders and shadow</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DropdownMenuItem</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Individual menu action</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DropdownMenuLabel</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Mono-spaced section label</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DropdownMenuSeparator</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">2px ink rule between groups</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DropdownMenuShortcut</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Right-aligned keyboard shortcut hint</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DropdownMenuCheckboxItem</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Toggle-able item with check indicator</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DropdownMenuRadioItem</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Exclusive-select item with dot indicator</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Menu labels use{" "}
          <code className="bg-muted px-1 font-mono text-xs">font-mono uppercase tracking-widest</code>{" "}
          — the same treatment as navigation and section headers in print.
          The separator is a 2px ink rule, consistent with the editorial
          line language throughout the system.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/dialog" className="text-link hover:text-accent-warm">Dialog</a>{" · "}
        <a href="/docs/components/tabs" className="text-link hover:text-accent-warm">Tabs</a>{" · "}
        <a href="/docs/components/button" className="text-link hover:text-accent-warm">Button</a>
      </p>
    </div>
  );
}
