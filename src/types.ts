export interface Project {
  id: string;
  name: string;
  description: string;
  features: string[];
  techStack: string[];
  category: string;
  github: string;
  demo?: string;
  imageUrl?: string;
  accentColor?: string;
}

export interface Skill {
  name: string;
  percentage: number;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Education {
  institution: string;
  degree: string;
  major?: string;
  period: string;
  score: string;
  location: string;
}

export interface Internship {
  title: string;
  provider: string;
  period: string;
  responsibilities: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
}

export interface Achievement {
  title: string;
  description: string;
}
