import { createClient } from "@/lib/server"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const supabase = await createClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { data: component, error } = await supabase
    .from("components")
    .select("*")
    .eq("id", params.id)
    .eq("user_id", user.id)
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 })
  }

  return NextResponse.json({ component })
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
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
    .update({
      type: body.type,
      title: body.title,
      organization: body.organization,
      start_date: body.start_date,
      end_date: body.end_date,
      description: body.description,
      highlights: body.highlights,
    })
    .eq("id", params.id)
    .eq("user_id", user.id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ component })
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const supabase = await createClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { error } = await supabase.from("components").delete().eq("id", params.id).eq("user_id", user.id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
