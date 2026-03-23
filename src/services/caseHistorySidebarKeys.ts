import { QueryKeys } from '@/utils/queryKeys';

export const caseHistorySidebarKeys = {
    all: [QueryKeys.CASE_HISTORY_SIDEBAR_MENU],
    getCaseHistorySidebarList: () => [...caseHistorySidebarKeys.all] as const,
};

export const caseHistorySpeechAssessmentKeys = {
    all: [QueryKeys.CASE_HISTORY_SPEECH_ASSESSMENT],
    getCaseHistorySpeechAssessmentList: () => [...caseHistorySpeechAssessmentKeys.all] as const,
};


