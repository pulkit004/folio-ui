import { DocsSidebar } from "@/components/docs/sidebar";
import Link from "next/link";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b-2 border-line bg-paper/95 px-6 py-4 backdrop-blur-sm md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-serif text-xl text-foreground no-underline hover:text-foreground">
            folio-ui
          </Link>
          <nav className="flex gap-6">
            <Link href="/docs" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground no-underline">
              Docs
            </Link>
            <Link href="/docs/components/avatar" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground no-underline">
              Components
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl gap-8 px-6 py-10 md:px-12">
        <DocsSidebar />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
