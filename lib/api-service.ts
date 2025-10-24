// Backend API Integration Service
export interface User {
  id: string
  name: string
  email: string
  linkedinId?: string
  plan: 'free' | 'pro' | 'enterprise'
  createdAt: string
  updatedAt: string
}

export interface CV {
  id: string
  userId: string
  title: string
  jobTitle: string
  matchScore: number
  status: 'draft' | 'completed' | 'archived'
  template: 'modern' | 'classic' | 'minimal'
  data: any
  createdAt: string
  updatedAt: string
}

export interface Component {
  id: string
  userId: string
  name: string
  type: 'experience' | 'education' | 'skill' | 'project'
  content: string
  usageCount: number
  createdAt: string
  updatedAt: string
}

export class APIService {
  private static instance: APIService
  private baseUrl: string

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
  }

  static getInstance(): APIService {
    if (!APIService.instance) {
      APIService.instance = new APIService()
    }
    return APIService.instance
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    const token = localStorage.getItem('auth_token')

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  // Authentication
  async loginWithLinkedIn(code: string, state: string): Promise<{ user: User; token: string }> {
    return this.request('/auth/linkedin', {
      method: 'POST',
      body: JSON.stringify({ code, state }),
    })
  }

  async refreshToken(): Promise<{ token: string }> {
    return this.request('/auth/refresh', {
      method: 'POST',
    })
  }

  async logout(): Promise<void> {
    await this.request('/auth/logout', {
      method: 'POST',
    })
    localStorage.removeItem('auth_token')
  }

  // User management
  async getCurrentUser(): Promise<User> {
    return this.request('/user/me')
  }

  async updateUser(userData: Partial<User>): Promise<User> {
    return this.request('/user/me', {
      method: 'PATCH',
      body: JSON.stringify(userData),
    })
  }

  async deleteUser(): Promise<void> {
    await this.request('/user/me', {
      method: 'DELETE',
    })
  }

  // CV management
  async getCVs(): Promise<CV[]> {
    return this.request('/cvs')
  }

  async getCV(id: string): Promise<CV> {
    return this.request(`/cvs/${id}`)
  }

  async createCV(cvData: Partial<CV>): Promise<CV> {
    return this.request('/cvs', {
      method: 'POST',
      body: JSON.stringify(cvData),
    })
  }

  async updateCV(id: string, cvData: Partial<CV>): Promise<CV> {
    return this.request(`/cvs/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(cvData),
    })
  }

  async deleteCV(id: string): Promise<void> {
    await this.request(`/cvs/${id}`, {
      method: 'DELETE',
    })
  }

  async duplicateCV(id: string): Promise<CV> {
    return this.request(`/cvs/${id}/duplicate`, {
      method: 'POST',
    })
  }

  // Component management
  async getComponents(): Promise<Component[]> {
    return this.request('/components')
  }

  async getComponent(id: string): Promise<Component> {
    return this.request(`/components/${id}`)
  }

  async createComponent(componentData: Partial<Component>): Promise<Component> {
    return this.request('/components', {
      method: 'POST',
      body: JSON.stringify(componentData),
    })
  }

  async updateComponent(id: string, componentData: Partial<Component>): Promise<Component> {
    return this.request(`/components/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(componentData),
    })
  }

  async deleteComponent(id: string): Promise<void> {
    await this.request(`/components/${id}`, {
      method: 'DELETE',
    })
  }

  // AI services
  async generateCV(jobDescription: string, userProfile?: any): Promise<CV> {
    return this.request('/ai/generate-cv', {
      method: 'POST',
      body: JSON.stringify({ jobDescription, userProfile }),
    })
  }

  async analyzeMatchScore(cvData: any, jobDescription: string): Promise<{ score: number }> {
    return this.request('/ai/analyze-match', {
      method: 'POST',
      body: JSON.stringify({ cvData, jobDescription }),
    })
  }

  // File operations
  async exportCV(id: string, format: 'pdf' | 'docx' | 'json'): Promise<Blob> {
    const response = await fetch(`${this.baseUrl}/cvs/${id}/export?format=${format}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
      },
    })

    if (!response.ok) {
      throw new Error(`Export failed: ${response.statusText}`)
    }

    return response.blob()
  }

  // Subscription management
  async getSubscription(): Promise<{ plan: string; status: string; expiresAt?: string }> {
    return this.request('/subscription')
  }

  async createSubscription(planId: string, paymentMethodId: string): Promise<{ subscription: any }> {
    return this.request('/subscription', {
      method: 'POST',
      body: JSON.stringify({ planId, paymentMethodId }),
    })
  }

  async cancelSubscription(): Promise<void> {
    await this.request('/subscription', {
      method: 'DELETE',
    })
  }

  // Analytics
  async getAnalytics(): Promise<{
    totalCVs: number
    averageMatchScore: number
    completedCVs: number
    monthlyUsage: number
  }> {
    return this.request('/analytics')
  }
}

export const apiService = APIService.getInstance()

