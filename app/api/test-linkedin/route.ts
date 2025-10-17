import { createClient } from '@/lib/supabase/server'
import { getLinkedInIdentity } from '@/lib/linkedin/api'
import { NextResponse } from 'next/server'

/**
 * Test LinkedIn Identity API
 * GET /api/test-linkedin
 * 
 * This endpoint:
 * 1. Gets access token from accounts table
 * 2. Calls LinkedIn /identityMe API
 * 3. Returns the response
 */
export async function GET() {
  try {
    const supabase = await createClient()
    
    // Get current user
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    
    if (userError || !user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    // Get LinkedIn account and access token
    const { data: account, error: accountError } = await supabase
      .from('accounts')
      .select('*')
      .eq('user_id', user.id)
      .eq('provider', 'linkedin')
      .single() as { data: any; error: any }

    if (accountError || !account) {
      return NextResponse.json(
        { 
          error: 'No LinkedIn account connected',
          hint: 'Please sign in with LinkedIn first'
        },
        { status: 404 }
      )
    }

    if (!account.access_token) {
      return NextResponse.json(
        { 
          error: 'No access token found',
          hint: 'Token may have expired or not been saved'
        },
        { status: 400 }
      )
    }

    // Call LinkedIn Identity API
    console.log('🔍 Testing LinkedIn Identity API...')
    const linkedInData = await getLinkedInIdentity(account.access_token)

    if (!linkedInData) {
      return NextResponse.json(
        { 
          error: 'Failed to fetch LinkedIn data',
          hint: 'Token may be invalid or expired'
        },
        { status: 500 }
      )
    }

    // Return success with data
    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email
      },
      account: {
        provider: account.provider,
        provider_account_id: account.provider_account_id,
        last_synced_at: account.last_synced_at,
        token_expires_at: account.token_expires_at,
        has_access_token: !!account.access_token,
        has_refresh_token: !!account.refresh_token
      },
      linkedInData: {
        sub: linkedInData.sub,
        name: linkedInData.name,
        given_name: linkedInData.given_name,
        family_name: linkedInData.family_name,
        email: linkedInData.email,
        email_verified: linkedInData.email_verified,
        picture: linkedInData.picture,
        locale: linkedInData.locale
      }
    })

  } catch (error) {
    console.error('❌ Test LinkedIn API Error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
