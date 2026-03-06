import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import AMA from "@/components/layout/AMA";
import Contact from "@/components/layout/Contact";
import Projects from "@/components/layout/Projects";
import Skills from "@/components/layout/Skills";
import Footer from "@/components/layout/Footer";

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
