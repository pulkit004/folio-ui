"use client";

import { useState } from "react";

export function InstallBlock({ name }: { name: string }) {
  const [copied, setCopied] = useState(false);
  const command = `npx shadcn@latest add https://folio-ui.com/r/${name}.json`;

  const copy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-4">
      <pre className="overflow-x-auto border-2 border-line bg-card p-4 font-mono text-sm">
        <code>{command}</code>
      </pre>
      <button
        onClick={copy}
        className="absolute right-3 top-3 border border-line bg-paper px-2 py-1 font-mono text-xs uppercase tracking-wider opacity-0 transition-opacity group-hover:opacity-100"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
