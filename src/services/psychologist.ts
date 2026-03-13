import { QueryKeys } from '@/utils/queryKeys';

export const psychologistTypeKeys = {
    all: [QueryKeys.PSYCHOLOGIST],
    getPsychologistTypeList: () => [...psychologistTypeKeys.all] as const,
};
