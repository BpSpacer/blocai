
"use client";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const Page = async () => {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast.success("Back job invoked successfully!");
    },
  }));
  return (
   <div className="p-4 max-w-7xl mx-auto">
    <Button disabled={invoke.isPending} onClick={() => invoke.mutate({ text: 'world' })}>
      Invoke Back Job
    </Button>
    </div>
  );
}

export default Page;