import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function TextareaDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Textarea</H1>
        <Lead className="mt-3 max-w-2xl">
          Multi-line text input with editorial styling — manuscript field feel.
        </Lead>
      </div>

      <InstallBlock name="textarea" />

      <Separator />

      <div className="space-y-4">
        <H2>Default with label</H2>
        <ComponentPreview>
          <div className="grid w-full max-w-sm gap-1.5">
            <Label htmlFor="bio">Biography</Label>
            <Textarea id="bio" placeholder="Tell us about yourself..." />
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Disabled</H2>
        <ComponentPreview>
          <div className="grid w-full max-w-sm gap-1.5">
            <Label htmlFor="disabled">Archived note</Label>
            <Textarea
              id="disabled"
              disabled
              defaultValue="This content has been archived and can no longer be edited."
            />
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>With submit button</H2>
        <ComponentPreview>
          <div className="grid w-full max-w-sm gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="message">Editor notes</Label>
              <Textarea id="message" placeholder="Add your editorial notes..." />
            </div>
            <Button className="justify-self-end">Submit</Button>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" placeholder="Write your notes..." />
      </div>
      <Button className="justify-self-end">Save</Button>
    </div>
  )
}`}</CodeBlock>
      </div>

      <div className="space-y-4">
        <H2>API Reference</H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-line">
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Prop</th>
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Type</th>
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/20">
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">placeholder</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">string</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">disabled</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="py-2 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">className</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">string</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          The textarea uses the same{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-2 border-line</code>{" "}
          treatment as other form elements. The manuscript feel comes from the
          warm paper background and sans-serif body text — reminiscent of a
          typeset draft waiting for red-pen edits. Focus ring uses{" "}
          <code className="bg-muted px-1 font-mono text-xs">accent-warm</code>{" "}
          to stay within the warm editorial palette.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/input" className="text-link hover:text-accent-warm">Input</a>{" \u00b7 "}
        <a href="/docs/components/label" className="text-link hover:text-accent-warm">Label</a>{" \u00b7 "}
        <a href="/docs/components/button" className="text-link hover:text-accent-warm">Button</a>
      </p>
    </div>
  );
}
