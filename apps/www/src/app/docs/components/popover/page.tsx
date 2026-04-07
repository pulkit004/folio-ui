import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PopoverDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Popover</H1>
        <Lead className="mt-3 max-w-2xl">
          A floating panel anchored to a trigger element, styled with ink
          borders and a hard offset shadow.
        </Lead>
      </div>

      <InstallBlock name="popover" />

      <Separator />

      <div className="space-y-4">
        <H2>Default</H2>
        <ComponentPreview>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-serif text-lg leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Set the dimensions for the editorial layout.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label>Width</Label>
                    <Input className="col-span-2 h-9" defaultValue="100%" />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label>Height</Label>
                    <Input className="col-span-2 h-9" defaultValue="auto" />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  Popover, PopoverContent, PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>Popover content here.</p>
  </PopoverContent>
</Popover>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">align</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&quot;start&quot; | &quot;center&quot; | &quot;end&quot;</td>
                <td className="py-2 pr-4 font-mono text-xs">&quot;center&quot;</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">sideOffset</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">number</td>
                <td className="py-2 pr-4 font-mono text-xs">4</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">side</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&quot;top&quot; | &quot;right&quot; | &quot;bottom&quot; | &quot;left&quot;</td>
                <td className="py-2 pr-4 font-mono text-xs">&quot;bottom&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          The popover uses{" "}
          <code className="bg-muted px-1 font-mono text-xs">shadow-hard-sm</code>{" "}
          for the smaller 4px offset shadow and{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-2 border-line</code>{" "}
          to maintain the editorial ink-border language. Entry and exit
          animations use zoom and fade for a crisp feel.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/tooltip" className="text-link hover:text-accent-warm">Tooltip</a>{" · "}
        <a href="/docs/components/dropdown-menu" className="text-link hover:text-accent-warm">Dropdown Menu</a>{" · "}
        <a href="/docs/components/dialog" className="text-link hover:text-accent-warm">Dialog</a>
      </p>
    </div>
  );
}
