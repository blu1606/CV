'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
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
import { useComponents } from "@/hooks/use-data"
import { useState } from "react"

type ComponentType = 'all' | 'experience' | 'education' | 'skill' | 'project'

const iconMap = {
  experience: Briefcase,
  education: GraduationCap,
  skill: Code,
  project: Award,
}

export function ComponentsContent() {
  const { components, loading, error } = useComponents()
  const [filter, setFilter] = useState<ComponentType>('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Calculate stats
  const stats = {
    total: components.length,
    experience: components.filter((c) => c.type === 'experience').length,
    education: components.filter((c) => c.type === 'education').length,
    skill: components.filter((c) => c.type === 'skill').length,
    project: components.filter((c) => c.type === 'project').length,
  }

  // Filter components
  const filteredComponents = components.filter((component) => {
    const matchesType = filter === 'all' || component.type === filter
    const matchesSearch =
      searchQuery === '' ||
      component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.organization?.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesSearch
  })

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-white">Component Library</h1>
          <p className="text-white/70">Manage your professional data and reusable CV components</p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-transparent border-white/40 text-white hover:bg-white/10"
          >
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
          {loading ? (
            <Skeleton className="h-8 w-16 bg-white/10" />
          ) : (
            <p className="text-2xl font-bold text-white">{stats.total}</p>
          )}
        </Card>

        <Card className="p-4 space-y-2 bg-white/5 border-white/20 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/70">Work Experience</span>
            <Briefcase className="w-4 h-4 text-white/70" />
          </div>
          <p className="text-2xl font-bold text-white">{stats.experience}</p>
        </Card>

        <Card className="p-4 space-y-2 bg-white/5 border-white/20 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/70">Education</span>
            <GraduationCap className="w-4 h-4 text-white/70" />
          </div>
          <p className="text-2xl font-bold text-white">{stats.education}</p>
        </Card>

        <Card className="p-4 space-y-2 bg-white/5 border-white/20 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/70">Skills</span>
            <Code className="w-4 h-4 text-white/70" />
          </div>
          <p className="text-2xl font-bold text-white">{stats.skill}</p>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="p-4 bg-white/5 border-white/20 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
            <Input
              placeholder="Search components by title, company, or skill..."
              className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Tabs value={filter} onValueChange={(v) => setFilter(v as ComponentType)} className="w-full sm:w-auto">
            <TabsList className="bg-white/10 border-white/20">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-white data-[state=active]:text-black text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="data-[state=active]:bg-white data-[state=active]:text-black text-white"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="data-[state=active]:bg-white data-[state=active]:text-black text-white"
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="skill"
                className="data-[state=active]:bg-white data-[state=active]:text-black text-white"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="project"
                className="data-[state=active]:bg-white data-[state=active]:text-black text-white"
              >
                Projects
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </Card>

      {/* Components List */}
      <div className="space-y-3">
        {loading ? (
          // Loading state
          Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="p-6 bg-white/5 border-white/20 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <Skeleton className="w-12 h-12 rounded-lg bg-white/10" />
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-6 w-3/4 bg-white/10" />
                  <Skeleton className="h-4 w-1/2 bg-white/10" />
                  <Skeleton className="h-16 w-full bg-white/10" />
                </div>
              </div>
            </Card>
          ))
        ) : filteredComponents.length === 0 ? (
          // Empty state
          <Card className="p-12 border-dashed border-2 border-white/30 flex flex-col items-center justify-center text-center space-y-3 bg-white/5 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <Search className="w-8 h-8 text-white/70" />
            </div>
            <div className="space-y-1">
              <p className="font-medium text-lg text-white">No components found</p>
              <p className="text-sm text-white/70">
                {searchQuery
                  ? 'Try adjusting your search or filters'
                  : 'Create your first component or sync from LinkedIn'}
              </p>
            </div>
            <Button size="sm" className="gap-2 bg-white text-black hover:bg-white/90 mt-4">
              <Plus className="w-4 h-4" />
              Create Component
            </Button>
          </Card>
        ) : (
          // Components list
          filteredComponents.map((component) => {
            const Icon = iconMap[component.type] || Briefcase
            return (
              <Card
                key={component.id}
                className="p-6 hover:border-white/50 transition-colors bg-white/5 border-white/20 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1 min-w-0 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1 flex-1 min-w-0">
                        <h3 className="font-semibold text-lg text-white">{component.title}</h3>
                        {component.organization && (
                          <p className="text-sm text-white/70">{component.organization}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {(component.start_date || component.end_date) && (
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>
                            {component.start_date
                              ? new Date(component.start_date).getFullYear()
                              : 'N/A'}{' '}
                            -{' '}
                            {component.end_date
                              ? new Date(component.end_date).getFullYear()
                              : 'Present'}
                          </span>
                        </div>
                      </div>
                    )}

                    {component.description && (
                      <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
                        {component.description}
                      </p>
                    )}

                    {component.highlights && component.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {component.highlights.slice(0, 5).map((highlight, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-white/10 text-white border-white/20"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-2 pt-2">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-green-500/10 text-green-400 border-green-500/20"
                      >
                        {component.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })
        )}
      </div>
    </>
  )
}
