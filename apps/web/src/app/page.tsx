import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Sparkles, Zap, Target, Github, Linkedin } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Sparkles className="size-5 text-white" />
            </div>
            <span className="text-xl font-semibold">CV Match</span>
          </div>
          <Button asChild variant="outline">
            <Link href="/onboarding">
              <Linkedin className="size-4 mr-2" />
              Login with LinkedIn
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
            <Sparkles className="size-4" />
            AI-Powered CV Builder for Digital Nomads
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Stop Copying. Start Matching.</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
            Your professional history is scattered across LinkedIn, GitHub, and Behance. CV Match automatically syncs
            your data and generates tailored CVs in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Link href="/onboarding">
                <Linkedin className="size-5 mr-2" />
                Get Started Free
                <ArrowRight className="size-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Free forever. One CV slot. No credit card required.</p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Digital Nomad's CV Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every job application requires a tailored CV. But your professional data is fragmented across multiple
              platforms, making CV creation a tedious, manual process.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-white">
              <div className="size-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Hours Wasted</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Manually copying data from LinkedIn, GitHub, and portfolios for every application.
              </p>
            </Card>
            <Card className="p-6 bg-white">
              <div className="size-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Generic CVs</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                One-size-fits-all resumes that don't highlight the right experience for each role.
              </p>
            </Card>
            <Card className="p-6 bg-white">
              <div className="size-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                <span className="text-2xl">😓</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Missed Opportunities</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Losing out on interviews because your CV doesn't match the job description.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three Steps to Your Perfect CV</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our AI-powered platform does the heavy lifting, so you can focus on landing interviews.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="size-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Linkedin className="size-5 text-indigo-600" />
                  <Github className="size-5 text-indigo-600" />
                  <h3 className="text-2xl font-semibold">Connect Your Profiles</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Sign in with LinkedIn and connect your GitHub or Behance. Our Model Context Protocol automatically
                  syncs your work experience, projects, and skills into one unified library.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="size-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="size-5 text-indigo-600" />
                  <h3 className="text-2xl font-semibold">Paste a Job Description</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Copy any job posting and paste it into CV Match. Our AI analyzes the requirements and instantly
                  generates a tailored CV draft using your most relevant experiences.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="size-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="size-5 text-indigo-600" />
                  <h3 className="text-2xl font-semibold">Refine & Export</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Use our Lego-like editor to drag, drop, and reorder components. Watch your Match Score update in
                  real-time. Export a professional PDF when you're ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Digital Nomads</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need to create job-winning CVs, wherever you are in the world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 bg-white">
              <Sparkles className="size-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">One-Click Autofill</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AI generates a complete CV draft in under 10 seconds from any job description.
              </p>
            </Card>
            <Card className="p-6 bg-white">
              <Target className="size-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Real-Time Match Score</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                See how well your CV matches the job requirements as you edit.
              </p>
            </Card>
            <Card className="p-6 bg-white">
              <Zap className="size-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Lego-Like Editor</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Drag and drop professional experiences to customize your CV structure.
              </p>
            </Card>
            <Card className="p-6 bg-white">
              <Linkedin className="size-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Auto-Sync Profiles</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Automatically import data from LinkedIn, GitHub, and Behance.
              </p>
            </Card>
            <Card className="p-6 bg-white">
              <span className="text-3xl mb-4 block">🎨</span>
              <h3 className="font-semibold text-lg mb-2">Professional Templates</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Export watermark-free PDFs with clean, ATS-friendly formatting.
              </p>
            </Card>
            <Card className="p-6 bg-white">
              <span className="text-3xl mb-4 block">🔒</span>
              <h3 className="font-semibold text-lg mb-2">Secure & Private</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your data is encrypted and never shared with third parties.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Land More Interviews?</h2>
            <p className="text-lg text-indigo-100 mb-8 text-balance leading-relaxed">
              Join digital nomads who are creating tailored CVs in minutes, not hours.
            </p>
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-slate-50">
              <Link href="/onboarding">
                <Linkedin className="size-5 mr-2" />
                Start Free with LinkedIn
                <ArrowRight className="size-5 ml-2" />
              </Link>
            </Button>
            <p className="text-sm text-indigo-200 mt-4">No credit card required. Free forever with one CV slot.</p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Sparkles className="size-5 text-white" />
              </div>
              <span className="font-semibold">CV Match</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 CV Match. Built for Digital Nomads.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
