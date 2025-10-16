"use client"
import { LinkedInSignIn } from '@/components/linkedin-signin'
import React from 'react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
  // Email/password login/register logic
  // Only runs on client
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const form = document.getElementById('email-auth-form') as HTMLFormElement | null;
    const loginBtn = document.getElementById('email-login-btn') as HTMLButtonElement | null;
    const registerBtn = document.getElementById('email-register-btn') as HTMLButtonElement | null;
    const messageDiv = document.getElementById('email-auth-message') as HTMLDivElement | null;
    if (!form || !loginBtn || !registerBtn || !messageDiv) return;
    let supabase: any;
    import('@/lib/supabase/client').then(mod => {
      supabase = mod.createClient();
    });
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      messageDiv.textContent = '';
      loginBtn.disabled = true;
      const formData = new FormData(form);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
      try {
        if (!supabase) return;
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          messageDiv.textContent = error.message;
        } else {
          messageDiv.textContent = 'Login successful! Redirecting...';
          setTimeout(() => window.location.href = '/dashboard', 1200);
        }
      } catch (err) {
        messageDiv.textContent = 'Login failed.';
      } finally {
        loginBtn.disabled = false;
      }
    });
    registerBtn.addEventListener('click', async () => {
      messageDiv.textContent = '';
      registerBtn.disabled = true;
      const formData = new FormData(form);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
      try {
        if (!supabase) return;
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) {
          messageDiv.textContent = error.message;
        } else {
          messageDiv.textContent = 'Registration successful! Check your email to confirm.';
        }
      } catch (err) {
        messageDiv.textContent = 'Registration failed.';
      } finally {
        registerBtn.disabled = false;
      }
    });
  }, []);
  // Load email/password auth script
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.src = '/email-auth.js';
    script.async = true;
    document.body.appendChild(script);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="max-w-md w-full space-y-6 p-8 text-center bg-white/5 border-white/20 backdrop-blur-sm">
        <h1 className="text-3xl font-bold mb-2 text-white">Sign In</h1>
        <p className="text-white/70 mb-4">Sign in with LinkedIn to continue</p>
        <LinkedInSignIn />
        <Separator className="my-6" />
        {/* Email/password login/register form */}
        <form className="space-y-3 text-left" id="email-auth-form">
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
          <form className="space-y-3 text-left" id="email-auth-form" onSubmit={handleLogin}>
            required
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-orange-accent text-background font-mono py-2 px-4 rounded hover:bg-orange-accent/90"
              id="email-login-btn"
            >
              Login
            </button>
            <button
              type="button"
              className="flex-1 border border-orange-accent text-orange-accent font-mono py-2 px-4 rounded hover:bg-orange-accent/10"
              id="email-register-btn"
            >
              Register
            </button>
          </div>
        </form>
        <div id="email-auth-message" className="text-sm text-red-500"></div>
        <div className="space-y-2 pt-4">
          <p className="text-sm text-muted-foreground">By signing in, you agree to our <Link href="/terms" className="underline">Terms</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.</p>
        </div>
      </Card>
    </div>
  )
}
