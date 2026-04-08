import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Alert Dialog</H1>
        <Lead className="mt-3 max-w-2xl">
          A modal confirmation dialog that interrupts the user with critical
          content and expects a deliberate response — no dismissal without action.
        </Lead>
      </div>

      <InstallBlock name="alert-dialog" />

      <Separator />

      <div className="space-y-4">
        <H2>Confirmation Dialog</H2>
        <ComponentPreview>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete Article</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete the article and remove it from
                  the editorial archive. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Publish Confirmation</H2>
        <ComponentPreview>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Publish Now</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Publish to readers?</AlertDialogTitle>
                <AlertDialogDescription>
                  This article will go live immediately. All subscribers will
                  receive a notification. Please ensure the final proof has been
                  reviewed.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Back to editing</AlertDialogCancel>
                <AlertDialogAction>Publish</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">AlertDialog</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Root component wrapping the alert dialog state</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">AlertDialogTrigger</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Element that opens the alert dialog</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">AlertDialogContent</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">The modal panel with overlay, borders, and shadow</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">AlertDialogHeader</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Container for title and description</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">AlertDialogFooter</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Container for action and cancel buttons</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">AlertDialogTitle</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Serif heading for the alert dialog</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">AlertDialogDescription</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Muted description text explaining the action</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">AlertDialogAction</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Primary action button with hard shadow</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">AlertDialogCancel</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Outline cancel button to dismiss</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Unlike the standard Dialog, the Alert Dialog has no close button in
          the corner. The user must interact with the action buttons to dismiss
          it, ensuring deliberate acknowledgment of destructive or irreversible
          operations. The{" "}
          <code className="bg-muted px-1 font-mono text-xs">AlertDialogAction</code>{" "}
          carries{" "}
          <code className="bg-muted px-1 font-mono text-xs">shadow-hard-sm</code>{" "}
          with the signature translate-on-hover press effect.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/dialog" className="text-link hover:text-accent-warm">Dialog</a>{" · "}
        <a href="/docs/components/button" className="text-link hover:text-accent-warm">Button</a>
      </p>
    </div>
  );
}
