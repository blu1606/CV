import { AppHeader } from "@/components/app-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Plus,
  Search,
  RefreshCw,
  Edit,
  Trash2,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Calendar,
  MapPin,
} from "lucide-react"

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      <main className="container mx-auto px-4 py-8 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Component Library</h1>
            <p className="text-muted-foreground">Manage your professional data and reusable CV components</p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <RefreshCw className="w-4 h-4" />
              Re-sync
            </Button>
            <Button size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              Create New
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Components</span>
              <Briefcase className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold">24</p>
          </Card>

          <Card className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Work Experience</span>
              <Briefcase className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold">8</p>
          </Card>

          <Card className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Education</span>
              <GraduationCap className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold">3</p>
          </Card>

          <Card className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Skills</span>
              <Code className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold">13</p>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search components by title, company, or skill..." className="pl-9" />
            </div>
            <Tabs defaultValue="all" className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </Card>

        {/* Components List */}
        <div className="space-y-3">
          {/* Experience Component */}
          <Card className="p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>

              <div className="flex-1 min-w-0 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="font-semibold text-lg">Senior Frontend Engineer</h3>
                    <p className="text-sm text-muted-foreground">Vercel</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button size="sm" variant="ghost">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>2022 - Present</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Led development of Next.js App Router features, improving performance by 40%. Architected component
                  library used across 50+ internal applications. Mentored team of 5 junior engineers on React best
                  practices.
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Leadership</Badge>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Badge variant="outline" className="text-xs">
                    Used in 3 CVs
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                  >
                    From LinkedIn
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Experience Component 2 */}
          <Card className="p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>

              <div className="flex-1 min-w-0 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="font-semibold text-lg">Frontend Developer</h3>
                    <p className="text-sm text-muted-foreground">Meta</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button size="sm" variant="ghost">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>2020 - 2022</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>Menlo Park, CA</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built user-facing features for Facebook Ads platform serving millions of advertisers. Implemented
                  real-time data visualization dashboards using React and GraphQL. Collaborated with design team to
                  improve user experience metrics by 25%.
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Badge variant="outline" className="text-xs">
                    Used in 2 CVs
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                  >
                    From LinkedIn
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Education Component */}
          <Card className="p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>

              <div className="flex-1 min-w-0 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="font-semibold text-lg">Bachelor of Science in Computer Science</h3>
                    <p className="text-sm text-muted-foreground">Stanford University</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button size="sm" variant="ghost">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>2015 - 2019</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>Stanford, CA</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  GPA: 3.8/4.0 • Dean's List • Focus on Software Engineering and Human-Computer Interaction
                </p>

                <div className="flex items-center gap-2 pt-2">
                  <Badge variant="outline" className="text-xs">
                    Used in 4 CVs
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                  >
                    From LinkedIn
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Skills Component */}
          <Card className="p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Code className="w-6 h-6 text-primary" />
              </div>

              <div className="flex-1 min-w-0 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="font-semibold text-lg">Frontend Development</h3>
                    <p className="text-sm text-muted-foreground">Core technical skills</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button size="sm" variant="ghost">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                  <Badge variant="secondary">Jest</Badge>
                  <Badge variant="secondary">Cypress</Badge>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Badge variant="outline" className="text-xs">
                    Used in 5 CVs
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                  >
                    From LinkedIn
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Project Component */}
          <Card className="p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>

              <div className="flex-1 min-w-0 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="font-semibold text-lg">Open Source Contributions</h3>
                    <p className="text-sm text-muted-foreground">React, Next.js, Tailwind CSS</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button size="sm" variant="ghost">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Active contributor to major open source projects with 500+ GitHub stars. Maintained React component
                  library with 10k+ weekly downloads. Regular speaker at React conferences.
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Open Source</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Community</Badge>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Badge variant="outline" className="text-xs">
                    Used in 2 CVs
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                  >
                    Manual Entry
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
