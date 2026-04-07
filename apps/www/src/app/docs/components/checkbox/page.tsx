import { H1, H2, Lead, Overline } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function CheckboxDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Checkbox</H1>
        <Lead className="mt-3 max-w-2xl">
          A square checkbox control with sharp corners and a check icon indicator.
        </Lead>
      </div>

      <InstallBlock name="checkbox" />
      <Separator />

      <div className="space-y-4">
        <H2>Default</H2>
        <ComponentPreview>
          <Checkbox />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>With Label</H2>
        <ComponentPreview>
          <div className="flex items-center space-x-3">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Disabled</H2>
        <ComponentPreview>
          <div className="flex items-center space-x-3">
            <Checkbox id="disabled-cb" disabled />
            <Label htmlFor="disabled-cb" className="opacity-50">
              Disabled option
            </Label>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Multiple Checkboxes</H2>
        <ComponentPreview className="flex-col items-start">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Checkbox id="opt-email" defaultChecked />
              <Label htmlFor="opt-email">Email notifications</Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="opt-sms" />
              <Label htmlFor="opt-sms">SMS notifications</Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="opt-push" />
              <Label htmlFor="opt-push">Push notifications</Label>
            </div>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="example.tsx">{`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

<div className="flex items-center space-x-3">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}</CodeBlock>
      </div>

      <Separator />

      <div className="border-l-4 border-accent-warm pl-4">
        <p className="font-sans text-sm text-muted-foreground">
          <strong className="font-serif text-foreground">Design note:</strong>{" "}
          The checkbox is a perfect square with 2px ink borders. On check, it fills
          with the primary color and displays a sharp-cornered check icon.
        </p>
      </div>

      <Separator />
      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/switch" className="text-link">Switch</a>{" \u00b7 "}
        <a href="/docs/components/radio-group" className="text-link">Radio Group</a>
      </p>
    </div>
  );
}
