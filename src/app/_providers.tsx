'use client';

import { ReactNode } from 'react';
import { QueryClientProvider, HydrationBoundary } from '@tanstack/react-query';

import { queryClient } from '@/utils/react-query-client';

type ProvidersProps = {
    children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => (
    <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={{}}>{children}</HydrationBoundary>
    </QueryClientProvider>
);

export default Providers;
