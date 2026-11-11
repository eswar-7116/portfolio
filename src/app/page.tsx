import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Skills from "@/components/layout/Skills";
import Projects from "@/components/layout/Projects";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="w-full h-full" role="main">
      <Hero />

      <div className="px-4 sm:px-20 space-y-32 mb-20">
        {/* About */}
        <section
          id="about"
          className="scroll-mt-32"
          aria-labelledby="about-heading"
        >
          <About />
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="scroll-mt-32"
          aria-labelledby="skills-heading"
        >
          <Skills />
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-32"
          aria-labelledby="projects-heading"
        >
          <Projects />
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-32"
          aria-labelledby="contact-heading"
        >
          <Contact />
        </section>
      </div>

      <Footer />
    </main>
  );
}
