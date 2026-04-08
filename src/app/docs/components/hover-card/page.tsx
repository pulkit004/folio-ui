import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HoverCardDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Hover Card</H1>
        <Lead className="mt-3 max-w-2xl">
          A content preview that appears on hover — ideal for author bios,
          link previews, and contextual detail without leaving the page.
        </Lead>
      </div>

      <InstallBlock name="hover-card" />

      <Separator />

      <div className="space-y-4">
        <H2>Author Profile Card</H2>
        <ComponentPreview>
          <HoverCard>
            <HoverCardTrigger asChild>
              <a
                href="#"
                className="font-serif text-lg underline decoration-accent-warm underline-offset-4"
              >
                @jane_doe
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-normal">Jane Doe</h4>
                  <p className="text-sm text-muted-foreground">
                    Staff writer covering design systems and editorial
                    technology.
                  </p>
                  <div className="flex items-center pt-2">
                    <span className="font-mono text-xs text-muted-2">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Link Preview</H2>
        <ComponentPreview>
          <p className="text-sm leading-relaxed">
            Read the full report on{" "}
            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href="#"
                  className="font-serif underline decoration-accent-warm underline-offset-4"
                >
                  editorial design tokens
                </a>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Article Preview
                  </p>
                  <p className="font-serif text-sm font-normal">
                    Design Tokens for the Editorial Web
                  </p>
                  <p className="text-sm text-muted-foreground">
                    A deep dive into warm palettes, hard shadows, and the
                    three-voice type system.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>{" "}
            for more details.
          </p>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

<HoverCard>
  <HoverCardTrigger asChild>
    <a href="#">@username</a>
  </HoverCardTrigger>
  <HoverCardContent>
    <p>Profile preview content</p>
  </HoverCardContent>
</HoverCard>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">HoverCard</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Root component wrapping the hover card state</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">HoverCardTrigger</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Element that activates the card on hover</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">HoverCardContent</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Floating panel with editorial borders and hard shadow</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          The Hover Card uses the full{" "}
          <code className="bg-muted px-1 font-mono text-xs">shadow-hard</code>{" "}
          (8px offset) to establish it as a primary content surface, unlike
          menus which use the smaller 4px shadow. The default width of 16rem
          provides enough space for an author bio or link preview without
          overwhelming the reading flow.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/tooltip" className="text-link hover:text-accent-warm">Tooltip</a>{" · "}
        <a href="/docs/components/popover" className="text-link hover:text-accent-warm">Popover</a>{" · "}
        <a href="/docs/components/avatar" className="text-link hover:text-accent-warm">Avatar</a>
      </p>
    </div>
  );
}
