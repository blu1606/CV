import { AppHeader } from "@/components/app-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, FileText, Calendar, BarChart3, Linkedin, Github, RefreshCw, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
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
        <AppHeader />

        <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Welcome back, John</h1>
          <p className="text-white/70">Create a new CV or manage your existing ones</p>
        </div>

        {/* Create New CV Section */}
        <Card className="p-6 md:p-8 space-y-6 border-white/20 bg-white/5 backdrop-blur-sm">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <Plus className="w-6 h-6 text-white" />
              Create New CV
            </h2>
            <p className="text-white/70">
              Paste a job description below and we'll generate a tailored CV with AI-powered matching
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="job-description" className="text-sm font-medium text-white">
                Job Description
              </label>
              <Textarea
                id="job-description"
                placeholder="Paste the job description here... (e.g., We're looking for a Senior Frontend Engineer with 5+ years of experience in React...)"
                className="min-h-[200px] resize-none bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="gap-2 flex-1 sm:flex-initial bg-white text-black hover:bg-white/90">
                <BarChart3 className="w-4 h-4" />
                Generate CV
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent border-white/40 text-white hover:bg-white/10">
                <FileText className="w-4 h-4" />
                Start from Scratch
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-white/70">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>1 free CV slot available</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Existing CVs Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Your CVs</h2>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent border-white/40 text-white hover:bg-white/10">
              <Plus className="w-4 h-4" />
              New CV
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example CV Card */}
            <Card className="p-6 space-y-4 hover:border-white/50 transition-colors group bg-white/5 border-white/20 backdrop-blur-sm">
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <h3 className="font-semibold text-lg line-clamp-1 text-white">Senior Frontend Engineer - Vercel</h3>
                  <p className="text-sm text-white/70 line-clamp-2">
                    Tailored for Senior Frontend Engineer position at Vercel
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="gap-1 bg-white/10 text-white border-white/20">
                  <BarChart3 className="w-3 h-3" />
                  92% Match
                </Badge>
                <Badge variant="outline" className="border-white/40 text-white">Draft</Badge>
              </div>

              <div className="flex items-center gap-2 text-xs text-white/70">
                <Calendar className="w-3 h-3" />
                <span>Updated 2 hours ago</span>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <Button size="sm" className="flex-1 bg-white text-black hover:bg-white/90" asChild>
                  <Link href="/editor/1">
                    <Edit className="w-3 h-3 mr-1" />
                    Edit
                  </Link>
                </Button>
                <Button size="sm" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10">
                  <FileText className="w-3 h-3" />
                </Button>
                <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </Card>

            {/* Empty State Card */}
            <Card className="p-6 border-dashed border-2 border-white/30 flex flex-col items-center justify-center text-center space-y-3 min-h-[240px] bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Plus className="w-6 h-6 text-white/70" />
              </div>
              <div className="space-y-1">
                <p className="font-medium text-white">Create your first CV</p>
                <p className="text-sm text-white/70">Paste a job description above to get started</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Data Sources Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-white">Connected Data Sources</h2>
              <p className="text-sm text-white/70">Manage your professional data integrations</p>
            </div>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent border-white/40 text-white hover:bg-white/10">
              <RefreshCw className="w-4 h-4" />
              Re-sync All
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6 space-y-4 bg-white/5 border-white/20 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0A66C2] flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">LinkedIn</h3>
                    <p className="text-sm text-white/70">Connected</p>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-green-500/10 text-green-400 border-green-500/20"
                >
                  Active
                </Badge>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">Last synced</span>
                  <span className="font-medium text-white">2 hours ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Components</span>
                  <span className="font-medium text-white">24 items</span>
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent border-white/40 text-white hover:bg-white/10">
                <RefreshCw className="w-3 h-3" />
                Re-sync Now
              </Button>
            </Card>

            <Card className="p-6 space-y-4 border-dashed border-2 border-white/30 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Github className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">GitHub</h3>
                    <p className="text-sm text-white/70">Not connected</p>
                  </div>
                </div>
                <Badge variant="outline" className="border-white/40 text-white">Premium</Badge>
              </div>

              <p className="text-sm text-white/70">
                Connect your GitHub to automatically import projects and contributions
              </p>

              <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent border-white/40 text-white hover:bg-white/10" disabled>
                <Plus className="w-3 h-3" />
                Connect GitHub
              </Button>
            </Card>
          </div>
        </div>
        </main>
      </div>
    </div>
  )
}
