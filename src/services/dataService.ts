import type { Project, Skill } from "@app/types";

export interface PortfolioData {
  USER: {
    initials: string;
    fullName: string;
    firstName: string;
    lastName: string;
  };
  SOCIAL_LINKS: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
    resume: string;
  };
  PROJECTS: Project[];
  SKILLS: Skill[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  USER: {
    initials: "VS",
    fullName: "VAIBHAV SATOKAR",
    firstName: "VAIBHAV",
    lastName: "SATOKAR",
  },

  SOCIAL_LINKS: {
    github: "https://github.com/vaibhav-satokar",
    linkedin: "https://www.linkedin.com/in/vaibhav-satokar/",
    email: "vaibhav.satokar@outlook.com",
    phone: "+91 87667 39475",
    resume: "/resume/Vaibhav Satokar - Full-Stack Developer - 8766739475.pdf",
  },

  PROJECTS: [
    {
      id: "1",
      title: "Offer Sales Portal",
      description:
        "Enterprise-grade sales management system built to automate the offer lifecycle for B2B transactions.",
      longDescription:
        "Developed at Kh Infinite Possibilities, this portal revolutionized the sales workflow. It features a custom multi-stage approval engine where offers transition through Sales, Finance, and Executive levels. Integrated digital signatures and real-time PDF generation. Built with .NET Razor Pages for robust server-side logic and MSSQL for transaction safety.",
      techStack: [".NET", "Razor Pages", "MSSQL", "Bootstrap", "C#"],
      tags: ["Workflow", "FinTech", "Enterprise"],
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=600&auto=format&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
    },
    {
      id: "2",
      title: "IAM - User Management System",
      description:
        "Advanced Identity and Access Management suite with granular Role-Based Access Control (RBAC).",
      longDescription:
        "A security-first application focusing on the complete user lifecycle. Features include invitation-based onboarding, automated email verification via SMTP, and a dynamic permission system that controls UI visibility and API access. The frontend is a highly reactive dashboard built with React and Material UI.",
      techStack: ["React", "Material UI", "Node.js", "JWT", "Context API"],
      tags: ["Security", "RBAC", "Identity"],
      imageUrl:
        "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&h=600&auto=format&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
    },
    {
      id: "3",
      title: "Intelligent Resume Parser",
      description:
        "AI-powered tool that extracts structured data from PDF resumes using Gemini API.",
      longDescription:
        "An automated recruitment solution that processes thousands of resumes in seconds. Using the Gemini-3-Flash model, the system identifies candidate names, contact details, skills, and experience, mapping them to a standardized JSON schema. Reduces HR processing time by over 80%.",
      techStack: ["Python", "Gemini API", "FastAPI", "React", "MongoDB"],
      tags: ["AI/ML", "NLP", "HR Tech"],
      imageUrl:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&h=600&auto=format&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      category: "AI/ML",
    },
    {
      id: "4",
      title: "Inventory Pro Mobile",
      description:
        "Cross-platform mobile application for real-time warehouse inventory tracking and barcode scanning.",
      longDescription:
        "A logistics solution for field agents to track stock levels on the go. It utilizes native camera-based barcode scanning to quickly sync stock updates with a central cloud database. Features an offline mode that carries changes until a network connection is restored.",
      techStack: ["React Native", "Firebase", "Redux", "Expo"],
      tags: ["Mobile", "Logistics", "Cloud"],
      imageUrl:
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&h=600&auto=format&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      category: "Mobile",
    },
    {
      id: "5",
      title: "Financial Analytics Engine",
      description:
        "The high-performance real-time data visualization platform for monitoring asset performance.",
      longDescription:
        "A sophisticated dashboard that aggregates market data from various APIs. It features interactive charts using Recharts and D3.js, providing deep insights into portfolio volatility and historical trends. Optimized for low-latency updates using WebSocket streams.",
      techStack: ["React", "TypeScript", "D3.js", "Socket.io"],
      tags: ["Data Viz", "FinData", "Real-time"],
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=600&auto=format&fit=crop",
      demoUrl: "#",
      githubUrl: "#",
      category: "Frontend",
    },
  ],

  SKILLS: [
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "MUI", level: 90, category: "Frontend" },
    { name: "React JS", level: 92, category: "Framework" },
    { name: "Next JS", level: 86, category: "Framework" },
    { name: "Vite", level: 84, category: "Framework" },
    { name: ".Net Core", level: 88, category: "Framework" },
    { name: "C#", level: 85, category: "Backend" },
    { name: "Express JS", level: 86, category: "Backend" },
    { name: "Python", level: 80, category: "Backend" },
    { name: "MSSQL", level: 90, category: "Database" },
    { name: "MongoDB", level: 82, category: "Database" },
    { name: "Gemini AI", level: 85, category: "AI" },
    { name: "Stitch by Google", level: 80, category: "AI" },
    { name: "GitHub Copilot", level: 82, category: "AI" },
    { name: "Git", level: 95, category: "Version Control" },
    { name: "GitHub", level: 95, category: "Version Control" },
    { name: "GitHub Pages", level: 86, category: "Deployment" },
    { name: "Vercel", level: 90, category: "Deployment" },
    { name: "Canva", level: 85, category: "Other" },
    { name: "Visual Studio", level: 90, category: "IDE" },
    { name: "VS Code", level: 95, category: "IDE" },
    { name: "Eclipse", level: 80, category: "IDE" },
    { name: "Postman", level: 88, category: "Testing" },
    { name: "Java", level: 78, category: "Testing" },
    { name: "Selenium", level: 82, category: "Testing" },
  ],
};

/**
 * Functional data service
 * Keeps the same async contract for App.tsx compatibility
 */
export const getPortfolioData = async (): Promise<PortfolioData> => {
  return PORTFOLIO_DATA;
};
