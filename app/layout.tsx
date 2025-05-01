import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Next Landing",
  description:
    "An opinionated, stripped-down Next.js starter for landing pages.",
  openGraph: {
    title: "Next Landing",
    description:
      "An opinionated, stripped-down Next.js starter for landing pages.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
