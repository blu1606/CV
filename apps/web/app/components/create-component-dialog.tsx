"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createClient } from "@/lib/client"
import { Plus, X } from "lucide-react"

interface CreateComponentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  userId: string
  onComponentCreated: (component: any) => void
}

export function CreateComponentDialog({ open, onOpenChange, userId, onComponentCreated }: CreateComponentDialogProps) {
  const [type, setType] = useState<"experience" | "project" | "education" | "skill">("experience")
  const [title, setTitle] = useState("")
  const [organization, setOrganization] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [description, setDescription] = useState("")
  const [highlights, setHighlights] = useState<string[]>([])
  const [currentHighlight, setCurrentHighlight] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleAddHighlight = () => {
    if (currentHighlight.trim()) {
      setHighlights([...highlights, currentHighlight.trim()])
      setCurrentHighlight("")
    }
  }

  const handleRemoveHighlight = (index: number) => {
    setHighlights(highlights.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const supabase = createClient()

    const { data, error } = await supabase
      .from("components")
      .insert({
        user_id: userId,
        type,
        title,
        organization: organization || null,
        start_date: startDate || null,
        end_date: endDate || null,
        description: description || null,
        highlights,
      })
      .select()
      .single()

    setIsLoading(false)

    if (error) {
      console.error("Error creating component:", error)
      alert("Failed to create component")
      return
    }

    onComponentCreated(data)
    // Reset form
    setType("experience")
    setTitle("")
    setOrganization("")
    setStartDate("")
    setEndDate("")
    setDescription("")
    setHighlights([])
    setCurrentHighlight("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Component</DialogTitle>
          <DialogDescription>Add a new professional component to your library</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Select value={type} onValueChange={(value: any) => setType(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="experience">Work Experience</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="project">Project</SelectItem>
                <SelectItem value="skill">Skill</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              placeholder="e.g., Senior Software Engineer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organization</Label>
            <Input
              id="organization"
              placeholder="e.g., Tech Company Inc."
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input id="startDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input id="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your role, responsibilities, or achievements..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label>Highlights</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Add a highlight or achievement..."
                value={currentHighlight}
                onChange={(e) => setCurrentHighlight(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleAddHighlight()
                  }
                }}
              />
              <Button type="button" onClick={handleAddHighlight} variant="outline">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {highlights.length > 0 && (
              <div className="space-y-2 mt-2">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 bg-slate-50 p-2 rounded">
                    <span className="flex-1 text-sm">{highlight}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveHighlight(index)}
                      className="h-6 w-6"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading} className="bg-indigo-600 hover:bg-indigo-700">
              {isLoading ? "Creating..." : "Create Component"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
