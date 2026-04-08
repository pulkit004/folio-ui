import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function SkeletonDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Skeleton</H1>
        <Lead className="mt-3 max-w-2xl">
          Warm-toned loading placeholder with muted pulse animation.
        </Lead>
      </div>

      <InstallBlock name="skeleton" />

      <Separator />

      <div className="space-y-4">
        <H2>Single line</H2>
        <ComponentPreview>
          <Skeleton className="h-4 w-64" />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Card-like layout</H2>
        <ComponentPreview>
          <div className="flex items-start gap-4">
            <Skeleton className="size-10 shrink-0" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Full card skeleton</H2>
        <ComponentPreview>
          <div className="w-full max-w-sm space-y-4 border-2 border-line bg-paper p-6 shadow-hard">
            <Skeleton className="h-40 w-full" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <Skeleton className="h-9 w-28" />
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex items-start gap-4">
      <Skeleton className="size-10" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-full" />
      </div>
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
          Skeleton placeholders use{" "}
          <code className="bg-muted px-1 font-mono text-xs">bg-muted</code>{" "}
          with a warm undertone rather than cold gray. The pulse animation is
          subtle — just enough to signal loading without distracting. All
          corners remain sharp, matching the system-wide no-radius rule.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/card" className="text-link hover:text-accent-warm">Card</a>{" \u00b7 "}
        <a href="/docs/components/avatar" className="text-link hover:text-accent-warm">Avatar</a>
      </p>
    </div>
  );
}
