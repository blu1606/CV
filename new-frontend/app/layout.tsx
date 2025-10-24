import type React from "react"
import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { VideoBackground } from "@/components/video-background"
import "./globals.css"

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono"
})

export const metadata: Metadata = {
  title: "magiCV - AI-Powered Resume Generator",
  description: "Generate optimized CVs with AI in seconds",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceMono.variable} font-mono antialiased`}>
        <VideoBackground videoSrc="/your-video.mp4" />
        <div className="video-content">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
