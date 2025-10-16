import { AppHeader } from "@/components/app-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, FileText, Calendar, BarChart3, Linkedin, Github, RefreshCw, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import { DashboardContent } from "./dashboard-content"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Scan lines background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }} />
      </div>

      {/* Scattered circles decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/20 rounded-full"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <AppHeader />

        <main className="container mx-auto px-4 py-8 space-y-8">
          {/* Welcome Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white">Welcome back</h1>
            <p className="text-white/70">Create a new CV or manage your existing ones</p>
          </div>

          {/* Create New CV Section */}
          <Card className="p-6 md:p-8 space-y-6 border-white/20 bg-white/5 backdrop-blur-sm">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
                <Plus className="w-6 h-6 text-white" />
                Create New CV
              </h2>
              <p className="text-white/70">
                Paste a job description below and we'll generate a tailored CV with AI-powered matching
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="job-description" className="text-sm font-medium text-white">
                  Job Description
                </label>
                <Textarea
                  id="job-description"
                  placeholder="Paste the job description here... (e.g., We're looking for a Senior Frontend Engineer with 5+ years of experience in React...)"
                  className="min-h-[200px] resize-none bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="gap-2 flex-1 sm:flex-initial bg-white text-black hover:bg-white/90">
                  <BarChart3 className="w-4 h-4" />
                  Generate CV
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-transparent border-white/40 text-white hover:bg-white/10">
                  <FileText className="w-4 h-4" />
                  Start from Scratch
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-white/70">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>1 free CV slot available</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Dashboard Content (CVs, Stats, Data Sources) */}
          <DashboardContent />
        </main>
      </div>
    </div>
  )
}
