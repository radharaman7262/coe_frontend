'use client';

import React, { useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { PageHeader, ShimmerUiContainer, Text } from '@/components/index';

import useDebounce from '@/utils/useDebounce';

import { DEBOUNCE_SEARCH_TIME } from '@/constant/appConstants';

import EditIcon from '@/public/assets/svg/chevron-right.svg';

import { ToastContainer } from 'react-toastify';

import { FontType } from '@/types/typographyCommon';

import { formatDate, formatTime } from '@/utils/formatDate';

import TableUi from './TableUi';

import { getCenterStudentListType } from '../../../../type';

import { useGetCenterStudentList } from '../../../../queries';

import styles from './styles.module.scss';
import { STATUS_LABEL_MAP } from './constant';

const CenterStudentTrack = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { staffId } = useParams<{ staffId: string }>();

    const router = useRouter();

    const [tableFilter, setTableFilter] = useState<string>('');

    const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const { isLoading, data, isFetching } = useGetCenterStudentList({
        staffId,
        page: currentPage,
        limit: 25,
        search: debouncedFilters,
    });

    const { response } = data || {};

    const { data: studentList = [], total = 0, staffName, specializationName } = response || {};

    const handleRedirection = (item: getCenterStudentListType) => {
        router.push(`/super-admin/profile/${item?.studentId}`);
    };

    const getCenterStudentList = (results: getCenterStudentListType[]) => {
        const data = results?.map((item) => ({
            ...item,

            studentID: (
                <div className={styles['capsule-container']}>{`STU-${item?.studentId}`}</div>
            ),

            nameAgeGender: (
                <div className={styles['name-row']}>
                    <Text
                        font={[FontType.text_xs_medium, FontType.text_xs_medium]}
                        color='text-gray-900'
                    >
                        {item?.studentName}
                    </Text>

                    <Text
                        font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                        color='gray-500'
                    >
                        {`(${item?.age}y | ${item?.gender?.charAt(0)})`}
                    </Text>
                </div>
            ),

            sessionSchedule: (
                <div className={styles['date-container']}>
                    <Text
                        font={[FontType.text_xs_medium, FontType.text_xs_medium]}
                        color='text-gray-900'
                    >
                        {formatDate(item?.bookingDate)}
                    </Text>
                    <Text
                        font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                        color='gray-500'
                    >
                        {`${formatTime(item?.startTime)} - ${formatTime(item?.endTime)}`}
                    </Text>
                </div>
            ),

            sessionStatus: (
                <div className={styles[`status-${item?.status}`] || ''}>
                    {STATUS_LABEL_MAP[item?.status] ?? 'Unknown'}{' '}
                </div>
            ),

            action: (
                <EditIcon
                    className={styles['cursor-pointer']}
                    onClick={() => {
                        handleRedirection(item);
                    }}
                />
            ),
        }));

        return data;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const finalCenterStudentList = useMemo(() => getCenterStudentList(studentList), [studentList]);

    return (
        <div className={styles['assessment-page']}>
            <PageHeader title={staffName || ' '} description={specializationName || ''} />

            {isLoading || isFetching ? (
                <ShimmerUiContainer className={styles['shimmer-data']} />
            ) : (
                <TableUi
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setTableFilter={setTableFilter}
                    tableFilter={tableFilter}
                    data={finalCenterStudentList}
                    totalCount={total}
                />
            )}

            <ToastContainer />
        </div>
    );
};
export default CenterStudentTrack;
