import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function CardDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Card</H1>
        <Lead className="mt-3 max-w-2xl">
          Paper-toned card with 2px ink borders and hard offset shadow — the
          editorial clipping.
        </Lead>
      </div>

      <InstallBlock name="card" />
      <Separator />

      <div className="space-y-4">
        <H2>Default</H2>
        <ComponentPreview className="flex-col items-start">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <Caption>Issue 001</Caption>
              <CardTitle>The Art of Typography</CardTitle>
              <CardDescription>
                Exploring typographic hierarchy in editorial design.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Every decision about type is a decision about how the reader
                moves through your content.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Read More</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Accent variant</H2>
        <ComponentPreview className="flex-col items-start">
          <Card className="w-full max-w-sm bg-accent-card-bg">
            <CardHeader>
              <Badge variant="accent">Featured</Badge>
              <CardTitle>Ink & Paper</CardTitle>
              <CardDescription>
                Why warm tones outperform cold neutrals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Cream paper reduces eye strain by 23% compared to pure white.
              </p>
            </CardContent>
          </Card>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Without shadow</H2>
        <ComponentPreview className="flex-col items-start">
          <Card shadow={false} className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Flat card</CardTitle>
              <CardDescription>No shadow, borders only.</CardDescription>
            </CardHeader>
          </Card>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="example.tsx">{`import {
  Card, CardHeader, CardTitle,
  CardDescription, CardContent, CardFooter
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Article Title</CardTitle>
    <CardDescription>A short summary.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Body content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline">Read More</Button>
  </CardFooter>
</Card>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">shadow</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="py-2 pr-4 font-mono text-xs">true</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Caption>
          Card also accepts all standard <code className="bg-muted px-1 font-mono text-xs">div</code> props.
          Sub-components: CardHeader, CardTitle, CardDescription, CardContent, CardFooter.
        </Caption>
      </div>

      <Separator />
      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/badge" className="text-link">Badge</a>{" · "}
        <a href="/docs/components/button" className="text-link">Button</a>{" · "}
        <a href="/docs/components/separator" className="text-link">Separator</a>
      </p>
    </div>
  );
}
