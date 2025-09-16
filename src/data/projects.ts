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
  {
    title: "HTTP Server from scratch in C",
    skills: ["C", "Unix Socket API", "HTTP Protocol"],
    description: "A minimal HTTP web server built from scratch in C using raw TCP sockets, without any frameworks or libraries. Built to deeply understand how web servers work at the lowest level.",
    github: "https://github.com/eswar-7116/c-web-server",
    link: null,
  },
  {
    title: "VoxoLaunch",
    skills: ["Python", "Speech Recognition", "Text-to-Speech (TTS)"],
    description: "A Python-based voice-controlled app launcher that executes commands like opening apps, playing videos, and performing searches using speech recognition and TTS.",
    github: "https://github.com/eswar-7116/VoxoLaunch",
    link: null,
  },
  {
    title: "python-ffmpeg Docker Image",
    skills: ["Docker", "Linux", "Python", "FFmpeg"],
    description: "A lightweight Docker image combining python3-slim with FFmpeg and Git pre-installed, designed for multimedia pipelines and automation workflows.",
    github: "https://github.com/eswar-7116/python-ffmpeg-docker",
    link: "https://hub.docker.com/r/eswardudi/python-ffmpeg",
  },
  {
    title: "TermLock",
    skills: ["Shell Scripting", "Linux"],
    description: "A lightweight shell script that password-protects terminal startup, blocking escape attempts and ensuring secure access with zero dependencies.",
    github: "https://github.com/eswar-7116/termlock",
    link: null,
  },
  {
    title: "Tic-Tac-Toe Android App",
    skills: ["Android", "Kotlin", "Jetpack Compose", "UI Design", "State Management"],
    description: "A 2-player TicTacToe Android game built using Kotlin and Jetpack Compose, featuring custom UI and state handling.",
    github: "https://github.com/eswar-7116/TicTacToe",
    link: null,
  }
];

export default projects;
