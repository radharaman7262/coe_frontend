import { useQuery } from '@tanstack/react-query';

import { clinicalPsychologistAssessmentListKeys } from '@/services/assessment';
import { getClinicalPsychologistAssessmentListApiCall } from './utils';

export const useGetClinicalPsychologistAssessmentList = ({
    page,
    limit,
    search,
    status,
}: {
    page: string | number;
    limit: string | number;
    search: string;
    status: string;
}) =>
    useQuery({
        queryKey: clinicalPsychologistAssessmentListKeys.getClinicalPsychologistAssessmentList({
            page,
            limit,
            search,
            status,
        }),
        queryFn: () =>
            getClinicalPsychologistAssessmentListApiCall({
                page,
                limit,
                search,
                status,
            }),
    });
