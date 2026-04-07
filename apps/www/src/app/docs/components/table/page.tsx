import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const issues = [
  { id: "ISS-001", title: "Redesign masthead typography", status: "In Progress", date: "2026-03-12" },
  { id: "ISS-002", title: "Add pull-quote component", status: "Open", date: "2026-03-15" },
  { id: "ISS-003", title: "Fix sidebar navigation a11y", status: "Closed", date: "2026-03-18" },
  { id: "ISS-004", title: "Update colour tokens for warmth", status: "In Progress", date: "2026-03-22" },
  { id: "ISS-005", title: "Add table component to registry", status: "Open", date: "2026-04-01" },
];

export default function TableDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Table</H1>
        <Lead className="mt-3 max-w-2xl">
          Semantic HTML table wrappers with editorial styling — mono-spaced
          uppercase headers, ink borders, and warm hover states.
        </Lead>
      </div>

      <InstallBlock name="table" />

      <Separator />

      <div className="space-y-4">
        <H2>Default</H2>
        <ComponentPreview>
          <Table>
            <TableCaption>A list of recent editorial issues.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Issue</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {issues.map((issue) => (
                <TableRow key={issue.id}>
                  <TableCell className="font-mono text-xs">{issue.id}</TableCell>
                  <TableCell className="font-serif">{issue.title}</TableCell>
                  <TableCell>{issue.status}</TableCell>
                  <TableCell className="text-right font-mono text-xs text-muted-foreground">
                    {issue.date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="page.tsx">{`import {
  Table, TableBody, TableCaption, TableCell,
  TableHead, TableHeader, TableRow,
} from "@/components/ui/table"

<Table>
  <TableCaption>A list of recent issues.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Issue</TableHead>
      <TableHead>Title</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>ISS-001</TableCell>
      <TableCell>Redesign masthead</TableCell>
      <TableCell>Open</TableCell>
    </TableRow>
  </TableBody>
</Table>`}</CodeBlock>
      </div>

      <div className="space-y-4">
        <H2>API Reference</H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-line">
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Component</th>
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Element</th>
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/20">
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">Table</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&lt;table&gt;</td>
                <td className="py-2 pr-4 text-muted-foreground">Root wrapper with overflow scroll</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">TableHeader</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&lt;thead&gt;</td>
                <td className="py-2 pr-4 text-muted-foreground">Header group with bottom border</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">TableBody</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&lt;tbody&gt;</td>
                <td className="py-2 pr-4 text-muted-foreground">Body group</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">TableHead</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&lt;th&gt;</td>
                <td className="py-2 pr-4 text-muted-foreground">Mono uppercase header cell</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">TableRow</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&lt;tr&gt;</td>
                <td className="py-2 pr-4 text-muted-foreground">Row with hover highlight</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">TableCell</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&lt;td&gt;</td>
                <td className="py-2 pr-4 text-muted-foreground">Data cell</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">TableCaption</td>
                <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">&lt;caption&gt;</td>
                <td className="py-2 pr-4 text-muted-foreground">Mono caption below table</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          Table headers use{" "}
          <code className="bg-muted px-1 font-mono text-xs">font-mono uppercase tracking-widest</code>{" "}
          matching the editorial label voice. Row borders use a low-opacity ink
          divider to keep the grid subtle while the header border stays bold at{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-2</code>.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/card" className="text-link hover:text-accent-warm">Card</a>{" · "}
        <a href="/docs/components/pagination" className="text-link hover:text-accent-warm">Pagination</a>{" · "}
        <a href="/docs/components/separator" className="text-link hover:text-accent-warm">Separator</a>
      </p>
    </div>
  );
}
