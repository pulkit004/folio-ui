import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function AvatarDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Avatar</H1>
        <Lead className="mt-3 max-w-2xl">
          Square avatar with 2px ink border — magazine masthead headshot feel.
        </Lead>
      </div>

      <InstallBlock name="avatar" />

      <Separator />

      <div className="space-y-4">
        <H2>Default with fallback</H2>
        <ComponentPreview>
          <Avatar>
            <AvatarFallback>PV</AvatarFallback>
          </Avatar>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>With image</H2>
        <ComponentPreview>
          <Avatar>
            <AvatarImage src="https://placehold.co/80x80" alt="User avatar" />
            <AvatarFallback>PV</AvatarFallback>
          </Avatar>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Sizes</H2>
        <ComponentPreview>
          <Avatar className="size-8">
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="size-14">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
          <Avatar className="size-20">
            <AvatarFallback>XL</AvatarFallback>
          </Avatar>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Page() {
  return (
    <Avatar>
      <AvatarImage src="/headshot.jpg" alt="Author" />
      <AvatarFallback>PV</AvatarFallback>
    </Avatar>
  )
}`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">className</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">string</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">children</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">AvatarImage | AvatarFallback</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Avatars are always square with sharp corners — no{" "}
          <code className="bg-muted px-1 font-mono text-xs">rounded-full</code>.
          The 2px ink border frames the headshot like a byline photo in a
          broadsheet layout. Fallback text uses{" "}
          <code className="bg-muted px-1 font-mono text-xs">font-mono uppercase</code>{" "}
          for consistency with the editorial type system.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/badge" className="text-link hover:text-accent-warm">Badge</a>{" \u00b7 "}
        <a href="/docs/components/card" className="text-link hover:text-accent-warm">Card</a>
      </p>
    </div>
  );
}
