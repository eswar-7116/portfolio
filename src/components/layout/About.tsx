import lobster from "@/fonts/lobster";

export default function About() {
  return (
    <>
      <div className="w-full p-10 flex flex-col items-center justify-center">
        <div>
          <h1 className={`text-7xl ${lobster.className}`}>
            Hello<span className="inline-block animate-wiggle">👋</span>,
          </h1>
          <div className="mt-5 flex items-center text-7xl font-semibold">
            I'm&nbsp;<span className="text-blue-700 shiny-text">Eswar</span>.
          </div>
        </div>
      </div>
      
      <div className="text-xl max-w-3xl mx-auto text-center leading-relaxed">
        <p>
          I am <b>Eswar Dudi</b>, a curious and enthusiastic software developer passionate about 
          <b> AI, web development, systems and backend engineering</b>.  
        </p>
      </div>
    </>
  );
}
