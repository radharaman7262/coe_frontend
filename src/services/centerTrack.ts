import { QueryKeys } from '@/utils/queryKeys';

export const centerTrackKeys = {
    all: [QueryKeys.CENTER_TRACK],
    getCenterTrackList: (params: { page: string | number; limit: number; search: string }) =>
        [...centerTrackKeys.all, params] as const,
};
