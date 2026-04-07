import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Context Menu</H1>
        <Lead className="mt-3 max-w-2xl">
          A right-click menu with editorial styling — ink borders, hard
          shadows, and mono-spaced labels for quick contextual actions.
        </Lead>
      </div>

      <InstallBlock name="context-menu" />

      <Separator />

      <div className="space-y-4">
        <H2>Basic Context Menu</H2>
        <ComponentPreview>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center border-2 border-dashed border-line bg-paper-2 text-sm text-muted-foreground">
              Right-click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>
                Back <ContextMenuShortcut>Alt+Left</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Forward <ContextMenuShortcut>Alt+Right</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Reload <ContextMenuShortcut>Ctrl+R</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                  <ContextMenuItem>Save Page As...</ContextMenuItem>
                  <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Developer Tools</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem checked>
                Show Bookmarks Bar
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem>
                Show Full URLs
              </ContextMenuCheckboxItem>
              <ContextMenuSeparator />
              <ContextMenuLabel>Layout</ContextMenuLabel>
              <ContextMenuRadioGroup value="comfortable">
                <ContextMenuRadioItem value="compact">
                  Compact
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="comfortable">
                  Comfortable
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="spacious">
                  Spacious
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuContent>
          </ContextMenu>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

<ContextMenu>
  <ContextMenuTrigger>Right-click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Settings</ContextMenuItem>
    <ContextMenuItem>Logout</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">ContextMenu</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Root component wrapping the context menu state</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">ContextMenuTrigger</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Area that responds to right-click</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">ContextMenuContent</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Popover panel with editorial borders and shadow</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">ContextMenuItem</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Clickable menu item</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">ContextMenuCheckboxItem</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Toggleable checkbox menu item</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">ContextMenuRadioItem</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Radio-select menu item within a group</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">ContextMenuSub</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Sub-menu container with flyout</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">ContextMenuLabel</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Non-interactive label in mono uppercase</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">ContextMenuSeparator</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">2px ink divider between groups</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">ContextMenuShortcut</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Right-aligned keyboard shortcut hint</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          The Context Menu shares identical styling with the Dropdown Menu to
          maintain consistency across menu surfaces. Both use{" "}
          <code className="bg-muted px-1 font-mono text-xs">shadow-hard-sm</code>{" "}
          (4px offset) rather than the full{" "}
          <code className="bg-muted px-1 font-mono text-xs">shadow-hard</code>{" "}
          to keep menus visually subordinate to primary surfaces like dialogs
          and cards.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/dropdown-menu" className="text-link hover:text-accent-warm">Dropdown Menu</a>{" · "}
        <a href="/docs/components/dialog" className="text-link hover:text-accent-warm">Dialog</a>
      </p>
    </div>
  );
}
