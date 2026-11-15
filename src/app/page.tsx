import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Skills from "@/components/layout/Skills";
import Projects from "@/components/layout/Projects";
import Blogs from "@/components/layout/Blogs";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";
import { SITE_URL } from "@/data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Eswar Dudi",
  url: SITE_URL,
  email: "eswardudi06@gmail.com",
  jobTitle: "Software Engineer",
  description:
    "Software engineer focused on backend and systems: distributed services, runtimes, and backend-focused full-stack development.",

  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "CVR College of Engineering",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressCountry: "IN",
    },
  },

  // alumniOf: {
  //   "@type": "CollegeOrUniversity",
  //   name: "CVR College of Engineering",
  //   address: {
  //     "@type": "PostalAddress",
  //     addressLocality: "Hyderabad",
  //     addressCountry: "IN",
  //   },
  // },

  knowsAbout: [
    "Software Engineering",
    "Full Stack Development",
    "Backend Systems",
    "Systems Programming",
    "Go",
    "AI Integrations",
    "Machine Learning",
    "Prompt Engineering",
    "Linux",
    "Distributed Systems",
  ],
  sameAs: [
    "https://github.com/eswar-7116",
    "https://linkedin.com/in/eswar-dudi",
    "https://x.com/EswarDudi",
  ],
};

export default function Home() {
  return (
    <main className="w-full h-full" role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />

      <div className="px-4 sm:px-20 space-y-20 sm:space-y-24 mb-20">
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

        {/* Blogs */}
        <section
          id="blogs"
          className="scroll-mt-32"
          aria-labelledby="blogs-heading"
        >
          <Blogs />
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
