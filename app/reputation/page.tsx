import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function ReputationPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Scan lines background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }} />
      </div>

      {/* Scattered circles decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/20 rounded-full"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-2 border-white/20 mx-4 mt-4">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-1 h-6 bg-white" />
                <div className="w-1 h-6 bg-white" />
                <div className="w-1 h-6 bg-white" />
              </div>
              <span className="text-xl font-bold text-white">magiCV</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/dashboard" className="text-sm font-mono text-white hover:underline">
                {"> DASHBOARD"}
              </Link>
              <Link href="/components" className="text-sm font-mono text-white hover:underline">
                {"> COMPONENTS"}
              </Link>
              <Link href="/dashboard" className="text-sm font-mono text-white hover:underline">
                {"> NEW CV"}
              </Link>
              <Link href="/settings" className="text-sm font-mono text-white hover:underline">
                {"> SETTINGS"}
              </Link>
            </nav>
            <Button
              variant="outline"
              size="sm"
              className="font-mono text-xs border-2 border-white/40 text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/">{"> HOME"}</Link>
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <h1 className="font-serif text-5xl md:text-6xl leading-[1.1] text-white">
                How reputation is gained or lost
              </h1>
              
              {/* Review Section */}
              <Card className="p-6 bg-transparent border border-white/30">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white uppercase tracking-wider">REVIEW</h2>
                  <div className="space-y-3 text-white/90 leading-relaxed">
                    <p>Leave simple thumbs up, thumbs down or neutral reviews for anyone.</p>
                    <p>
                      Minor impact on credibility score in isolation, but can have a{" "}
                      <span className="font-bold text-white">major</span> impact over time, from the right people, and in volume.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Additional Categories */}
              <div className="space-y-4">
                <div className="text-2xl font-bold text-white/60 uppercase tracking-wider hover:text-white transition-colors cursor-pointer">
                  VOUCH
                </div>
                <div className="text-2xl font-bold text-white/60 uppercase tracking-wider hover:text-white transition-colors cursor-pointer">
                  SLASH
                </div>
              </div>
            </div>

            {/* Right Side - Circular Graphic */}
            <div className="flex justify-center items-center">
              <div className="relative">
                {/* Outer ring */}
                <div className="w-80 h-80 border border-white/40 rounded-full flex items-center justify-center">
                  {/* Middle ring */}
                  <div className="w-64 h-64 border-2 border-white/60 rounded-full flex items-center justify-center">
                    {/* Inner circle with scan lines */}
                    <div className="w-48 h-48 bg-white/5 rounded-full flex items-center justify-center relative overflow-hidden">
                      {/* Scan lines effect */}
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.1) 3px, rgba(255,255,255,0.1) 6px)',
                      }} />
                      {/* Number display */}
                      <div className="relative z-10 text-6xl font-mono font-bold text-white">
                        1463=
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white/5 border border-white/20 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Credibility System</h3>
                  <p className="text-white/80 leading-relaxed">
                    Your reputation score is calculated through multiple factors including reviews, 
                    vouches, and professional endorsements. Each interaction contributes to your 
                    overall credibility in the network.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Impact Factors</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Review quality and consistency</li>
                    <li>• Voucher reputation weight</li>
                    <li>• Volume of interactions</li>
                    <li>• Time-based decay factors</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
