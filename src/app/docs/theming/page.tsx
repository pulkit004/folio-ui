import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/components/docs/component-preview";

const colorTokens = [
  { name: "--paper", value: "#f5efe2", desc: "Primary background" },
  { name: "--paper-2", value: "#fbf7ee", desc: "Card/surface background" },
  { name: "--ink", value: "#141414", desc: "Primary text, borders" },
  { name: "--muted", value: "#5f5a52", desc: "Secondary text" },
  { name: "--muted-2", value: "#7a7369", desc: "Labels, timestamps" },
  { name: "--line", value: "#1f1c18", desc: "Borders" },
  { name: "--accent-warm", value: "#c75a2c", desc: "Orange accent" },
  { name: "--accent-soft", value: "#edd2c4", desc: "Accent background" },
  { name: "--link", value: "#1f4ed8", desc: "Link text" },
  { name: "--quote-bg", value: "#1a1815", desc: "Dark section background" },
  { name: "--quote-fg", value: "#f7f1e7", desc: "Light text on dark" },
];

export default function ThemingPage() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Getting Started</Overline>
        <H1 className="mt-2">Theming</H1>
        <Lead className="mt-3 max-w-2xl">
          folio-ui uses CSS custom properties exposed to Tailwind v4 via{" "}
          <code className="bg-muted px-1 font-mono text-xs">@theme inline</code>.
          Every token is customizable.
        </Lead>
      </div>

      <Separator />

      <div className="space-y-4">
        <H2>Color tokens</H2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {colorTokens.map((token) => (
            <div key={token.name} className="flex items-center gap-3 border border-line/20 p-3">
              <div
                className="h-8 w-8 shrink-0 border-2 border-line"
                style={{ backgroundColor: token.value }}
              />
              <div className="min-w-0">
                <p className="font-mono text-xs">{token.name}</p>
                <p className="text-xs text-muted-foreground">{token.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <H2>Typography</H2>
        <p className="max-w-prose text-sm leading-7">
          The three-voice type system:
        </p>
        <div className="space-y-4">
          <div className="border-2 border-line p-5">
            <Caption>--font-serif &middot; Instrument Serif</Caption>
            <p className="mt-2 font-serif text-3xl">Headlines and card titles</p>
          </div>
          <div className="border-2 border-line p-5">
            <Caption>--font-sans &middot; Space Grotesk</Caption>
            <p className="mt-2 text-base">Body copy, descriptions, and default text</p>
          </div>
          <div className="border-2 border-line p-5">
            <Caption>--font-mono &middot; Space Mono</Caption>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest">Labels, navigation, badges, meta text</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <H2>Shadows</H2>
        <div className="flex flex-wrap gap-8">
          <div className="space-y-2">
            <div className="h-20 w-32 border-2 border-line bg-card shadow-hard" />
            <Caption>shadow-hard (8px 8px 0)</Caption>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-32 border-2 border-line bg-card shadow-hard-sm" />
            <Caption>shadow-hard-sm (4px 4px 0)</Caption>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <H2>Border radius</H2>
        <p className="max-w-prose text-sm leading-7">
          All <code className="bg-muted px-1 font-mono text-xs">--radius-*</code> tokens
          are set to <strong>0px</strong>. No border-radius anywhere. This is
          intentional — sharp corners reinforce the print/editorial aesthetic.
        </p>
      </div>

      <div className="space-y-4">
        <H2>Customization</H2>
        <p className="max-w-prose text-sm leading-7">
          To customize the palette, edit the CSS variables in your{" "}
          <code className="bg-muted px-1 font-mono text-xs">globals.css</code>{" "}
          <code className="bg-muted px-1 font-mono text-xs">:root</code> block.
          Changes propagate through all components automatically.
        </p>
        <CodeBlock filename="globals.css">{`:root {
  /* Swap the accent to a deep blue */
  --accent-warm: #1f4ed8;
  --accent-soft: #dbeafe;
  --ring: #1f4ed8;
}`}</CodeBlock>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        Next: <a href="/docs/components/button" className="text-link hover:text-accent-warm">Button component →</a>
      </p>
    </div>
  );
}
