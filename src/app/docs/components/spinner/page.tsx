import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import { Spinner } from "@/components/ui/spinner";

export default function SpinnerDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Spinner</H1>
        <Lead className="mt-3 max-w-2xl">
          An animated loading indicator in three sizes — a simple rotating
          icon for communicating pending state without blocking content.
        </Lead>
      </div>

      <InstallBlock name="spinner" />

      <Separator />

      <div className="space-y-4">
        <H2>Sizes</H2>
        <ComponentPreview>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Spinner size="sm" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                sm
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="default" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                default
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="lg" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                lg
              </span>
            </div>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>With Text</H2>
        <ComponentPreview>
          <div className="flex items-center gap-3">
            <Spinner size="sm" />
            <span className="text-sm text-muted-foreground">Loading...</span>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Inline in Button</H2>
        <ComponentPreview>
          <button
            disabled
            className="inline-flex items-center justify-center gap-2 border-2 border-line bg-primary text-primary-foreground shadow-hard-sm font-mono text-sm uppercase tracking-wider h-12 px-6 opacity-70"
          >
            <Spinner size="sm" className="text-primary-foreground" />
            Publishing...
          </button>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import { Spinner } from "@/components/ui/spinner"

<Spinner />
<Spinner size="sm" />
<Spinner size="lg" />

{/* With text */}
<div className="flex items-center gap-3">
  <Spinner size="sm" />
  <span>Loading...</span>
</div>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">size</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">{`"sm" | "default" | "lg"`}</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">{`"default"`}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">className</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">string</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          The Spinner uses{" "}
          <code className="bg-muted px-1 font-mono text-xs">text-muted-foreground</code>{" "}
          by default to keep it subtle against warm paper backgrounds. Override
          with{" "}
          <code className="bg-muted px-1 font-mono text-xs">className</code>{" "}
          when placing it inside buttons or dark surfaces. Built on the Lucide{" "}
          <code className="bg-muted px-1 font-mono text-xs">Loader2</code>{" "}
          icon with CVA variants for consistent sizing across the system.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/skeleton" className="text-link hover:text-accent-warm">Skeleton</a>{" · "}
        <a href="/docs/components/button" className="text-link hover:text-accent-warm">Button</a>{" · "}
        <a href="/docs/components/progress" className="text-link hover:text-accent-warm">Progress</a>
      </p>
    </div>
  );
}
