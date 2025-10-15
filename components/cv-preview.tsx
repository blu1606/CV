"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GripVertical, X, Mail, Phone, MapPin, Linkedin } from "lucide-react"

export function CVPreview() {
  return (
    <div className="space-y-4 relative">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover rounded-lg">
        <source src="/galaxy.mp4" type="video/mp4" />
      </video>
      {/* CV Document Preview */}
      <Card className="relative z-10 p-8 space-y-6 bg-background/70 backdrop-blur-sm text-foreground shadow-lg">
        {/* Header */}
        <div className="space-y-3 border-b border-border pb-6">
          <h1 className="text-3xl font-bold text-foreground">John Doe</h1>
          <p className="text-lg text-muted-foreground">Senior Frontend Engineer</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              <span>john@example.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="w-3 h-3" />
              <span>linkedin.com/in/johndoe</span>
            </div>
          </div>
        </div>

        {/* Summary - Draggable Component */}
        <div className="group relative">
          <div className="absolute -left-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <GripVertical className="w-4 h-4 text-muted-foreground cursor-move" />
          </div>
          <div className="absolute -right-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-destructive hover:text-destructive">
              <X className="w-3 h-3" />
            </Button>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-foreground">Professional Summary</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Experienced frontend engineer with 7+ years building scalable web applications. Specialized in React,
              Next.js, and TypeScript with a focus on performance optimization and accessibility. Proven track record of
              leading teams and delivering high-impact features.
            </p>
          </div>
        </div>

        {/* Experience - Draggable Component */}
        <div className="group relative">
          <div className="absolute -left-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <GripVertical className="w-4 h-4 text-muted-foreground cursor-move" />
          </div>
          <div className="absolute -right-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-destructive hover:text-destructive">
              <X className="w-3 h-3" />
            </Button>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Experience</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">Senior Frontend Engineer</h3>
                    <p className="text-sm text-muted-foreground">Vercel • San Francisco, CA</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2022 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Led development of Next.js App Router features, improving performance by 40%</li>
                  <li>Architected component library used across 50+ internal applications</li>
                  <li>Mentored team of 5 junior engineers on React best practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills - Draggable Component */}
        <div className="group relative">
          <div className="absolute -left-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <GripVertical className="w-4 h-4 text-muted-foreground cursor-move" />
          </div>
          <div className="absolute -right-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-destructive hover:text-destructive">
              <X className="w-3 h-3" />
            </Button>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS", "Jest", "Cypress"].map(
                (skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Education - Draggable Component */}
        <div className="group relative">
          <div className="absolute -left-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <GripVertical className="w-4 h-4 text-muted-foreground cursor-move" />
          </div>
          <div className="absolute -right-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-destructive hover:text-destructive">
              <X className="w-3 h-3" />
            </Button>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Education</h2>
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">Bachelor of Science in Computer Science</h3>
                  <p className="text-sm text-muted-foreground">Stanford University</p>
                </div>
                <span className="text-sm text-muted-foreground">2015 - 2019</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
