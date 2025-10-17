/**
 * LinkedIn API Client
 * Handles all interactions with LinkedIn REST API
 */

export interface LinkedInIdentity {
  sub: string // LinkedIn user ID
  name: string
  given_name: string
  family_name: string
  picture: string
  locale: {
    country: string
    language: string
  }
  email: string
  email_verified: boolean
}

export interface LinkedInApiError {
  status: number
  statusText: string
  message: string
}

/**
 * Fetches user identity from LinkedIn /identityMe endpoint
 */
export async function getLinkedInIdentity(
  accessToken: string
): Promise<LinkedInIdentity | null> {
  try {
    console.log('🔍 Calling LinkedIn /identityMe API...')
    
    const response = await fetch('https://api.linkedin.com/rest/identityMe', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'LinkedIn-Version': '202507',
        'X-RestLi-Protocol-Version': '2.0.0',
      },
      cache: 'no-store'
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('❌ LinkedIn API Error:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      })
      return null
    }

    const data: LinkedInIdentity = await response.json()
    
    console.log('✅ LinkedIn Identity Data:', {
      sub: data.sub,
      name: data.name,
      email: data.email,
      picture: data.picture,
      locale: data.locale
    })
    
    return data

  } catch (error) {
    console.error('❌ LinkedIn API Fetch Error:', error)
    return null
  }
}

/**
 * Get profile data (for future use)
 */
export async function getLinkedInProfile(accessToken: string) {
  // Will implement later for full profile sync
  // GET /me endpoint
  console.log('🚧 Full profile sync - Not implemented yet')
  return null
}

/**
 * Get work experience (for future use)
 */
export async function getLinkedInExperience(accessToken: string) {
  // Will implement later
  // GET /me/positions endpoint
  console.log('🚧 Experience sync - Not implemented yet')
  return null
}
