"use client";

import { useState } from "react";
import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";

export default function SliderDoc() {
  const [value, setValue] = useState([33]);
  const [range, setRange] = useState([20, 80]);

  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Slider</H1>
        <Lead className="mt-3 max-w-2xl">
          A square-thumbed range input with hard shadow and no border-radius.
          The editorial alternative to the rounded slider.
        </Lead>
      </div>

      <InstallBlock name="slider" />

      <Separator />

      <div className="space-y-4">
        <H2>Default</H2>
        <ComponentPreview>
          <div className="w-full max-w-sm space-y-2">
            <Slider
              value={value}
              onValueChange={setValue}
              max={100}
              step={1}
            />
            <p className="font-mono text-xs text-muted-foreground">
              Value: {value[0]}
            </p>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Range (two thumbs)</H2>
        <ComponentPreview>
          <div className="w-full max-w-sm space-y-2">
            <Slider
              value={range}
              onValueChange={setRange}
              max={100}
              step={1}
            />
            <p className="font-mono text-xs text-muted-foreground">
              Range: {range[0]} &ndash; {range[1]}
            </p>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import { Slider } from "@/components/ui/slider"

// Single value
<Slider defaultValue={[50]} max={100} step={1} />

// Range (two thumbs)
<Slider defaultValue={[20, 80]} max={100} step={1} />

// Controlled
const [value, setValue] = useState([33])
<Slider value={value} onValueChange={setValue} max={100} step={1} />`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">defaultValue</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">number[]</td>
                <td className="py-2 pr-4 font-mono text-xs">[0]</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">value</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">number[]</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">onValueChange</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">(value: number[]) =&gt; void</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">max</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">number</td>
                <td className="py-2 pr-4 font-mono text-xs">100</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">min</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">number</td>
                <td className="py-2 pr-4 font-mono text-xs">0</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">step</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">number</td>
                <td className="py-2 pr-4 font-mono text-xs">1</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">disabled</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="py-2 pr-4 font-mono text-xs">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          The square thumb is the key editorial differentiator. Where most
          slider thumbs are circles, ours is a sharp-cornered square with a{" "}
          <code className="bg-muted px-1 font-mono text-xs">shadow-hard-sm</code>{" "}
          offset. The track uses{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-2 border-line</code>{" "}
          to stay consistent with the rest of the system.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/input" className="text-link hover:text-accent-warm">Input</a>{" \u00b7 "}
        <a href="/docs/components/switch" className="text-link hover:text-accent-warm">Switch</a>
      </p>
    </div>
  );
}
