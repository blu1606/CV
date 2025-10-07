import { create } from 'zustand'

interface User {
  id: string
  full_name: string | null
  avatar_url: string | null
  profession: string | null
}

interface UserState {
  user: User | null
  setUser: (user: User | null) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}))