import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CadsUI — Premium Motion Components",
  description:
    "Copy-paste animated UI components for React, Tailwind, and shadcn/ui.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
        <div className="noise" aria-hidden="true" />
      </body>
    </html>
  )
}
