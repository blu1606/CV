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

        <main className="container mx-auto px-4 py-8 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight text-white">Component Library</h1>
            <p className="text-white/70">Manage your professional data and reusable CV components</p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent border-white/40 text-white hover:bg-white/10">
              <RefreshCw className="w-4 h-4" />
              Re-sync
            </Button>
            <Button size="sm" className="gap-2 bg-white text-black hover:bg-white/90">
              <Plus className="w-4 h-4" />
              Create New
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-4 space-y-2 bg-white/5 border-white/20 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">Total Components</span>
              <Briefcase className="w-4 h-4 text-white/70" />
            </div>
            <p className="text-2xl font-bold text-white">24</p>
          </Card>

          <Card className="p-4 space-y-2 bg-white/5 border-white/20 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">Work Experience</span>
              <Briefcase className="w-4 h-4 text-white/70" />
            </div>
            <p className="text-2xl font-bold text-white">8</p>
          </Card>

          <Card className="p-4 space-y-2 bg-white/5 border-white/20 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">Education</span>
              <GraduationCap className="w-4 h-4 text-white/70" />
            </div>
            <p className="text-2xl font-bold text-white">3</p>
          </Card>

          <Card className="p-4 space-y-2 bg-white/5 border-white/20 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">Skills</span>
              <Code className="w-4 h-4 text-white/70" />
            </div>
            <p className="text-2xl font-bold text-white">13</p>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="p-4 bg-white/5 border-white/20 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
              <Input placeholder="Search components by title, company, or skill..." className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            </div>
            <Tabs defaultValue="all" className="w-full sm:w-auto">
              <TabsList className="bg-white/10 border-white/20">
                <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-black text-white">All</TabsTrigger>
                <TabsTrigger value="experience" className="data-[state=active]:bg-white data-[state=active]:text-black text-white">Experience</TabsTrigger>
                <TabsTrigger value="education" className="data-[state=active]:bg-white data-[state=active]:text-black text-white">Education</TabsTrigger>
                <TabsTrigger value="skills" className="data-[state=active]:bg-white data-[state=active]:text-black text-white">Skills</TabsTrigger>
                <TabsTrigger value="projects" className="data-[state=active]:bg-white data-[state=active]:text-black text-white">Projects</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </Card>

        {/* Components List */}
        <div className="space-y-3">
          {/* Experience Component */}
          <Card className="p-6 hover:border-white/50 transition-colors bg-white/5 border-white/20 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1 min-w-0 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-white">Senior Frontend Engineer</h3>
                    <p className="text-sm text-white/70">Vercel</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>2022 - Present</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>

                <p className="text-sm text-white/70 leading-relaxed">
                  Led development of Next.js App Router features, improving performance by 40%. Architected component
                  library used across 50+ internal applications. Mentored team of 5 junior engineers on React best
                  practices.
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">React</Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Next.js</Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Leadership</Badge>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Badge variant="outline" className="text-xs border-white/40 text-white">
                    Used in 3 CVs
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-green-500/10 text-green-400 border-green-500/20"
                  >
                    From LinkedIn
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Experience Component 2 */}
          <Card className="p-6 hover:border-white/50 transition-colors bg-white/5 border-white/20 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1 min-w-0 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-white">Frontend Developer</h3>
                    <p className="text-sm text-white/70">Meta</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>2020 - 2022</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>Menlo Park, CA</span>
                  </div>
                </div>

                <p className="text-sm text-white/70 leading-relaxed">
                  Built user-facing features for Facebook Ads platform serving millions of advertisers. Implemented
                  real-time data visualization dashboards using React and GraphQL. Collaborated with design team to
                  improve user experience metrics by 25%.
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">React</Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">GraphQL</Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">JavaScript</Badge>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Badge variant="outline" className="text-xs border-white/40 text-white">
                    Used in 2 CVs
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-green-500/10 text-green-400 border-green-500/20"
                  >
                    From LinkedIn
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Education Component */}
          <Card className="p-6 hover:border-white/50 transition-colors bg-white/5 border-white/20 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1 min-w-0 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-white">Bachelor of Science in Computer Science</h3>
                    <p className="text-sm text-white/70">Stanford University</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>2015 - 2019</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>Stanford, CA</span>
                  </div>
                </div>

                <p className="text-sm text-white/70 leading-relaxed">
                  GPA: 3.8/4.0 • Dean's List • Focus on Software Engineering and Human-Computer Interaction
                </p>

                <div className="flex items-center gap-2 pt-2">
                  <Badge variant="outline" className="text-xs border-white/40 text-white">
                    Used in 4 CVs
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-green-500/10 text-green-400 border-green-500/20"
                  >
                    From LinkedIn
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Skills Component */}
          <Card className="p-6 hover:border-white/50 transition-colors bg-white/5 border-white/20 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Code className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1 min-w-0 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-white">Frontend Development</h3>
                    <p className="text-sm text-white/70">Core technical skills</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">React</Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Next.js</Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Tailwind CSS</Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Node.js</Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">GraphQL</Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Jest</Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Cypress</Badge>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Badge variant="outline" className="text-xs border-white/40 text-white">
                    Used in 5 CVs
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-green-500/10 text-green-400 border-green-500/20"
                  >
                    From LinkedIn
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Project Component */}
          <Card className="p-6 hover:border-white/50 transition-colors bg-white/5 border-white/20 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1 min-w-0 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-white">Open Source Contributions</h3>
                    <p className="text-sm text-white/70">React, Next.js, Tailwind CSS</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-white/70 leading-relaxed">
                  Active contributor to major open source projects with 500+ GitHub stars. Maintained React component
                  library with 10k+ weekly downloads. Regular speaker at React conferences.
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Open Source</Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">React</Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Community</Badge>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Badge variant="outline" className="text-xs border-white/40 text-white">
                    Used in 2 CVs
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-blue-500/10 text-blue-400 border-blue-500/20"
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
    </div>
  )
}
