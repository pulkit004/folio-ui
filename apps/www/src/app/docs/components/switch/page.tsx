import { H1, H2, Lead, Overline } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function SwitchDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Switch</H1>
        <Lead className="mt-3 max-w-2xl">
          A toggle control with rectangular track and square thumb, rendered with hard editorial borders.
        </Lead>
      </div>

      <InstallBlock name="switch" />
      <Separator />

      <div className="space-y-4">
        <H2>Default</H2>
        <ComponentPreview>
          <Switch />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>With Label</H2>
        <ComponentPreview>
          <div className="flex items-center space-x-3">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Disabled</H2>
        <ComponentPreview>
          <div className="flex items-center space-x-3">
            <Switch id="disabled-switch" disabled />
            <Label htmlFor="disabled-switch" className="opacity-50">
              Disabled
            </Label>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="example.tsx">{`import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

<div className="flex items-center space-x-3">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>`}</CodeBlock>
      </div>

      <Separator />

      <div className="border-l-4 border-accent-warm pl-4">
        <p className="font-sans text-sm text-muted-foreground">
          <strong className="font-serif text-foreground">Design note:</strong>{" "}
          The switch uses a rectangular track and square thumb with no border-radius,
          matching the editorial aesthetic. The thumb carries a hard shadow that
          disappears on the checked state.
        </p>
      </div>

      <Separator />
      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/checkbox" className="text-link">Checkbox</a>{" \u00b7 "}
        <a href="/docs/components/radio-group" className="text-link">Radio Group</a>
      </p>
    </div>
  );
}
