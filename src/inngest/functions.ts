import { gemini, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
        // Create a new agent with a system prompt (you can add optional tools, too)
    const codeAgent = createAgent({
      name: "summarizer",
      system: "You are an expert Next.js Developer.  You write readable maintainable code. You write simple Next.js $ React snippets.",
      model: gemini({ model: "gemini-2.0-flash-lite" }),
    });

    const { output } = await codeAgent.run(`Write the following Snippet: ${event.data.value}`);
    return {output};
  },
);
