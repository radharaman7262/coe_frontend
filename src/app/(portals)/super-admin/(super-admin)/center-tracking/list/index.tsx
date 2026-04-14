'use client';

import React, { useMemo, useState } from 'react';

import { useRouter } from 'next/navigation';

import { PageHeader, ShimmerUiContainer } from '@/components/index';

import useDebounce from '@/utils/useDebounce';

import { DEBOUNCE_SEARCH_TIME } from '@/constant/appConstants';

import EditIcon from '@/public/assets/svg/chevron-right.svg';

import { ToastContainer } from 'react-toastify';

import { AppRoutes } from '@/constant/appRoutes';
import { getCenterTrackListType } from '../type';

import { useGetCenterTrackList } from '../queries';

import TableUi from './TableUi';

import { CENTRE_TRACKING_TEXT as text } from './constant';

import styles from './styles.module.scss';

const CenterTrack = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const router = useRouter();

    const [tableFilter, setTableFilter] = useState<string>('');

    const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const { isLoading, data, isFetching } = useGetCenterTrackList({
        page: currentPage,
        limit: 25,
        search: debouncedFilters,
    });

    const { response } = data || {};

    const { results = [], totalCount = 0 } = response || {};

    const handleRedirection = (item: getCenterTrackListType) => {
        router.push(`${AppRoutes.CENTER_TRACKING}/${item?.centerId}/staff`);
    };

    const getCenterTrackList = (results: getCenterTrackListType[]) => {
        const data = results?.map((item) => ({
            ...item,
            centerName: item.centerName,

            centerAdmin: item.centerAdmin,

            staff: item.staffCount,

            student: item.studentCount,

            action: (
                <div>
                    <EditIcon
                        onClick={() => {
                            handleRedirection(item);
                        }}
                        className={styles['cursor-pointer']}
                    />
                </div>
            ),
        }));

        return data;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const finalCenterTrackList = useMemo(() => getCenterTrackList(results), [results]);

    return (
        <div className={styles['assessment-page']}>
            <PageHeader title={text.centerTracking} description={text.simplifyCenter} />

            {isLoading || isFetching ? (
                <ShimmerUiContainer className={styles['shimmer-data']} />
            ) : (
                <TableUi
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setTableFilter={setTableFilter}
                    tableFilter={tableFilter}
                    data={finalCenterTrackList}
                    totalCount={totalCount}
                />
            )}

            <ToastContainer />
        </div>
    );
};
export default CenterTrack;
