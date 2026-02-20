import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Software Engineer",
  description:
    "A modern dashboard-style portfolio showcasing full-stack projects built with Java, Spring Boot, React, and more.",
  openGraph: {
    title: "Portfolio | Software Engineer",
    description:
      "Explore production-grade projects built with modern technologies.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0f1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
