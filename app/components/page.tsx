import { ConsistentHeader } from "@/components/consistent-header"
import { getComponents } from "@/lib/services/data-service"
import { TerminalCursors } from "@/components/terminal-cursors"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
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
  Star,
  Target
} from "lucide-react"
import Link from "next/link"

export default async function ComponentLibraryPage() {
  // Fetch components server-side
  console.log("SSR: Fetching components server-side...")
  const components = await getComponents()
  console.log("SSR: Received components count:", Array.isArray(components) ? components.length : "non-array")

  // Map Supabase data structure to UI categories
  const mapTypeToCategory = (type: string) => {
    switch (type) {
      case 'experience': return 'work'
      case 'education': return 'education'
      case 'skill': return 'skills'
      case 'project': return 'projects'
      default: return 'other'
    }
  }

  // Transform components for UI with proper source labeling  
  const transformedComponents = components.map(component => ({
    ...component,
    category: mapTypeToCategory(component.type),
    content: component.description || '',
    tags: component.highlights || [],
    lastUpdated: component.created_at ? new Date(component.created_at).toLocaleDateString() : 'Recently',
    source: component.organization || 'Manual Entry',
    isActive: true
  }))

  const categories = [
    { id: "all", label: "All Components", icon: Grid3X3, count: transformedComponents.length },
    { id: "work", label: "Work Experience", icon: Briefcase, count: transformedComponents.filter(c => c.category === "work").length },
    { id: "education", label: "Education", icon: GraduationCap, count: transformedComponents.filter(c => c.category === "education").length },
    { id: "certifications", label: "Certifications", icon: Award, count: transformedComponents.filter(c => c.category === "certifications").length },
    { id: "projects", label: "Projects", icon: Code, count: transformedComponents.filter(c => c.category === "projects").length },
    { id: "skills", label: "Skills", icon: Star, count: transformedComponents.filter(c => c.category === "skills").length }
  ]

  const dataSources = [
    {
      name: "LinkedIn",
      status: "connected",
      lastSync: "2 hours ago",
      itemsCount: transformedComponents.filter(c => c.source.includes('LinkedIn')).length || 8
    },
    {
      name: "GitHub",
      status: "connected",
      lastSync: "1 day ago",
      itemsCount: transformedComponents.filter(c => c.source.includes('GitHub')).length || 3
    },
    {
      name: "Manual Entry",
      status: "available",
      lastSync: null,
      itemsCount: transformedComponents.filter(c => c.source === 'Manual Entry').length || 1
    }
  ]

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
            {/* Debug info */}
            <div className="mt-2 text-sm text-black/60 font-mono">
              Debug: {components.length} components loaded ({components.length > 0 && components[0].id.startsWith("mock") ? "MOCK" : "REAL"} data)
            </div>
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
                        variant="default"
                        size="sm"
                        className="font-mono text-xs rounded-none border-0"
                      >
                        <Grid3X3 className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
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
                  variant={category.id === "all" ? "default" : "outline"}
                  size="sm"
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

          {/* Components Grid */}
          {transformedComponents.length === 0 ? (
            <Card className="border-2 border-black bg-white/10 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <div className="text-white/60 mb-4">
                  <Code className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No Components Found</h3>
                  <p className="text-white/70 mb-4">
                    Start building your professional component library by syncing with LinkedIn or creating components manually.
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button size="sm" className="bg-white text-black hover:bg-white/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Component
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/40 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Sync LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {transformedComponents.map((component) => {
                const getCategoryIcon = (category: string) => {
                  const categoryData = categories.find(c => c.id === category)
                  return categoryData?.icon || Grid3X3
                }
                const Icon = getCategoryIcon(component.category)
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
                            <CardDescription className="text-white/70 text-xs">
                              {component.source}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 hover:bg-white/10"
                          >
                            <Edit className="w-3 h-3 text-white" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 hover:bg-white/10"
                          >
                            <Trash2 className="w-3 h-3 text-white" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <p className="text-white/80 text-sm mb-3 line-clamp-3">
                        {component.content}
                      </p>
                      
                      <div className="flex items-center gap-2 text-white/60 text-xs mb-3">
                        <Calendar className="w-3 h-3" />
                        Updated {component.lastUpdated}
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {component.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-black/30 text-white">
                            {tag}
                          </Badge>
                        ))}
                        {component.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs bg-black/30 text-white">
                            +{component.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs mb-4">
                        <span className="text-white/60">
                          {component.type} • {component.category}
                        </span>
                        <div className="flex items-center gap-1">
                          {component.isActive ? (
                            <CheckCircle className="w-3 h-3 text-green-500" />
                          ) : (
                            <AlertCircle className="w-3 h-3 text-orange-500" />
                          )}
                          <span className="text-white/60">
                            {component.isActive ? "Active" : "Inactive"}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 border-t border-white/10 pt-3 mt-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 font-mono text-xs border-orange-accent/40 text-orange-accent hover:bg-orange-accent/10"
                          asChild
                        >
                          <Link href={`/components/edit/${component.id}`}>
                            <Edit className="w-3 h-3 mr-1" />
                            EDIT
                          </Link>
                        </Button>
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
                    <div className="flex items-center gap-2">
                      <div className="text-right mr-3">
                        <div className="text-white font-medium text-sm">{source.itemsCount}</div>
                        <div className="text-white/60 text-xs">items</div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="font-mono text-xs border-black/40 hover:bg-black/10 text-white"
                      >
                        <RefreshCw className="w-3 h-3 mr-1" />
                        SYNC
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Terminal Section */}
          <section className="relative py-20 bg-terminal-bg mt-12">
            {/* Blinking Cursors */}
            <TerminalCursors count={6} />
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-block px-4 py-1 bg-orange-accent text-background text-xs font-mono mb-4">
                  COMPONENT INTELLIGENCE
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-white text-balance">
                  Smart Component Management
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Our AI automatically categorizes and optimizes your professional data from multiple sources, 
                  ensuring your CV components are always up-to-date and perfectly formatted.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="border-2 border-foreground/40 bg-background/50 backdrop-blur-sm p-6">
                    <RefreshCw className="w-8 h-8 text-orange-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-white mb-2">Auto-Sync</h3>
                    <p className="text-sm text-white/80">
                      Automatically sync your latest professional updates from LinkedIn and other platforms
                    </p>
                  </div>
                  
                  <div className="border-2 border-foreground/40 bg-background/50 backdrop-blur-sm p-6">
                    <Star className="w-8 h-8 text-orange-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-white mb-2">Smart Categorization</h3>
                    <p className="text-sm text-white/80">
                      AI-powered categorization and tagging for better component organization
                    </p>
                  </div>
                  
                  <div className="border-2 border-foreground/40 bg-background/50 backdrop-blur-sm p-6">
                    <Target className="w-8 h-8 text-orange-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-white mb-2">Optimization</h3>
                    <p className="text-sm text-white/80">
                      Optimize components for specific job requirements and industry standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
