'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, BarChart3, Edit, FileText, Trash2, RefreshCw, Plus, Linkedin, Github } from "lucide-react"
import Link from "next/link"
import { useComponents, useCVs } from "@/hooks/use-data"
import { Skeleton } from "@/components/ui/skeleton"

export function DashboardContent() {
  const { components, loading: componentsLoading } = useComponents()
  const { cvs, loading: cvsLoading } = useCVs()

  const stats = {
    experience: components.filter((c) => c.type === 'experience').length,
    skills: components.filter((c) => c.type === 'skill').length,
    projects: components.filter((c) => c.type === 'project').length,
    education: components.filter((c) => c.type === 'education').length,
  }

  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 space-y-2 border-white/20 bg-white/5 backdrop-blur-sm">
          <p className="text-sm text-white/70">Components</p>
          {componentsLoading ? (
            <Skeleton className="h-8 w-16 bg-white/10" />
          ) : (
            <p className="text-2xl font-bold text-white">{components.length}</p>
          )}
        </Card>
        <Card className="p-4 space-y-2 border-white/20 bg-white/5 backdrop-blur-sm">
          <p className="text-sm text-white/70">CVs</p>
          {cvsLoading ? (
            <Skeleton className="h-8 w-16 bg-white/10" />
          ) : (
            <p className="text-2xl font-bold text-white">{cvs.length}</p>
          )}
        </Card>
        <Card className="p-4 space-y-2 border-white/20 bg-white/5 backdrop-blur-sm">
          <p className="text-sm text-white/70">Experience</p>
          <p className="text-2xl font-bold text-white">{stats.experience}</p>
        </Card>
        <Card className="p-4 space-y-2 border-white/20 bg-white/5 backdrop-blur-sm">
          <p className="text-sm text-white/70">Skills</p>
          <p className="text-2xl font-bold text-white">{stats.skills}</p>
        </Card>
      </div>

      {/* CVs Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Your CVs</h2>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent border-white/40 text-white hover:bg-white/10">
            <Plus className="w-4 h-4" />
            New CV
          </Button>
        </div>

        {cvsLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 space-y-4 bg-white/5 border-white/20">
                <Skeleton className="h-6 w-3/4 bg-white/10" />
                <Skeleton className="h-4 w-full bg-white/10" />
                <Skeleton className="h-8 w-20 bg-white/10" />
              </Card>
            ))}
          </div>
        ) : cvs.length === 0 ? (
          <Card className="p-12 border-dashed border-2 border-white/30 flex flex-col items-center justify-center text-center space-y-3 bg-white/5 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <FileText className="w-8 h-8 text-white/70" />
            </div>
            <div className="space-y-1">
              <p className="font-medium text-lg text-white">No CVs yet</p>
              <p className="text-sm text-white/70">Create your first CV using the form above</p>
            </div>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cvs.map((cv) => (
              <Card key={cv.id} className="p-6 space-y-4 hover:border-white/50 transition-colors group bg-white/5 border-white/20 backdrop-blur-sm">
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <h3 className="font-semibold text-lg line-clamp-1 text-white">{cv.title}</h3>
                    <p className="text-sm text-white/70 line-clamp-2">
                      {cv.job_description || 'No description'}
                    </p>
                  </div>
                </div>

                {cv.match_score && (
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="gap-1 bg-white/10 text-white border-white/20">
                      <BarChart3 className="w-3 h-3" />
                      {cv.match_score}% Match
                    </Badge>
                  </div>
                )}

                <div className="flex items-center gap-2 text-xs text-white/70">
                  <Calendar className="w-3 h-3" />
                  <span>Created {new Date(cv.created_at).toLocaleDateString()}</span>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Button size="sm" className="flex-1 bg-white text-black hover:bg-white/90" asChild>
                    <Link href={`/editor/${cv.id}`}>
                      <Edit className="w-3 h-3 mr-1" />
                      Edit
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10">
                    <FileText className="w-3 h-3" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Data Sources Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white">Connected Data Sources</h2>
            <p className="text-sm text-white/70">
              {componentsLoading ? 'Loading...' : `${components.length} components synced`}
            </p>
          </div>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent border-white/40 text-white hover:bg-white/10">
            <RefreshCw className="w-4 h-4" />
            Re-sync All
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6 space-y-4 bg-white/5 border-white/20 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0A66C2] flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">LinkedIn</h3>
                  <p className="text-sm text-white/70">Connected</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                Active
              </Badge>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/70">Components</span>
                <span className="font-medium text-white">
                  {componentsLoading ? '...' : `${components.length} items`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Experience</span>
                <span className="font-medium text-white">{stats.experience}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Skills</span>
                <span className="font-medium text-white">{stats.skills}</span>
              </div>
            </div>

            <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent border-white/40 text-white hover:bg-white/10">
              <RefreshCw className="w-3 h-3" />
              Re-sync Now
            </Button>
          </Card>

          <Card className="p-6 space-y-4 border-dashed border-2 border-white/30 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Github className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">GitHub</h3>
                  <p className="text-sm text-white/70">Not connected</p>
                </div>
              </div>
              <Badge variant="outline" className="border-white/40 text-white">Premium</Badge>
            </div>

            <p className="text-sm text-white/70">
              Connect your GitHub to automatically import projects and contributions
            </p>

            <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent border-white/40 text-white hover:bg-white/10" disabled>
              <Plus className="w-3 h-3" />
              Connect GitHub
            </Button>
          </Card>
        </div>
      </div>
    </>
  )
}
