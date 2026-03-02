import { useQuery } from '@tanstack/react-query';
import { languageTypeKeys } from '@/services/language';
import { getLangugaeApiCall } from './utils';

export const useGetLanguageList = () =>
    useQuery({
        queryKey: languageTypeKeys.getLanguageTypeList(),
        queryFn: () => getLangugaeApiCall(),
    });
