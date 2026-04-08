import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

export default function BreadcrumbDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Breadcrumb</H1>
        <Lead className="mt-3 max-w-2xl">
          Semantic navigation breadcrumbs with mono-spaced uppercase labels and
          configurable separators.
        </Lead>
      </div>

      <InstallBlock name="breadcrumb" />

      <Separator />

      <div className="space-y-4">
        <H2>Default</H2>
        <ComponentPreview>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Custom Separator</H2>
        <ComponentPreview>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Components</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>With Ellipsis</H2>
        <ComponentPreview>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}</CodeBlock>
      </div>

      <div className="space-y-4">
        <H2>API Reference</H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-line">
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Component</th>
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Props</th>
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/20">
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">BreadcrumbLink</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">asChild?: boolean</td>
                <td className="py-2 pr-4 text-muted-foreground">Renders as Radix Slot when true</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">BreadcrumbSeparator</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">children?: ReactNode</td>
                <td className="py-2 pr-4 text-muted-foreground">Custom separator icon or character</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">BreadcrumbPage</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">--</td>
                <td className="py-2 pr-4 text-muted-foreground">Current page, non-interactive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Breadcrumb labels use{" "}
          <code className="bg-muted px-1 font-mono text-xs">font-mono uppercase tracking-widest</code>{" "}
          to match the editorial navigation voice. The current page is
          distinguished by full foreground colour while ancestor links remain
          muted until hovered.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/pagination" className="text-link hover:text-accent-warm">Pagination</a>{" · "}
        <a href="/docs/components/tabs" className="text-link hover:text-accent-warm">Tabs</a>{" · "}
        <a href="/docs/components/button" className="text-link hover:text-accent-warm">Button</a>
      </p>
    </div>
  );
}
