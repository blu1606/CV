"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ConsistentHeader } from "@/components/consistent-header"
import { 
  Plus, 
  FileText, 
  Download, 
  Edit, 
  Trash2, 
  RefreshCw, 
  CheckCircle, 
  AlertCircle,
  ExternalLink,
  Calendar,
  Target,
  BarChart3
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function DashboardPage() {
  const [jobDescription, setJobDescription] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  // Mock data - in real app this would come from API
  const existingCVs = [
    {
      id: 1,
      title: "Senior Frontend Developer - TechCorp",
      matchScore: 87,
      createdAt: "2024-01-15",
      jobTitle: "Senior Frontend Developer",
      company: "TechCorp",
      status: "ready"
    },
    {
      id: 2,
      title: "Full Stack Engineer - StartupXYZ",
      matchScore: 92,
      createdAt: "2024-01-10",
      jobTitle: "Full Stack Engineer", 
      company: "StartupXYZ",
      status: "ready"
    }
  ]

  const dataSources = [
    {
      name: "LinkedIn",
      status: "connected",
      lastSync: "2 hours ago",
      itemsCount: 12
    },
    {
      name: "GitHub",
      status: "not_connected",
      lastSync: null,
      itemsCount: 0
    }
  ]

  const handleGenerateCV = async () => {
    if (!jobDescription.trim()) return
    
    setIsGenerating(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsGenerating(false)
    // In real app, redirect to CV editor
  }

  const handleSyncData = async (source: string) => {
    // Simulate sync
    console.log(`Syncing ${source}...`)
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
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-black mb-4">
            Welcome back, John
          </h1>
          <p className="text-lg text-black/80 max-w-2xl">
            Ready to create your next job-ready CV? Paste a job description below and let AI build the perfect match.
          </p>
        </div>

        {/* Primary CTA Section */}
        <Card className="mb-12 border-2 border-black bg-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-black">
              <Target className="w-5 h-5 text-orange-accent" />
              Create New CV
            </CardTitle>
            <CardDescription className="text-black/70">
              Paste a job description and get an AI-optimized CV with real-time match scoring
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="job-description" className="text-sm font-mono text-black">
                JOB DESCRIPTION
              </label>
              <Textarea
                id="job-description"
                placeholder="Paste the complete job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="min-h-[120px] border-2 border-black/40 bg-white/20 text-black placeholder:text-black/60"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-black/70">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>AI Match Score</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Ready in ~30s</span>
                </div>
              </div>
              
              <Button
                onClick={handleGenerateCV}
                disabled={!jobDescription.trim() || isGenerating}
                className="font-mono text-sm bg-orange-accent text-background hover:bg-orange-accent/90 h-12 px-6 border-0"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    GENERATING...
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    GENERATE CV
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Existing CVs Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl text-black">Your CVs</h2>
            <Badge variant="outline" className="font-mono text-xs border-black/40 text-black">
              {existingCVs.length} / 1 FREE
            </Badge>
          </div>
          
          {existingCVs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {existingCVs.map((cv) => (
                <Card key={cv.id} className="border-2 border-black bg-white/10 backdrop-blur-sm hover:border-orange-accent/60 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg text-black line-clamp-2">
                          {cv.jobTitle}
                        </CardTitle>
                        <CardDescription className="text-black/70">
                          {cv.company}
                        </CardDescription>
                      </div>
                      <Badge 
                        variant={cv.matchScore >= 80 ? "default" : "secondary"}
                        className={`font-mono text-xs ${
                          cv.matchScore >= 80 
                            ? "bg-orange-accent text-background" 
                            : "bg-black/20 text-black"
                        }`}
                      >
                        {cv.matchScore}%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-black/70">
                      <Calendar className="w-4 h-4" />
                      <span>Created {cv.createdAt}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-black/20 rounded-full h-2">
                        <div 
                          className="bg-orange-accent h-2 rounded-full transition-all duration-300"
                          style={{ width: `${cv.matchScore}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono text-black/70">
                        {cv.matchScore}%
                      </span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1 font-mono text-xs border-black hover:bg-black/10 text-white"
                        asChild
                      >
                        <Link href={`/editor/${cv.id}`}>
                          <Edit className="w-3 h-3 mr-1" />
                          EDIT
                        </Link>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="font-mono text-xs border-black hover:bg-black/10 text-white"
                      >
                        <Download className="w-3 h-3" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="font-mono text-xs border-destructive/40 text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-2 border-dashed border-black bg-white/5">
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <FileText className="w-12 h-12 text-black/60 mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">No CVs yet</h3>
                <p className="text-black/70 mb-4">
                  Create your first AI-powered CV by pasting a job description above
                </p>
                <Button
                  variant="outline"
                  className="font-mono text-sm border-black hover:bg-black/10 text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  CREATE FIRST CV
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Data Sources Section */}
        <section className="relative py-20 bg-terminal-bg">
          {/* Blinking Cursors */}
          {Array.from({ length: 8 }, (_, i) => (
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
            <h2 className="font-serif text-2xl text-white mb-6">Data Sources</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {dataSources.map((source) => (
                <Card key={source.name} className="p-6 bg-background/80 backdrop-blur-sm border-2 border-foreground/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border-2 border-foreground/40 flex items-center justify-center">
                        <span className="font-mono text-sm font-bold text-white">
                          {source.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{source.name}</h3>
                        <div className="flex items-center gap-2">
                          {source.status === "connected" ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-orange-500" />
                          )}
                          <span className="text-sm text-white/80 capitalize">
                            {source.status.replace("_", " ")}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {source.status === "connected" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleSyncData(source.name)}
                        className="font-mono text-xs border-foreground/40 hover:bg-foreground/10 text-white"
                      >
                        <RefreshCw className="w-3 h-3 mr-1" />
                        SYNC
                      </Button>
                    )}
                  </div>
                  
                  <div className="space-y-2 text-sm text-white/80">
                    <div className="flex justify-between">
                      <span>Items synced:</span>
                      <span className="font-mono">{source.itemsCount}</span>
                    </div>
                    {source.lastSync && (
                      <div className="flex justify-between">
                        <span>Last sync:</span>
                        <span className="font-mono">{source.lastSync}</span>
                      </div>
                    )}
                  </div>
                  
                  {source.status === "not_connected" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full mt-4 font-mono text-xs border-foreground/40 hover:bg-foreground/10 text-white"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      CONNECT {source.name.toUpperCase()}
                    </Button>
                  )}
                </Card>
              ))}
            </div>

            {/* Upgrade Prompt (shown when free slot is used) */}
            {existingCVs.length >= 1 && (
              <div className="mt-10">
                <Card className="p-6 bg-orange-accent/10 backdrop-blur-sm border-2 border-orange-accent/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white mb-2">Ready for more?</h3>
                      <p className="text-white/80">
                        You've used your free CV slot. Upgrade to create unlimited CVs and manage multiple versions.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="font-mono text-sm border-orange-accent/60 text-orange-accent hover:bg-orange-accent/20"
                      asChild
                    >
                      <Link href="/pricing">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        UPGRADE NOW
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </section>
        </main>
      </div>
    </div>
  )
}
