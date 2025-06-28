import { Suspense } from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient, trpc } from '@/trpc/server';
import { Client } from './client';

const Page = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(trpc.createAI.queryOptions({ text: 'world' }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  );
}

export default Page;