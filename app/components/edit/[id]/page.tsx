"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ConsistentHeader } from "@/components/consistent-header"
import { 
  ArrowLeft, 
  Save, 
  Plus,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Star,
  X,
  Trash2
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function EditComponentPage() {
  const params = useParams()
  const componentId = params.id as string
  
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    category: "",
    content: "",
    source: "",
    tags: [] as string[],
    isActive: true
  })
  const [newTag, setNewTag] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  // Mock data - in real app this would come from API
  const mockComponent = {
    id: 1,
    title: "Senior Software Engineer at TechCorp",
    type: "experience",
    category: "work",
    content: "Led development of microservices architecture serving 1M+ users. Implemented CI/CD pipelines reducing deployment time by 60%. Mentored 3 junior developers and established code review processes.",
    source: "LinkedIn",
    lastUpdated: "2024-01-15",
    tags: ["React", "Node.js", "AWS", "Leadership"],
    isActive: true
  }

  const componentTypes = [
    { id: "experience", label: "Work Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certification", label: "Certification", icon: Award },
    { id: "project", label: "Project", icon: Code },
    { id: "skills", label: "Skills", icon: Star }
  ]

  const categories = [
    { id: "work", label: "Work Experience" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" }
  ]

  // Load component data
  useEffect(() => {
    // In real app, fetch component data by ID
    setFormData({
      title: mockComponent.title,
      type: mockComponent.type,
      category: mockComponent.category,
      content: mockComponent.content,
      source: mockComponent.source,
      tags: mockComponent.tags,
      isActive: mockComponent.isActive
    })
  }, [componentId])

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }))
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const handleSave = async () => {
    if (!formData.title.trim() || !formData.type || !formData.content.trim()) {
      return
    }
    
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
    // In real app, redirect back to components page
  }

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this component? This action cannot be undone.")) {
      return
    }
    
    setIsDeleting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsDeleting(false)
    // In real app, redirect back to components page
  }

  const selectedType = componentTypes.find(type => type.id === formData.type)

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
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Button
                variant="outline"
                size="sm"
                className="font-mono text-xs border-black/40 hover:bg-black/10 text-white"
                asChild
              >
                <Link href="/components">
                  <ArrowLeft className="w-3 h-3 mr-1" />
                  BACK
                </Link>
              </Button>
              <div className="h-6 w-px bg-black/20" />
              <h1 className="font-serif text-4xl md:text-5xl text-black">
                Edit Component
              </h1>
            </div>
            <p className="text-lg text-black/80 max-w-2xl">
              Update your professional component. Changes will be reflected in future CV generations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-black bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-black">Component Details</CardTitle>
                  <CardDescription className="text-black/70">
                    Update the details for your professional component
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Title */}
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-mono text-black">
                      TITLE *
                    </label>
                    <Input
                      id="title"
                      placeholder="e.g., Senior Software Engineer at TechCorp"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="border-2 border-black/40 bg-white/20 text-black placeholder:text-black/60"
                    />
                  </div>

                  {/* Type and Category */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="type" className="text-sm font-mono text-black">
                        TYPE *
                      </label>
                      <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                        <SelectTrigger className="border-2 border-black/40 bg-white/20 text-black">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/95 backdrop-blur-sm border-2 border-black/20">
                          {componentTypes.map((type) => {
                            const Icon = type.icon
                            return (
                              <SelectItem key={type.id} value={type.id} className="text-black">
                                <div className="flex items-center gap-2">
                                  <Icon className="w-4 h-4" />
                                  {type.label}
                                </div>
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-mono text-black">
                        CATEGORY *
                      </label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger className="border-2 border-black/40 bg-white/20 text-black">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/95 backdrop-blur-sm border-2 border-black/20">
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id} className="text-black">
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <label htmlFor="content" className="text-sm font-mono text-black">
                      CONTENT *
                    </label>
                    <Textarea
                      id="content"
                      placeholder="Describe your experience, achievements, or skills in detail..."
                      value={formData.content}
                      onChange={(e) => handleInputChange("content", e.target.value)}
                      className="min-h-[120px] border-2 border-black/40 bg-white/20 text-black placeholder:text-black/60"
                    />
                  </div>

                  {/* Tags */}
                  <div className="space-y-2">
                    <label className="text-sm font-mono text-black">
                      TAGS
                    </label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a tag..."
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleAddTag()}
                        className="border-2 border-black/40 bg-white/20 text-black placeholder:text-black/60"
                      />
                      <Button
                        type="button"
                        onClick={handleAddTag}
                        className="font-mono text-xs border-black/40 hover:bg-black/10 text-white"
                        variant="outline"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    
                    {formData.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {formData.tags.map((tag, index) => (
                          <Badge 
                            key={index}
                            variant="secondary" 
                            className="font-mono text-xs bg-black/20 text-black flex items-center gap-1"
                          >
                            {tag}
                            <button
                              onClick={() => handleRemoveTag(tag)}
                              className="ml-1 hover:text-red-600"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Source */}
                  <div className="space-y-2">
                    <label htmlFor="source" className="text-sm font-mono text-black">
                      SOURCE
                    </label>
                    <Input
                      id="source"
                      value={formData.source}
                      onChange={(e) => handleInputChange("source", e.target.value)}
                      className="border-2 border-black/40 bg-white/20 text-black"
                    />
                  </div>

                  {/* Active Status */}
                  <div className="space-y-2">
                    <label className="text-sm font-mono text-black">
                      STATUS
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="isActive"
                        checked={formData.isActive}
                        onChange={(e) => handleInputChange("isActive", e.target.checked)}
                        className="w-4 h-4 text-orange-accent border-2 border-black/40 rounded focus:ring-orange-accent"
                      />
                      <label htmlFor="isActive" className="text-sm text-black">
                        Include in CV generation
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Preview */}
            <div className="lg:col-span-1">
              <Card className="border-2 border-black bg-white/10 backdrop-blur-sm sticky top-24">
                <CardHeader>
                  <CardTitle className="text-black">Preview</CardTitle>
                  <CardDescription className="text-black/70">
                    How your component will appear
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formData.title ? (
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        {selectedType && (
                          <div className="w-8 h-8 border-2 border-orange-accent flex items-center justify-center flex-shrink-0">
                            <selectedType.icon className="w-4 h-4 text-orange-accent" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-black line-clamp-2">
                            {formData.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-black/70 mt-1">
                            <Badge variant="outline" className="font-mono text-xs border-black/40 text-black">
                              {formData.type?.toUpperCase() || "TYPE"}
                            </Badge>
                            <span>•</span>
                            <span>{formData.source}</span>
                          </div>
                        </div>
                      </div>
                      
                      {formData.content && (
                        <p className="text-sm text-black/80 line-clamp-4">
                          {formData.content}
                        </p>
                      )}
                      
                      {formData.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {formData.tags.map((tag, index) => (
                            <Badge 
                              key={index}
                              variant="secondary" 
                              className="font-mono text-xs bg-black/20 text-black"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {!formData.isActive && (
                        <div className="flex items-center gap-2 text-sm text-orange-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full" />
                          <span>Inactive - not included in CV generation</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-black/60">
                      <p className="text-sm">Fill in the form to see preview</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="mt-6 space-y-3">
                <Button
                  onClick={handleSave}
                  disabled={!formData.title.trim() || !formData.type || !formData.content.trim() || isSaving}
                  className="w-full font-mono text-sm bg-orange-accent text-background hover:bg-orange-accent/90 border-0"
                >
                  {isSaving ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-background border-t-transparent rounded-full animate-spin" />
                      SAVING...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      SAVE CHANGES
                    </>
                  )}
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full font-mono text-sm border-black/40 hover:bg-black/10 text-white"
                  asChild
                >
                  <Link href="/components">
                    CANCEL
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="w-full font-mono text-sm border-destructive/40 text-destructive hover:bg-destructive/10"
                >
                  {isDeleting ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-destructive border-t-transparent rounded-full animate-spin" />
                      DELETING...
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4 mr-2" />
                      DELETE COMPONENT
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
