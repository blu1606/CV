"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Briefcase, GraduationCap, Code, Award, Edit, Trash2, Calendar } from "lucide-react"
import { CreateComponentDialog } from "./create-component-dialog"
import { EditComponentDialog } from "./edit-component-dialog"
import { createClient } from "@/lib/client"
import { useRouter } from "next/navigation"

interface Component {
  id: string
  type: "experience" | "project" | "education" | "skill"
  title: string
  organization: string | null
  start_date: string | null
  end_date: string | null
  description: string | null
  highlights: string[]
  created_at: string
}

interface ComponentLibraryClientProps {
  initialComponents: Component[]
  userId: string
}

const typeIcons = {
  experience: Briefcase,
  education: GraduationCap,
  project: Code,
  skill: Award,
}

const typeColors = {
  experience: "bg-blue-100 text-blue-700",
  education: "bg-green-100 text-green-700",
  project: "bg-purple-100 text-purple-700",
  skill: "bg-orange-100 text-orange-700",
}

export function ComponentLibraryClient({ initialComponents, userId }: ComponentLibraryClientProps) {
  const [components, setComponents] = useState<Component[]>(initialComponents)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState<string>("all")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [editingComponent, setEditingComponent] = useState<Component | null>(null)
  const router = useRouter()

  const filteredComponents = components.filter((component) => {
    const matchesSearch =
      component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.organization?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description?.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = filterType === "all" || component.type === filterType

    return matchesSearch && matchesType
  })

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this component?")) return

    const supabase = createClient()
    const { error } = await supabase.from("components").delete().eq("id", id)

    if (error) {
      console.error("Error deleting component:", error)
      alert("Failed to delete component")
      return
    }

    setComponents(components.filter((c) => c.id !== id))
  }

  const handleComponentCreated = (newComponent: Component) => {
    setComponents([newComponent, ...components])
    setIsCreateDialogOpen(false)
    router.refresh()
  }

  const handleComponentUpdated = (updatedComponent: Component) => {
    setComponents(components.map((c) => (c.id === updatedComponent.id ? updatedComponent : c)))
    setEditingComponent(null)
    router.refresh()
  }

  const componentsByType = {
    experience: components.filter((c) => c.type === "experience").length,
    education: components.filter((c) => c.type === "education").length,
    project: components.filter((c) => c.type === "project").length,
    skill: components.filter((c) => c.type === "skill").length,
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Component Library</h1>
          <p className="text-slate-600">Manage your professional experiences, education, projects, and skills</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Experiences</p>
                  <p className="text-2xl font-bold text-slate-900">{componentsByType.experience}</p>
                </div>
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Education</p>
                  <p className="text-2xl font-bold text-slate-900">{componentsByType.education}</p>
                </div>
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Projects</p>
                  <p className="text-2xl font-bold text-slate-900">{componentsByType.project}</p>
                </div>
                <Code className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Skills</p>
                  <p className="text-2xl font-bold text-slate-900">{componentsByType.skill}</p>
                </div>
                <Award className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={filterType === "all" ? "default" : "outline"}
              onClick={() => setFilterType("all")}
              className={filterType === "all" ? "bg-indigo-600 hover:bg-indigo-700" : ""}
            >
              All
            </Button>
            <Button
              variant={filterType === "experience" ? "default" : "outline"}
              onClick={() => setFilterType("experience")}
              className={filterType === "experience" ? "bg-indigo-600 hover:bg-indigo-700" : ""}
            >
              Experience
            </Button>
            <Button
              variant={filterType === "education" ? "default" : "outline"}
              onClick={() => setFilterType("education")}
              className={filterType === "education" ? "bg-indigo-600 hover:bg-indigo-700" : ""}
            >
              Education
            </Button>
            <Button
              variant={filterType === "project" ? "default" : "outline"}
              onClick={() => setFilterType("project")}
              className={filterType === "project" ? "bg-indigo-600 hover:bg-indigo-700" : ""}
            >
              Projects
            </Button>
            <Button
              variant={filterType === "skill" ? "default" : "outline"}
              onClick={() => setFilterType("skill")}
              className={filterType === "skill" ? "bg-indigo-600 hover:bg-indigo-700" : ""}
            >
              Skills
            </Button>
          </div>
          <Button onClick={() => setIsCreateDialogOpen(true)} className="bg-indigo-600 hover:bg-indigo-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Component
          </Button>
        </div>

        {/* Components Grid */}
        {filteredComponents.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center">
                <Search className="h-8 w-8 text-slate-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">No components found</h3>
                <p className="text-slate-600">
                  {searchQuery || filterType !== "all"
                    ? "Try adjusting your search or filters"
                    : "Get started by adding your first component"}
                </p>
              </div>
              {!searchQuery && filterType === "all" && (
                <Button onClick={() => setIsCreateDialogOpen(true)} className="bg-indigo-600 hover:bg-indigo-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Component
                </Button>
              )}
            </div>
          </Card>
        ) : (
          <div className="grid gap-4">
            {filteredComponents.map((component) => {
              const Icon = typeIcons[component.type]
              return (
                <Card key={component.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`p-2 rounded-lg ${typeColors[component.type]}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-xl">{component.title}</CardTitle>
                            <Badge variant="secondary" className="capitalize">
                              {component.type}
                            </Badge>
                          </div>
                          {component.organization && (
                            <CardDescription className="text-base">{component.organization}</CardDescription>
                          )}
                          {(component.start_date || component.end_date) && (
                            <div className="flex items-center gap-2 mt-2 text-sm text-slate-600">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {component.start_date
                                  ? new Date(component.start_date).toLocaleDateString("en-US", {
                                      month: "short",
                                      year: "numeric",
                                    })
                                  : "N/A"}{" "}
                                -{" "}
                                {component.end_date
                                  ? new Date(component.end_date).toLocaleDateString("en-US", {
                                      month: "short",
                                      year: "numeric",
                                    })
                                  : "Present"}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" onClick={() => setEditingComponent(component)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(component.id)}>
                          <Trash2 className="h-4 w-4 text-red-600" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  {(component.description || component.highlights.length > 0) && (
                    <CardContent>
                      {component.description && <p className="text-slate-700 mb-3">{component.description}</p>}
                      {component.highlights.length > 0 && (
                        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                          {component.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  )}
                </Card>
              )
            })}
          </div>
        )}
      </div>

      <CreateComponentDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        userId={userId}
        onComponentCreated={handleComponentCreated}
      />

      {editingComponent && (
        <EditComponentDialog
          open={!!editingComponent}
          onOpenChange={(open) => !open && setEditingComponent(null)}
          component={editingComponent}
          onComponentUpdated={handleComponentUpdated}
        />
      )}
    </>
  )
}
