import { H1, H2, Lead, Overline } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function InputDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Input</H1>
        <Lead className="mt-3 max-w-2xl">
          Text input with 2px ink borders on warm paper background.
        </Lead>
      </div>

      <InstallBlock name="input" />
      <Separator />

      <div className="space-y-4">
        <H2>Default</H2>
        <ComponentPreview className="flex-col items-start">
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>With button</H2>
        <ComponentPreview className="flex-col items-start">
          <div className="flex w-full max-w-sm gap-2">
            <Input placeholder="Enter your email..." />
            <Button>Subscribe</Button>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Disabled</H2>
        <ComponentPreview className="flex-col items-start">
          <Input disabled placeholder="Disabled input" className="max-w-sm" />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="example.tsx">{`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<div className="space-y-2">
  <Label htmlFor="name">Full Name</Label>
  <Input id="name" placeholder="Jane Doe" />
</div>`}</CodeBlock>
      </div>

      <Separator />
      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/textarea" className="text-link">Textarea</a>{" · "}
        <a href="/docs/components/label" className="text-link">Label</a>
      </p>
    </div>
  );
}
