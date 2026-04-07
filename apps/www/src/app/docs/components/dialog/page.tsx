import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DialogDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Dialog</H1>
        <Lead className="mt-3 max-w-2xl">
          A modal overlay with ink borders and hard shadow — the editorial
          equivalent of a pull-quote that demands attention.
        </Lead>
      </div>

      <InstallBlock name="dialog" />

      <Separator />

      <div className="space-y-4">
        <H2>Basic Dialog</H2>
        <ComponentPreview>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Editorial Notice</DialogTitle>
                <DialogDescription>
                  This is an important message from the editorial board.
                  Please review the following information carefully.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Form Dialog</H2>
        <ComponentPreview>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Update your contributor profile. Changes are saved
                  immediately.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right">Name</Label>
                  <Input className="col-span-3" placeholder="Jane Doe" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right">Bio</Label>
                  <Input className="col-span-3" placeholder="Staff writer" />
                </div>
              </div>
              <DialogFooter>
                <Button>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description text.</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">Dialog</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Root component wrapping the dialog state</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DialogTrigger</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Element that opens the dialog</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DialogContent</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">The modal panel with overlay, borders, and shadow</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DialogHeader</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Container for title and description</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DialogFooter</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Container for action buttons</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DialogTitle</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Serif heading for the dialog</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DialogDescription</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Muted description text</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">DialogClose</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Programmatic close trigger</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          The dialog uses a 60% ink overlay to create depth against the warm
          paper background. The content panel carries{" "}
          <code className="bg-muted px-1 font-mono text-xs">shadow-hard</code>{" "}
          (8px offset) rather than the smaller button shadow, establishing it
          as a primary surface in the editorial hierarchy.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/sheet" className="text-link hover:text-accent-warm">Sheet</a>{" · "}
        <a href="/docs/components/dropdown-menu" className="text-link hover:text-accent-warm">Dropdown Menu</a>{" · "}
        <a href="/docs/components/button" className="text-link hover:text-accent-warm">Button</a>
      </p>
    </div>
  );
}
