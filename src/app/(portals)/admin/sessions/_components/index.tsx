'use client';

import React, { useMemo, useState } from 'react';

import { PageHeader, ShimmerUiContainer } from '@/components/index';

import { ToastContainer } from 'react-toastify';

import { DEBOUNCE_SEARCH_TIME, StatusDataType, StatusNumber } from '@/constant/appConstants';

import useDebounce from '@/utils/useDebounce';

import { STAFF_LIST_TEXT as text, STATUS_LABEL_MAP as statusLabelMap } from './constant';

import { staffListDataType } from '../../staff-list/type';

import { useGetAdminSessionList } from '../queries';

import TableUi from './TableUi';

import { sessionDataType } from '../type';

import styles from './styles.module.scss';

const AdminSessionPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(StatusNumber.ACTIVE);
    const [tableFilter, setTableFilter] = useState<string>('');
    const [staffFilter, setStaffFilter] = useState<staffListDataType | null>(null);
    const [statusFilter, setStatusFilter] = useState<StatusDataType | null>(null);

    const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const { isLoading, data } = useGetAdminSessionList({
        page: currentPage,
        limit: 10,
        search: debouncedFilters,
        status: statusFilter?.id || '',
        assignedTo: staffFilter?.id || '',
    });

    const { response } = data || {};

    const { limit, data: sessionResponse = [], total = 0 } = response || {};

    const getAdminSessionList = (results: sessionDataType[] = []) =>
        results.map((item) => {
            const {
                studentId,
                studentName,
                age,
                gender,
                status,
                bookingDate,
                startTime,
                endTime,
                staffName,
                specializations = [],
            } = item;

            const genderInitial = gender?.[0] ?? '';
            const statusLabel = statusLabelMap[status] ?? 'Unknown';

            return {
                ...item,

                studentId: <div className={styles['capsule-container']}>{`STU-${studentId}`}</div>,

                nameAgeGender: `${studentName} (${age} / ${genderInitial})`,

                sessionStatus: (
                    <div className={styles[`status-${status}`] || ''}>{statusLabel}</div>
                ),

                sessionSchedule: (
                    <div>
                        {bookingDate}
                        <div>
                            {startTime} - {endTime}
                        </div>
                    </div>
                ),

                sessionWith: (
                    <div className={styles['table-Session-text']}>
                        {staffName}
                        {specializations.length > 0 && (
                            <div>
                                <span> ({specializations.join(', ')})</span>
                            </div>
                        )}
                    </div>
                ),
            };
        });

    const finalSessionList = useMemo(() => getAdminSessionList(sessionResponse), [sessionResponse]);

    return (
        <>
            <PageHeader title={text.staffManagement} description={text.description} />

            {isLoading ? (
                <ShimmerUiContainer className={styles['shimmer-data']} />
            ) : (
                <TableUi
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    data={finalSessionList}
                    limit={limit}
                    totalCount={total}
                    setTableFilter={setTableFilter}
                    tableFilter={tableFilter}
                    StaffFilter={staffFilter}
                    setStaffFilter={setStaffFilter}
                    StatusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                />
            )}

            <ToastContainer />
        </>
    );
};
export default AdminSessionPage;
