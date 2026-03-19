import { specialEducatorTypeKeys } from '@/services/myStudent';
import { useQuery } from '@tanstack/react-query';
import { getSpecialEducatorMyStudentCall } from '../../utils';

export const useGetMyStudents = () =>
    useQuery({
        queryKey: specialEducatorTypeKeys.getSpecialEducatorTypeList(),
        queryFn: () => getSpecialEducatorMyStudentCall(),
    });
