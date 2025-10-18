"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ConsistentHeader } from "@/components/consistent-header"
import { TerminalCursors } from "@/components/terminal-cursors"
import { ArrowLeft, Save, Plus, Briefcase, GraduationCap, Code, Star, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CreateComponentPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    type: "experience" as 'experience' | 'project' | 'education' | 'skill',
    organization: null as string | null,
    description: "",
    start_date: null as string | null,
    end_date: null as string | null,
    highlights: [] as string[]
  })
  const [newHighlight, setNewHighlight] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState("")

  const componentTypes = [
    { id: "experience", label: "Work Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skill", label: "Skill", icon: Star },
    { id: "project", label: "Project", icon: Code }
  ]

  const handleSave = async () => {
    if (!formData.title.trim() || !formData.type || !formData.description.trim()) {
      setError("Please fill in required fields")
      return
    }
    
    setIsSaving(true)
    setError("")
    
    try {
      const response = await fetch('/api/components', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error('Failed')
      router.push('/components')
    } catch (err) {
      setError(String(err))
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="min-h-screen relative">
      <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover z-0">
        <source src="/galaxy.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10">
        <ConsistentHeader />
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Button variant="outline" size="sm" className="font-mono text-xs mb-4" asChild>
              <Link href="/components"><ArrowLeft className="w-3 h-3 mr-1" />BACK</Link>
            </Button>
            <h1 className="font-serif text-4xl md:text-5xl text-black">Create Component</h1>
          </div>

          <Card className="border-2 border-black bg-white/10 backdrop-blur-sm max-w-2xl">
            <CardHeader>
              <CardTitle className="text-black">Component Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-mono text-black">TITLE *</label>
                <Input value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="border-2 border-black/40 bg-white/20 text-black" />
              </div>
              <div>
                <label className="text-sm font-mono text-black">TYPE *</label>
                <Select value={formData.type} onValueChange={(v) => setFormData({...formData, type: v as any})}>
                  <SelectTrigger className="border-2 border-black/40 bg-white/20 text-black">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 border-2 border-black/20">
                    {componentTypes.map(t => <SelectItem key={t.id} value={t.id} className="text-black">{t.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-mono text-black">DESCRIPTION *</label>
                <Textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="min-h-[100px] border-2 border-black/40 bg-white/20 text-black" />
              </div>
              {error && <div className="p-2 bg-red-500/20 border border-red-500 text-red-600 text-sm rounded">{error}</div>}
              <Button onClick={handleSave} disabled={isSaving} className="w-full bg-orange-accent text-background hover:bg-orange-accent/90">
                {isSaving ? "SAVING..." : "SAVE COMPONENT"}
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
