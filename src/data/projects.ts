import { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "Guntainer",
    skills: ["Go", "Containers", "Linux Namespaces", "UID/GID Remapping"],
    description:
      "A lightweight container runtime in Go that isolates processes using Linux namespaces with automatic Alpine rootfs setup.",
    github: "https://github.com/eswar-7116/guntainer",
    link: null,
  },
  {
    title: "NexusChat",
    skills: [
      "MongoDB",
      "Express",
      "React",
      "Tailwind CSS",
      "Node.js",
      "JWT Auth",
      "Websockets",
      "Socket.io",
      "Cloudinary",
      "Docker",
    ],
    description:
      "A real-time chat app with P2P messaging, JWT authentication, user presence, and message status tracking.",
    github: "https://github.com/eswar-7116/NexusChat",
    link: "https://nexuschat-aglp.onrender.com/",
  },
  {
    title: "SynapseLearn",
    skills: [
      "Next.js",
      "React",
      "Google Gemini",
      "Clerk",
      "PostgreSQL",
      "Neon DB",
      "Drizzle ORM",
      "ShadCN",
      "Tailwind CSS",
    ],
    description:
      "An AI-powered task generator and learning platform with analytics, task tracking, and personalized study plans.",
    github: "https://github.com/eswar-7116/SynapseLearn",
    link: "https://synapse-learn.netlify.app/",
  },
  {
    title: "CalGist",
    skills: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Google Gemini",
      "Google Calendar API",
    ],
    description:
      "A Google Calendar event summarizer that uses AI to generate concise insights and manages event data with PostgreSQL and Supabase.",
    github: "https://github.com/eswar-7116/CalGist",
    link: "https://cal-gist.vercel.app/",
  },
  {
    title: "AlterTone",
    skills: ["Next.js", "React", "Google Gemini", "SEO Optimization"],
    description:
      "A web app that uses AI to change the tone of your text, for example turning sad sentences into happy or professional ones, optimized for strong SEO visibility.",
    github: "https://github.com/eswar-7116/NexusChat",
    link: "https://nexuschat-aglp.onrender.com/",
  },
];

export default projects;
