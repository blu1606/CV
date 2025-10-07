import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Briefcase, FileText, Github, Linkedin, Plus, Sparkles } from "lucide-react"
import Link from "next/link"

// Mock data - in production, this would come from the database
const mockUser = {
  full_name: "Alex Chen",
  profession: "Full Stack Developer",
}

const mockDataSources = [
  { provider: "linkedin", connected: true, last_synced: "2 hours ago" },
  { provider: "github", connected: true, last_synced: "1 day ago" },
]

const mockExistingCV = {
  id: "cv-123",
  title: "Senior Frontend Developer at TechCorp",
  match_score: 87,
  created_at: "2025-01-15",
}

const providerIcons = {
  linkedin: Linkedin,
  github: Github,
}

export default function DashboardPage() {
  const hasExistingCV = true // This would be checked from the database
  const isFreeTier = true

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-semibold">CV Match</h1>
            </div>
            <nav className="flex items-center gap-4">
              <Link href="/dashboard" className="text-sm font-medium text-primary">
                Dashboard
              </Link>
              <Link href="/components" className="text-sm text-muted-foreground hover:text-foreground">
                Component Library
              </Link>
              <Button variant="ghost" size="sm">
                Account
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-balance mb-2">Welcome back, {mockUser.full_name}</h2>
          <p className="text-muted-foreground">{mockUser.profession} • Ready to create your next tailored CV</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* CV Generation Section */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Create Your Next CV
                    </CardTitle>
                    <CardDescription className="mt-1.5">
                      Paste a job description and let AI build a tailored CV in seconds
                    </CardDescription>
                  </div>
                  {isFreeTier && (
                    <Badge variant="secondary" className="shrink-0">
                      Free Tier
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="job-description" className="text-sm font-medium">
                    Job Description
                  </label>
                  <Textarea
                    id="job-description"
                    placeholder="Paste the full job description here..."
                    className="min-h-[200px] resize-none"
                    disabled={hasExistingCV && isFreeTier}
                  />
                </div>
                <Button size="lg" className="w-full" disabled={hasExistingCV && isFreeTier}>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate CV with AI
                </Button>
                {hasExistingCV && isFreeTier && (
                  <p className="text-sm text-muted-foreground text-center">
                    You've used your free CV slot.{" "}
                    <Link href="/upgrade" className="text-primary hover:underline">
                      Upgrade to Premium
                    </Link>{" "}
                    for unlimited CVs.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Existing CVs Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your CVs</CardTitle>
                    <CardDescription className="mt-1.5">
                      {isFreeTier ? "1 of 1 slot used" : "Manage your CVs"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {hasExistingCV ? (
                  <Link href={`/editor/${mockExistingCV.id}`}>
                    <Card className="hover:bg-accent transition-colors cursor-pointer">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                              <h3 className="font-semibold truncate">{mockExistingCV.title}</h3>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>Created {mockExistingCV.created_at}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                Match Score:{" "}
                                <span className="font-medium text-primary">{mockExistingCV.match_score}%</span>
                              </span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>No CVs yet. Create your first one above!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            {/* Data Sources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Connected Sources</CardTitle>
                <CardDescription>Your professional data is synced from</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockDataSources.map((source) => {
                  const Icon = providerIcons[source.provider as keyof typeof providerIcons]
                  return (
                    <div
                      key={source.provider}
                      className="flex items-center justify-between p-3 rounded-lg border bg-card"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium capitalize">{source.provider}</p>
                          <p className="text-xs text-muted-foreground">Synced {source.last_synced}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Active
                      </Badge>
                    </div>
                  )
                })}
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Source
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Your Library</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Experiences</span>
                  <span className="text-sm font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Projects</span>
                  <span className="text-sm font-semibold">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Skills</span>
                  <span className="text-sm font-semibold">24</span>
                </div>
                <Button variant="link" size="sm" className="w-full p-0 h-auto" asChild>
                  <Link href="/components">View all components →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
