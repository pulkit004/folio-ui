import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

export default function InputOTPDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Input OTP</H1>
        <Lead className="mt-3 max-w-2xl">
          A one-time password input with sharp editorial cells, monospace
          digits, and animated caret -- built on input-otp.
        </Lead>
      </div>

      <InstallBlock name="input-otp" />

      <Separator />

      <div className="space-y-4">
        <H2>6-Digit OTP</H2>
        <ComponentPreview>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>With Separator</H2>
        <ComponentPreview>
          <InputOTP maxLength={4}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp"

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}</CodeBlock>
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
                <td className="py-2 pr-4 font-mono text-xs">InputOTP</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Root wrapper around the OTP input, accepts maxLength</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">InputOTPGroup</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Groups adjacent slots into a visual block</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">InputOTPSlot</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Individual digit cell, requires index prop</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">InputOTPSeparator</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Visual separator between slot groups</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Each slot uses{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-2 border-line</code>{" "}
          with shared borders between adjacent cells. Active slots receive a
          ring focus indicator and an animated caret using the{" "}
          <code className="bg-muted px-1 font-mono text-xs">caret-blink</code>{" "}
          keyframe. All digits render in{" "}
          <code className="bg-muted px-1 font-mono text-xs">font-mono</code>{" "}
          for consistent width.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/input" className="text-link hover:text-accent-warm">Input</a>{" · "}
        <a href="/docs/components/label" className="text-link hover:text-accent-warm">Label</a>{" · "}
        <a href="/docs/components/button" className="text-link hover:text-accent-warm">Button</a>
      </p>
    </div>
  );
}
