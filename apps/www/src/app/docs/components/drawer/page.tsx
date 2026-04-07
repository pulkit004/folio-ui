import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function DrawerDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Drawer</H1>
        <Lead className="mt-3 max-w-2xl">
          A bottom-sheet drawer built on Vaul with editorial ink borders and a
          warm paper surface -- ideal for mobile-first interactions.
        </Lead>
      </div>

      <InstallBlock name="drawer" />

      <Separator />

      <div className="space-y-4">
        <H2>Basic Drawer</H2>
        <ComponentPreview>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Editorial Settings</DrawerTitle>
                <DrawerDescription>
                  Adjust your reading preferences and display options.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Save</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Drawer with Form</H2>
        <ComponentPreview>
          <Drawer>
            <DrawerTrigger asChild>
              <Button>Submit Contribution</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>New Contribution</DrawerTitle>
                <DrawerDescription>
                  Submit a new article or editorial piece for review.
                </DrawerDescription>
              </DrawerHeader>
              <div className="px-4 pb-2">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>Title</Label>
                    <Input placeholder="Article title" />
                  </div>
                  <div className="grid gap-2">
                    <Label>Author</Label>
                    <Input placeholder="Your name" />
                  </div>
                </div>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
      <DrawerDescription>Description text.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">Drawer</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Root component wrapping the drawer state</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DrawerTrigger</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Element that opens the drawer</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DrawerContent</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">The sliding panel with overlay and handle bar</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DrawerHeader</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Container for title and description</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DrawerFooter</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Container for action buttons</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DrawerTitle</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Serif heading for the drawer</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DrawerDescription</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Muted description text</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DrawerClose</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Programmatic close trigger</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          The drawer slides up from the bottom with a 60% ink overlay, matching
          the dialog convention. The handle bar uses{" "}
          <code className="bg-muted px-1 font-mono text-xs">bg-line</code> and
          the content surface is warm{" "}
          <code className="bg-muted px-1 font-mono text-xs">bg-paper</code>,
          keeping the editorial palette consistent across all overlay surfaces.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/dialog" className="text-link hover:text-accent-warm">Dialog</a>{" · "}
        <a href="/docs/components/sheet" className="text-link hover:text-accent-warm">Sheet</a>{" · "}
        <a href="/docs/components/button" className="text-link hover:text-accent-warm">Button</a>
      </p>
    </div>
  );
}
