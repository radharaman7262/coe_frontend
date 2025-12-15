import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './react-query-client';

export const ReactQueryClientProvider = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
