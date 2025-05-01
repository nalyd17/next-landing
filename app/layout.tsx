import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Zero",
  description:
    "An opinionated, stripped-down Next.js starter with zero bloat - clean, minimal, production-ready foundation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
