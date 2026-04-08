"use client";

import { useState } from "react";
import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarDoc() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Calendar</H1>
        <Lead className="mt-3 max-w-2xl">
          A date picker calendar with editorial typography -- serif month
          labels, mono weekday headers, and sharp cell boundaries.
        </Lead>
      </div>

      <InstallBlock name="calendar" />

      <Separator />

      <div className="space-y-4">
        <H2>Basic Calendar</H2>
        <ComponentPreview>
          <Calendar />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>With Selection</H2>
        <ComponentPreview>
          <div className="flex flex-col items-start gap-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
            />
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Selected: {date ? date.toLocaleDateString() : "none"}
            </p>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
    />
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
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/20">
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">mode</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">&quot;single&quot; | &quot;multiple&quot; | &quot;range&quot;</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">selected</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Currently selected date(s)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">onSelect</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Callback when selection changes</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">showOutsideDays</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Show days from adjacent months (default true)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">classNames</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Override individual element class names</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          The calendar uses the three-voice type system: month caption in{" "}
          <code className="bg-muted px-1 font-mono text-xs">font-serif</code>,
          weekday headers in{" "}
          <code className="bg-muted px-1 font-mono text-xs">font-mono uppercase</code>,
          and day numbers in{" "}
          <code className="bg-muted px-1 font-mono text-xs">font-sans</code>.
          Navigation buttons carry{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-2 border-line</code>{" "}
          for the editorial button convention.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/popover" className="text-link hover:text-accent-warm">Popover</a>{" · "}
        <a href="/docs/components/input" className="text-link hover:text-accent-warm">Input</a>{" · "}
        <a href="/docs/components/button" className="text-link hover:text-accent-warm">Button</a>
      </p>
    </div>
  );
}
