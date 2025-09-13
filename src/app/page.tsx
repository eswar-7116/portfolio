export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 rounded-full bg-blue-500 blur-[200px] opacity-40 animate-ball-expand" />
      <div className="sticky top-0 z-10 p-0.5">
        <nav className="rounded-full p-4 m-4 bg-transparent/30 backdrop-blur-md border border-white/20 shadow-md shadow-black">
          <span className="text-2xl font-semibold">Eswar Dudi</span>
        </nav>
      </div>
    </main>
  );
}
