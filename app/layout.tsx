import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Space_Grotesk, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "magiCV - AI-Powered CV Builder",
  description: "Create job-ready CVs in seconds with AI-powered matching and intelligent component management"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${spaceGrotesk.variable} ${GeistMono.variable} ${instrumentSerif.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
