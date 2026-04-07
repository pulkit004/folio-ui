"use client";

import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", features: 12, opinion: 8, culture: 15 },
  { month: "Feb", features: 18, opinion: 12, culture: 10 },
  { month: "Mar", features: 22, opinion: 15, culture: 20 },
];

const chartConfig = {
  features: {
    label: "Features",
    color: "var(--accent-warm)",
  },
  opinion: {
    label: "Opinion",
    color: "var(--primary)",
  },
  culture: {
    label: "Culture",
    color: "var(--muted-foreground)",
  },
} satisfies ChartConfig;

export default function ChartDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Chart</H1>
        <Lead className="mt-3 max-w-2xl">
          A theming layer for Recharts that applies editorial styling --
          ink-bordered tooltips, mono-spaced legends, and warm color mapping.
        </Lead>
      </div>

      <InstallBlock name="chart" />

      <Separator />

      <div className="space-y-4">
        <H2>Bar Chart</H2>
        <ComponentPreview>
          <div className="w-full max-w-lg">
            <ChartContainer config={chartConfig}>
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="features" fill="var(--color-features)" radius={0} />
                <Bar dataKey="opinion" fill="var(--color-opinion)" radius={0} />
                <Bar dataKey="culture" fill="var(--color-culture)" radius={0} />
              </BarChart>
            </ChartContainer>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"

const config = {
  sales: {
    label: "Sales",
    color: "var(--accent-warm)",
  },
} satisfies ChartConfig

const data = [
  { month: "Jan", sales: 120 },
  { month: "Feb", sales: 180 },
]

<ChartContainer config={config}>
  <BarChart data={data}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="month" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="sales" fill="var(--color-sales)" radius={0} />
  </BarChart>
</ChartContainer>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">ChartContainer</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Wraps ResponsiveContainer with CSS variable injection from config</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">ChartConfig</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Type: record mapping data keys to label, icon, and color</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">ChartTooltip</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Re-export of Recharts Tooltip</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">ChartTooltipContent</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Editorial tooltip with ink border, hard shadow, mono labels</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">ChartLegend</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Re-export of Recharts Legend</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">ChartLegendContent</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Custom legend with mono uppercase labels and color dots</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Chart tooltips use{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-2 border-line bg-paper shadow-hard-sm</code>{" "}
          to stay consistent with popovers and dropdown content throughout the system.
          Bar radii are always 0 -- no rounded corners, ever.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/card" className="text-link hover:text-accent-warm">Card</a>{" · "}
        <a href="/docs/components/table" className="text-link hover:text-accent-warm">Table</a>{" · "}
        <a href="/docs/components/tooltip" className="text-link hover:text-accent-warm">Tooltip</a>
      </p>
    </div>
  );
}
