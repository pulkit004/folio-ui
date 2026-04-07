"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  children: ReactNode;
  className?: string;
}

export function ComponentPreview({ children, className }: ComponentPreviewProps) {
  return (
    <div className={cn("my-6 border-2 border-line bg-paper-2 p-8", className)}>
      <div className="flex flex-wrap items-center gap-4">
        {children}
      </div>
    </div>
  );
}

interface CodeBlockProps {
  children: string;
  filename?: string;
}

export function CodeBlock({ children, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-4">
      {filename && (
        <div className="border-2 border-b-0 border-line bg-muted px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {filename}
        </div>
      )}
      <pre className={cn(
        "overflow-x-auto border-2 border-line bg-card p-4 font-mono text-sm leading-relaxed",
        filename && "border-t-0"
      )}>
        <code>{children}</code>
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
