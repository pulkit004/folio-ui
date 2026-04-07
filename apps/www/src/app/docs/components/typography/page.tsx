import { H1, H2, H3, H4, Lead, Blockquote, Caption, Overline } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function TypographyDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Typography</H1>
        <Lead className="mt-3 max-w-2xl">
          Editorial typography system — serif headings, blockquotes, captions,
          and overlines. The three-voice type system in component form.
        </Lead>
      </div>

      <InstallBlock name="typography" />
      <Separator />

      <div className="space-y-4">
        <H2>Headings</H2>
        <ComponentPreview className="flex-col items-start gap-6">
          <H1>Heading 1 — Instrument Serif</H1>
          <H2>Heading 2 — Instrument Serif</H2>
          <H3>Heading 3 — Instrument Serif</H3>
          <H4>Heading 4 — Instrument Serif</H4>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Body variants</H2>
        <ComponentPreview className="flex-col items-start gap-6">
          <Lead>Lead paragraph — larger, muted, for introductions.</Lead>
          <p className="max-w-prose leading-7">
            Regular body text in Space Grotesk. Good typography is invisible.
            Great typography is unforgettable.
          </p>
          <Blockquote>
            &ldquo;The details are not the details. They make the design.&rdquo;
          </Blockquote>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Labels & meta</H2>
        <ComponentPreview className="flex-col items-start gap-4">
          <Overline>Overline — Section label</Overline>
          <Caption>Caption — timestamps, credits, metadata</Caption>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="example.tsx">{`import { H1, Lead, Blockquote, Caption } from "@/components/ui/typography"

<H1>The Art of Typography</H1>
<Lead>An exploration of editorial type systems.</Lead>
<Blockquote>"The details are not the details."</Blockquote>
<Caption>— Charles Eames</Caption>`}</CodeBlock>
      </div>

      <div className="space-y-4">
        <H2>Components</H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-line">
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Component</th>
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Font</th>
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Use for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/20">
              <tr><td className="py-2 pr-4 font-mono text-xs">H1</td><td className="py-2 pr-4 text-xs text-muted-foreground">Instrument Serif</td><td className="py-2 pr-4 text-xs">Page titles</td></tr>
              <tr><td className="py-2 pr-4 font-mono text-xs">H2</td><td className="py-2 pr-4 text-xs text-muted-foreground">Instrument Serif</td><td className="py-2 pr-4 text-xs">Section headings</td></tr>
              <tr><td className="py-2 pr-4 font-mono text-xs">H3</td><td className="py-2 pr-4 text-xs text-muted-foreground">Instrument Serif</td><td className="py-2 pr-4 text-xs">Card titles</td></tr>
              <tr><td className="py-2 pr-4 font-mono text-xs">H4</td><td className="py-2 pr-4 text-xs text-muted-foreground">Instrument Serif</td><td className="py-2 pr-4 text-xs">Subsections</td></tr>
              <tr><td className="py-2 pr-4 font-mono text-xs">Lead</td><td className="py-2 pr-4 text-xs text-muted-foreground">Space Grotesk</td><td className="py-2 pr-4 text-xs">Intro paragraphs</td></tr>
              <tr><td className="py-2 pr-4 font-mono text-xs">Blockquote</td><td className="py-2 pr-4 text-xs text-muted-foreground">Instrument Serif italic</td><td className="py-2 pr-4 text-xs">Pull quotes</td></tr>
              <tr><td className="py-2 pr-4 font-mono text-xs">Caption</td><td className="py-2 pr-4 text-xs text-muted-foreground">Space Mono</td><td className="py-2 pr-4 text-xs">Meta text, timestamps</td></tr>
              <tr><td className="py-2 pr-4 font-mono text-xs">Overline</td><td className="py-2 pr-4 text-xs text-muted-foreground">Space Mono</td><td className="py-2 pr-4 text-xs">Section labels</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <Separator />
      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/separator" className="text-link">Separator</a>{" · "}
        <a href="/docs/components/label" className="text-link">Label</a>{" · "}
        <a href="/docs/theming" className="text-link">Theming</a>
      </p>
    </div>
  );
}
