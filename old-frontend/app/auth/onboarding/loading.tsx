export default function Loading() {
  return (
    <div className="min-h-screen bg-background relative">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/galaxy.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-1 bg-orange-accent text-background text-xs font-mono">LOADING</div>
          <div className="mx-auto h-1 w-40 bg-foreground/10 overflow-hidden">
            <div className="h-full w-1/2 bg-orange-accent animate-[loading_1.4s_ease-in-out_infinite]" />
          </div>
          <p className="text-sm text-black/80">Preparing your workspace…</p>
        </div>
      </div>
    </div>
  )
}

