"use client";

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/layout/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/layout/About'), { ssr: false });
const AMA = dynamic(() => import('@/components/layout/AMA'), { ssr: false });
const Contact = dynamic(() => import('@/components/layout/Contact'), { ssr: false });
const Projects = dynamic(() => import('@/components/layout/Projects'), { ssr: false });
const Skills = dynamic(() => import('@/components/layout/Skills'), { ssr: false });
const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: false });

export default function Home() {
  return (
    <main className="w-full h-full" role="main">
      <Hero />

      <div className="px-4 sm:px-20 space-y-32 mb-20">
        {/* About */}
        <section
          id="about"
          className="scroll-mt-24"
          aria-labelledby="about-heading"
        >
          <About />
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="scroll-mt-24"
          aria-label="Professional Skills"
        >
          <Skills />
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-24"
          aria-labelledby="projects-heading"
        >
          <Projects />
        </section>

        {/* AMA */}
        <section
          id="ama"
          className="scroll-mt-24"
          aria-label="Ask Anything about Eswar Dudi"
        >
          <AMA />
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24" aria-label="Contact Me">
          <Contact />
        </section>
      </div>

      <Footer />
    </main>
  );
}
