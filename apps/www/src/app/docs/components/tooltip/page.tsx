import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function TooltipDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Tooltip</H1>
        <Lead className="mt-3 max-w-2xl">
          Marginal annotation tooltip with ink borders and hard shadow.
        </Lead>
      </div>

      <InstallBlock name="tooltip" />

      <Separator />

      <div className="space-y-4">
        <H2>Default</H2>
        <ComponentPreview>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Editorial annotation</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Placements</H2>
        <ComponentPreview>
          <TooltipProvider>
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">Top</Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Top placement</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">Right</Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Right placement</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">Bottom</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Bottom placement</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">Left</Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Left placement</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Marginal note content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
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
                <td className="py-2 pr-4 font-mono text-xs">delayDuration</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">number</td>
                <td className="py-2 pr-4 font-mono text-xs">700</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">side</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&quot;top&quot; | &quot;right&quot; | &quot;bottom&quot; | &quot;left&quot;</td>
                <td className="py-2 pr-4 font-mono text-xs">&quot;top&quot;</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">sideOffset</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">number</td>
                <td className="py-2 pr-4 font-mono text-xs">4</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">align</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&quot;start&quot; | &quot;center&quot; | &quot;end&quot;</td>
                <td className="py-2 pr-4 font-mono text-xs">&quot;center&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Tooltips reference the tradition of marginal annotations in printed
          books — brief notes placed alongside the main text. The ink border
          and hard shadow give the tooltip a tangible, card-like presence
          rather than the floating feel of a typical UI tooltip. The sharp
          corners and{" "}
          <code className="bg-muted px-1 font-mono text-xs">font-mono text-xs</code>{" "}
          text treatment keep it consistent with the editorial system.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/button" className="text-link hover:text-accent-warm">Button</a>{" \u00b7 "}
        <a href="/docs/components/badge" className="text-link hover:text-accent-warm">Badge</a>
      </p>
    </div>
  );
}
