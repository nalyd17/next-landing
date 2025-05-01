import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Landing",
  description:
    "An opinionated, stripped-down Next.js starter for landing pages.",
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
