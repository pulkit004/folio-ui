"use client";

import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export default function SonnerDoc() {
  return (
    <div className="space-y-8">
      <Toaster />

      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Sonner</H1>
        <Lead className="mt-3 max-w-2xl">
          Toast notifications with editorial styling -- hard shadows, ink
          borders, and mono-spaced action labels.
        </Lead>
      </div>

      <InstallBlock name="sonner" />

      <Separator />

      <div className="space-y-4">
        <H2>Default Toast</H2>
        <ComponentPreview>
          <Button
            variant="outline"
            onClick={() =>
              toast("Article published", {
                description: "Your editorial has been submitted for review.",
              })
            }
          >
            Show Toast
          </Button>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Toast Variants</H2>
        <ComponentPreview>
          <Button
            variant="outline"
            onClick={() => toast.success("Changes saved successfully.")}
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.error("Failed to publish article.")}
          >
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast("New submission received", {
                action: {
                  label: "View",
                  onClick: () => {},
                },
              })
            }
          >
            With Action
          </Button>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="layout.tsx">{`import { Toaster } from "@/components/ui/sonner"

export default function Layout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}`}</CodeBlock>
        <CodeBlock filename="page.tsx">{`"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <Button
      onClick={() =>
        toast("Article published", {
          description: "Your piece is now live.",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Publish
    </Button>
  )
}`}</CodeBlock>
      </div>

      <div className="space-y-4">
        <H2>API Reference</H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-line">
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Export</th>
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/20">
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">Toaster</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Renders the toast container with editorial classNames</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">toast()</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Imperative API from sonner to trigger toasts</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">toast.success()</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Success variant with check icon</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">toast.error()</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Error variant with warning icon</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Toasts use{" "}
          <code className="bg-muted px-1 font-mono text-xs">shadow-hard-sm</code>{" "}
          (4px offset) and{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-2 border-line</code>{" "}
          to match the button-level shadow hierarchy. Action and cancel buttons
          are set in mono uppercase to maintain the editorial label convention.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/alert" className="text-link hover:text-accent-warm">Alert</a>{" · "}
        <a href="/docs/components/dialog" className="text-link hover:text-accent-warm">Dialog</a>{" · "}
        <a href="/docs/components/button" className="text-link hover:text-accent-warm">Button</a>
      </p>
    </div>
  );
}
