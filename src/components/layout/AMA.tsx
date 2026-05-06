"use client";

import {
  Bot,
  X,
  SendHorizonal,
  Loader,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatState {
  messages: ChatMessage[];
  isOpen: boolean;
  isExpanded: boolean;
  isLoading: boolean;
  input: string;
}

const SUGGESTED_QUERIES = [
  "Tell me about your top projects",
  "What is NexusChat?",
  "Explain Guntainer in simple terms",
];

export default function AMA() {
  const [chat, setChat] = useState<ChatState>({
    messages: [],
    isOpen: false,
    isExpanded: false,
    isLoading: false,
    input: "",
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat.messages]);

  // Focus input when modal opens
  useEffect(() => {
    if (chat.isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [chat.isOpen]);

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [chat.input]);

  const toggleOpen = () => {
    setChat((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  };

  const toggleExpanded = () => {
    setChat((prev) => ({ ...prev, isExpanded: !prev.isExpanded }));
  };

  const setInput = (input: string) => {
    setChat((prev) => ({ ...prev, input }));
  };

  const handleSubmit = async (e?: React.SyntheticEvent) => {
    if (e) e.preventDefault();
    const query = chat.input.trim();
    if (!query || chat.isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: query };

    setChat((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      input: "",
      isLoading: true,
    }));

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...chat.messages, userMessage] }),
      });

      if (!res.body) throw new Error("No response body.");
      if (!res.ok) {
        if (res.status === 503 || res.status === 429) {
          throw new Error("QUOTA_EXCEEDED");
        }
        throw new Error("Bad response status!");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;
      let accumulated = "";

      // Add empty assistant message
      setChat((prev) => ({
        ...prev,
        messages: [...prev.messages, { role: "assistant", content: "" }],
      }));

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value);
          accumulated += chunk;
          const currentContent = accumulated;
          setChat((prev) => ({
            ...prev,
            messages: prev.messages.map((msg, i) =>
              i === prev.messages.length - 1
                ? { ...msg, content: currentContent }
                : msg,
            ),
          }));
        }
      }
    } catch (err: any) {
      console.error("Error in AMA bot:", err);
      const errorMessage =
        err.message === "QUOTA_EXCEEDED"
          ? "I'm currently taking a little break to recharge! Please try asking me again later."
          : "Something went wrong. Please try again.";

      setChat((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            role: "assistant",
            content: errorMessage,
          },
        ],
      }));
    } finally {
      setChat((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleSuggestionClick = (query: string) => {
    setChat((prev) => ({ ...prev, input: query }));
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  return (
    <>
      {/* Floating Bot Button */}
      <button
        onClick={toggleOpen}
        className="ama-fab peer"
        aria-label="Open AI Chat"
        id="ama-fab"
      >
        <Bot size={26} strokeWidth={2.2} />
      </button>

      {/* Tooltip */}
      <div
        className="fixed z-998 px-3 py-2 bg-[#1e1e1e] border border-foreground/15 rounded-xl text-xs font-mono text-foreground/90 opacity-0 scale-90 translate-y-2 origin-bottom-right transition-all duration-300 peer-hover:opacity-100 peer-hover:scale-100 peer-hover:translate-y-0 hidden md:flex items-center pointer-events-none shadow-xl"
        style={{ bottom: "calc(2rem + 65px)", right: "calc(2rem + 45px)" }}
      >
        Ask me about Eswar & his projects
        {/* subtle arrow */}
        <div className="absolute -bottom-[5px] right-4 w-2.5 h-2.5 bg-[#1e1e1e] border-b border-r border-foreground/15 rotate-45 rounded-sm"></div>
      </div>

      {/* Chat Modal Overlay */}
      {chat.isOpen && (
        <div
          className="fixed inset-0 z-998 bg-black/40 backdrop-blur-sm animate-fade-in"
          onClick={toggleOpen}
          aria-hidden="true"
        />
      )}

      {/* Chat Modal */}
      <div
        className={`ama-modal ${chat.isOpen ? "ama-modal--open" : ""} ${chat.isExpanded ? "ama-modal--expanded" : ""}`}
        role="dialog"
        aria-label="Ask Me Anything Chat"
        id="ama-modal"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-foreground/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
              <Bot size={16} className="text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-mono font-bold text-foreground">
                Ask Me Anything
              </h3>
              <p className="text-[10px] font-mono text-foreground/40">
                About Eswar
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={toggleExpanded}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-foreground/5 transition-all"
              aria-label={chat.isExpanded ? "Minimize chat" : "Expand chat"}
            >
              {chat.isExpanded ? (
                <Minimize2 size={16} />
              ) : (
                <Maximize2 size={16} />
              )}
            </button>
            <button
              onClick={toggleOpen}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-foreground/5 transition-all"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 ama-scrollbar">
          {chat.messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-6 py-8">
              <div className="w-16 h-16 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center">
                <Bot size={28} className="text-accent/60" />
              </div>
              <div className="text-center space-y-2">
                <p className="text-sm font-mono text-foreground/50">
                  Ask about my projects, experience, or stack
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center max-w-[280px]">
                {SUGGESTED_QUERIES.map((example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => handleSuggestionClick(example)}
                    className="text-[11px] font-mono px-3 py-1.5 rounded-lg border border-foreground/5 bg-foreground/2 text-foreground/50 hover:border-accent/30 hover:text-accent transition-all"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            chat.messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                    msg.role === "user"
                      ? "bg-accent text-background font-mono rounded-br-md whitespace-pre-wrap selection:bg-background/20 selection:text-background"
                      : "bg-foreground/5 text-foreground/80 border border-foreground/5 rounded-bl-md whitespace-pre-wrap"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="prose prose-invert prose-sm max-w-none prose-p:text-foreground/80 prose-strong:text-accent prose-p:my-1 prose-ul:my-1 prose-li:my-0">
                      {msg.content ? (
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
                            pre: ({ ...props }) => (
                              <div className="overflow-x-auto my-2 ama-scrollbar rounded-xl border border-foreground/10 bg-black/40 max-w-[calc(100vw-6rem)] sm:max-w-[320px]">
                                <pre className="p-3 bg-transparent m-0 text-[11px] font-mono w-max min-w-full" {...props} />
                              </div>
                            ),
                            code: ({ node, className, children, ...props }: any) => {
                              const isInline = !className?.includes("language-");
                              return isInline ? (
                                <code className="text-accent bg-accent/10 px-1.5 py-0.5 rounded-md text-[11px] font-mono" {...props}>
                                  {children}
                                </code>
                              ) : (
                                <code className={`${className} font-mono text-[11px] text-foreground/90`} {...props}>
                                  {children}
                                </code>
                              );
                            },
                          }}
                        >
                          {msg.content}
                        </ReactMarkdown>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-accent/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                          Thinking...
                        </span>
                      )}
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))
          )}
          {chat.isLoading &&
            chat.messages[chat.messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="bg-foreground/5 border border-foreground/5 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex items-center gap-2 text-accent/60 text-sm font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                    Processing...
                  </div>
                </div>
              </div>
            )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 items-end p-4 border-t border-foreground/10"
        >
          <textarea
            ref={inputRef}
            value={chat.input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Ask anything... (Shift+Enter for new line)"
            className="grow min-h-[40px] max-h-[120px] py-2.5 px-4 rounded-xl bg-foreground/3 border border-foreground/10 focus:border-accent/30 outline-none font-mono text-sm transition-all text-foreground placeholder:text-foreground/25 resize-none ama-scrollbar leading-tight"
            rows={1}
            aria-label="Ask a question"
            disabled={chat.isLoading}
          />
          <button
            type="submit"
            className="h-10 w-10 rounded-xl bg-accent text-background flex items-center justify-center hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 shrink-0"
            disabled={chat.isLoading || !chat.input.trim()}
          >
            {chat.isLoading ? (
              <Loader className="animate-spin" size={16} />
            ) : (
              <SendHorizonal size={16} />
            )}
          </button>
        </form>
      </div>
    </>
  );
}
