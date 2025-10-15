"use client"

import { useState, useEffect } from "react"

export default function TerminalPage() {
  const [blinkingCursors, setBlinkingCursors] = useState<Array<{ id: number; x: number; y: number }>>([])

  // Generate random cursor positions
  useEffect(() => {
    const cursors = []
    for (let i = 0; i < 12; i++) {
      cursors.push({
        id: i,
        x: Math.random() * 80 + 10, // 10% to 90% of screen width
        y: Math.random() * 70 + 15, // 15% to 85% of screen height
      })
    }
    setBlinkingCursors(cursors)
  }, [])

  return (
    <div className="min-h-screen bg-terminal-bg relative overflow-hidden">
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

      {/* Star Icon in bottom right */}
      <div className="absolute bottom-8 right-8 text-gray-400">
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
          className="opacity-60"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
    </div>
  )
}
