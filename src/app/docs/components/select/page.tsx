import { H1, H2, Lead, Overline } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function SelectDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Select</H1>
        <Lead className="mt-3 max-w-2xl">
          A dropdown selector with hard-shadow popover content and editorial borders.
        </Lead>
      </div>

      <InstallBlock name="select" />
      <Separator />

      <div className="space-y-4">
        <H2>Default</H2>
        <ComponentPreview>
          <Select>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>With Label</H2>
        <ComponentPreview className="flex-col items-start">
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="framework">Framework</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select a framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="remix">Remix</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="example.tsx">{`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select>
  <SelectTrigger className="w-[240px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`}</CodeBlock>
      </div>

      <Separator />

      <div className="border-l-4 border-accent-warm pl-4">
        <p className="font-sans text-sm text-muted-foreground">
          <strong className="font-serif text-foreground">Design note:</strong>{" "}
          The trigger matches the Input component height (h-12) and border style.
          The dropdown content uses a hard shadow offset and sharp corners for
          the editorial look.
        </p>
      </div>

      <Separator />
      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/input" className="text-link">Input</a>{" \u00b7 "}
        <a href="/docs/components/radio-group" className="text-link">Radio Group</a>
      </p>
    </div>
  );
}
