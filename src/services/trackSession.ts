import { QueryKeys } from '@/utils/queryKeys';

export const trackSessionListKeys = {
    all: [QueryKeys.TRACK_SESSION],
    getTrackSessionList: (params: {
        page: string | number;
        limit: string | number;
        search: string;
        status: string;
    }) => [...trackSessionListKeys.all, params] as const,
};
