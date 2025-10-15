"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GripVertical, Plus, Briefcase, GraduationCap, Award, Code } from "lucide-react"

interface CVComponentItemProps {
  type: "experience" | "education" | "skill" | "project"
  title: string
  subtitle?: string
  description?: string
  tags?: string[]
  matchScore?: number
  onAdd?: () => void
}

const iconMap = {
  experience: Briefcase,
  education: GraduationCap,
  skill: Code,
  project: Award,
}

export function CVComponentItem({ type, title, subtitle, description, tags, matchScore, onAdd }: CVComponentItemProps) {
  const Icon = iconMap[type]

  return (
    <Card className="p-4 space-y-3 hover:border-primary/50 transition-colors group cursor-move">
      <div className="flex items-start gap-3">
        <GripVertical className="w-4 h-4 text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0 space-y-1">
          <h4 className="font-semibold text-sm line-clamp-1">{title}</h4>
          {subtitle && <p className="text-xs text-muted-foreground line-clamp-1">{subtitle}</p>}
          {description && <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>}
        </div>
        <Button size="sm" variant="ghost" className="flex-shrink-0 h-8 w-8 p-0" onClick={onAdd}>
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      {(tags || matchScore !== undefined) && (
        <div className="flex items-center gap-2 flex-wrap">
          {matchScore !== undefined && (
            <Badge
              variant="secondary"
              className={`text-xs ${
                matchScore >= 80
                  ? "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                  : matchScore >= 60
                    ? "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20"
                    : "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20"
              }`}
            >
              {matchScore}% match
            </Badge>
          )}
          {tags?.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </Card>
  )
}
