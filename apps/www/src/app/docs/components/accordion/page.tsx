import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Accordion</H1>
        <Lead className="mt-3 max-w-2xl">
          Collapsible content sections with serif headings and ink-rule
          dividers — the editorial FAQ and content organizer.
        </Lead>
      </div>

      <InstallBlock name="accordion" />

      <Separator />

      <div className="space-y-4">
        <H2>Basic Accordion</H2>
        <ComponentPreview>
          <Accordion type="single" collapsible className="w-full max-w-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is folio-ui?</AccordionTrigger>
              <AccordionContent>
                folio-ui is an open-source design system built on shadcn/ui,
                tailored for editorial and publishing interfaces. It uses warm
                tones, serif headings, and hard-offset shadows to evoke the
                feel of print media.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does it differ from shadcn/ui?</AccordionTrigger>
              <AccordionContent>
                While sharing the same Radix UI primitives and architecture,
                folio-ui replaces the default design tokens with an editorial
                palette: warm paper backgrounds, ink-weight borders, serif
                typography, and zero border-radius throughout.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I use it with Next.js?</AccordionTrigger>
              <AccordionContent>
                Yes. folio-ui is built with React 19 and Next.js App Router.
                Components are server-component-safe and tree-shakeable. Install
                individual components via the shadcn registry.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Multiple Open</H2>
        <ComponentPreview>
          <Accordion type="multiple" className="w-full max-w-lg">
            <AccordionItem value="about">
              <AccordionTrigger>About the Publication</AccordionTrigger>
              <AccordionContent>
                Founded in 2024, our editorial collective focuses on
                long-form journalism, cultural criticism, and design
                commentary.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="submissions">
              <AccordionTrigger>Submission Guidelines</AccordionTrigger>
              <AccordionContent>
                We accept pitches for features (2,000-5,000 words), opinion
                pieces (800-1,500 words), and short reviews (400-800 words).
                Please include relevant clips with your pitch.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="contact">
              <AccordionTrigger>Contact the Editors</AccordionTrigger>
              <AccordionContent>
                For general inquiries, reach out to the editorial desk.
                For advertising and partnerships, contact our operations
                team directly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>
      Answer text here.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">type</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&quot;single&quot; | &quot;multiple&quot;</td>
                <td className="py-2 pr-4 font-mono text-xs">&mdash;</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">collapsible</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="py-2 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">value</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">string | string[]</td>
                <td className="py-2 pr-4 font-mono text-xs">&mdash;</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">defaultValue</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">string | string[]</td>
                <td className="py-2 pr-4 font-mono text-xs">&mdash;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Triggers use <code className="bg-muted px-1 font-mono text-xs">font-serif text-lg</code> to
          give each section heading editorial weight. The chevron rotates
          180 degrees on open, and the hover state transitions to{" "}
          <code className="bg-muted px-1 font-mono text-xs">accent-warm</code>.
          Items are separated by 2px ink rules, maintaining the broadsheet
          rule language.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/tabs" className="text-link hover:text-accent-warm">Tabs</a>{" · "}
        <a href="/docs/components/separator" className="text-link hover:text-accent-warm">Separator</a>{" · "}
        <a href="/docs/components/card" className="text-link hover:text-accent-warm">Card</a>
      </p>
    </div>
  );
}
