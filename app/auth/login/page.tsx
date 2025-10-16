"use client"
import { LinkedInSignIn } from '@/components/linkedin-signin'
import React from 'react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function LoginPage() {
  const [loading, setLoading] = React.useState(false)
  const [registerLoading, setRegisterLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setMessage('')
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const { createClient } = await import('@/lib/supabase/client')
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Login successful! Redirecting...')
      setTimeout(() => window.location.href = '/dashboard', 1200)
    }
    setLoading(false)
  }

  async function handleRegister(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setMessage('')
    setRegisterLoading(true)
    const form = document.getElementById('email-auth-form') as HTMLFormElement | null
    if (!form) return
    const formData = new FormData(form)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const { createClient } = await import('@/lib/supabase/client')
    const supabase = createClient()
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Registration successful! Check your email to confirm.')
    }
    setRegisterLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="max-w-md w-full space-y-6 p-8 text-center bg-white/5 border-white/20 backdrop-blur-sm">
        <h1 className="text-3xl font-bold mb-2 text-white">Sign In</h1>
        <p className="text-white/70 mb-4">Sign in with LinkedIn to continue</p>
        <LinkedInSignIn />
        <Separator className="my-6" />
        {/* Email/password login/register form */}
        <form className="space-y-3 text-left" id="email-auth-form" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded bg-white/10 text-white placeholder:text-white/50"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded bg-white/10 text-white placeholder:text-white/50"
            required
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-orange-accent text-background font-mono py-2 px-4 rounded hover:bg-orange-accent/90 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <button
              type="button"
              className="flex-1 border border-orange-accent text-orange-accent font-mono py-2 px-4 rounded hover:bg-orange-accent/10 disabled:opacity-50"
              onClick={handleRegister}
              disabled={registerLoading}
            >
              {registerLoading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
        {message && <div className="text-sm text-red-500">{message}</div>}
        <div className="space-y-2 pt-4">
          <p className="text-sm text-muted-foreground">By signing in, you agree to our <Link href="/terms" className="underline">Terms</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.</p>
        </div>
      </Card>
    </div>
  )
}
