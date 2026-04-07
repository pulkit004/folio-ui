import { H1, H2, Lead, Overline } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Terminal, Flame } from "lucide-react";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function AlertDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Alert</H1>
        <Lead className="mt-3 max-w-2xl">
          Callout banners with editorial borders and three semantic variants for
          status messaging.
        </Lead>
      </div>

      <InstallBlock name="alert" />
      <Separator />

      <div className="space-y-4">
        <H2>Default</H2>
        <ComponentPreview className="flex-col items-stretch">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>
              You can add components to your app using the CLI.
            </AlertDescription>
          </Alert>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Destructive</H2>
        <ComponentPreview className="flex-col items-stretch">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Accent</H2>
        <ComponentPreview className="flex-col items-stretch">
          <Alert variant="accent">
            <Flame className="h-4 w-4" />
            <AlertTitle>New release</AlertTitle>
            <AlertDescription>
              folio-ui v0.2 is now available with five new form components.
            </AlertDescription>
          </Alert>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Without Icon</H2>
        <ComponentPreview className="flex-col items-stretch">
          <Alert>
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
              Alerts can be used without an icon for simpler callouts.
            </AlertDescription>
          </Alert>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="example.tsx">{`import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>`}</CodeBlock>
      </div>

      <Separator />

      <div className="space-y-4">
        <H2>API Reference</H2>
        <div className="border-2 border-line">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-line bg-muted">
                <th className="px-4 py-2 text-left font-mono text-xs uppercase tracking-widest">Prop</th>
                <th className="px-4 py-2 text-left font-mono text-xs uppercase tracking-widest">Type</th>
                <th className="px-4 py-2 text-left font-mono text-xs uppercase tracking-widest">Default</th>
              </tr>
            </thead>
            <tbody className="font-sans">
              <tr className="border-b border-line">
                <td className="px-4 py-2 font-mono text-xs">variant</td>
                <td className="px-4 py-2 text-muted-foreground">&quot;default&quot; | &quot;destructive&quot; | &quot;accent&quot;</td>
                <td className="px-4 py-2 text-muted-foreground">&quot;default&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Separator />

      <div className="border-l-4 border-accent-warm pl-4">
        <p className="font-sans text-sm text-muted-foreground">
          <strong className="font-serif text-foreground">Design note:</strong>{" "}
          Alerts use 2px borders with variant-specific border colors. The title
          uses the serif typeface for an editorial heading feel, while the
          description stays in the default sans font.
        </p>
      </div>

      <Separator />
      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/card" className="text-link">Card</a>{" \u00b7 "}
        <a href="/docs/components/badge" className="text-link">Badge</a>
      </p>
    </div>
  );
}
