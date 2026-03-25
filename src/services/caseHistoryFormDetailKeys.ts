import { QueryKeys } from '@/utils/queryKeys';

export const caseHistoryFormDetailKeys = {
    all: [QueryKeys.CASE_HISTORY_FORM_DETAIL_KEYS],
    getCaseHistorySidebarList: (formId: string, studentId: string, id: string, sectionId: string) =>
        [...caseHistoryFormDetailKeys.all, formId, studentId, id, sectionId] as const,
};
