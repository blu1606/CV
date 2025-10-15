import { AppHeader } from "@/components/app-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, FileText, Calendar, BarChart3, Linkedin, Github, RefreshCw, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, John</h1>
          <p className="text-muted-foreground">Create a new CV or manage your existing ones</p>
        </div>

        {/* Create New CV Section */}
        <Card className="p-6 md:p-8 space-y-6 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Plus className="w-6 h-6 text-primary" />
              Create New CV
            </h2>
            <p className="text-muted-foreground">
              Paste a job description below and we'll generate a tailored CV with AI-powered matching
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="job-description" className="text-sm font-medium">
                Job Description
              </label>
              <Textarea
                id="job-description"
                placeholder="Paste the job description here... (e.g., We're looking for a Senior Frontend Engineer with 5+ years of experience in React...)"
                className="min-h-[200px] resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="gap-2 flex-1 sm:flex-initial">
                <BarChart3 className="w-4 h-4" />
                Generate CV
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <FileText className="w-4 h-4" />
                Start from Scratch
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
            <h2 className="text-2xl font-bold">Your CVs</h2>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Plus className="w-4 h-4" />
              New CV
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example CV Card */}
            <Card className="p-6 space-y-4 hover:border-primary/50 transition-colors group">
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <h3 className="font-semibold text-lg line-clamp-1">Senior Frontend Engineer - Vercel</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Tailored for Senior Frontend Engineer position at Vercel
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="gap-1">
                  <BarChart3 className="w-3 h-3" />
                  92% Match
                </Badge>
                <Badge variant="outline">Draft</Badge>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>Updated 2 hours ago</span>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <Button size="sm" className="flex-1" asChild>
                  <Link href="/editor/1">
                    <Edit className="w-3 h-3 mr-1" />
                    Edit
                  </Link>
                </Button>
                <Button size="sm" variant="outline" className="bg-transparent">
                  <FileText className="w-3 h-3" />
                </Button>
                <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </Card>

            {/* Empty State Card */}
            <Card className="p-6 border-dashed border-2 flex flex-col items-center justify-center text-center space-y-3 min-h-[240px]">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <Plus className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <p className="font-medium">Create your first CV</p>
                <p className="text-sm text-muted-foreground">Paste a job description above to get started</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Data Sources Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">Connected Data Sources</h2>
              <p className="text-sm text-muted-foreground">Manage your professional data integrations</p>
            </div>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <RefreshCw className="w-4 h-4" />
              Re-sync All
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0A66C2] flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">Connected</p>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                >
                  Active
                </Badge>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last synced</span>
                  <span className="font-medium">2 hours ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Components</span>
                  <span className="font-medium">24 items</span>
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent">
                <RefreshCw className="w-3 h-3" />
                Re-sync Now
              </Button>
            </Card>

            <Card className="p-6 space-y-4 border-dashed border-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Github className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-sm text-muted-foreground">Not connected</p>
                  </div>
                </div>
                <Badge variant="outline">Premium</Badge>
              </div>

              <p className="text-sm text-muted-foreground">
                Connect your GitHub to automatically import projects and contributions
              </p>

              <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent" disabled>
                <Plus className="w-3 h-3" />
                Connect GitHub
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
