"use client";

import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Navigation Menu</H1>
        <Lead className="mt-3 max-w-2xl">
          A site-wide navigation bar with expandable content panels -- ideal for
          complex information architectures with editorial flair.
        </Lead>
      </div>

      <InstallBlock name="navigation-menu" />

      <Separator />

      <div className="space-y-4">
        <H2>Basic Navigation</H2>
        <ComponentPreview className="min-h-[300px] items-start">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg leading-none">folio-ui</h4>
                      <p className="text-sm text-muted-foreground leading-snug">
                        An editorial design system built on shadcn/ui. Warm tones,
                        hard shadows, sharp corners.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <NavigationMenuLink
                        href="/docs"
                        className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-muted"
                      >
                        <div className="font-mono text-xs uppercase tracking-widest">Introduction</div>
                        <p className="text-sm text-muted-foreground leading-snug">
                          Design philosophy and quick start.
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/docs/installation"
                        className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-muted"
                      >
                        <div className="font-mono text-xs uppercase tracking-widest">Installation</div>
                        <p className="text-sm text-muted-foreground leading-snug">
                          Add folio-ui to your project.
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {[
                      { title: "Button", desc: "Ink-bordered actions with hard shadow states." },
                      { title: "Card", desc: "Content containers with editorial borders." },
                      { title: "Dialog", desc: "Modal overlays with sharp geometry." },
                      { title: "Tabs", desc: "Sectioned content with mono-spaced labels." },
                    ].map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink
                          href={`/docs/components/${item.title.toLowerCase()}`}
                          className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-muted"
                        >
                          <div className="font-mono text-xs uppercase tracking-widest">{item.title}</div>
                          <p className="text-sm text-muted-foreground leading-snug">{item.desc}</p>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/docs/tokens"
                  className={navigationMenuTriggerStyle()}
                >
                  Tokens
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Section</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="p-6">Content panel here</div>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink
        href="/page"
        className={navigationMenuTriggerStyle()}
      >
        Direct Link
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">NavigationMenu</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Root wrapper that renders the viewport</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">NavigationMenuList</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Horizontal list of menu items</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">NavigationMenuTrigger</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Trigger with chevron indicator and mono type</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">NavigationMenuContent</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Animated content panel</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">NavigationMenuLink</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Link element for direct navigation</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">NavigationMenuViewport</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Bordered viewport with hard shadow</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">navigationMenuTriggerStyle</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">CVA utility for styling standalone links as triggers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          The viewport container uses{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-2 border-line shadow-hard-sm</code>{" "}
          to frame content panels with the editorial ink-and-shadow language.
          Triggers follow the mono uppercase label convention used in all navigation
          elements.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/menubar" className="text-link hover:text-accent-warm">Menubar</a>{" · "}
        <a href="/docs/components/tabs" className="text-link hover:text-accent-warm">Tabs</a>{" · "}
        <a href="/docs/components/breadcrumb" className="text-link hover:text-accent-warm">Breadcrumb</a>
      </p>
    </div>
  );
}
