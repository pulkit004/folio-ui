import { H1, H2, Lead, Overline } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function RadioGroupDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Radio Group</H1>
        <Lead className="mt-3 max-w-2xl">
          A set of mutually exclusive options with square radio indicators and
          sharp inner fill.
        </Lead>
      </div>

      <InstallBlock name="radio-group" />
      <Separator />

      <div className="space-y-4">
        <H2>Default</H2>
        <ComponentPreview className="flex-col items-start">
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>With Description</H2>
        <ComponentPreview className="flex-col items-start">
          <RadioGroup defaultValue="card">
            <div className="flex items-start space-x-3">
              <RadioGroupItem value="card" id="pay-card" className="mt-0.5" />
              <div>
                <Label htmlFor="pay-card">Card</Label>
                <p className="text-sm text-muted-foreground">Pay with credit or debit card.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <RadioGroupItem value="paypal" id="pay-paypal" className="mt-0.5" />
              <div>
                <Label htmlFor="pay-paypal">PayPal</Label>
                <p className="text-sm text-muted-foreground">Pay with your PayPal account.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <RadioGroupItem value="bank" id="pay-bank" className="mt-0.5" />
              <div>
                <Label htmlFor="pay-bank">Bank Transfer</Label>
                <p className="text-sm text-muted-foreground">Pay directly from your bank.</p>
              </div>
            </div>
          </RadioGroup>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="example.tsx">{`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-3">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-3">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}</CodeBlock>
      </div>

      <Separator />

      <div className="border-l-4 border-accent-warm pl-4">
        <p className="font-sans text-sm text-muted-foreground">
          <strong className="font-serif text-foreground">Design note:</strong>{" "}
          Unlike traditional circular radio buttons, this component uses square
          outlines with a square inner fill indicator, maintaining the editorial
          sharp-corner aesthetic throughout.
        </p>
      </div>

      <Separator />
      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/checkbox" className="text-link">Checkbox</a>{" \u00b7 "}
        <a href="/docs/components/select" className="text-link">Select</a>
      </p>
    </div>
  );
}
