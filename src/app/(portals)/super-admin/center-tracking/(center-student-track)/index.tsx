'use client';

import React, { useMemo, useState } from 'react';

import { PageHeader, ShimmerUiContainer } from '@/components/index';

import useDebounce from '@/utils/useDebounce';

import { DEBOUNCE_SEARCH_TIME } from '@/constant/appConstants';

import EditIcon from '@/public/assets/svg/chevron-right.svg';

import { ToastContainer } from 'react-toastify';

import { getCenterStudentListType } from '../type';

import { useGetCenterStudentList } from '../queries';

import TableUi from './TableUi';

import { CENTRE_TRACKING_TEXT as text } from './constant';

import styles from './styles.module.scss';

const CenterStudentTrack = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [tableFilter, setTableFilter] = useState<string>('');

    const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const { isLoading, data, isFetching } = useGetCenterStudentList({
        page: currentPage,
        limit: 25,
        search: debouncedFilters,
    });

    const { response } = data || {};

    const { results = [], totalCount = 0 } = response || {};

    const getCenterStudentList = (results: getCenterStudentListType[]) => {
        const data = results?.map((item) => ({
            ...item,
            studentID: item.centerId,

            nameAgeGender: item.centerName,

            sessionSchedule: item.centerAdmin,

            sessionStatus: item.studentCount,

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

    const finalCenterStudentList = useMemo(() => getCenterStudentList(results), [results]);

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
                    data={finalCenterStudentList}
                    totalCount={totalCount}
                />
            )}

            <ToastContainer />
        </div>
    );
};
export default CenterStudentTrack;
