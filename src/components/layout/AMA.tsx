"use client";

import { Loader, SendHorizonal } from "lucide-react";
import { FormEvent, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function AMA() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleQuerySubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!res.body) throw new Error("No response body.");

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value);
          setAnswer((prev) => prev + chunk);
        }
      }
    } catch (err) {
      console.error("Error reading stream:", err);
      setAnswer("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center m-6 sm:m-10 px-4 sm:px-0">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-500">
        Ask Me Anything!
      </h1>

      <form
        onSubmit={handleQuerySubmit}
        className="w-full flex gap-2 items-center justify-center mt-8"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about me or my projects..."
          className="w-3/7 h-12 text-lg mr-4 p-2 rounded-lg text-black bg-white shadow-lg shadow-black"
          aria-label="Ask a question about me or my projects"
        />
        <button
          className="cursor-pointer bg-blue-700 rounded-lg p-3 transition-transform will-change-transform hover:scale-105 active:scale-95 shadow shadow-black"
          disabled={loading}
        >
          {loading ? <Loader className="animate-spin" /> : <SendHorizonal />}
        </button>
      </form>

      <div className="w-3/4 mt-8 min-h-50 overflow-y-auto p-4 rounded-lg text-left bg-blue-950/60 text-white text-xl prose">
        {answer ? (
          <ReactMarkdown
            components={{
              a: ({ ...props }) => (
                <a
                  className="text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                />
              ),
            }}
          >
            {answer}
          </ReactMarkdown>
        ) : (
          !loading && (
            <div className="text-gray-500 mt-2">
              Example: <br />
              &quot;Tell me about your top projects&quot; <br />
              &quot;What is NexusChat?&quot; <br />&quot;Explain Guntainer in simple terms&quot;
            </div>
          )
        )}
      </div>
    </div>
  );
}
