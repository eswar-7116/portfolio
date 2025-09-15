import About from "@/components/layout/About";
import AMA from "@/components/layout/AMA";
import Contact from "@/components/layout/Contact";
import Projects from "@/components/layout/Projects";
import lobster from "@/fonts/lobster";

export default function Home() {
  return (
    <main className="w-full h-full px-20" role="main">
      <header className="w-full p-10 flex flex-col items-center-safe justify-center-safe" role="banner" aria-labelledby="home-heading">
        <div>
          <h1 className={`text-7xl ${lobster.className}`} id="home-heading">
            Hello<span className="inline-block animate-wiggle">👋</span>,
          </h1>
          <div className="mt-5 flex items-center-safe text-7xl font-semibold">
            I'm&nbsp;<span className="text-blue-700 shiny-text">Eswar</span>.
          </div>
        </div>
      </header>

      {/* Contact */}
      <section id="contact" className="scroll-mt-30" aria-label="Contact Me">
        <Contact />
      </section>
      
      {/* About */}
      <section id="about" className="scroll-mt-30" aria-labelledby="about-heading">
        <About />
      </section>
      
      {/* Projects */}
      <section id="projects" aria-labelledby="projects-heading">
        <Projects />
      </section>
      
      {/* AMA */}
      <section id="ama" className="scroll-mt-30" aria-labelledby="ama-heading">
        <AMA />
      </section>
    </main>
  );
}
