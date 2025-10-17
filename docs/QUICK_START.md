# ⚡ Quick Start - LinkedIn OAuth in 5 Minutes

## 🎯 Goal
Get LinkedIn OAuth working on your local machine in 5 minutes.

---

## ✅ Prerequisites (Already Done)

- [x] Next.js 15 project
- [x] Supabase packages installed
- [x] All auth code implemented

---

## 🚀 Step-by-Step Setup

### Step 1: Get Supabase Credentials (2 min)

1. **Go to**: https://supabase.com/dashboard
2. **Click** your project (or create new one)
3. **Navigate**: Settings → API
4. **Copy** these values:
   - Project URL
   - `anon` `public` key
   - `service_role` `secret` key

### Step 2: Create Environment File (1 min)

Create/update `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**⚠️ Important**: Replace `xxxxx` with your actual values!

### Step 3: Configure LinkedIn OAuth in Supabase (2 min)

1. **In Supabase Dashboard**:
   - Go to: **Authentication** → **Providers**
   - Find: **LinkedIn (OIDC)**
   - Click: **Enable**

2. **Scroll down to see these fields**:
   - Redirect URL (copy this): `https://xxxxx.supabase.co/auth/v1/callback`
   - Client ID (leave empty for now)
   - Client Secret (leave empty for now)

3. **Go to LinkedIn Developer Console**:
   - Visit: https://www.linkedin.com/developers/apps
   - Create new app (or select existing)
   - Go to: **Auth** tab
   - Add **Redirect URLs**:
     ```
     https://xxxxx.supabase.co/auth/v1/callback
     http://localhost:3000/auth/callback
     ```
   - Copy: **Client ID** and **Client Secret**

4. **Back to Supabase**:
   - Paste LinkedIn **Client ID**
   - Paste LinkedIn **Client Secret**
   - Click **Save**

### Step 4: Update Landing Page (30 sec)

Open `app/page.tsx`, add import:

```tsx
import { LinkedInSignIn } from '@/components/linkedin-signin'
```

Replace the button (around line 75):

```tsx
// OLD
<Button>
  {"> GET STARTED WITH LINKEDIN"}
</Button>

// NEW
<LinkedInSignIn />
```

### Step 5: Test! (30 sec)

```bash
npm run dev
```

1. Open: http://localhost:3000
2. Click: **"SIGN IN WITH LINKEDIN"**
3. Should redirect to LinkedIn
4. Sign in and authorize
5. Should redirect back to your app!

---

## 🎉 Success!

If you see `/auth/onboarding` in the URL → **IT WORKS!**

---

## 🐛 Quick Troubleshooting

### "Provider not enabled"
→ Enable LinkedIn (OIDC) in Supabase Dashboard

### "Invalid redirect URL"
→ Add `http://localhost:3000/auth/callback` to LinkedIn app settings

### "Missing env variable"
→ Check `.env.local` has all 3 variables
→ Restart dev server: `npm run dev`

### Still not working?
→ Check browser console for errors
→ Check Supabase logs in dashboard

---

## 📋 What Happens Next?

After successful sign-in:
1. User session created ✅
2. Cookies set ✅
3. Redirected to `/auth/onboarding` ✅
4. Can access protected routes ✅

---

## 🔐 Verify Setup

Check these work:

```bash
# 1. Sign in
✓ Click button → LinkedIn → Back to app

# 2. Session persists
✓ Refresh page → Still logged in

# 3. Protected routes work
✓ Go to /dashboard → Should work
✓ Sign out → Try /dashboard → Redirected to /
```

---

## 🎯 Next Steps

1. **Run Database Migration** (see SQL file)
2. **Build Dashboard UI**
3. **Implement LinkedIn profile sync**
4. **Add components display**
5. **Integrate AI for CV generation**

---

## 📚 Full Documentation

- `LINKEDIN_AUTH_SUMMARY.md` - Complete overview
- `docs/LINKEDIN_AUTH_GUIDE.md` - Detailed guide
- `docs/EXAMPLE_USAGE.md` - Code examples
- `docs/ARCHITECTURE_DIAGRAMS.md` - Visual diagrams

---

## 💡 Pro Tips

- Use **LinkedIn Test Users** for development
- Check **Supabase Auth Logs** for debugging
- **Clear browser cookies** if issues persist
- **Verify redirect URLs** match exactly (no trailing slash)

---

## ✨ You're Ready!

Your LinkedIn OAuth is now working! 🚀

**What you can do now:**
- Users can sign in with LinkedIn
- Sessions persist across pages
- Protected routes work
- Sign out works

**Time to build the rest of your app!** 💪
