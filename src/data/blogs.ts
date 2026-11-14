import { Blog } from "@/types/blog";

const blogs: Blog[] = [
  {
    title: "Introduction to Load Balancers",
    description:
      "Understand what load balancers are and why they matter by building a simple round-robin HTTP load balancer with Express.js.",
    topics: ["Backend", "System Design"],
    date: "2026-07-10",
    file: "intro-lb.md",
  },
  {
    title: "Multithreading vs Multiprocessing vs Async Programming",
    description:
      "Concurrency vs parallelism, and when to use multithreading, multiprocessing, or async programming in modern applications.",
    topics: ["Concurrency", "Operating Systems"],
    date: "2026-07-17",
    file: "multithreading-multiprocessing-async.md",
  },
];

export default blogs;
