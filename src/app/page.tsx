import About from "@/components/layout/About";
import Contact from "@/components/layout/Contact";
import lobster from "@/fonts/lobster";

export default function Home() {
  return (
    <main className="w-full h-full px-20">
      <div className="w-full p-10 flex flex-col items-center-safe justify-center-safe">
        <div>
          <h1 className={`text-7xl ${lobster.className}`}>
            Hello<span className="inline-block animate-wiggle">👋</span>,
          </h1>
          <div className="mt-5 flex items-center-safe text-7xl font-semibold">
            I'm&nbsp;<span className="text-blue-700 shiny-text">Eswar</span>.
          </div>
        </div>
      </div>

      {/* Contact */}
      <Contact />

      {/* About */}
      <About />
    </main>
  );
}