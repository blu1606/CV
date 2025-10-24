'use client'

interface TerminalCursorsProps {
  count?: number
}

// Fixed positions to avoid hydration mismatch
const CURSOR_POSITIONS = [
  { left: '15%', top: '25%', delay: '0s' },
  { left: '65%', top: '45%', delay: '0.2s' },
  { left: '35%', top: '70%', delay: '0.4s' },
  { left: '80%', top: '30%', delay: '0.6s' },
  { left: '25%', top: '60%', delay: '0.8s' },
  { left: '75%', top: '20%', delay: '1s' },
  { left: '45%', top: '80%', delay: '1.2s' },
  { left: '55%', top: '35%', delay: '1.4s' },
]

export function TerminalCursors({ count = 6 }: TerminalCursorsProps) {
  const cursors = CURSOR_POSITIONS.slice(0, count)

  return (
    <>
      {cursors.map((cursor, i) => (
        <div
          key={i}
          className="absolute w-px h-5 bg-orange-500 terminal-cursor"
          style={{
            left: cursor.left,
            top: cursor.top,
            animationDelay: cursor.delay
          }}
        />
      ))}
    </>
  )
}