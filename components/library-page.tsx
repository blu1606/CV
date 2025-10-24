"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronLeft, Plus, Edit2, Trash2, Search, Copy } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

interface Component {
  id: string
  name: string
  type: "experience" | "education" | "skill" | "project"
  content: string
  createdAt: string
  usageCount: number
}

export function LibraryPage() {
  const [components, setComponents] = useState<Component[]>([
    {
      id: "1",
      name: "Senior Engineer at TechCorp",
      type: "experience",
      content: "Led team of 5 engineers, improved system performance by 40%",
      createdAt: "2 days ago",
      usageCount: 3,
    },
    {
      id: "2",
      name: "BS Computer Science",
      type: "education",
      content: "University of Technology, 2015",
      createdAt: "1 week ago",
      usageCount: 2,
    },
    {
      id: "3",
      name: "React & TypeScript",
      type: "skill",
      content: "Advanced proficiency in React and TypeScript",
      createdAt: "3 days ago",
      usageCount: 5,
    },
  ])

  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState<"all" | "experience" | "education" | "skill" | "project">("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newComponent, setNewComponent] = useState({ name: "", type: "experience" as const, content: "" })

  const filteredComponents = components.filter((comp) => {
    const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = filterType === "all" || comp.type === filterType
    return matchesSearch && matchesType
  })

  const handleAddComponent = () => {
    if (newComponent.name.trim() && newComponent.content.trim()) {
      const component: Component = {
        id: Date.now().toString(),
        name: newComponent.name,
        type: newComponent.type,
        content: newComponent.content,
        createdAt: "just now",
        usageCount: 0,
      }
      setComponents([component, ...components])
      setNewComponent({ name: "", type: "experience", content: "" })
      setIsDialogOpen(false)
    }
  }

  const handleDelete = (id: string) => {
    setComponents(components.filter((comp) => comp.id !== id))
  }

  const handleDuplicate = (component: Component) => {
    const duplicated: Component = {
      ...component,
      id: Date.now().toString(),
      name: `${component.name} (Copy)`,
      createdAt: "just now",
      usageCount: 0,
    }
    setComponents([duplicated, ...components])
  }

  const getTypeColor = (type: Component["type"]) => {
    switch (type) {
      case "experience":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "education":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "skill":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "project":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-white/20 backdrop-blur-sm sticky top-0 z-50 bg-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="gap-2 text-white hover:bg-white/10">
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <h1 className="text-lg font-semibold text-white">Component Library</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-2 glitch-button text-black font-bold">
                <Plus className="w-4 h-4" />
                Add Component
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Component</DialogTitle>
                <DialogDescription>Create a reusable component for your CVs</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold mb-2 block">Component Name</label>
                  <Input
                    value={newComponent.name}
                    onChange={(e) => setNewComponent({ ...newComponent, name: e.target.value })}
                    placeholder="e.g., Senior Engineer at TechCorp"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">Type</label>
                  <select
                    value={newComponent.type}
                    onChange={(e) => setNewComponent({ ...newComponent, type: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="experience">Experience</option>
                    <option value="education">Education</option>
                    <option value="skill">Skill</option>
                    <option value="project">Project</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">Content</label>
                  <Textarea
                    value={newComponent.content}
                    onChange={(e) => setNewComponent({ ...newComponent, content: e.target.value })}
                    placeholder="Describe this component..."
                    className="min-h-24 resize-none"
                  />
                </div>
                <Button onClick={handleAddComponent} className="w-full">
                  Add Component
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {(["all", "experience", "education", "skill", "project"] as const).map((type) => (
              <Button
                key={type}
                variant={filterType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterType(type)}
                className="capitalize"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Components Grid */}
        {filteredComponents.length === 0 ? (
          <Card className="p-12 text-center bg-black/60 backdrop-blur-sm border-white/20">
            <p className="text-gray-300 mb-4">
              {components.length === 0
                ? "No components yet. Create one to get started!"
                : "No components match your search."}
            </p>
          </Card>
        ) : (
          <div className="grid gap-4">
            {filteredComponents.map((component) => (
              <Card key={component.id} className="p-4 hover:border-pink-500 transition-colors bg-black/60 backdrop-blur-sm border-white/20">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={`${getTypeColor(component.type)} text-xs capitalize`}>{component.type}</Badge>
                      <span className="text-xs text-gray-300">{component.usageCount} uses</span>
                    </div>
                    <h3 className="font-semibold truncate text-white">{component.name}</h3>
                    <p className="text-sm text-gray-300 mt-1 line-clamp-2">{component.content}</p>
                    <p className="text-xs text-gray-400 mt-2">{component.createdAt}</p>
                  </div>
                  <div className="flex gap-1 flex-shrink-0">
                    <Button variant="ghost" size="sm" onClick={() => handleDuplicate(component)} title="Duplicate" className="text-white hover:bg-white/10">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" title="Edit" className="text-white hover:bg-white/10">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(component.id)} title="Delete" className="text-red-400 hover:bg-red-400/10">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Stats */}
        {components.length > 0 && (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="p-6 text-center bg-black/60 backdrop-blur-sm border-white/20">
              <div className="text-3xl font-bold text-pink-400">{components.length}</div>
              <p className="text-sm text-gray-300 mt-2">Total Components</p>
            </Card>
            <Card className="p-6 text-center bg-black/60 backdrop-blur-sm border-white/20">
              <div className="text-3xl font-bold text-pink-400">
                {components.reduce((sum, c) => sum + c.usageCount, 0)}
              </div>
              <p className="text-sm text-gray-300 mt-2">Total Uses</p>
            </Card>
            <Card className="p-6 text-center bg-black/60 backdrop-blur-sm border-white/20">
              <div className="text-3xl font-bold text-pink-400">
                {Math.round(components.reduce((sum, c) => sum + c.usageCount, 0) / components.length)}
              </div>
              <p className="text-sm text-gray-300 mt-2">Avg Uses per Component</p>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
