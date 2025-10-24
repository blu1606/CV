"use client"

import { AnimatedCounter } from "@/components/animated-counter"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ProblemReviewPage() {
  const [blinkingCursors, setBlinkingCursors] = useState<Array<{ id: number; x: number; y: number }>>([])

  // Generate random cursor positions
  useEffect(() => {
    const cursors = []
    for (let i = 0; i < 8; i++) {
      cursors.push({
        id: i,
        x: Math.random() * 80 + 10, // 10% to 90% of screen width
        y: Math.random() * 70 + 15, // 15% to 85% of screen height
      })
    }
    setBlinkingCursors(cursors)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative min-h-screen flex items-center justify-center bg-terminal-bg"
      >
        {/* Blinking Cursors */}
        {blinkingCursors.map((cursor) => (
          <div
            key={cursor.id}
            className="absolute w-px h-5 bg-orange-500 terminal-cursor"
            style={{
              left: `${cursor.x}%`,
              top: `${cursor.y}%`,
              animationDelay: `${cursor.id * 0.2}s`
            }}
          />
        ))}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-1 bg-orange-accent text-background text-xs font-mono mb-4">
              THE PROBLEM
            </div>
            <AnimatedCounter
              end={73}
              suffix="%"
              duration={2500}
              className="font-mono text-6xl md:text-8xl font-bold text-orange-accent tracking-tight"
            />
            <p className="text-xl text-muted-foreground">
              of job applications are rejected by ATS systems before a human ever sees them.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Most CVs fail because they don't match job requirements. magiCV uses AI to analyze job descriptions and
              optimize your CV for maximum compatibility.{" "}
              <Link href="#" className="text-foreground underline hover:text-orange-accent transition-colors">
                {"> View research"}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
