import { Suspense } from "react"
import { createClient } from "@/lib/server"
import { redirect } from "next/navigation"
import { ComponentLibraryClient } from "./component-library-client"

export default async function ComponentsPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  // Fetch user's components
  const { data: components, error } = await supabase
    .from("components")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching components:", error)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-slate-50">
      <Suspense fallback={<div>Loading...</div>}>
        <ComponentLibraryClient initialComponents={components || []} userId={user.id} />
      </Suspense>
    </div>
  )
}
