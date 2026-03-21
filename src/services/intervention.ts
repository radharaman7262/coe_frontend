import { QueryKeys } from '@/utils/queryKeys';

export const specialEducatorInterventionListKeys = {
    all: [QueryKeys.SPECIAL_EDUCATOR_INTERVENTION],
    getSpecialEducatorInterventionList: (params: {
        page: string | number;
        limit: string | number;
        search: string;
    }) => [...specialEducatorInterventionListKeys.all, params] as const,
};
