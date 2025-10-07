import { createClient } from "@/lib/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const supabase = await createClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await request.json()
  const { job_description } = body

  if (!job_description) {
    return NextResponse.json({ error: "Job description is required" }, { status: 400 })
  }

  // Fetch user's components
  const { data: components, error: componentsError } = await supabase
    .from("components")
    .select("*")
    .eq("user_id", user.id)

  if (componentsError) {
    return NextResponse.json({ error: componentsError.message }, { status: 500 })
  }

  // TODO: Implement AI-powered CV generation
  // For now, create a basic CV with all components
  const content = [
    {
      section_title: "Experience",
      component_ids: components.filter((c) => c.type === "experience").map((c) => c.id),
    },
    {
      section_title: "Education",
      component_ids: components.filter((c) => c.type === "education").map((c) => c.id),
    },
    {
      section_title: "Projects",
      component_ids: components.filter((c) => c.type === "project").map((c) => c.id),
    },
    {
      section_title: "Skills",
      component_ids: components.filter((c) => c.type === "skill").map((c) => c.id),
    },
  ]

  const { data: cv, error: cvError } = await supabase
    .from("cvs")
    .insert({
      user_id: user.id,
      title: `CV for ${job_description.substring(0, 50)}...`,
      job_description,
      match_score: 75, // TODO: Calculate actual match score with AI
      content,
    })
    .select()
    .single()

  if (cvError) {
    return NextResponse.json({ error: cvError.message }, { status: 500 })
  }

  return NextResponse.json({ cv }, { status: 201 })
}
