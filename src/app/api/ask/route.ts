import { ai, getPrompt } from "@/util/ai";
import { GenerateContentResponse } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const retryDelay = 800;
  const maxRetries = 1;
  const { query } = await req.json();

  async function getStreamGenerator(model: string) {
    return ai.models.generateContentStream({
      model,
      contents: [{ text: getPrompt(query) }],
    });
  }

  function getErrorCode(error: any): number | undefined {
    return error?.status ?? error?.error?.code ?? error?.code;
  }

  let streamGenerator: AsyncGenerator<GenerateContentResponse>;
  let retries = 0;

  while (retries <= maxRetries) {
    try {
      streamGenerator = await getStreamGenerator("gemini-2.5-flash-lite");
      break;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const code = getErrorCode(error);

      if (code === 429) {
        console.warn("429 quota exceeded — not retrying.");
        return NextResponse.json(
          { error: "I'm getting too many questions right now — please try again later!" },
          { status: 429 }
        );
      }

      if (code === 503 && retries < maxRetries) {
        console.warn(`503 Service Unavailable. Retrying (${retries + 1}/${maxRetries}) after ${retryDelay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
        retries++;
        continue;
      }

      console.error("AI stream generation failed:", error);
      return NextResponse.json(
        { error: "AI service unavailable. Please try again later." },
        { status: 503 }
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
        return NextResponse.json(
          { error: "AI service unavailable. Please try again later." },
          { status: 503 }
        );
      }
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
