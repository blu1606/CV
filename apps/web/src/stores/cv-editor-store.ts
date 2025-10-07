import { create } from 'zustand'

interface Component {
  id: string
  type: 'experience' | 'project' | 'education' | 'skill'
  title: string
  organization: string | null
  start_date: string | null
  end_date: string | null
  description: string | null
  highlights: string[]
}

interface CV {
  id: string
  user_id: string
  title: string
  job_description: string
  match_score: number
  content: {
    section_title: string
    component_ids: string[]
  }[]
}

interface CVEditorState {
  currentCV: CV | null
  components: Component[]
  matchScore: number
  isGenerating: boolean
  setCurrentCV: (cv: CV | null) => void
  setComponents: (components: Component[]) => void
  setMatchScore: (score: number) => void
  setIsGenerating: (generating: boolean) => void
  addComponent: (component: Component) => void
  removeComponent: (componentId: string) => void
}

export const useCVEditorStore = create<CVEditorState>()((set, get) => ({
  currentCV: null,
  components: [],
  matchScore: 0,
  isGenerating: false,
  setCurrentCV: (cv) => set({ currentCV: cv }),
  setComponents: (components) => set({ components }),
  setMatchScore: (score) => set({ matchScore: score }),
  setIsGenerating: (generating) => set({ isGenerating: generating }),
  addComponent: (component) => 
    set({ components: [...get().components, component] }),
  removeComponent: (componentId) => 
    set({ components: get().components.filter(c => c.id !== componentId) }),
}))