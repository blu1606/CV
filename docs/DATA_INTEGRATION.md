# 🔄 Data Integration Strategy

## Overview
This project implements a **hybrid data approach** that allows seamless switching between **real Supabase data** and **mock data** for development/debugging.

## Architecture

```
┌─────────────────────┐
│   Client Component  │ (e.g., Dashboard)
└──────────┬──────────┘
           │ useComponents()
           │ useCVs()
           ↓
┌─────────────────────┐
│    API Routes       │ /api/components
│                     │ /api/cvs
└──────────┬──────────┘ /api/stats
           │
           ↓
┌─────────────────────┐
│   Data Service      │ lib/services/data-service.ts
│   Layer             │
└──────────┬──────────┘
           │
     ┌─────┴─────┐
     ↓           ↓
┌─────────┐  ┌─────────┐
│ Supabase│  │  Mock   │
│  (Real) │  │  Data   │
└─────────┘  └─────────┘
```

## Configuration

### Environment Variable
Set `NEXT_PUBLIC_USE_MOCK_DATA` in `.env.local`:

```env
# Use mock data for development (true/false)
NEXT_PUBLIC_USE_MOCK_DATA=false  # Default: real Supabase data
```

### Switching Data Sources

**For Development (Mock Data):**
```env
NEXT_PUBLIC_USE_MOCK_DATA=true
```
- ✅ No authentication required
- ✅ Instant data loading
- ✅ No database setup needed
- ✅ Safe for UI testing

**For Production (Real Data):**
```env
NEXT_PUBLIC_USE_MOCK_DATA=false
```
- ✅ Real user authentication
- ✅ Persistent data storage
- ✅ LinkedIn sync integration
- ✅ Full database features

## File Structure

```
lib/
├── services/
│   └── data-service.ts          # Main data layer
├── supabase/
│   ├── client.ts                # Browser client
│   └── server.ts                # Server client
app/
├── api/
│   ├── components/route.ts      # GET /api/components
│   ├── cvs/route.ts             # GET /api/cvs
│   └── stats/route.ts           # GET /api/stats
└── dashboard/
    ├── page.tsx                 # Server component (shell)
    └── dashboard-content.tsx    # Client component (data)
hooks/
└── use-data.ts                  # Client-side data hooks
supabase/
└── seed/
    └── 001_dev_data.sql         # Seed data script
```

## Usage Examples

### Server Components
```tsx
import { getComponents, getCVs } from '@/lib/services/data-service'

export default async function MyPage() {
  const components = await getComponents()
  const cvs = await getCVs()
  
  return <div>{/* render data */}</div>
}
```

### Client Components
```tsx
'use client'
import { useComponents, useCVs } from '@/hooks/use-data'

export function MyClientComponent() {
  const { components, loading, error } = useComponents()
  const { cvs } = useCVs()
  
  if (loading) return <Skeleton />
  return <div>{/* render data */}</div>
}
```

## Data Service API

### `getComponents()`
Fetches all components for the current user.

```typescript
const components = await getComponents()
// Returns: ComponentData[]
```

### `getComponentsByType(type)`
Filters components by type.

```typescript
const experience = await getComponentsByType('experience')
const skills = await getComponentsByType('skill')
// Returns: ComponentData[]
```

### `getCVs()`
Fetches all CVs for the current user.

```typescript
const cvs = await getCVs()
// Returns: CVData[]
```

### `getUserProfile()`
Gets user profile information.

```typescript
const profile = await getUserProfile()
// Returns: { id, full_name, avatar_url, profession }
```

### `getDashboardStats()`
Calculates statistics for dashboard.

```typescript
const stats = await getDashboardStats()
// Returns: {
//   totalComponents,
//   totalCVs,
//   experienceCount,
//   skillCount,
//   projectCount,
//   educationCount
// }
```

## Client Hooks API

### `useComponents()`
```typescript
const { components, loading, error, refetch } = useComponents()
```

### `useCVs()`
```typescript
const { cvs, loading, error, refetch } = useCVs()
```

### `useDashboardStats()`
```typescript
const { stats, loading } = useDashboardStats()
```

## Seeding Database

### Step 1: Get Your User ID
```sql
SELECT id, email FROM auth.users;
```

### Step 2: Update Seed Script
Replace `'YOUR_USER_ID_HERE'` in `supabase/seed/001_dev_data.sql` with your actual user ID.

### Step 3: Run Seed Script
Go to Supabase Dashboard → SQL Editor → Paste the script → Run.

### Step 4: Verify Data
```sql
SELECT COUNT(*) as total, type 
FROM components 
WHERE user_id = 'your-user-id' 
GROUP BY type;
```

## Development Workflow

### Option 1: Start with Mock Data
1. Set `NEXT_PUBLIC_USE_MOCK_DATA=true`
2. Build UI and features
3. Test without authentication
4. Switch to `false` when ready

### Option 2: Use Seed Data
1. Run seed script in Supabase
2. Keep `NEXT_PUBLIC_USE_MOCK_DATA=false`
3. Sign in with LinkedIn
4. See real data from database

### Option 3: Hybrid Approach
1. Use mock data for UI development
2. Use seed data for integration testing
3. Switch between them via environment variable

## Logging

The data service includes console logs for debugging:

```
📦 Using MOCK component data
✅ Fetched 13 real components
⚠️ No user, returning mock data
❌ Error fetching components: [error details]
```

## Benefits

✅ **Flexible Development**
- Work offline without database
- Test UI with consistent data
- Easy debugging with mock data

✅ **Seamless Integration**
- Same API for mock and real data
- No code changes when switching
- Automatic fallback to mock on error

✅ **Production Ready**
- Real authentication flow
- Persistent storage in Supabase
- LinkedIn sync integration

✅ **Type Safety**
- TypeScript interfaces
- Consistent data shapes
- IDE autocomplete

## Migration Path

### From Mock Data to Production

1. **Test with seed data:**
   ```bash
   # Set environment variable
   NEXT_PUBLIC_USE_MOCK_DATA=false
   ```

2. **Run seed script** (see instructions above)

3. **Test authentication:**
   - Sign in with LinkedIn
   - Verify data displays correctly
   - Check API routes work

4. **Deploy to production:**
   - Set env variables in Vercel
   - Test live authentication
   - Monitor logs for errors

### From Seed Data to Real LinkedIn Sync

1. Implement LinkedIn sync service (TODO)
2. Parse LinkedIn API responses
3. Save to components table
4. Update UI to show sync status

## Troubleshooting

### Mock data always showing
- Check `.env.local` has `NEXT_PUBLIC_USE_MOCK_DATA=false`
- Restart dev server: `pnpm dev`
- Clear browser cache

### No data showing after sign in
- Check user is authenticated: `/api/test-linkedin`
- Run seed script in Supabase
- Check console for error logs

### API routes returning 500
- Check Supabase connection
- Verify environment variables
- Check server logs

## Next Steps

- [ ] Implement LinkedIn profile sync
- [ ] Add component CRUD operations
- [ ] Build CV generation logic
- [ ] Add real-time updates
- [ ] Implement pagination
- [ ] Add data caching layer

## Resources

- [Data Service Code](./lib/services/data-service.ts)
- [API Routes](./app/api)
- [Client Hooks](./hooks/use-data.ts)
- [Seed Script](./supabase/seed/001_dev_data.sql)
