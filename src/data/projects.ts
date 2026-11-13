import { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "Glambdar",
    skills: ["Go", "Docker", "gVisor", "gRPC", "Bun", "Gin", "SQL", "GORM", "Redis", "Rate Limiting", "Serverless", "EWMA"],
    description:
      "Developed a distributed FaaS platform in Go with a controller/agent architecture over gRPC, Redis cluster state, smart warm-pool-aware routing, global Redis token-bucket rate limiting, and RBAC for role-based access control. Reduced cold starts from 590 ms to 230 ms using EWMA-based predictive pre-warming (0.99 ms warm, 2,449 req/s); added gVisor sandboxing, S3-compatible storage with multipart streaming.",
    github: "https://github.com/eswar-7116/glambdar",
    link: null,
  },
  {
    title: "Agent Gopher",
    skills: ["Go", "Agentic AI", "MCP", "Bubble Tea", "OpenAI API", "Tavily", "Concurrency", "TUI", "HITL"],
    description:
      "Built a terminal AI coding agent in Go for any OpenAI-compatible API, running file, shell, web-search and MCP tools behind a diff-preview permission system with subcommand-aware whitelisting. Added sub-agent delegation, plan mode, persistent memory and automatic context compaction. Race-detector clean on Linux, macOS and Windows CI, with ~0.5 µs tool registry setup and ~1.3 ms diffs over 5,000-line files.",
    github: "https://github.com/eswar-7116/agent-gopher",
    link: null,
  },
  {
    title: "StreamGuard",
    skills: ["Java", "Spring Boot", "Concurrency", "Anomaly Detection", "EWMA", "Observability", "JMH", "Maven Central"],
    description:
      "Published a Spring Boot starter on Maven Central that adds real-time traffic monitoring, anomaly detection, EWMA traffic forecasting and DDoS/brute-force signals to an app as a single dependency. Its lock-free sliding-window aggregator sustains 30.8M events/s with 0% sample loss and answers 5-minute queries in 0.3 µs at 2M events (vs 319 ms for a raw rescan).",
    github: "https://github.com/eswar-7116/streamguard",
    link: "https://central.sonatype.com/artifact/io.github.eswar-7116/streamguard-spring-boot-starter",
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
    title: "GDG on Campus CVR Website",
    skills: ["Next.js", "TypeScript", "Notion API", "Google Calendar API", "TanStack Query", "Tailwind CSS", "SEO"],
    description:
      "Lead contributor (98 commits) to the official website of GDG on Campus CVR College of Engineering. Migrated it to Next.js, built a blog backed by Notion as a CMS with Markdown rendering and syntax highlighting, synced events from Google Calendar with event state computed from dates, and improved first contentful paint, accessibility, SEO metadata and analytics.",
    github: "https://github.com/gdgcvr/gdgcvrwebsite",
    link: "https://gdg.cvr.ac.in",
  },
  {
    "title": "VERITAS",
    "skills": ["Next.js", "Python", "GenAI", "Docker", "Deepfake Detection", "Machine Learning", "FastAPI"],
    "description":
      "Winner of CMR HackFest 3.0 (GenAI Track). Decoupled ML dependencies into a custom Docker base image, reducing app size by 2.8 GB, and migrated the backend to uv. Designed the architecture of a 4-engine deepfake forensics pipeline combining Hugging Face models and noise analysis, implemented with the teammates.",
    "github": "https://github.com/eswar-7116/genai-media-verifier",
    "link": null
  },
  {
    title: "Guntainer",
    skills: ["Go", "Linux Namespaces", "UID/GID Remapping", "chroot", "Containers"],
    description:
      "A minimal, unprivileged container runtime in Go that isolates processes with PID, mount, UTS, IPC and user namespaces, maps container root to the invoking host user, and bootstraps itself with a self re-exec model like real runtimes, all without Docker.",
    github: "https://github.com/eswar-7116/guntainer",
    link: null,
  },
  {
    "title": "Flux Interpreter",
    "skills": ["Java", "Compilers", "Lexical Analysis", "Recursive Descent Parsing", "AST Optimization", "Interpreters"],
    "description":
      "A tree-walking interpreted language in Java with a hand-written lexer, recursive descent parser, AST optimizer (constant folding/propagation and algebraic simplification), and a REPL. On a 10,000-line stress test the optimizer shrinks the AST by 67% (115,982 to 37,996 nodes), with parsing in ~24 ms and execution in ~7 ms.",
    "github": "https://github.com/eswar-7116/flux-interpreter",
    "link": null
  },
  {
    "title": "Wiki Semantic Crawler",
    "skills": ["Python", "Sentence-Transformers", "Weighted A*", "NLP", "BeautifulSoup", "Hugging Face"],
    "description":
      "An autonomous AI agent that plays the 'Wiki Game' by finding the shortest path between unrelated Wikipedia topics. It implements a Weighted A* search algorithm using cosine similarity of all-MiniLM-L6-v2 embeddings as a heuristic to navigate high-dimensional semantic space efficiently.",
    "github": "https://github.com/eswar-7116/wiki-semantic-crawler",
    "link": null
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
    title: "Tgo",
    skills: ["Go", "Cobra", "SQLite3", "CLI"],
    description:
      "A simple command-line task manager implemented in Go. It uses SQLite for persistent storage and provides a clean CLI interface using Cobra.",
    github: "https://github.com/eswar-7116/tgo",
    link: null,
  },
  {
    "title": "TicTacToe AI Agent",
    "skills": ["TypeScript", "Game Theory", "Minimax", "Alpha-Beta Pruning"],
    "description":
      "An unbeatable Tic-Tac-Toe agent built using the Minimax algorithm. Optimized with Alpha-Beta pruning and depth-aware evaluation to minimize the search space, ensuring optimal moves are calculated in real-time.",
    "github": "https://github.com/eswar-7116/tictactoe-ai",
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
  }
];

export default projects;
