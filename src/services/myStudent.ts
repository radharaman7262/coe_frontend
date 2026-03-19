import { QueryKeys } from '@/utils/queryKeys';

export const specialEducatorTypeKeys = {
    all: [QueryKeys.MY_STUDENT],
    getSpecialEducatorTypeList: () => [...specialEducatorTypeKeys.all] as const,
};

export const speechTherapistTypeKeys = {
    all: [QueryKeys.MY_STUDENT],
    getSpeechTherapistTypeList: () => [...speechTherapistTypeKeys.all] as const,
};

export const occupatioanlTherapistTypeKeys = {
    all: [QueryKeys.MY_STUDENT],
    getOccupationalTherapistTypeList: () => [...occupatioanlTherapistTypeKeys.all] as const,
};
