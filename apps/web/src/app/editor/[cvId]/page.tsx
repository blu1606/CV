"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Menu, FileDown, Search, GripVertical, Plus, Sparkles } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

// TypeScript interfaces based on the architecture document
interface ProfessionalComponent {
  id: string
  type: "experience" | "project" | "education" | "skill"
  title: string
  organization?: string
  startDate?: string
  endDate?: string
  description?: string
  highlights: string[]
  source: "linkedin" | "github" | "manual"
  isUsed?: boolean
}

interface CVSection {
  title: string
  components: ProfessionalComponent[]
}

interface CV {
  id: string
  title: string
  jobDescription: string
  matchScore: number
  sections: CVSection[]
}

// Mock data for demonstration
const mockComponents: ProfessionalComponent[] = [
  {
    id: "1",
    type: "experience",
    title: "Senior Frontend Engineer",
    organization: "TechCorp",
    startDate: "2022-01",
    endDate: "Present",
    description: "Leading frontend development for enterprise applications",
    highlights: ["Built scalable React applications", "Mentored junior developers", "Improved performance by 40%"],
    source: "linkedin",
    isUsed: true,
  },
  {
    id: "2",
    type: "experience",
    title: "Full Stack Developer",
    organization: "StartupXYZ",
    startDate: "2020-06",
    endDate: "2021-12",
    description: "Developed full-stack web applications using modern technologies",
    highlights: ["Built RESTful APIs", "Implemented CI/CD pipelines", "Collaborated with design team"],
    source: "linkedin",
    isUsed: true,
  },
  {
    id: "3",
    type: "project",
    title: "Open Source UI Library",
    organization: "GitHub",
    startDate: "2021-03",
    description: "Created and maintained a popular React component library",
    highlights: ["1000+ GitHub stars", "Used by 50+ companies", "Comprehensive documentation"],
    source: "github",
    isUsed: false,
  },
  {
    id: "4",
    type: "education",
    title: "BSc Computer Science",
    organization: "University of Technology",
    startDate: "2016-09",
    endDate: "2020-05",
    description: "Graduated with honors, specialized in software engineering",
    highlights: ["GPA: 3.8/4.0", "Dean's List", "Capstone project award"],
    source: "linkedin",
    isUsed: false,
  },
  {
    id: "5",
    type: "project",
    title: "E-commerce Platform",
    organization: "Personal Project",
    startDate: "2023-01",
    description: "Built a full-featured e-commerce platform with Next.js",
    highlights: ["Stripe integration", "Real-time inventory", "Admin dashboard"],
    source: "manual",
    isUsed: false,
  },
]

const mockCV: CV = {
  id: "cv-1",
  title: "Senior Frontend Developer - Remote",
  jobDescription:
    "We are looking for a Senior Frontend Developer with expertise in React, TypeScript, and modern web technologies...",
  matchScore: 87,
  sections: [
    {
      title: "Work Experience",
      components: mockComponents.filter((c) => c.type === "experience" && c.isUsed),
    },
    {
      title: "Projects",
      components: [],
    },
  ],
}

