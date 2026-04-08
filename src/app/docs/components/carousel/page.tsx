"use client";

import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Carousel</H1>
        <Lead className="mt-3 max-w-2xl">
          A horizontal slide carousel with editorial navigation buttons --
          hard shadows, ink borders, and keyboard support via Embla.
        </Lead>
      </div>

      <InstallBlock name="carousel" />

      <Separator />

      <div className="space-y-4">
        <H2>Basic Carousel</H2>
        <ComponentPreview className="px-16">
          <Carousel className="w-full max-w-sm">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="flex h-48 items-center justify-center border-2 border-line bg-muted">
                    <span className="font-serif text-3xl">{index + 1}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Multiple Items</H2>
        <ComponentPreview className="px-16">
          <Carousel
            opts={{ align: "start" }}
            className="w-full max-w-lg"
          >
            <CarouselContent className="-ml-2">
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 pl-2"
                >
                  <div className="flex h-32 items-center justify-center border-2 border-line bg-muted">
                    <span className="font-serif text-xl">{index + 1}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
    <CarouselItem>Slide 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</CodeBlock>
      </div>

      <div className="space-y-4">
        <H2>API Reference</H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-line">
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Component</th>
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/20">
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">Carousel</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Root component with Embla context, keyboard support</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">CarouselContent</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Scrollable container for slides</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">CarouselItem</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Individual slide wrapper</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">CarouselPrevious</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Navigation button to scroll left/up</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">CarouselNext</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Navigation button to scroll right/down</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto pt-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-line">
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Prop (Carousel)</th>
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/20">
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">opts</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Embla carousel options (align, loop, etc.)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">orientation</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">&quot;horizontal&quot; | &quot;vertical&quot; (default horizontal)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">plugins</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Embla plugins array (autoplay, etc.)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">setApi</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Callback to receive the Embla API instance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Navigation buttons use{" "}
          <code className="bg-muted px-1 font-mono text-xs">shadow-hard-sm</code>{" "}
          with the signature translate-on-hover pattern. They are positioned
          outside the carousel boundary at -48px offset to keep the content
          area clean. Slide containers should use{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-2 border-line</code>{" "}
          for editorial consistency.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/card" className="text-link hover:text-accent-warm">Card</a>{" · "}
        <a href="/docs/components/scroll-area" className="text-link hover:text-accent-warm">Scroll Area</a>{" · "}
        <a href="/docs/components/button" className="text-link hover:text-accent-warm">Button</a>
      </p>
    </div>
  );
}
