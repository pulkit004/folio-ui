import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import { Progress } from "@/components/ui/progress";

export default function ProgressDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Progress</H1>
        <Lead className="mt-3 max-w-2xl">
          A linear progress indicator with ink borders and a solid primary fill,
          built on Radix UI primitives.
        </Lead>
      </div>

      <InstallBlock name="progress" />

      <Separator />

      <div className="space-y-4">
        <H2>Default (60%)</H2>
        <ComponentPreview>
          <Progress value={60} className="w-[60%]" />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Smaller (30%)</H2>
        <ComponentPreview>
          <Progress value={30} className="h-2 w-[60%]" />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>With Label</H2>
        <ComponentPreview>
          <div className="w-[60%] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Upload progress
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                75%
              </span>
            </div>
            <Progress value={75} />
          </div>
        </ComponentPreview>
        <CodeBlock filename="example.tsx">{`import { Progress } from "@/components/ui/progress"

<div className="space-y-2">
  <div className="flex items-center justify-between">
    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
      Upload progress
    </span>
    <span className="font-mono text-xs text-muted-foreground">75%</span>
  </div>
  <Progress value={75} />
</div>`}</CodeBlock>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import { Progress } from "@/components/ui/progress"

<Progress value={60} />`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">value</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">number | null</td>
                <td className="py-2 pr-4 font-mono text-xs">0</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">max</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">number</td>
                <td className="py-2 pr-4 font-mono text-xs">100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          The progress bar uses{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-2 border-line</code>{" "}
          for the track outline and a{" "}
          <code className="bg-muted px-1 font-mono text-xs">bg-primary</code>{" "}
          fill indicator. The track background is{" "}
          <code className="bg-muted px-1 font-mono text-xs">bg-muted</code>{" "}
          to stay subtle against paper surfaces. No border-radius is applied,
          keeping the sharp editorial aesthetic.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/skeleton" className="text-link hover:text-accent-warm">Skeleton</a>{" · "}
        <a href="/docs/components/badge" className="text-link hover:text-accent-warm">Badge</a>{" · "}
        <a href="/docs/components/separator" className="text-link hover:text-accent-warm">Separator</a>
      </p>
    </div>
  );
}
