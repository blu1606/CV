"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ConsistentHeader } from "@/components/consistent-header"
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

export default function ComponentLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Mock data - in real app this would come from API
  const components = [
    {
      id: 1,
      title: "Senior Software Engineer at TechCorp",
      type: "experience",
      category: "work",
      content: "Led development of microservices architecture serving 1M+ users. Implemented CI/CD pipelines reducing deployment time by 60%. Mentored 3 junior developers and established code review processes.",
      source: "LinkedIn",
      lastUpdated: "2024-01-15",
      tags: ["React", "Node.js", "AWS", "Leadership"],
      isActive: true
    },
    {
      id: 2,
      title: "Master of Computer Science - Stanford University",
      type: "education",
      category: "education",
      content: "Specialized in Machine Learning and Distributed Systems. GPA: 3.8/4.0. Thesis: 'Scalable Neural Networks for Real-time Recommendation Systems'",
      source: "LinkedIn",
      lastUpdated: "2024-01-10",
      tags: ["Machine Learning", "Distributed Systems", "Research"],
      isActive: true
    },
    {
      id: 3,
      title: "AWS Certified Solutions Architect",
      type: "certification",
      category: "certifications",
      content: "Professional certification demonstrating expertise in designing distributed systems on AWS. Valid until 2026.",
      source: "Manual Entry",
      lastUpdated: "2024-01-08",
      tags: ["AWS", "Cloud Architecture", "DevOps"],
      isActive: true
    },
    {
      id: 4,
      title: "Open Source Contributor - React",
      type: "project",
      category: "projects",
      content: "Contributed to React core library, focusing on performance optimizations. 15+ merged PRs, 500+ stars on personal projects.",
      source: "GitHub",
      lastUpdated: "2024-01-05",
      tags: ["React", "Open Source", "JavaScript"],
      isActive: true
    },
    {
      id: 5,
      title: "Full Stack Developer at StartupXYZ",
      type: "experience",
      category: "work",
      content: "Built and maintained web applications using React, Node.js, and PostgreSQL. Collaborated with design team to implement responsive UIs.",
      source: "LinkedIn",
      lastUpdated: "2024-01-03",
      tags: ["React", "Node.js", "PostgreSQL", "UI/UX"],
      isActive: false
    },
    {
      id: 6,
      title: "JavaScript, Python, TypeScript, Go",
      type: "skills",
      category: "skills",
      content: "Proficient in multiple programming languages with 5+ years of experience in web development and backend systems.",
      source: "LinkedIn",
      lastUpdated: "2024-01-01",
      tags: ["Programming", "Web Development", "Backend"],
      isActive: true
    }
  ]

  const categories = [
    { id: "all", label: "All Components", icon: Grid3X3, count: components.length },
    { id: "work", label: "Work Experience", icon: Briefcase, count: components.filter(c => c.category === "work").length },
    { id: "education", label: "Education", icon: GraduationCap, count: components.filter(c => c.category === "education").length },
    { id: "certifications", label: "Certifications", icon: Award, count: components.filter(c => c.category === "certifications").length },
    { id: "projects", label: "Projects", icon: Code, count: components.filter(c => c.category === "projects").length },
    { id: "skills", label: "Skills", icon: Star, count: components.filter(c => c.category === "skills").length }
  ]

  const dataSources = [
    {
      name: "LinkedIn",
      status: "connected",
      lastSync: "2 hours ago",
      itemsCount: 8
    },
    {
      name: "GitHub",
      status: "connected",
      lastSync: "1 day ago",
      itemsCount: 3
    },
    {
      name: "Manual Entry",
      status: "available",
      lastSync: null,
      itemsCount: 1
    }
  ]

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         component.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         component.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || component.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleSyncData = async (source: string) => {
    // Simulate sync
    console.log(`Syncing ${source}...`)
  }

  const handleEditComponent = (id: number) => {
    // Navigate to edit component page
    console.log(`Edit component ${id}`)
  }

  const handleDeleteComponent = (id: number) => {
    // Delete component
    console.log(`Delete component ${id}`)
  }

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.id === category)
    return categoryData?.icon || Grid3X3
  }

  return (
    <div className="min-h-screen relative">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/galaxy.mp4" type="video/mp4" />
      </video>
      
      {/* Content */}
      <div className="relative z-10">
        <ConsistentHeader />
        
        <main className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl text-black mb-4">
              Component Library
            </h1>
            <p className="text-lg text-black/80 max-w-2xl">
              Manage your professional components. Edit, organize, and sync your data from various sources.
            </p>
          </div>

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

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-mono text-xs border-black/40 hover:bg-black/10 text-white"
                    asChild
                  >
                    <Link href="/components/sync">
                      <RefreshCw className="w-3 h-3 mr-1" />
                      SYNC ALL
                    </Link>
                  </Button>
                  
                  <Button
                    size="sm"
                    className="font-mono text-xs bg-orange-accent text-background hover:bg-orange-accent/90 border-0"
                    asChild
                  >
                    <Link href="/components/create">
                      <Plus className="w-3 h-3 mr-1" />
                      NEW COMPONENT
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <section className="relative py-20 bg-terminal-bg">
                {/* Blinking Cursors */}
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-px h-5 bg-orange-500 terminal-cursor"
                    style={{
                      left: `${Math.random() * 80 + 10}%`,
                      top: `${Math.random() * 80 + 10}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
                <div className="container mx-auto px-4 space-y-6">
                  {/* Categories Card */}
                  <Card className="p-6 bg-background/80 backdrop-blur-sm border-2 border-foreground/20">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg text-white">Categories</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {categories.map((category) => {
                        const Icon = category.icon
                        return (
                          <Button
                            key={category.id}
                            variant={selectedCategory === category.id ? "default" : "ghost"}
                            className={`w-full justify-start font-mono text-xs ${
                              selectedCategory === category.id
                                ? "bg-orange-accent text-background hover:bg-orange-accent/90"
                                : "text-white hover:bg-foreground/10"
                            }`}
                            onClick={() => setSelectedCategory(category.id)}
                          >
                            <Icon className="w-3 h-3 mr-2" />
                            {category.label}
                            <Badge variant="secondary" className="ml-auto text-xs">
                              {category.count}
                            </Badge>
                          </Button>
                        )
                      })}
                    </CardContent>
                  </Card>

                  {/* Data Sources Card */}
                  <Card className="p-6 bg-background/80 backdrop-blur-sm border-2 border-foreground/20">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg text-white">Data Sources</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {dataSources.map((source) => (
                        <div key={source.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {source.status === "connected" ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-orange-500" />
                            )}
                            <span className="text-sm text-white font-medium">{source.name}</span>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleSyncData(source.name)}
                            className="font-mono text-xs border-foreground/40 hover:bg-foreground/10 text-white h-6 px-2"
                          >
                            <RefreshCw className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>

            {/* Components Grid/List */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl text-black">
                  {selectedCategory === "all" ? "All Components" : categories.find(c => c.id === selectedCategory)?.label}
                </h2>
                <Badge variant="outline" className="font-mono text-xs border-black/40 text-black">
                  {filteredComponents.length} COMPONENTS
                </Badge>
              </div>

              {filteredComponents.length > 0 ? (
                <div className={viewMode === "grid" ? "grid md:grid-cols-2 gap-6" : "space-y-4"}>
                  {filteredComponents.map((component) => {
                    const CategoryIcon = getCategoryIcon(component.category)
                    return (
                      <Card 
                        key={component.id} 
                        className={`border-2 border-black bg-white/10 backdrop-blur-sm hover:border-orange-accent/60 transition-colors ${
                          !component.isActive ? "opacity-60" : ""
                        }`}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3 flex-1">
                              <div className="w-8 h-8 border-2 border-orange-accent flex items-center justify-center flex-shrink-0">
                                <CategoryIcon className="w-4 h-4 text-orange-accent" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <CardTitle className="text-lg text-black line-clamp-2 mb-1">
                                  {component.title}
                                </CardTitle>
                                <div className="flex items-center gap-2 text-sm text-black/70">
                                  <Badge variant="outline" className="font-mono text-xs border-black/40 text-black">
                                    {component.type.toUpperCase()}
                                  </Badge>
                                  <span>•</span>
                                  <span>{component.source}</span>
                                  <span>•</span>
                                  <span>{component.lastUpdated}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex gap-1">
                              <Button 
                                size="sm" 
                                variant="outline"
                                className="font-mono text-xs border-black/40 hover:bg-black/10 text-white h-6 px-2"
                                asChild
                              >
                                <Link href={`/components/edit/${component.id}`}>
                                  <Edit className="w-3 h-3" />
                                </Link>
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleDeleteComponent(component.id)}
                                className="font-mono text-xs border-destructive/40 text-destructive hover:bg-destructive/10 h-6 px-2"
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <p className="text-sm text-black/80 line-clamp-3">
                            {component.content}
                          </p>
                          
                          <div className="flex flex-wrap gap-1">
                            {component.tags.map((tag, index) => (
                              <Badge 
                                key={index}
                                variant="secondary" 
                                className="font-mono text-xs bg-black/20 text-white"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          {!component.isActive && (
                            <div className="flex items-center gap-2 text-sm text-orange-600">
                              <AlertCircle className="w-4 h-4" />
                              <span>Inactive - not included in CV generation</span>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              ) : (
                <Card className="border-2 border-dashed border-black bg-white/5">
                  <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                    <Grid3X3 className="w-12 h-12 text-white/60 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">No components found</h3>
                    <p className="text-white/70 mb-4">
                      {searchQuery ? "Try adjusting your search terms" : "Create your first component or sync your data"}
                    </p>
                    <Button
                      variant="outline"
                      className="font-mono text-sm border-black hover:bg-black/10 text-white"
                      asChild
                    >
                      <Link href="/components/create">
                        <Plus className="w-4 h-4 mr-2" />
                        CREATE COMPONENT
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Terminal Section with Sync Status */}
          <section className="relative py-20 bg-terminal-bg mt-12">
            {/* Blinking Cursors */}
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="absolute w-px h-5 bg-orange-500 terminal-cursor"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 70 + 15}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-block px-4 py-1 bg-orange-accent text-background text-xs font-mono mb-4">
                  SYNC STATUS
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-white text-balance">
                  Keep Your Components Up to Date
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Your professional data is automatically synced from LinkedIn, GitHub, and other sources. 
                  Keep your components fresh for better CV generation.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {dataSources.map((source) => (
                    <div key={source.name} className="border-2 border-foreground/40 bg-background/50 backdrop-blur-sm p-6">
                      <div className="flex items-center justify-center mb-4">
                        {source.status === "connected" ? (
                          <CheckCircle className="w-8 h-8 text-green-500" />
                        ) : (
                          <AlertCircle className="w-8 h-8 text-orange-500" />
                        )}
                      </div>
                      <h3 className="font-semibold text-white mb-2">{source.name}</h3>
                      <p className="text-sm text-white/80 mb-4">
                        {source.status === "connected" 
                          ? `${source.itemsCount} components synced`
                          : "Not connected"
                        }
                      </p>
                      {source.lastSync && (
                        <p className="text-xs text-white/60 font-mono">
                          Last sync: {source.lastSync}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