export default function CVEditorPage() {
  const [cv, setCV] = useState<CV>(mockCV)
  const [components] = useState<ProfessionalComponent[]>(mockComponents)
  const [searchQuery, setSearchQuery] = useState("")
  const isMobile = useMobile()

  const filteredComponents = components.filter(
    (component) =>
      component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.organization?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getSourceBadgeColor = (source: string) => {
    switch (source) {
      case "linkedin":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400"
      case "github":
        return "bg-purple-500/10 text-purple-700 dark:text-purple-400"
      case "manual":
        return "bg-green-500/10 text-green-700 dark:text-green-400"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const ComponentCard = ({ component }: { component: ProfessionalComponent }) => (
    <Card className={`mb-4 transition-all hover:shadow-md ${component.isUsed ? "opacity-50" : ""}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base font-semibold mb-1 text-balance">{component.title}</CardTitle>
            {component.organization && <p className="text-sm text-muted-foreground">{component.organization}</p>}
          </div>
          <Badge variant="secondary" className={getSourceBadgeColor(component.source)}>
            {component.source}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {component.startDate && (
          <p className="text-xs text-muted-foreground mb-2">
            {component.startDate} - {component.endDate || "Present"}
          </p>
        )}
        {component.description && (
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{component.description}</p>
        )}
        {component.highlights.length > 0 && (
          <ul className="text-sm space-y-1">
            {component.highlights.slice(0, 2).map((highlight, idx) => (
              <li key={idx} className="text-muted-foreground">
                • {highlight}
              </li>
            ))}
          </ul>
        )}
        {!component.isUsed && (
          <Button size="sm" variant="outline" className="mt-3 w-full bg-transparent">
            <Plus className="w-3 h-3 mr-1" />
            Add to CV
          </Button>
        )}
      </CardContent>
    </Card>
  )

  const CVPreview = () => (
    <div className="space-y-6">
      {cv.sections.map((section, idx) => (
        <div key={idx}>
          <h2 className="text-xl font-bold mb-4 text-foreground">{section.title}</h2>
          <div className="space-y-4">
            {section.components.map((component) => (
              <Card key={component.id} className="group hover:shadow-md transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 cursor-grab active:cursor-grabbing">
                      <GripVertical className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-balance">{component.title}</CardTitle>
                      {component.organization && (
                        <p className="text-sm text-muted-foreground mt-1">{component.organization}</p>
                      )}
                      {component.startDate && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {component.startDate} - {component.endDate || "Present"}
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pl-11">
                  {component.description && (
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{component.description}</p>
                  )}
                  {component.highlights.length > 0 && (
                    <ul className="text-sm space-y-2">
                      {component.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-foreground leading-relaxed">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
            {section.components.length === 0 && (
              <Card className="border-dashed">
                <CardContent className="py-8 text-center">
                  <p className="text-sm text-muted-foreground">No components in this section yet</p>
                  <p className="text-xs text-muted-foreground mt-1">Drag components from the library to add them</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      ))}
    </div>
  )

  const ToolsPanel = () => (
    <div className="space-y-6">
      {/* Match Score */}
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-foreground">Match Score</CardTitle>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-primary">{cv.matchScore}%</span>
            <span className="text-sm text-muted-foreground">relevance</span>
          </div>
          <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${cv.matchScore}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Job Description */}
      <Accordion type="single" collapsible defaultValue="job-description">
        <AccordionItem value="job-description" className="border rounded-lg px-4">
          <AccordionTrigger className="text-sm font-semibold hover:no-underline">Job Description</AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-muted-foreground leading-relaxed">{cv.jobDescription}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Component Library */}
      <div>
        <h3 className="text-sm font-semibold mb-3 text-foreground">Component Library</h3>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
          {filteredComponents.map((component) => (
            <ComponentCard key={component.id} component={component} />
          ))}
          {filteredComponents.length === 0 && (
            <Card className="border-dashed">
              <CardContent className="py-8 text-center">
                <p className="text-sm text-muted-foreground">No components found</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <div className="min-h-screen bg-background">
        {/* Mobile Header */}
        <header className="sticky top-0 z-50 bg-card border-b border-border px-4 py-3">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="text-sm font-semibold text-foreground truncate flex-1 mx-3 text-center">{cv.title}</h1>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <FileDown className="w-4 h-4 mr-1" />
              Export
            </Button>
          </div>
        </header>

        {/* Mobile Tabs */}
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="w-full rounded-none border-b border-border h-12 bg-background">
            <TabsTrigger value="preview" className="flex-1">
              CV Preview
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex-1">
              Tools
            </TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="p-4 mt-0">
            <CVPreview />
          </TabsContent>
          <TabsContent value="tools" className="p-4 mt-0">
            <ToolsPanel />
          </TabsContent>
        </Tabs>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between max-w-[1800px] mx-auto">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="text-lg font-semibold text-foreground text-balance">{cv.title}</h1>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <FileDown className="w-4 h-4 mr-2" />
            Export to PDF
          </Button>
        </div>
      </header>

      {/* Desktop Two-Panel Layout */}
      <div className="max-w-[1800px] mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_480px] gap-6">
          {/* Left Panel - CV Preview */}
          <div className="min-w-0">
            <CVPreview />
          </div>

          {/* Right Panel - Tools (Sticky) */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ToolsPanel />
          </div>
        </div>
      </div>
    </div>
  )
}
