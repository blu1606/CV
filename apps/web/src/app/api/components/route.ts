import { createClient } from "@/lib/server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const supabase = await createClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type")

  let query = supabase.from("components").select("*").eq("user_id", user.id).order("created_at", { ascending: false })

  if (type) {
    query = query.eq("type", type)
  }

  const { data: components, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ components })
}

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

  const { data: component, error } = await supabase
    .from("components")
    .insert({
      user_id: user.id,
      type: body.type,
      title: body.title,
      organization: body.organization,
      start_date: body.start_date,
      end_date: body.end_date,
      description: body.description,
      highlights: body.highlights || [],
      source: "manual",
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ component }, { status: 201 })
}
