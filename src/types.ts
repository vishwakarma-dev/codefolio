
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  tags: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile' | 'AI/ML';
}

// Added 'Database' to category union to support database-specific skills in the portfolio data
export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI' | 'Database';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}