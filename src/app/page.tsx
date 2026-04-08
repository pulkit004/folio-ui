import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  H1,
  H2,
  H3,
  Lead,
  Blockquote,
  Caption,
  Overline,
} from "@/components/ui/typography";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-line/30 px-6 py-3 md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-serif text-lg text-foreground no-underline">
            folio-ui
          </Link>
          <div className="flex gap-6">
            <Link href="/docs" className="font-mono text-xs uppercase tracking-widest text-muted-foreground no-underline hover:text-foreground">
              Docs
            </Link>
            <Link href="/docs/installation" className="font-mono text-xs uppercase tracking-widest text-muted-foreground no-underline hover:text-foreground">
              Get Started
            </Link>
            <Link href="/docs/components/button" className="font-mono text-xs uppercase tracking-widest text-muted-foreground no-underline hover:text-foreground">
              Components
            </Link>
          </div>
        </div>
      </nav>

      {/* Masthead */}
      <header className="border-b-2 border-line px-6 py-12 md:px-12">
        <div className="mx-auto max-w-6xl">
          <Overline>Open Source Design System</Overline>
          <H1 className="mt-2">folio-ui</H1>
          <Lead className="mt-3 max-w-xl">
            Components for the editorial web. An open-source design system built
            on shadcn/ui that brings the structure and warmth of print design to
            the screen.
          </Lead>
          <div className="mt-6 flex gap-4">
            <Button asChild>
              <Link href="/docs/installation">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs/components/button">Browse Components</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 md:px-12">
        {/* Typography */}
        <section className="mb-16">
          <Overline>Typography</Overline>
          <Separator className="mb-6 mt-2" />
          <div className="space-y-6">
            <H1>The quick brown fox jumps over the lazy dog</H1>
            <H2>Headlines set in Instrument Serif</H2>
            <H3>Body copy in Space Grotesk, labels in Space Mono</H3>
            <p className="max-w-prose text-base leading-7">
              Good typography is invisible. Great typography is unforgettable. This
              design system pairs a warm serif headline face with a clean geometric
              sans for body text and a precise monospace for labels, navigation,
              and metadata — the same three-voice system used by the best editorial
              publications.
            </p>
            <Blockquote>
              &ldquo;The details are not the details. They make the design.&rdquo;
              <Caption className="mt-2 not-italic">
                &mdash; Charles Eames
              </Caption>
            </Blockquote>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <Overline>Buttons</Overline>
          <Separator className="mb-6 mt-2" />
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <Overline>Cards</Overline>
          <Separator className="mb-6 mt-2" />
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Caption>Issue 001</Caption>
                <CardTitle>The Art of Typography</CardTitle>
                <CardDescription>
                  Exploring the fundamentals of typographic hierarchy in editorial
                  design.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Every decision about type — size, weight, spacing, measure — is a
                  decision about how the reader moves through your content.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-accent-card-bg">
              <CardHeader>
                <Caption>Featured</Caption>
                <CardTitle>Ink & Paper</CardTitle>
                <CardDescription>
                  Why warm tones outperform cold neutrals in long-form reading
                  experiences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Cream paper reduces eye strain by 23% compared to pure white,
                  while maintaining the same perceived contrast ratio.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Subscribe</Button>
              </CardFooter>
            </Card>

            <Card shadow={false}>
              <CardHeader>
                <Caption>Archive</Caption>
                <CardTitle>Sharp Geometry</CardTitle>
                <CardDescription>
                  On the deliberate absence of border-radius in editorial systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Square corners signal intention. They say: this was cut, not
                  grown. Every edge is a decision.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-16">
          <Overline>Badges</Overline>
          <Separator className="mb-6 mt-2" />
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-16">
          <Overline>Form Elements</Overline>
          <Separator className="mb-6 mt-2" />
          <div className="grid max-w-md gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Write something worth reading..."
              />
            </div>
            <Button className="w-fit">Submit</Button>
          </div>
        </section>

        {/* Skeleton */}
        <section className="mb-16">
          <Overline>Loading States</Overline>
          <Separator className="mb-6 mt-2" />
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </section>

        {/* Separator Showcase */}
        <section className="mb-16">
          <Overline>Separators</Overline>
          <Separator className="mb-6 mt-2" />
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              2px ink rules. The same weight used in the best broadsheet newspapers.
            </p>
            <Separator />
            <p className="text-sm text-muted-foreground">
              Clean, decisive, structural.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-line px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Caption>folio-ui v0.1.0</Caption>
          <Caption>Components for the editorial web</Caption>
        </div>
      </footer>
    </div>
  );
}
