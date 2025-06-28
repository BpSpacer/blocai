"use client";

import { useTRPC} from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Client = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.createAI.queryOptions({ text: "world" }));

  return (
    <div>
      <h1>Client Component</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}