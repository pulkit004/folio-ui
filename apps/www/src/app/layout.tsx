import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "folio-ui — Components for the editorial web",
  description:
    "An open-source design system built on shadcn/ui. Serif headlines, warm paper tones, hard shadows, sharp geometry.",
  metadataBase: new URL("https://folio-ui.com"),
  openGraph: {
    title: "folio-ui — Components for the editorial web",
    description:
      "47 components styled with warm paper tones, serif headings, hard shadows, and sharp geometry. Built on shadcn/ui.",
    url: "https://folio-ui.com",
    siteName: "folio-ui",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "folio-ui — Components for the editorial web",
    description:
      "47 components styled with warm paper tones, serif headings, hard shadows, and sharp geometry. Built on shadcn/ui.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
