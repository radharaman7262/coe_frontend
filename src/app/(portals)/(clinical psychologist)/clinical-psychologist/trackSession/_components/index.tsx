'use client';

import React, { useMemo, useState } from 'react';

import { PageHeader, ShimmerUiContainer } from '@/components/index';

import { ToastContainer } from 'react-toastify';

import { DEBOUNCE_SEARCH_TIME, StatusDataType, StatusNumber } from '@/constant/appConstants';

import useDebounce from '@/utils/useDebounce';

import { TRACK_SESSION_TEXT as text, STATUS_LABEL_MAP as statusLabelMap } from './constant';

import { useGetTrackSessionList } from '../queries';

import TableUi from './TableUi';

import { TrackSessionType } from '../type';

import styles from './styles.module.scss';

const TrackSessionPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(StatusNumber.ACTIVE);
    const [tableFilter, setTableFilter] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<StatusDataType | null>(null);

    const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const { isLoading, data } = useGetTrackSessionList({
        page: currentPage,
        limit: 10,
        search: debouncedFilters,
        status: statusFilter?.id || '',
    });

    const { response } = data || {};

    const { limit, data: trackSessionResponse = [], total = 0 } = response || {};

    const getTrackSessionList = (results: TrackSessionType[] = []) =>
        results.map((item) => {
            const { studentId, name, age, gender, slotStatus, slotDate, startTime, endTime, user } =
                item;

            const genderInitial = gender?.[0] ?? '';
            const statusLabel = statusLabelMap[slotStatus] ?? 'Unknown';

            const therapistName = user?.name === 'null null' ? 'Not Assigned' : user?.name;

            const specializations = user?.specializations || [];

            return {
                studentId: <div className={styles['capsule-container']}>{`STU-${studentId}`}</div>,

                nameAgeGender: `${name} (${age} / ${genderInitial})`,

                sessionWith: (
                    <div className={styles['table-Session-text']}>
                        {therapistName}
                        {specializations.length > 0 && (
                            <div>
                                <span> ({specializations.join(', ')})</span>
                            </div>
                        )}
                    </div>
                ),

                sessionSchedule: (
                    <div>
                        {slotDate}
                        <div>
                            {startTime} - {endTime}
                        </div>
                    </div>
                ),

                sessionStatus: (
                    <div className={styles[`status-${slotStatus}`] || ''}>{statusLabel}</div>
                ),
            };
        });

    const finalTrackSessionList = useMemo(
        () => getTrackSessionList(trackSessionResponse),
        [trackSessionResponse],
    );

    return (
        <>
            <PageHeader title={text.trackSessions} description={text.description} />

            {isLoading ? (
                <ShimmerUiContainer className={styles['shimmer-data']} />
            ) : (
                <TableUi
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    data={finalTrackSessionList}
                    limit={limit}
                    totalCount={total}
                    setTableFilter={setTableFilter}
                    tableFilter={tableFilter}
                    StatusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                />
            )}

            <ToastContainer />
        </>
    );
};
export default TrackSessionPage;
