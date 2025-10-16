import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Target, BarChart3 } from "lucide-react"
import Link from "next/link"
import { AnimatedCounter } from "@/components/animated-counter"
import { LinkedInSignIn } from "@/components/linkedin-signin"

export default function LandingPage() {
  // Load email/password auth script
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.src = '/email-auth.js';
    script.async = true;
    document.body.appendChild(script);
  }
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
                <Link href="/pricing" className="text-sm font-mono text-black hover:underline">
                  {"> PRICING"}
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
                <Link href="/auth/login">{"> LOGIN"}</Link>
              </Button>
            </div>
          </header>

          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-black text-balance">
                  {"We're building an AI-powered platform for Job-Ready CVs."}
                </h1>

                <p className="text-lg md:text-xl text-black leading-relaxed max-w-xl">
                  The magiCV platform is the first AI CV builder designed to match you with jobs. Import from LinkedIn,
                  paste job descriptions, and get instant match scores.
                </p>

                <p className="text-lg md:text-xl text-black leading-relaxed max-w-xl">
                  Create multiple tailored CVs with our drag-and-drop component library. Export professional PDFs ready
                  for any application.
                </p>

                <LinkedInSignIn />
                {/* Email/password login/register form */}
                <div className="mt-8 space-y-4">
                  <form className="space-y-3" id="email-auth-form">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border rounded bg-white/10 text-black placeholder:text-black/50"
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 border rounded bg-white/10 text-black placeholder:text-black/50"
                      required
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="flex-1 bg-orange-accent text-background font-mono py-2 px-4 rounded hover:bg-orange-accent/90"
                        id="email-login-btn"
                      >
                        Login
                      </button>
                      <button
                        type="button"
                        className="flex-1 border border-orange-accent text-orange-accent font-mono py-2 px-4 rounded hover:bg-orange-accent/10"
                        id="email-register-btn"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  <div id="email-auth-message" className="text-sm text-red-500"></div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-end gap-4">
                  <div className="text-xs font-mono text-black text-right">INTERFACE</div>
                  <div className="flex gap-3">
                    <div className="border-2 border-foreground/40 px-4 py-2 text-xs font-mono text-black">
                      LINKEDIN
                    </div>
                    <div className="border-2 border-foreground/40 px-4 py-2 text-xs font-mono text-black">
                      GITHUB
                    </div>
                    <div className="border-2 border-foreground/40 px-4 py-2 text-xs font-mono text-black">
                      YOUR DATA
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-px h-12 bg-foreground/20" />
                </div>

                <div className="flex items-center justify-end gap-4">
                  <div className="text-xs font-mono text-black text-right">AI ENGINE</div>
                  <div className="flex gap-3">
                    <div className="border-2 border-foreground/40 px-4 py-2 text-xs font-mono text-black">
                      MATCH SCORE
                    </div>
                    <div className="border-2 border-foreground/40 px-4 py-2 text-xs font-mono text-black">
                      CV BUILDER
                    </div>
                    <div className="border-2 border-foreground/40 px-4 py-2 text-xs font-mono text-black">
                      OPTIMIZER
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-px h-12 bg-foreground/20" />
                </div>

                <div className="flex items-center justify-end gap-4">
                  <div className="text-xs font-mono text-black text-right">OUTPUT</div>
                  <div className="border-2 border-orange-accent/60 bg-orange-accent/10 px-6 py-3 text-sm font-mono text-black">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 bg-orange-accent" />
                      <div className="w-1 h-4 bg-orange-accent" />
                      <div className="w-1 h-4 bg-orange-accent" />
                      <span className="ml-2">magiCV Platform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/tech-grid-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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

      <section className="relative min-h-screen flex items-center">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/galaxy.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="text-center space-y-4">
                <h2 className="font-serif text-4xl md:text-5xl text-black text-balance">
                  Everything You Need to Land Your Dream Job
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="border-2 border-black p-8 space-y-4 hover:border-orange-accent transition-colors bg-transparent backdrop-blur-sm">
                  <div className="w-12 h-12 border-2 border-orange-accent flex items-center justify-center">
                    <Zap className="w-6 h-6 text-orange-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-black">One-Click Import</h3>
                  <p className="text-black leading-relaxed">
                    Automatically sync your professional data from LinkedIn, GitHub, and other platforms in seconds.
                  </p>
                </div>

                <div className="border-2 border-black p-8 space-y-4 hover:border-orange-accent transition-colors bg-transparent backdrop-blur-sm">
                  <div className="w-12 h-12 border-2 border-orange-accent flex items-center justify-center">
                    <Target className="w-6 h-6 text-orange-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-black">AI-Powered Matching</h3>
                  <p className="text-black leading-relaxed">
                    Get real-time match scores showing how well your CV aligns with job requirements.
                  </p>
                </div>

                <div className="border-2 border-black p-8 space-y-4 hover:border-orange-accent transition-colors bg-transparent backdrop-blur-sm">
                  <div className="w-12 h-12 border-2 border-orange-accent flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-orange-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-black">Smart Components</h3>
                  <p className="text-black leading-relaxed">
                    Drag-and-drop reusable components to build the perfect CV for each application.
                  </p>
                </div>

                <div className="border-2 border-black p-8 space-y-4 hover:border-orange-accent transition-colors bg-transparent backdrop-blur-sm">
                  <div className="w-12 h-12 border-2 border-orange-accent flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-orange-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-black">Intelligent Editor</h3>
                  <p className="text-black leading-relaxed">
                    Two-panel workspace with live preview and component library for effortless editing.
                  </p>
                </div>

                <div className="border-2 border-black p-8 space-y-4 hover:border-orange-accent transition-colors bg-transparent backdrop-blur-sm">
                  <div className="w-12 h-12 border-2 border-orange-accent flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-black">Professional PDFs</h3>
                  <p className="text-black leading-relaxed">
                    Export beautiful, ATS-friendly PDFs ready to submit to any employer.
                  </p>
                </div>

                <div className="border-2 border-black p-8 space-y-4 hover:border-orange-accent transition-colors bg-transparent backdrop-blur-sm">
                  <div className="w-12 h-12 border-2 border-orange-accent flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-black">Version Control</h3>
                  <p className="text-black leading-relaxed">
                    Manage multiple CV versions for different roles and track your applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/tech-grid-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.1] text-foreground text-balance">
                Reputation & Credibility, Powered by AI
              </h2>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-foreground/40 bg-background/50 backdrop-blur-sm p-6">
                <p className="text-foreground leading-relaxed">
                  magiCV is an AI platform that creates job-ready CVs with intelligent matching.
                </p>
              </div>

              <div className="border-2 border-foreground/40 bg-background/50 backdrop-blur-sm p-6">
                <p className="text-foreground leading-relaxed">
                  Import your data, paste job descriptions, and get instant match scores to optimize your applications.
                </p>
              </div>

              <div className="border-2 border-foreground/40 bg-background/50 backdrop-blur-sm p-6">
                <p className="text-foreground leading-relaxed">
                  Use the AI match score to understand which components to include and how to improve your CV.
                </p>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="font-mono text-sm bg-orange-accent text-background hover:bg-orange-accent/90 h-12 px-6 border-0"
                >
                  {"> OPEN MAGICV"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-foreground/20 bg-background">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-1 h-6 bg-foreground" />
                <div className="w-1 h-6 bg-foreground" />
                <div className="w-1 h-6 bg-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">magiCV</span>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">&copy; 2025 magiCV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
