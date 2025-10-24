/**
 * LinkedIn API Response Types
 */

export interface LinkedInIdentityResponse {
  sub: string // User ID
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

export interface LinkedInProfileResponse {
  // Full profile structure (to be implemented)
  id: string
  firstName: string
  lastName: string
  headline?: string
  profilePicture?: {
    displayImage: string
  }
}

export interface LinkedInPosition {
  // Work experience structure (to be implemented)
  companyName: string
  title: string
  description?: string
  startDate: {
    year: number
    month: number
  }
  endDate?: {
    year: number
    month: number
  }
}
