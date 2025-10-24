import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShieldAlert } from "lucide-react"

export default function PermissionDeniedPage() {
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
                <Link href="/">{"> BACK TO HOME"}</Link>
              </Button>
            </div>
          </header>

          <div className="container mx-auto px-4 py-24 md:py-40">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-orange-accent text-background text-xs font-mono">
                <ShieldAlert className="w-4 h-4" /> PERMISSION
              </div>
              <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] text-black text-balance">Permission Denied</h1>
              <p className="text-lg text-black/80 leading-relaxed">
                We couldn’t access your LinkedIn data. Please grant the requested permissions to continue.
              </p>

              <div className="flex items-center justify-center gap-3">
                <Button
                  size="lg"
                  className="font-mono text-sm border-2 border-foreground/40 bg-transparent text-black hover:bg-foreground/10 h-12 px-6"
                  variant="outline"
                  asChild
                >
                  <Link href="/auth/onboarding">{"> TRY AGAIN"}</Link>
                </Button>
                <Button size="lg" className="font-mono text-sm bg-orange-accent text-background hover:bg-orange-accent/90 h-12 px-6" asChild>
                  <Link href="/">{"> GO HOME"}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

