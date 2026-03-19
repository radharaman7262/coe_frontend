import { QueryKeys } from '@/utils/queryKeys';

export const clinicalPsychologistAssessmentListKeys = {
    all: [QueryKeys.CLINICAL_PSYCHOLOGIST_ASSESSMENT],
    getClinicalPsychologistAssessmentList: (params: {
        page: string | number;
        limit: string | number;
        search: string;
        status: string;
    }) => [...clinicalPsychologistAssessmentListKeys.all, params] as const,
};

export const specialEducatorAssessmentListKeys = {
    all: [QueryKeys.SPECIAL_EDUCATOR_ASSESSMENT],
    getSpecialEducatorAssessmentList: (params: {
        page: string | number;
        limit: string | number;
        search: string;
        status: string;
    }) => [...specialEducatorAssessmentListKeys.all, params] as const,
};
