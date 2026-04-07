import { H1, Lead, H2, H3, Overline } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function DocsIntroduction() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Getting Started</Overline>
        <H1 className="mt-2">Introduction</H1>
        <Lead className="mt-3 max-w-2xl">
          folio-ui is an open-source design system built on shadcn/ui. It brings
          the structure and warmth of editorial print design to the web.
        </Lead>
      </div>

      <Separator />

      <div className="space-y-4">
        <H2>What is folio-ui?</H2>
        <p className="max-w-prose leading-7">
          folio-ui is a <strong>shadcn/ui style</strong> — not just a theme. It
          re-skins and extends shadcn components with an editorial design
          language: warm paper backgrounds, hard offset shadows, serif headlines,
          monospace labels, and 2px ink borders.
        </p>
        <p className="max-w-prose leading-7">
          Components are copied into your project via the shadcn CLI. You own
          the source code. No npm package dependency. No vendor lock-in.
        </p>
      </div>

      <div className="space-y-4">
        <H2>Why folio-ui?</H2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Typography-first",
              desc: "Three carefully paired typefaces — Instrument Serif for headlines, Space Grotesk for body, Space Mono for labels — doing distinct jobs.",
            },
            {
              title: "Warm, not aggressive",
              desc: "Cream paper, warm ink, terracotta accents. The restraint of a well-typeset magazine, not the chaos of brutalism.",
            },
            {
              title: "Print conventions as UI",
              desc: "Dropcaps, pull quotes, bylines, mastheads, section rules — centuries of editorial design, packaged as components.",
            },
          ].map((item) => (
            <div key={item.title} className="border-2 border-line bg-card p-5 shadow-hard">
              <H3 className="text-lg">{item.title}</H3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <H2>Who is it for?</H2>
        <div className="flex flex-wrap gap-2">
          {[
            "Portfolio sites",
            "Blogs & publications",
            "Agency sites",
            "Documentation",
            "Newsletters",
            "Content-heavy apps",
          ].map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <H2>Quick start</H2>
        <p className="max-w-prose leading-7">
          Add the folio-ui registry to your shadcn project and install your
          first component:
        </p>
        <pre className="overflow-x-auto border-2 border-line bg-card p-4 font-mono text-sm">
          <code>npx shadcn@latest add https://folio-ui.com/r/button.json</code>
        </pre>
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/installation" className="text-link hover:text-accent-warm">
            Full installation guide →
          </Link>
        </p>
      </div>
    </div>
  );
}
