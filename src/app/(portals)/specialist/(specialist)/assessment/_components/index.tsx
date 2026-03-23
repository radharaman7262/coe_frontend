'use client';

import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button, PageHeader, ShimmerUiContainer, Text } from '@/components/index';

import ThreeDotIcon from '@/public/assets/svg/trhee-dot.svg';

import { ToastContainer } from 'react-toastify';

import { DEBOUNCE_SEARCH_TIME, StatusDataType, StatusNumber } from '@/constant/appConstants';

import useDebounce from '@/utils/useDebounce';

import { ButtonVariant, FontType } from '@/types/typographyCommon';
import { AppRoutes } from '@/constant/appRoutes';
import { ASSESSMENT_TEXT as text } from './constant';

import { useGetSpecialEducatorAssessmentList } from '../queries';

import TableUi from './TableUi';

import { AssessmentStudentType } from '../type';

import styles from './styles.module.scss';

const SpecialEducatorAssessmentPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(StatusNumber.ACTIVE);
    const [tableFilter, setTableFilter] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<StatusDataType | null>(null);

    const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const router = useRouter();

    const { isLoading, data } = useGetSpecialEducatorAssessmentList({
        page: currentPage,
        limit: 10,
        search: debouncedFilters,
        status: statusFilter?.id || '',
    });

    const { response } = data || {};

    const { limit, data: assessmentResponse = [], total = 0 } = response || {};

    const getSpecialEducatorAssessmentList = (results: AssessmentStudentType[] = []) =>
        results.map((item) => {
            const {
                studentName,
                age,
                gender,
                psychologist,
                startTime,
                endTime,
                bookingDate,
                sessionStatus,
            } = item;

            const genderInitial = gender?.[0] ?? '';
            const statusLabel = sessionStatus || 'Unknown';

            const statusKey = sessionStatus?.toLowerCase();

            const formattedDate = bookingDate
                ? new Date(bookingDate).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                  })
                : '-';

            return {
                ...item,

                nameAgeGender: (
                    <div className={styles['name-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-gray-900'
                        >
                            {studentName}
                        </Text>
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='gray-500'
                        >
                            {`(${age} | ${genderInitial})`}
                        </Text>
                    </div>
                ),

                psychologistReport: (
                    <div className={styles['report-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='blue-400'
                            className={styles['case-history']}
                        >
                            {text.caseHistory}
                        </Text>

                        <Text
                            font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                            color='gray-500'
                        >
                            {` by ${psychologist || 'Not Assigned'}`}
                        </Text>
                    </div>
                ),

                sessionDate: (
                    <div className={styles['date-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-gray-900'
                        >
                            {formattedDate}
                        </Text>
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='gray-500'
                        >
                            {`${startTime} - ${endTime}`}
                        </Text>
                    </div>
                ),

                sessionStatus: (
                    <div className={styles[`status-${statusKey}`] || ''}>{statusLabel}</div>
                ),

                action:
                    sessionStatus === 'Pending' || sessionStatus === 'Scheduled' ? (
                        <Button
                            label={
                                sessionStatus === 'Pending' ? 'Start Session' : 'Start Assessment'
                            }
                            type='button'
                            variant={ButtonVariant.NORMAL}
                            color={sessionStatus === 'Pending' ? 'white' : 'gray-900'}
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                            className={
                                sessionStatus === 'Pending'
                                    ? styles['btn-primary']
                                    : styles['btn-outline']
                            }
                            onClick={()=>{
                                if(sessionStatus !== "Pending"){
                                    router.push(`/${AppRoutes.OCCUPATIONAL_THERAPIST_ASSESSMENT}/${item.studentId}`)
                                }
                            }}
                        />
                    ) : null,

                edit: <ThreeDotIcon />,
            };
        });

    const finalAssessmentList = useMemo(
        () => getSpecialEducatorAssessmentList(assessmentResponse),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [assessmentResponse],
    );

    return (
        <>
            <PageHeader title={text.assessment} description={text.description} />

            {isLoading ? (
                <ShimmerUiContainer className={styles['shimmer-data']} />
            ) : (
                <TableUi
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    data={finalAssessmentList}
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
export default SpecialEducatorAssessmentPage;
