"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ComponentData } from "@/lib/services/data-service"
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  RefreshCw, 
  CheckCircle, 
  AlertCircle,
  ExternalLink,
  Calendar,
  Filter,
  Grid3X3,
  List,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Globe,
  Users,
  BookOpen,
  Star,
  ChevronDown
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface ComponentsPageClientProps {
  initialComponents: ComponentData[]
}

export default function ComponentsPageClient({ initialComponents }: ComponentsPageClientProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Map Supabase data structure to UI categories
  const mapTypeToCategory = (type: ComponentData['type']) => {
    switch (type) {
      case 'experience': return 'work'
      case 'education': return 'education'
      case 'skill': return 'skills'
      case 'project': return 'projects'
      default: return 'other'
    }
  }

  const categories = [
    { id: "all", label: "All Components", icon: Grid3X3, count: initialComponents.length },
    { id: "work", label: "Work Experience", icon: Briefcase, count: initialComponents.filter(c => c.type === 'experience').length },
    { id: "education", label: "Education", icon: GraduationCap, count: initialComponents.filter(c => c.type === 'education').length },
    { id: "certifications", label: "Certifications", icon: Award, count: 0 }, // No cert type in ComponentData yet
    { id: "projects", label: "Projects", icon: Code, count: initialComponents.filter(c => c.type === 'project').length },
    { id: "skills", label: "Skills", icon: Star, count: initialComponents.filter(c => c.type === 'skill').length }
  ]

  const dataSources = [
    {
      name: "LinkedIn",
      status: "connected",
      lastSync: "2 hours ago",
      itemsCount: initialComponents.filter(c => c.organization).length
    },
    {
      name: "GitHub",
      status: "connected", 
      lastSync: "1 day ago",
      itemsCount: initialComponents.filter(c => c.type === 'project').length
    },
    {
      name: "Manual Entry",
      status: "available",
      lastSync: null,
      itemsCount: 1
    }
  ]

  const filteredComponents = initialComponents.filter(component => {
    const matchesSearch = component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (component.description && component.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         component.highlights.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const componentCategory = mapTypeToCategory(component.type)
    const matchesCategory = selectedCategory === "all" || componentCategory === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleSyncData = async (source: string) => {
    console.log(`Syncing ${source}...`)
  }

  const handleEditComponent = (id: string) => {
    console.log(`Edit component ${id}`)
  }

  const handleDeleteComponent = (id: string) => {
    console.log(`Delete component ${id}`)
  }

  const getCategoryIcon = (type: ComponentData['type']) => {
    switch (type) {
      case 'experience': return Briefcase
      case 'education': return GraduationCap
      case 'skill': return Star
      case 'project': return Code
      default: return Grid3X3
    }
  }

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return 'Present'
    return new Date(dateStr).toLocaleDateString()
  }

  return (
    <>
      {/* Controls Section */}
      <Card className="mb-8 border-2 border-black bg-white/10 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
                <Input
                  placeholder="Search components..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-2 border-black/40 bg-white/20 text-white placeholder:text-white/60"
                />
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="font-mono text-xs border-black/40 hover:bg-black/10 text-white"
                >
                  <Filter className="w-3 h-3 mr-1" />
                  FILTER
                </Button>
                
                <div className="flex border-2 border-black/40 rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="font-mono text-xs rounded-none border-0"
                  >
                    <Grid3X3 className="w-3 h-3" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="font-mono text-xs rounded-none border-0"
                  >
                    <List className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 bg-transparent border-white/40 text-white hover:bg-white/10"
              >
                <RefreshCw className="w-4 h-4" />
                Sync
              </Button>
              <Button asChild size="sm" className="gap-2 bg-white text-black hover:bg-white/90">
                <Link href="/components/create">
                  <Plus className="w-4 h-4" />
                  Create
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="gap-2 font-mono text-xs border-black/40 hover:bg-black/10 text-white"
            >
              <Icon className="w-3 h-3" />
              {category.label}
              <Badge variant="secondary" className="ml-1 text-xs bg-black/30 text-white">
                {category.count}
              </Badge>
            </Button>
          )
        })}
      </div>

      {/* Components Grid/List */}
      {filteredComponents.length === 0 ? (
        <Card className="border-2 border-black bg-white/10 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <div className="text-white/60 mb-4">
              {initialComponents.length === 0 ? (
                <>
                  <Code className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No Components Yet</h3>
                  <p className="text-white/70 mb-4">
                    Start building your professional component library by syncing with LinkedIn or creating components manually.
                  </p>
                  <Button asChild className="bg-white text-black hover:bg-white/90">
                    <Link href="/auth/login">
                      Sign in with LinkedIn
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Search className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No Results Found</h3>
                  <p className="text-white/70">
                    Try adjusting your search query or filters to find what you're looking for.
                  </p>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className={viewMode === "grid" ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" : "space-y-4"}>
          {filteredComponents.map((component) => {
            const Icon = getCategoryIcon(component.type)
            return (
              <Card key={component.id} className="border-2 border-black bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border-2 border-black/40 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-white text-sm line-clamp-2">
                          {component.title}
                        </CardTitle>
                        {component.organization && (
                          <CardDescription className="text-white/70 text-xs">
                            {component.organization}
                          </CardDescription>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditComponent(component.id)}
                        className="h-8 w-8 p-0 hover:bg-white/10"
                      >
                        <Edit className="w-3 h-3 text-white" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteComponent(component.id)}
                        className="h-8 w-8 p-0 hover:bg-white/10"
                      >
                        <Trash2 className="w-3 h-3 text-white" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {component.description && (
                    <p className="text-white/80 text-sm mb-3 line-clamp-3">
                      {component.description}
                    </p>
                  )}
                  
                  {component.start_date && (
                    <div className="flex items-center gap-2 text-white/60 text-xs mb-3">
                      <Calendar className="w-3 h-3" />
                      {formatDate(component.start_date)} - {formatDate(component.end_date)}
                    </div>
                  )}
                  
                  {component.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {component.highlights.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-black/30 text-white">
                          {tag}
                        </Badge>
                      ))}
                      {component.highlights.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-black/30 text-white">
                          +{component.highlights.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/60">
                      Type: {component.type}
                    </span>
                    {component.created_at && (
                      <span className="text-white/60">
                        {new Date(component.created_at).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}

      {/* Data Sources Section */}
      <Card className="mt-12 border-2 border-black bg-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Data Sources</CardTitle>
          <CardDescription className="text-white/70">
            Manage your connected professional platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {dataSources.map((source) => (
              <div key={source.name} className="flex items-center justify-between p-4 border border-black/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-black/40 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{source.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">{source.name}</div>
                    <div className="flex items-center gap-2 text-xs">
                      {source.status === "connected" ? (
                        <CheckCircle className="w-3 h-3 text-green-500" />
                      ) : (
                        <AlertCircle className="w-3 h-3 text-orange-500" />
                      )}
                      <span className="text-white/60 capitalize">{source.status}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium text-sm">{source.itemsCount}</div>
                  <div className="text-white/60 text-xs">items</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  )
}