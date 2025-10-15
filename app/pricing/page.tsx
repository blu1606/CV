import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Check, Sparkles } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/galaxy.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10">
          <header className="border-2 border-foreground/20 mx-4 mt-4">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-6">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-6 bg-foreground" />
                  <div className="w-1 h-6 bg-foreground" />
                  <div className="w-1 h-6 bg-foreground" />
                </div>
                <span className="text-xl font-bold text-black">magiCV</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/dashboard" className="text-sm font-mono text-black hover:underline">
                  {"> DASHBOARD"}
                </Link>
                <Link href="/components" className="text-sm font-mono text-black hover:underline">
                  {"> COMPONENTS"}
                </Link>
                <Link href="/dashboard" className="text-sm font-mono text-black hover:underline">
                  {"> NEW CV"}
                </Link>
                <Link href="/settings" className="text-sm font-mono text-black hover:underline">
                  {"> SETTINGS"}
                </Link>
              </nav>
              <Button
                variant="outline"
                size="sm"
                className="font-mono text-xs border-2 border-foreground/40 text-black hover:bg-foreground/10 bg-transparent"
                asChild
              >
                <Link href="/">{"> HOME"}</Link>
              </Button>
            </div>
          </header>

          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-block px-4 py-1 bg-orange-accent text-background text-xs font-mono">PRICING</div>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-black text-balance">
                Upgrade to Premium
              </h1>
              <p className="text-lg md:text-xl text-black/80 leading-relaxed max-w-2xl mx-auto">
                Get unlimited CV slots, manage multiple versions, and export professional PDFs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
              {/* Free Plan */}
              <Card className="p-8 bg-transparent border-2 border-black">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-black">Free</h2>
                    <span className="text-3xl font-serif text-black">$0</span>
                  </div>
                  <ul className="space-y-3 text-sm text-black">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-black" /> 1 CV slot</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-black" /> Import from LinkedIn & GitHub</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-black" /> AI match score (basic)</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-black" /> Export to PDF (watermarked)</li>
                  </ul>
                  <Button variant="outline" className="font-mono text-sm border-2 border-black bg-transparent text-black hover:bg-black/10 w-full h-11">
                    {"> CURRENT PLAN"}
                  </Button>
                </div>
              </Card>

              {/* Premium Plan */}
              <Card className="p-8 bg-orange-accent/10 border-2 border-orange-accent/40">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-black flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-orange-accent" /> Premium
                    </h2>
                    <span className="text-3xl font-serif text-black">$12<span className="text-base">/mo</span></span>
                  </div>
                  <ul className="space-y-3 text-sm text-black/90">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-accent" /> Unlimited CV slots</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-accent" /> Multiple versions per job</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-accent" /> Advanced AI match breakdown</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-accent" /> Priority export (no watermark)</li>
                  </ul>
                  <Button className="font-mono text-sm bg-orange-accent text-background hover:bg-orange-accent/90 w-full h-11" asChild>
                    <Link href="/waitlist">{"> JOIN WAITLIST"}</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Details on grid background */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: "url('/tech-grid-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-background/80 backdrop-blur-sm border-2 border-foreground/20">
              <h3 className="text-xl font-semibold text-white mb-3">What do I get with Premium?</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Unlimited CV slots, advanced AI match analysis, and watermark-free PDF exports. Manage multiple versions
                for each job and iterate faster.
              </p>
            </Card>
            <Card className="p-6 bg-background/80 backdrop-blur-sm border-2 border-foreground/20">
              <h3 className="text-xl font-semibold text-white mb-3">When will Premium be available?</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                We're launching soon. Join the waitlist and we'll notify you the moment it's ready.
              </p>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Button className="font-mono text-sm bg-orange-accent text-background hover:bg-orange-accent/90 h-12 px-6" asChild>
              <Link href="/waitlist">{"> JOIN THE WAITLIST"}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


