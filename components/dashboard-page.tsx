"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Plus, FileText, Trash2, Download, Copy, Search, Filter } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface CV {
  id: string
  title: string
  jobTitle: string
  matchScore: number
  createdAt: string
  status: "draft" | "completed" | "archived"
  template: "modern" | "classic" | "minimal"
}

export function DashboardPage() {
  const [cvs, setCvs] = useState<CV[]>([
    {
      id: "1",
      title: "Senior Engineer - TechCorp",
      jobTitle: "Senior Software Engineer",
      matchScore: 92,
      createdAt: "2 days ago",
      status: "completed",
      template: "modern",
    },
    {
      id: "2",
      title: "Product Manager - StartupXYZ",
      jobTitle: "Product Manager",
      matchScore: 85,
      createdAt: "1 week ago",
      status: "completed",
      template: "classic",
    },
  ])

  const [jobDescription, setJobDescription] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState<"all" | "draft" | "completed" | "archived">("all")
  const [sortBy, setSortBy] = useState<"recent" | "score">("recent")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredCVs = cvs
    .filter((cv) => {
      const matchesSearch =
        cv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cv.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesStatus = filterStatus === "all" || cv.status === filterStatus
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      if (sortBy === "score") {
        return b.matchScore - a.matchScore
      }
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })

  const handleGenerateCV = async () => {
    if (!jobDescription.trim()) return

    setIsGenerating(true)
    // Simulate CV generation
    setTimeout(() => {
      const newCV: CV = {
        id: Date.now().toString(),
        title: "New CV",
        jobTitle: jobDescription.split("\n")[0].slice(0, 50),
        matchScore: Math.floor(Math.random() * 30) + 70,
        createdAt: "just now",
        status: "draft",
        template: "modern",
      }
      setCvs([newCV, ...cvs])
      setJobDescription("")
      setIsGenerating(false)
      setIsDialogOpen(false)
    }, 1500)
  }

  const handleDeleteCV = (id: string) => {
    setCvs(cvs.filter((cv) => cv.id !== id))
  }

  const handleDuplicateCV = (cv: CV) => {
    const duplicatedCV: CV = {
      ...cv,
      id: Date.now().toString(),
      title: `${cv.title} (Copy)`,
      createdAt: "just now",
      status: "draft",
    }
    setCvs([duplicatedCV, ...cvs])
  }

  const getStatusColor = (status: CV["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "draft":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "archived":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Scattered pixelated elements */}
      <div className="pixel-scatter pixel-scatter-1">
        <div className="pixel-plus"></div>
      </div>
      <div className="pixel-scatter pixel-scatter-2">
        <div className="pixel-x"></div>
      </div>
      <div className="pixel-scatter pixel-scatter-3">
        <div className="pixel-arrow"></div>
      </div>
      <div className="pixel-scatter pixel-scatter-4">
        <div className="pixel-heart"></div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-white/20 backdrop-blur-sm sticky top-0 z-50 bg-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="pixel-plus"></div>
            <span className="font-bold text-xl text-white transform -rotate-1">magiCV</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/library">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 font-mono">
                Library
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 font-mono">
                Profile
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl font-bold text-white font-mono">Welcome back</h1>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2 glitch-button text-black font-bold">
                  <Plus className="w-4 h-4" />
                  Generate CV
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-white text-black">
                <DialogHeader>
                  <DialogTitle className="text-black font-mono">Generate New CV</DialogTitle>
                  <DialogDescription className="text-gray-600 font-mono">Paste a job description to generate an optimized CV</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Textarea
                    placeholder="Paste the job description here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="min-h-40 resize-none font-mono"
                  />
                  <Button
                    onClick={handleGenerateCV}
                    disabled={!jobDescription.trim() || isGenerating}
                    className="w-full gap-2 glitch-button text-black font-bold"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Building your draft...
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        Generate CV
                      </>
                    )}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <p className="text-gray-300 font-mono">Create a new CV or manage your existing ones</p>
        </div>

        {/* Search and Filter Section */}
        {cvs.length > 0 && (
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search CVs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={filterStatus} onValueChange={(value: any) => setFilterStatus(value)}>
                <SelectTrigger className="w-full sm:w-40">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All CVs</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="score">Highest Score</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* CVs List */}
        <div>
          {filteredCVs.length === 0 ? (
            <Card className="p-12 text-center bg-black/60 backdrop-blur-sm border-2 border-white">
              <FileText className="w-12 h-12 text-white mx-auto mb-4 opacity-50" />
              <p className="text-gray-300 mb-4 font-mono">
                {cvs.length === 0 ? "No CVs yet. Create one to get started!" : "No CVs match your search."}
              </p>
            </Card>
          ) : (
            <div className="grid gap-4">
              {filteredCVs.map((cv) => (
                <Link key={cv.id} href={`/editor/${cv.id}`}>
                  <Card className="p-6 hover:border-pink-500 hover:bg-black/80 transition-all cursor-pointer group bg-black/60 backdrop-blur-sm border-2 border-white">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold group-hover:text-pink-400 transition-colors truncate text-white font-mono">
                            {cv.title}
                          </h3>
                          <Badge className={`${getStatusColor(cv.status)} text-xs font-mono`}>{cv.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-300 mt-1 truncate font-mono">{cv.jobTitle}</p>
                        <div className="flex items-center gap-4 mt-3 text-xs text-gray-400 font-mono">
                          <span>{cv.createdAt}</span>
                          <span className="capitalize">{cv.template} template</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-pink-400 font-mono">{cv.matchScore}%</div>
                          <p className="text-xs text-gray-400 font-mono">Match</p>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault()
                              handleDuplicateCV(cv)
                            }}
                            title="Duplicate CV"
                            className="text-white hover:bg-white/10"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault()
                            }}
                            title="Download CV"
                            className="text-white hover:bg-white/10"
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault()
                              handleDeleteCV(cv.id)
                            }}
                            title="Delete CV"
                            className="text-red-400 hover:bg-red-400/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Stats Section */}
        {cvs.length > 0 && (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="p-6 text-center bg-black/60 backdrop-blur-sm border-2 border-white">
              <div className="text-3xl font-bold text-pink-400 font-mono">{cvs.length}</div>
              <p className="text-sm text-gray-300 mt-2 font-mono">Total CVs</p>
            </Card>
            <Card className="p-6 text-center bg-black/60 backdrop-blur-sm border-2 border-white">
              <div className="text-3xl font-bold text-pink-400 font-mono">
                {Math.round(cvs.reduce((sum, cv) => sum + cv.matchScore, 0) / cvs.length)}%
              </div>
              <p className="text-sm text-gray-300 mt-2 font-mono">Average Match Score</p>
            </Card>
            <Card className="p-6 text-center bg-black/60 backdrop-blur-sm border-2 border-white">
              <div className="text-3xl font-bold text-pink-400 font-mono">
                {cvs.filter((cv) => cv.status === "completed").length}
              </div>
              <p className="text-sm text-gray-300 mt-2 font-mono">Completed CVs</p>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
