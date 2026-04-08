import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarCheckboxItem,
} from "@/components/ui/menubar";

export default function MenubarDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Menubar</H1>
        <Lead className="mt-3 max-w-2xl">
          A horizontal menu bar with dropdown panels -- the classic application
          toolbar rendered with ink borders and hard shadows.
        </Lead>
      </div>

      <InstallBlock name="menubar" />

      <Separator />

      <div className="space-y-4">
        <H2>Basic Menubar</H2>
        <ComponentPreview>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Article <MenubarShortcut>Ctrl+N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Open Draft <MenubarShortcut>Ctrl+O</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Save <MenubarShortcut>Ctrl+S</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Export as PDF <MenubarShortcut>Ctrl+Shift+E</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Print <MenubarShortcut>Ctrl+P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>Ctrl+Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>Ctrl+Y</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Cut <MenubarShortcut>Ctrl+X</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Copy <MenubarShortcut>Ctrl+C</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Paste <MenubarShortcut>Ctrl+V</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
                <MenubarCheckboxItem>Show Sidebar</MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarItem>
                  Full Screen <MenubarShortcut>F11</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>With Submenus</H2>
        <ComponentPreview>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Insert</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Image</MenubarItem>
                <MenubarItem>Pull Quote</MenubarItem>
                <MenubarSub>
                  <MenubarSubTrigger>Embed</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>YouTube</MenubarItem>
                    <MenubarItem>Twitter</MenubarItem>
                    <MenubarItem>CodePen</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Horizontal Rule</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New <MenubarShortcut>Ctrl+N</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Save</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">Menubar</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Root bar container with border and paper background</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">MenubarMenu</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Wraps a single menu and its trigger</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">MenubarTrigger</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Mono-spaced uppercase trigger label</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">MenubarContent</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Dropdown panel with hard shadow</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">MenubarItem</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Individual menu action</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">MenubarShortcut</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Right-aligned keyboard shortcut hint</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">MenubarCheckboxItem</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Toggle-able item with check indicator</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">MenubarSeparator</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">2px ink rule between groups</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          The menubar root uses{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-2 border-line bg-paper</code>{" "}
          for the classic toolbar look. Triggers use the mono uppercase treatment
          consistent with all navigation elements in the editorial system.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/dropdown-menu" className="text-link hover:text-accent-warm">Dropdown Menu</a>{" · "}
        <a href="/docs/components/navigation-menu" className="text-link hover:text-accent-warm">Navigation Menu</a>{" · "}
        <a href="/docs/components/context-menu" className="text-link hover:text-accent-warm">Context Menu</a>
      </p>
    </div>
  );
}
