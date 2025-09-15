import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="text-xl max-w-3xl mx-auto text-center leading-relaxed space-y-6 mt-16">
        <h1 className="text-4xl font-bold text-blue-500" id="about-heading">About me</h1>
        <p>
          I'm <b>Eswar Dudi</b>, a software developer passionate about{" "}
          <b> backend systems, AI, and web development</b>. I enjoy building
          awesome projects and learning deep about tech.
        </p>
        <p>
          Some of my projects include <b>NexusChat</b> (a peer-to-peer chat app
          with JWT auth and real-time communication), <b> Guntainer</b> (a
          container runtime in Go that isolates processes), and <b>CalGist</b>{" "}
          (an AI-powered calendar summarizer). You can find more in the&nbsp;
          <Link href="/projects" className="cursor-pointer underline">
            Projects
          </Link>
          &nbsp;section.
        </p>
        <p>
          What drives me is curiosity, the urge to understand systems deeply and
          use that knowledge to create software that is{" "}
          <b> efficient, reliable, and impactful</b>.
        </p>
        <p>
          I work across multiple languages including Python, Java, JavaScript,
          TypeScript, C, Go, and Kotlin. I've also built with frameworks and
          stacks like MERN, FastAPI, Flask, Jetpack Compose, and occasionally
          Spring Boot. Beyond tech, I enjoy movies, caring for my plants, and
          long walks with friends.
        </p>
        <p>
          Currently, I'm pursuing my B.Tech in Computer Science at{" "}
          <b>CVR College of Engineering</b>. Looking ahead, I aim to grow as a{" "}
          <b>Software Development Engineer</b>, contributing to projects where
          performance, scalability, and problem-solving are at the core. I'm
          excited to take on opportunities where I can push boundaries in
          domains I love.
        </p>
      </div>
    </>
  );
}
