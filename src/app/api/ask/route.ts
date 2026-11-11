import { ai, getSystemInstruction } from "@/util/ai";
import { GenerateContentResponse } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// ----- Abuse limits -----
const MAX_MESSAGES = 20; // conversation turns sent to the model
const MAX_MESSAGE_CHARS = 2000; // per message
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 10; // per IP per window

// Best-effort, in-memory limiter. On serverless each warm instance keeps its
// own map, so this caps bursts rather than enforcing a global quota. Pair it
// with a Vercel Firewall rate-limit rule for a hard guarantee.
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Opportunistic cleanup so the map can't grow without bound.
  if (hits.size > 5000) {
    for (const [key, v] of hits) if (v.resetAt <= now) hits.delete(key);
  }

  const entry = hits.get(ip);
  if (!entry || entry.resetAt <= now) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

type IncomingMessage = { role: "user" | "assistant"; content: string };

function parseMessages(body: unknown): IncomingMessage[] | null {
  if (!body || typeof body !== "object") return null;
  const messages = (body as { messages?: unknown }).messages;
  if (!Array.isArray(messages) || messages.length === 0) return null;
  if (messages.length > MAX_MESSAGES) return null;

  for (const m of messages) {
    if (
      !m ||
      typeof m !== "object" ||
      (m.role !== "user" && m.role !== "assistant") ||
      typeof m.content !== "string" ||
      m.content.length > MAX_MESSAGE_CHARS
    ) {
      return null;
    }
  }
  return messages as IncomingMessage[];
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  if (isRateLimited(getClientIp(req))) {
    return NextResponse.json(
      { error: "Too many requests. Please slow down." },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const messages = parseMessages(body);
  if (!messages) {
    return NextResponse.json(
      {
        error: `Send 1-${MAX_MESSAGES} messages of at most ${MAX_MESSAGE_CHARS} characters each.`,
      },
      { status: 400 },
    );
  }

  const retryDelay = 800;
  const maxRetries = 1;

  const formattedContents = messages.map((msg) => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content }],
  }));

  function getStreamGenerator(model: string) {
    return ai.models.generateContentStream({
      model,
      config: {
        systemInstruction: getSystemInstruction(),
      },
      contents: formattedContents,
    });
  }

  let streamGenerator: AsyncGenerator<GenerateContentResponse>;
  let retries = 0;

  while (true) {
    try {
      streamGenerator = await getStreamGenerator("gemini-2.5-flash");
      break;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error?.error?.code === 503 && retries < maxRetries) {
        console.warn(
          `503 Service Unavailable. Retrying (${retries + 1}/${maxRetries}) after ${retryDelay}ms...`,
        );
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
        retries++;
        continue;
      }
      console.error("AI stream generation failed:", error);
      return NextResponse.json(
        { error: "AI service unavailable. Please try again later." },
        { status: 503 },
      );
    }
  }

  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of streamGenerator) {
          const text = chunk?.text || "";
          if (text) {
            controller.enqueue(new TextEncoder().encode(text));
          }
        }
        controller.close();
      } catch (err) {
        console.error("Stream processing error:", err);
        controller.error(err);
      }
    },
    async cancel(reason) {
      console.warn("Stream cancelled:", reason);
    },
  });

  return new NextResponse(stream, {
    headers: { "Content-Type": "text/event-stream" },
  });
}
