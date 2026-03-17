import { useQuery } from '@tanstack/react-query';

import { caseHistoryFormDetailKeys } from '@/services/caseHistoryFormDetailKeys';

import { getStudentFormDetails } from './utils.api';


export const useGetCaseHistoryFormDetails = (args: { studentId: string; formId: string }) => {
    const { studentId, formId } = args;

    return useQuery({
        queryKey: caseHistoryFormDetailKeys.getCaseHistorySidebarList(formId),
        queryFn: () => getStudentFormDetails({ formId, studentId }),
    });
};
