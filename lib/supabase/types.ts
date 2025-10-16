// Database types for Supabase
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          avatar_url: string | null
          profession: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          avatar_url?: string | null
          profession?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          avatar_url?: string | null
          profession?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      accounts: {
        Row: {
          id: string
          user_id: string
          provider: 'linkedin' | 'github' | 'behance'
          provider_account_id: string
          access_token: string | null
          refresh_token: string | null
          last_synced_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          provider: 'linkedin' | 'github' | 'behance'
          provider_account_id: string
          access_token?: string | null
          refresh_token?: string | null
          last_synced_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          provider?: 'linkedin' | 'github' | 'behance'
          provider_account_id?: string
          access_token?: string | null
          refresh_token?: string | null
          last_synced_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      components: {
        Row: {
          id: string
          user_id: string
          account_id: string | null
          type: 'experience' | 'project' | 'education' | 'skill'
          title: string
          organization: string | null
          start_date: string | null
          end_date: string | null
          description: string | null
          highlights: Json
          embedding: number[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          account_id?: string | null
          type: 'experience' | 'project' | 'education' | 'skill'
          title: string
          organization?: string | null
          start_date?: string | null
          end_date?: string | null
          description?: string | null
          highlights?: Json
          embedding?: number[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          account_id?: string | null
          type?: 'experience' | 'project' | 'education' | 'skill'
          title?: string
          organization?: string | null
          start_date?: string | null
          end_date?: string | null
          description?: string | null
          highlights?: Json
          embedding?: number[] | null
          created_at?: string
          updated_at?: string
        }
      }
      cvs: {
        Row: {
          id: string
          user_id: string
          title: string
          job_description: string | null
          match_score: number | null
          content: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          job_description?: string | null
          match_score?: number | null
          content?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          job_description?: string | null
          match_score?: number | null
          content?: Json
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Helper types for easier usage
export type Profile = Database['public']['Tables']['profiles']['Row']
export type Account = Database['public']['Tables']['accounts']['Row']
export type Component = Database['public']['Tables']['components']['Row']
export type CV = Database['public']['Tables']['cvs']['Row']

export type ProfileInsert = Database['public']['Tables']['profiles']['Insert']
export type AccountInsert = Database['public']['Tables']['accounts']['Insert']
export type ComponentInsert = Database['public']['Tables']['components']['Insert']
export type CVInsert = Database['public']['Tables']['cvs']['Insert']

export type ProfileUpdate = Database['public']['Tables']['profiles']['Update']
export type AccountUpdate = Database['public']['Tables']['accounts']['Update']
export type ComponentUpdate = Database['public']['Tables']['components']['Update']
export type CVUpdate = Database['public']['Tables']['cvs']['Update']
