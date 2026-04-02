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

      if (!res.ok) throw new Error("Bad response status!");

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
      console.error("Error in AMA bot:", err);
      setAnswer("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-0 py-20" id="ama">
      <div className="flex flex-col items-center">
        <h2
          className="text-3xl sm:text-4xl font-mono font-bold flex items-center gap-3"
          id="ama-heading"
        >
          <span className="text-accent underline decoration-accent/30 underline-offset-8">
            04.
          </span>{" "}
          Ask Me Anything!
        </h2>

        {/* Input field and submit button */}
        <form
          onSubmit={handleQuerySubmit}
          className="w-full flex gap-3 mt-12 mb-8"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about my projects, stack, or experience..."
            className="grow h-12 px-4 rounded-xl bg-foreground/3 border border-foreground/10 focus:border-accent/30 outline-none font-mono text-sm transition-all text-foreground"
            aria-label="Ask a question about me or my projects"
          />
          <button
            className="px-6 rounded-xl bg-accent text-background font-bold hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              <Loader className="animate-spin" size={20} />
            ) : (
              <SendHorizonal size={20} />
            )}
          </button>
        </form>

        {/* Output */}
        <div className="w-full min-h-[200px] p-6 rounded-2xl bg-foreground/2 border border-foreground/5 font-body">
          {answer ? (
            <div className="prose prose-invert max-w-none prose-p:text-foreground/80 prose-strong:text-accent prose-code:text-accent prose-code:bg-accent/10 prose-code:px-1 prose-code:rounded">
              <ReactMarkdown
                components={{
                  a: ({ ...props }) => (
                    <a
                      className="text-accent underline decoration-accent/30 hover:decoration-accent transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                }}
              >
                {answer}
              </ReactMarkdown>
            </div>
          ) : loading ? (
            <div className="flex items-center gap-3 text-accent font-mono text-sm animate-pulse">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              Processing request...
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm font-mono text-foreground/30 uppercase tracking-widest text-center">
                Suggested Queries:
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "Tell me about your top projects",
                  "What is NexusChat?",
                  "Explain Guntainer in simple terms",
                ].map((example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => setQuery(example)}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg border border-foreground/5 bg-foreground/2 text-foreground/50 hover:border-accent/30 hover:text-accent transition-all"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
