import { useQuery } from '@tanstack/react-query';
import { languageTypeKeys } from '@/services/language';
import { caseHistorySidebarKeys } from '@/services/caseHistorySidebarKeys';
import { getCaseHistorySidebarApiCall, getLangugaeApiCall } from './utils';

export const useGetLanguageList = () =>
    useQuery({
        queryKey: languageTypeKeys.getLanguageTypeList(),
        queryFn: () => getLangugaeApiCall(),
    });
export const useGetCaseHistorySidebarList = (id: string) =>
    useQuery({
        queryKey: caseHistorySidebarKeys.getCaseHistorySidebarList(),
        queryFn: () => getCaseHistorySidebarApiCall(id),
    });
