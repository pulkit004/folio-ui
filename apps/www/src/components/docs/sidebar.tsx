"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNav } from "@/lib/docs-nav";
import { cn } from "@/lib/utils";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-64 shrink-0 border-r-2 border-line pr-6">
      <div className="sticky top-8 space-y-8">
        {docsNav.map((group) => (
          <div key={group.title}>
            <h4 className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {group.title}
            </h4>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-1 text-sm transition-colors hover:text-foreground",
                      pathname === item.href
                        ? "font-medium text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
