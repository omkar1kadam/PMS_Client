export interface ProjectMember {
  id: string
  name: string
  department: string
  graduationYear: number
  email: string
  avatar?: string
  isLeader?: boolean
}

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  members: ProjectMember[]
  mentor: {
    name: string
    email: string
    avatar?: string
  }
  githubUrl?: string
  deployedUrl?: string
  submissionDate: string
  erDiagram?: string
  systemArchitecture?: string
 // status: "planning" | "in-progress" | "completed" | "submitted"
  tags: string[]
}
