// AI Service for CV Generation
export interface JobDescription {
  title: string
  company: string
  description: string
  requirements: string[]
  location?: string
  salary?: string
}

export interface GeneratedCV {
  personalInfo: {
    name: string
    email: string
    phone: string
    location: string
    linkedin?: string
    github?: string
  }
  summary: string
  experience: Array<{
    title: string
    company: string
    duration: string
    description: string
    achievements: string[]
  }>
  skills: string[]
  education: Array<{
    degree: string
    school: string
    year: string
    gpa?: string
  }>
  projects?: Array<{
    name: string
    description: string
    technologies: string[]
    url?: string
  }>
  matchScore: number
}

export class AIService {
  private static instance: AIService
  private apiKey: string

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || ''
  }

  static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService()
    }
    return AIService.instance
  }

  async generateCV(jobDescription: string, userProfile?: any): Promise<GeneratedCV> {
    try {
      // For demo purposes, we'll use a mock AI response
      // In production, this would call OpenAI API or similar
      const mockCV = this.generateMockCV(jobDescription)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      return mockCV
    } catch (error) {
      console.error('AI service error:', error)
      throw new Error('Failed to generate CV. Please try again.')
    }
  }

  private generateMockCV(jobDescription: string): GeneratedCV {
    // Extract job title from description
    const jobTitle = this.extractJobTitle(jobDescription)
    const company = this.extractCompany(jobDescription)
    
    return {
      personalInfo: {
        name: "Alex Johnson",
        email: "alex.johnson@email.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        linkedin: "linkedin.com/in/alexjohnson",
        github: "github.com/alexjohnson"
      },
      summary: `Experienced software engineer with 8+ years of experience in ${jobTitle.toLowerCase()} roles. Proven track record of delivering scalable solutions and leading cross-functional teams. Strong expertise in modern web technologies and cloud platforms.`,
      experience: [
        {
          title: jobTitle || "Senior Software Engineer",
          company: company || "TechCorp",
          duration: "2020 - Present",
          description: `Led development of ${jobDescription.includes('React') ? 'React-based' : 'web-based'} applications serving 100k+ users.`,
          achievements: [
            "Improved system performance by 40% through optimization",
            "Led team of 5 engineers in agile development",
            "Implemented CI/CD pipelines reducing deployment time by 60%"
          ]
        },
        {
          title: "Software Engineer",
          company: "StartupXYZ",
          duration: "2018 - 2020",
          description: "Developed full-stack applications using modern web technologies.",
          achievements: [
            "Built responsive web applications with React and Node.js",
            "Collaborated with design team to implement pixel-perfect UIs",
            "Reduced bug reports by 30% through comprehensive testing"
          ]
        }
      ],
      skills: this.extractSkillsFromJobDescription(jobDescription),
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          school: "University of Technology",
          year: "2018",
          gpa: "3.8/4.0"
        }
      ],
      projects: [
        {
          name: "E-commerce Platform",
          description: "Full-stack e-commerce solution with payment integration",
          technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
          url: "github.com/alexjohnson/ecommerce"
        }
      ],
      matchScore: this.calculateMatchScore(jobDescription)
    }
  }

  private extractJobTitle(description: string): string {
    const titlePatterns = [
      /(?:looking for|seeking|hiring)\s+(?:a\s+)?([A-Z][a-z\s]+(?:Engineer|Developer|Manager|Analyst|Designer))/i,
      /([A-Z][a-z\s]+(?:Engineer|Developer|Manager|Analyst|Designer))\s+(?:position|role|job)/i,
      /(?:position|role):\s*([A-Z][a-z\s]+(?:Engineer|Developer|Manager|Analyst|Designer))/i
    ]
    
    for (const pattern of titlePatterns) {
      const match = description.match(pattern)
      if (match) return match[1].trim()
    }
    
    return "Software Engineer"
  }

  private extractCompany(description: string): string {
    const companyPatterns = [
      /at\s+([A-Z][a-zA-Z\s&]+?)(?:\s|$|,|\.)/i,
      /([A-Z][a-zA-Z\s&]+?)\s+is\s+(?:looking|seeking|hiring)/i
    ]
    
    for (const pattern of companyPatterns) {
      const match = description.match(pattern)
      if (match) return match[1].trim()
    }
    
    return "TechCorp"
  }

  private extractSkillsFromJobDescription(description: string): string[] {
    const commonSkills = [
      'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular', 'Node.js',
      'Python', 'Java', 'C++', 'C#', 'Go', 'Rust',
      'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes',
      'PostgreSQL', 'MongoDB', 'Redis', 'MySQL',
      'Git', 'CI/CD', 'Agile', 'Scrum'
    ]
    
    const foundSkills = commonSkills.filter(skill => 
      description.toLowerCase().includes(skill.toLowerCase())
    )
    
    // Add some default skills if none found
    if (foundSkills.length === 0) {
      return ['JavaScript', 'React', 'Node.js', 'TypeScript', 'AWS']
    }
    
    return foundSkills.slice(0, 8) // Limit to 8 skills
  }

  private calculateMatchScore(description: string): number {
    // Simple scoring algorithm based on keyword matches
    const keywords = description.toLowerCase().split(/\s+/)
    const techKeywords = ['react', 'javascript', 'typescript', 'node', 'python', 'aws', 'docker', 'kubernetes']
    
    const matches = keywords.filter(keyword => 
      techKeywords.some(tech => keyword.includes(tech))
    ).length
    
    // Base score + bonus for matches
    const baseScore = 70
    const bonus = Math.min(matches * 3, 25)
    
    return Math.min(baseScore + bonus, 98)
  }

  async analyzeMatchScore(cvData: any, jobDescription: string): Promise<number> {
    // Analyze how well the CV matches the job description
    const jobKeywords = jobDescription.toLowerCase().split(/\s+/)
    const cvText = JSON.stringify(cvData).toLowerCase()
    
    const matches = jobKeywords.filter(keyword => 
      cvText.includes(keyword) && keyword.length > 3
    ).length
    
    const totalKeywords = jobKeywords.filter(word => word.length > 3).length
    const matchPercentage = (matches / totalKeywords) * 100
    
    return Math.min(Math.round(matchPercentage), 98)
  }
}

export const aiService = AIService.getInstance()

