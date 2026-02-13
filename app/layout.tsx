import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google Lens → Visual Commerce | PM Case Study",
  description:
    "A product strategy case study: transforming Google Lens from visual search into an end-to-end visual commerce platform (with Lenskart integration).",
  openGraph: {
    title: "Google Lens → Visual Commerce | PM Case Study",
    description:
      "A product strategy case study: transforming visual search into an end-to-end visual commerce platform.",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Case Study Cover" }]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
