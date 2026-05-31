import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uday Kiran Kota — Quality Engineer",
  description:
    "Portfolio of Uday Kiran Kota — Quality Engineer specializing in Playwright, TypeScript, k6 performance testing, and MCP Browser automation.",
  keywords: [
    "QA Engineer",
    "SDET",
    "Playwright",
    "TypeScript",
    "k6",
    "MCP Browser",
    "Test Automation",
    "Hyderabad",
  ],
  authors: [{ name: "Uday Kiran Kota" }],
  openGraph: {
    title: "Uday Kiran Kota — Quality Engineer",
    description: "Automation · Performance · AI-Assisted Testing",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
