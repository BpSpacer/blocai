import { gemini, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";
import { Sandbox } from "@e2b/code-interpreter";
import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
        const sandboxId = await step.run("get-sandbox-id", async () => {
          const sandbox = await Sandbox.create("blocai-test");
          return sandbox.sandboxId;
        });

    const codeAgent = createAgent({
      name: "summarizer",
      system: "You are an expert Next.js Developer.  You write readable maintainable code. You write simple Next.js $ React snippets.",
      model: gemini({ model: "gemini-2.0-flash-lite" }),
    });

    const { output } = await codeAgent.run(
      `Write the following Snippet: ${event.data.snippet}`,
    );

    const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId);
      const host = sandbox.getHost(3000);
      return `https://${host}`;
    });

    return {output, sandboxUrl};
  },
);
