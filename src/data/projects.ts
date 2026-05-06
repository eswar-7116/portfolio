import { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "Glambdar",
    skills: ["Go", "Docker", "Node.js", "Gin", "Linux", "SQLite", "GORM", "Rate Limiting", "Serverless", "ML", "EWMA"],
    description:
      "A fast serverless runtime written in Go for executing Node.js functions. Features persistent container pooling, auto-scaling, and Unix Domain Socket IPC. Implements ML-based optimization using adaptive EWMA to predict incoming traffic trends and pre-warm containers, eliminating cold starts and achieving a 99.6% latency reduction.",
    github: "https://github.com/eswar-7116/glambdar",
    link: null,
  },
  {
    "title": "VERITAS",
    "skills": ["Next.js", "Python", "GenAI", "Docker", "Asynchronous Programming", "Deepfake Detection", "Machine Learning", "FastAPI"],
    "description":
      "Winner of CMR HackFest 3.0 (GenAI Track). Engineered a 4-engine forensics pipeline utilizing Hugging Face models and noise analysis. Optimized deployment by decoupling ML dependencies into a custom base image, reducing app size by 2.8 GB, and implemented async handling for concurrent engine inference.",
    "github": "https://github.com/eswar-7116/genai-media-verifier",
    "link": null
  },
  {
    title: "Guntainer",
    skills: ["Go", "Linux Namespaces", "UID/GID Remapping", "Alpine rootfs"],
    description:
      "A lightweight container runtime in Go that isolates processes using Linux namespaces, UID/GID remapping, and automatic Alpine rootfs setup. Demonstrates deep systems-level understanding of OS primitives.",
    github: "https://github.com/eswar-7116/guntainer",
    link: null,
  },
  {
    "title": "Wiki Semantic Crawler",
    "skills": ["Python", "Sentence-Transformers", "Weighted A*", "NLP", "BeautifulSoup"],
    "description":
      "An autonomous AI agent that plays the 'Wiki Game' by finding the shortest path between unrelated Wikipedia topics. It implements a Weighted A* search algorithm using cosine similarity of all-MiniLM-L6-v2 embeddings as a heuristic to navigate high-dimensional semantic space efficiently.",
    "github": "https://github.com/eswar-7116/wiki-semantic-crawler",
    "link": null
  },
  {
    title: "NexusChat",
    skills: ["MERN Stack", "Socket.io", "JWT Auth", "Docker", "Cloudinary"],
    description:
      "Full-stack real-time chat with P2P messaging, JWT auth, WebSocket presence, and message status; deployed via Docker on a MERN stack with Cloudinary media support.",
    github: "https://github.com/eswar-7116/NexusChat",
    link: "https://nexuschat-aglp.onrender.com/",
  },
  {
    title: "SynapseLearn",
    skills: ["Next.js", "Google Gemini", "Clerk", "Neon DB", "Drizzle ORM"],
    description:
      "AI-powered study platform using Google Gemini for personalized task generation, with analytics, task tracking, and a full auth + DB stack (Clerk + Neon + Drizzle ORM).",
    github: "https://github.com/eswar-7116/SynapseLearn",
    link: "https://synapse-learn.netlify.app/",
  },
  {
    title: "HTTP Caching Proxy",
    skills: ["Go", "Networking", "LRU Cache", "In-memory storage"],
    description:
      "A production-style HTTP caching proxy in Go with in-memory storage, time-based expiry, and LRU eviction; built to understand how caching layers work at the network level.",
    github: "https://github.com/eswar-7116/http-caching-proxy",
    link: null,
  },
  {
    title: "CalGist",
    skills: ["Next.js", "Supabase", "Google Gemini", "Google Calendar API"],
    description:
      "A Google Calendar event summarizer that uses AI to generate concise insights and manages event data with PostgreSQL and Supabase.",
    github: "https://github.com/eswar-7116/CalGist",
    link: "https://cal-gist.vercel.app/",
  },
  {
    "title": "Flux Interpreter",
    "skills": ["Java", "Compilers", "Lexical Analysis", "Parser", "Interpreters", "Recursive Descent Parsing"],
    "description":
      "A custom-built interpreted programming language called Flux. Implemented entirely in Java, featuring a hand-written lexer and parser to handle variable assignments, control flow, and basic arithmetic operations.",
    "github": "https://github.com/eswar-7116/flux-interpreter",
    "link": null
  },
  {
    title: "AlterTone",
    skills: ["Next.js", "Google Gemini", "SEO Optimization"],
    description:
      "A web app that uses AI to change the tone of your text, for example turning sad sentences into happy or professional ones, optimized for strong SEO visibility.",
    github: "https://github.com/eswar-7116/altertone",
    link: "https://altertone-two.vercel.app/",
  },
  {
    title: "Tgo",
    skills: ["Go", "Cobra", "SQLite3", "CLI"],
    description:
      "A simple command-line task manager implemented in Go. It uses SQLite for persistent storage and provides a clean CLI interface using Cobra.",
    github: "https://github.com/eswar-7116/tgo",
    link: null,
  },
  {
    title: "HTTP Server in C",
    skills: ["C", "Unix Socket API", "TCP/IP"],
    description:
      "A minimal HTTP web server built from scratch in C using raw TCP sockets, without any frameworks or libraries. Built to deeply understand how web servers work at the lowest level.",
    github: "https://github.com/eswar-7116/c-web-server",
    link: null,
  },
  {
    title: "VoxoLaunch",
    skills: ["Python", "Speech Recognition", "TTS"],
    description:
      "A Python-based voice-controlled app launcher that executes commands like opening apps and performing searches using speech recognition and TTS.",
    github: "https://github.com/eswar-7116/VoxoLaunch",
    link: null,
  },
  {
    title: "TermLock",
    skills: ["Shell Scripting", "Linux Security"],
    description:
      "A lightweight shell script that password-protects terminal startup, blocking escape attempts and ensuring secure access with zero dependencies.",
    github: "https://github.com/eswar-7116/termlock",
    link: null,
  },
  {
    "title": "TicTacToe AI Agent",
    "skills": ["Python", "Game Theory", "Minimax", "Alpha-Beta Pruning"],
    "description":
      "An unbeatable Tic-Tac-Toe agent built using the Minimax algorithm. Optimized with Alpha-Beta pruning to minimize the search space, ensuring optimal moves are calculated in real-time.",
    "github": "https://github.com/eswar-7116/tictactoe-ai",
    "link": null
  }
];

export default projects;
