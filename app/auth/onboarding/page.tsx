import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/galaxy.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10">
          <header className="border-2 border-foreground/20 mx-4 mt-4">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-6 bg-foreground" />
                  <div className="w-1 h-6 bg-foreground" />
                  <div className="w-1 h-6 bg-foreground" />
                </div>
                <span className="text-xl font-bold text-black">magiCV</span>
              </div>
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
                <Link href="/dashboard">{"> OPEN MAGICV"}</Link>
              </Button>
            </div>
          </header>

          <div className="container mx-auto px-4 py-24 md:py-40">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-block px-4 py-1 bg-orange-accent text-background text-xs font-mono">SYNCING</div>
              <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] text-black text-balance">Syncing Your Profile…</h1>
              <p className="text-lg text-black/80 leading-relaxed">
                We’re importing your professional data from LinkedIn and preparing your workspace. This only takes a
                moment.
              </p>

              <div className="flex items-center justify-center gap-3 pt-2">
                <div className="border-2 border-foreground/40 px-4 py-2 text-xs font-mono text-black">LINKEDIN</div>
                <div className="border-2 border-foreground/40 px-4 py-2 text-xs font-mono text-black">GITHUB</div>
                <div className="border-2 border-foreground/40 px-4 py-2 text-xs font-mono text-black">YOUR DATA</div>
              </div>

              <div className="pt-8">
                <div className="mx-auto h-1 w-40 bg-foreground/10 overflow-hidden">
                  <div className="h-full w-1/2 bg-orange-accent animate-[loading_1.4s_ease-in-out_infinite]" />
                </div>
              </div>

              <div className="text-sm text-black/70">
                If this takes longer than expected, you can
                <Link href="/auth/sync-failed" className="underline ml-1 hover:text-orange-accent">
                  retry the sync
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * Tailwind keyframes via arbitrary value
 * @see https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values
 * keyframes: loading { 0% { transform: translateX(-100%);} 50% { transform: translateX(0);} 100% { transform: translateX(100%);} }
 */

