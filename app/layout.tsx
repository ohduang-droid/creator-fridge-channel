import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { PortalMonitor } from "@/components/portal-monitor"
import "./globals.css"

export const metadata: Metadata = {
  title: "Fridge Channel - Turn your content into a channel on your fan's fridge",
  description: "NFC-powered fridge magnets that let creators run a daily channel on their audience's fridge",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <PortalMonitor />
        <Analytics />
      </body>
    </html>
  )
}
