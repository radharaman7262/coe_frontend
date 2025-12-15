import { useQuery, UseQueryOptions, QueryKey } from '@tanstack/react-query';

export function useAppQuery<TData, TError>(
    queryKey: QueryKey,
    queryFn: () => Promise<TData>,
    options?: UseQueryOptions<TData, TError>,
) {
    return useQuery<TData, TError>({
        queryKey,
        queryFn,
        ...options,
    });
}
