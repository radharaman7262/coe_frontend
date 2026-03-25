import { useQuery } from '@tanstack/react-query';
import { languageTypeKeys } from '@/services/language';
import {
    caseHistorySidebarKeys,
    caseHistorySpeechAssessmentKeys,
} from '@/services/caseHistorySidebarKeys';
import { getCaseHistorySidebarApiCall, getLangugaeApiCall } from './utils';
import { getSpeechTherapistSpeechLanguageAssessment } from './(clinical psychologist)/assessment/case-history/utils.api';

export const useGetLanguageList = () =>
    useQuery({
        queryKey: languageTypeKeys.getLanguageTypeList(),
        queryFn: () => getLangugaeApiCall(),
    });

export const useGetCaseHistorySidebarList = (id: string) =>
    useQuery({
        queryKey: caseHistorySidebarKeys.getCaseHistorySidebarList(),
        queryFn: () => getCaseHistorySidebarApiCall(id),
        staleTime: 0,
    });

export const useGetSpeechAssessmentSidebarList = (id: string) =>
    useQuery({
        queryKey: caseHistorySpeechAssessmentKeys.getCaseHistorySpeechAssessmentList(),
        queryFn: () => getSpeechTherapistSpeechLanguageAssessment(id),
    });
