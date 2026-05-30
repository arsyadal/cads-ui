import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "cads-ui — premium motion components",
  description: "Copy-paste premium motion components for React, Tailwind, and shadcn-style projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} dark`}>
      <body className="noise min-h-screen font-[var(--font-body)] antialiased">{children}</body>
    </html>
  );
}
