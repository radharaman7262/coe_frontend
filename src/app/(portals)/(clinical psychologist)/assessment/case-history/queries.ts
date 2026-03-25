import { useQuery } from '@tanstack/react-query';

import { caseHistoryFormDetailKeys } from '@/services/caseHistoryFormDetailKeys';

import { getStudentFormDetails } from './utils.api';

export const useGetCaseHistoryFormDetails = (args: {
    studentId: string;
    formId: string;
    id: string;
    sectionId: string;
}) => {
    const { studentId, formId, id, sectionId } = args;

    return useQuery({
        queryKey: caseHistoryFormDetailKeys.getCaseHistorySidebarList(
            formId,
            studentId,
            id,
            sectionId,
        ),
        queryFn: () => getStudentFormDetails({ formId, studentId }),
    });
};
