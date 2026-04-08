'use client';

import React, { useMemo, useState } from 'react';

import { PageHeader, ShimmerUiContainer } from '@/components/index';

import useDebounce from '@/utils/useDebounce';

import { DEBOUNCE_SEARCH_TIME } from '@/constant/appConstants';

import EditIcon from '@/public/assets/svg/chevron-right.svg';

import { ToastContainer } from 'react-toastify';

import { getCenterStaffListType } from '../type';

import { useGetCenterStaffList } from '../queries';

import TableUi from './TableUi';

import { CENTRE_TRACKING_TEXT as text } from './constant';

import styles from './styles.module.scss';

const CenterStaffTrack = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [tableFilter, setTableFilter] = useState<string>('');

    const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const { isLoading, data, isFetching } = useGetCenterStaffList({
        centerAdminId: '234',
        page: currentPage,
        limit: 25,
        search: debouncedFilters,
    });

    const { response } = data || {};

    const { data: staffList = [], total = 0 } = response || {};

    const getCenterStaffList = (results: getCenterStaffListType[]) => {
        const data = results?.map((item) => ({
            ...item,
            staffName: item.name,

            specialization: item.specialization,

            student: item.assignedStudents,

            action: (
                <EditIcon
                    onClick={() => {
                        // handleEditAdmin(item);
                    }}
                    className={styles['cursor-pointer']}
                />
            ),
        }));

        return data;
    };

    const finalCenterStaffList = useMemo(() => getCenterStaffList(staffList), [staffList]);

    return (
        <div className={styles['assessment-page']}>
            <PageHeader title={text.centerName} description={text.simplifyCenter} />

            {isLoading || isFetching ? (
                <ShimmerUiContainer className={styles['shimmer-data']} />
            ) : (
                <TableUi
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setTableFilter={setTableFilter}
                    tableFilter={tableFilter}
                    data={finalCenterStaffList}
                    totalCount={total}
                />
            )}

            <ToastContainer />
        </div>
    );
};
export default CenterStaffTrack;
