import { centerTrackKeys } from '@/services/centerTrack';
import { useQuery } from '@tanstack/react-query';
import { centerStaffKeys } from '@/services/centerStaff';
import { centerStudentKeys } from '@/services/centerStudent';
import {
    getCenterStaffListApiCall,
    getCenterStudentListApiCall,
    getCenterTrackListApiCall,
} from './utils.api';

export const useGetCenterTrackList = ({
    page,
    limit,
    search,
}: {
    page: string | number;
    limit: number;
    search: string;
}) =>
    useQuery({
        queryKey: centerTrackKeys.getCenterTrackList({ page, limit, search }),
        queryFn: () =>
            getCenterTrackListApiCall({
                page,
                limit,
                search,
            }),
    });

export const useGetCenterStaffList = ({
    centerAdminId,
    page,
    limit,
    search,
}: {
    centerAdminId: string | number;
    page: string | number;
    limit: number;
    search: string;
}) =>
    useQuery({
        queryKey: centerStaffKeys.getCenterStaffList({ centerAdminId, page, limit, search }),
        queryFn: () =>
            getCenterStaffListApiCall({
                centerAdminId,
                page,
                limit,
                search,
            }),
    });

export const useGetCenterStudentList = ({
    staffId,
    page,
    limit,
    search,
}: {
    staffId: string | number;
    page: string | number;
    limit: number;
    search: string;
}) =>
    useQuery({
        queryKey: centerStudentKeys.getCenterStudentList({ staffId, page, limit, search }),
        queryFn: () =>
            getCenterStudentListApiCall({
                staffId,
                page,
                limit,
                search,
            }),
    });
