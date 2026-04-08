import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function AspectRatioDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Aspect Ratio</H1>
        <Lead className="mt-3 max-w-2xl">
          Constrains content to a fixed width-to-height ratio. Useful for
          images, video embeds, and editorial image frames.
        </Lead>
      </div>

      <InstallBlock name="aspect-ratio" />

      <Separator />

      <div className="space-y-4">
        <H2>16 / 9</H2>
        <ComponentPreview>
          <div className="w-full max-w-md">
            <AspectRatio ratio={16 / 9}>
              <div className="flex h-full w-full items-center justify-center border-2 border-line bg-muted">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  16 : 9
                </span>
              </div>
            </AspectRatio>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>1 / 1 (Square)</H2>
        <ComponentPreview>
          <div className="w-full max-w-[200px]">
            <AspectRatio ratio={1}>
              <div className="flex h-full w-full items-center justify-center border-2 border-line bg-muted">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  1 : 1
                </span>
              </div>
            </AspectRatio>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>4 / 3</H2>
        <ComponentPreview>
          <div className="w-full max-w-sm">
            <AspectRatio ratio={4 / 3}>
              <div className="flex h-full w-full items-center justify-center border-2 border-line bg-muted">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  4 : 3
                </span>
              </div>
            </AspectRatio>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import { AspectRatio } from "@/components/ui/aspect-ratio"

// 16:9 image frame
<div className="w-full max-w-md">
  <AspectRatio ratio={16 / 9}>
    <img
      src="/editorial-photo.jpg"
      alt="Editorial photograph"
      className="h-full w-full object-cover border-2 border-line"
    />
  </AspectRatio>
</div>

// Square frame
<div className="w-48">
  <AspectRatio ratio={1}>
    <div className="flex h-full w-full items-center justify-center border-2 border-line bg-muted">
      Placeholder
    </div>
  </AspectRatio>
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
                <td className="py-2 pr-4 font-mono text-xs">ratio</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">number</td>
                <td className="py-2 pr-4 font-mono text-xs">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Aspect Ratio is a layout primitive with no visual styling of its
          own. In the demos above we wrap content in{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-2 border-line bg-muted</code>{" "}
          to create an editorial image frame. Use it to enforce consistent
          proportions for photographs, hero images, and embedded media across
          the editorial layout.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/card" className="text-link hover:text-accent-warm">Card</a>{" \u00b7 "}
        <a href="/docs/components/skeleton" className="text-link hover:text-accent-warm">Skeleton</a>
      </p>
    </div>
  );
}
