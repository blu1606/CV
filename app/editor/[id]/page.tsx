import { AppHeader } from "@/components/app-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CVPreview } from "@/components/cv-preview"
import { CVComponentItem } from "@/components/cv-component-item"
import { Download, Save, BarChart3, Sparkles, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function EditorPage() {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      {/* Editor Toolbar */}
      <div className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-[73px] z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <h1 className="font-semibold text-lg truncate">Senior Frontend Engineer - Vercel</h1>
            <Badge variant="outline" className="flex-shrink-0">
              Draft
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <Card className="px-4 py-2 flex items-center gap-2 border-primary/30 bg-primary/5">
              <BarChart3 className="w-4 h-4 text-primary" />
              <div className="text-sm">
                <span className="font-bold text-primary">92%</span>
                <span className="text-muted-foreground ml-1">Match</span>
              </div>
            </Card>

            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Save className="w-4 h-4" />
              <span className="hidden sm:inline">Save</span>
            </Button>

            <Button size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export PDF</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Two-Panel Layout */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-[1fr,400px] gap-6">
          {/* Left Panel - CV Preview */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">CV Preview</h2>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Sparkles className="w-4 h-4" />
                AI Suggestions
              </Button>
            </div>
            <CVPreview />
          </div>

          {/* Right Panel - Component Library */}
          <div className="space-y-4 lg:sticky lg:top-[145px] lg:self-start">
            <Card className="p-4 space-y-4">
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Component Library</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search components..." className="pl-9" />
                </div>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full grid grid-cols-4">
                  <TabsTrigger value="all" className="text-xs">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="experience" className="text-xs">
                    Work
                  </TabsTrigger>
                  <TabsTrigger value="education" className="text-xs">
                    Education
                  </TabsTrigger>
                  <TabsTrigger value="skills" className="text-xs">
                    Skills
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-3 mt-4 max-h-[calc(100vh-400px)] overflow-y-auto pr-2">
                  <CVComponentItem
                    type="experience"
                    title="Senior Frontend Engineer"
                    subtitle="Vercel • 2022 - Present"
                    description="Led development of Next.js features and component libraries"
                    tags={["React", "Next.js", "TypeScript"]}
                    matchScore={95}
                  />
                  <CVComponentItem
                    type="experience"
                    title="Frontend Developer"
                    subtitle="Meta • 2020 - 2022"
                    description="Built user-facing features for Facebook Ads platform"
                    tags={["React", "GraphQL"]}
                    matchScore={88}
                  />
                  <CVComponentItem
                    type="education"
                    title="BS Computer Science"
                    subtitle="Stanford University • 2015 - 2019"
                    matchScore={75}
                  />
                  <CVComponentItem
                    type="skill"
                    title="Frontend Development"
                    description="React, Next.js, TypeScript, Tailwind CSS"
                    matchScore={92}
                  />
                  <CVComponentItem
                    type="project"
                    title="Open Source Contributions"
                    subtitle="React, Next.js, Tailwind CSS"
                    description="Active contributor to major open source projects"
                    matchScore={70}
                  />
                  <CVComponentItem
                    type="experience"
                    title="Junior Developer"
                    subtitle="Startup Inc • 2019 - 2020"
                    description="Full-stack development with React and Node.js"
                    tags={["React", "Node.js"]}
                    matchScore={65}
                  />
                </TabsContent>

                <TabsContent
                  value="experience"
                  className="space-y-3 mt-4 max-h-[calc(100vh-400px)] overflow-y-auto pr-2"
                >
                  <CVComponentItem
                    type="experience"
                    title="Senior Frontend Engineer"
                    subtitle="Vercel • 2022 - Present"
                    description="Led development of Next.js features and component libraries"
                    tags={["React", "Next.js", "TypeScript"]}
                    matchScore={95}
                  />
                  <CVComponentItem
                    type="experience"
                    title="Frontend Developer"
                    subtitle="Meta • 2020 - 2022"
                    description="Built user-facing features for Facebook Ads platform"
                    tags={["React", "GraphQL"]}
                    matchScore={88}
                  />
                </TabsContent>

                <TabsContent
                  value="education"
                  className="space-y-3 mt-4 max-h-[calc(100vh-400px)] overflow-y-auto pr-2"
                >
                  <CVComponentItem
                    type="education"
                    title="BS Computer Science"
                    subtitle="Stanford University • 2015 - 2019"
                    matchScore={75}
                  />
                </TabsContent>

                <TabsContent value="skills" className="space-y-3 mt-4 max-h-[calc(100vh-400px)] overflow-y-auto pr-2">
                  <CVComponentItem
                    type="skill"
                    title="Frontend Development"
                    description="React, Next.js, TypeScript, Tailwind CSS"
                    matchScore={92}
                  />
                </TabsContent>
              </Tabs>
            </Card>

            {/* Match Score Details */}
            <Card className="p-4 space-y-3 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Match Score Breakdown</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Required Skills</span>
                  <span className="font-medium text-green-600 dark:text-green-400">95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Experience Level</span>
                  <span className="font-medium text-green-600 dark:text-green-400">90%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Education</span>
                  <span className="font-medium text-amber-600 dark:text-amber-400">85%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
