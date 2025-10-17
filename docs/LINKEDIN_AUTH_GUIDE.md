# LinkedIn OAuth Integration Guide

## 📋 Setup Complete!

Các file đã được tạo:
- ✅ `lib/supabase/client.ts` - Browser client
- ✅ `lib/supabase/server.ts` - Server client  
- ✅ `lib/supabase/auth.ts` - Auth helpers
- ✅ `app/auth/callback/route.ts` - OAuth callback handler
- ✅ `app/auth/actions.ts` - Server actions (signOut)
- ✅ `app/auth/auth-code-error/page.tsx` - Error page
- ✅ `components/linkedin-signin.tsx` - Sign-in button
- ✅ `components/signout-button.tsx` - Sign-out button
- ✅ `middleware.ts` - Session refresh & route protection

## 🔧 Cấu hình Environment Variables

Cập nhật file `.env.local` với thông tin từ Supabase Dashboard:

```env
# Supabase (bắt buộc)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# LinkedIn OAuth (tùy chọn - đã config trong Supabase)
LINKEDIN_CLIENT_ID=your-linkedin-client-id
LINKEDIN_CLIENT_SECRET=your-linkedin-client-secret
```

## 🎯 Sử dụng Components

### 1. Trong Landing Page (`app/page.tsx`)

```tsx
import { LinkedInSignIn } from '@/components/linkedin-signin'

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to magiCV</h1>
      <LinkedInSignIn />
    </div>
  )
}
```

### 2. Trong App Header (với Sign Out)

```tsx
import { SignOutButton } from '@/components/signout-button'
import { getCurrentUser } from '@/lib/supabase/auth'

export default async function AppHeader() {
  const user = await getCurrentUser()
  
  return (
    <header>
      <nav>
        {user ? (
          <>
            <span>Welcome, {user.email}</span>
            <SignOutButton />
          </>
        ) : (
          <LinkedInSignIn />
        )}
      </nav>
    </header>
  )
}
```

### 3. Protect Pages (Server Component)

```tsx
import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/supabase/auth'

export default async function DashboardPage() {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/')
  }
  
  return (
    <div>
      <h1>Dashboard for {user.email}</h1>
    </div>
  )
}
```

## 🔐 Auth Flow

```
1. User clicks "Sign In with LinkedIn"
   ↓
2. Redirect to LinkedIn OAuth
   ↓
3. User grants permission
   ↓
4. Redirect to /auth/callback?code=xxx
   ↓
5. Exchange code for session
   ↓
6. Redirect to /auth/onboarding
   ↓
7. Middleware auto-refreshes session
```

## 🛡️ Middleware Protection

Middleware tự động:
- ✅ Refresh user session
- ✅ Protect routes: `/dashboard`, `/editor`, `/components`, `/settings`
- ✅ Redirect authenticated users from `/` to `/dashboard`
- ✅ Redirect unauthenticated users to `/`

## 📱 API Usage trong Client Components

```tsx
'use client'

import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

export function UserProfile() {
  const [user, setUser] = useState(null)
  const supabase = createClient()
  
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
    
    // Listen to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null)
      }
    )
    
    return () => subscription.unsubscribe()
  }, [])
  
  return <div>{user?.email}</div>
}
```

## 🗄️ Database Queries (Server)

```tsx
import { createClient } from '@/lib/supabase/server'

export async function getUserProfile(userId: string) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  
  if (error) throw error
  return data
}
```

## 📋 Next Steps

1. **Cập nhật `.env.local`** với Supabase credentials
2. **Config LinkedIn OAuth trong Supabase Dashboard:**
   - Authentication → Providers → LinkedIn
   - Enable LinkedIn (OIDC)
   - Add redirect URLs
3. **Update Landing Page** thêm `<LinkedInSignIn />`
4. **Test flow:**
   - Sign in
   - Check protected routes
   - Sign out
5. **Deploy và update production URLs**

## 🐛 Troubleshooting

### Error: "Invalid redirect URL"
- Check Supabase → Authentication → URL Configuration
- Add `http://localhost:3000/auth/callback` (dev)
- Add `https://yourdomain.com/auth/callback` (prod)

### Error: "Provider not enabled"
- Enable LinkedIn (OIDC) trong Supabase Dashboard
- Add LinkedIn Client ID & Secret

### User not persisting
- Check middleware is running
- Verify cookies are being set
- Check browser console for errors

## 📚 Resources

- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [LinkedIn OAuth Guide](https://learn.microsoft.com/en-us/linkedin/shared/authentication/authentication)
- [Next.js 15 App Router](https://nextjs.org/docs/app)
