'use client';

import React, { useMemo, useState } from 'react';

import { Button, PageHeader, ShimmerUiContainer, Text } from '@/components/index';

import ThreeDotIcon from '@/public/assets/svg/trhee-dot.svg';

import { ToastContainer } from 'react-toastify';

import { DEBOUNCE_SEARCH_TIME, StatusNumber } from '@/constant/appConstants';

import useDebounce from '@/utils/useDebounce';

import { ButtonVariant, FontType } from '@/types/typographyCommon';
import { ASSESSMENT_TEXT as text } from './constant';

import { useGetSpecialEducatorInterventionList } from '../queries';

import TableUi from './TableUi';

import { InterventionType } from '../type';

import styles from './styles.module.scss';

const SpecialEducatorInterventionPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(StatusNumber.ACTIVE);
    const [tableFilter, setTableFilter] = useState<string>('');

    const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const { isLoading, data } = useGetSpecialEducatorInterventionList({
        page: currentPage,
        limit: 10,
        search: debouncedFilters,
        // status: statusFilter?.id || '',
    });

    const { response } = data || {};

    const { limit, data: assessmentResponse = [], total = 0 } = response || {};

    const getSpecialEducatorInterventionList = (results: InterventionType[] = []) =>
        results.map((item) => {
            const { studentName, age, gender, startTime, endTime, bookingDate, isGoalSet } = item;

            const genderInitial = gender?.[0] ?? '';

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

                activeGoals: (
                    <Text
                        font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                        color='gray-500'
                    >
                        {`${isGoalSet} Active Goals`}
                    </Text>
                ),

                achievedGoals: (
                    <Text
                        font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                        color='gray-500'
                    >
                        {`${isGoalSet} Active Goals`}
                    </Text>
                ),

                nextSession: (
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

                action:
                    isGoalSet === '0' || isGoalSet !== '0' ? (
                        <Button
                            label={isGoalSet === '0' ? 'Set Goal' : 'Start Session'}
                            type='button'
                            variant={ButtonVariant.NORMAL}
                            color={isGoalSet === '0' ? 'gray-900' : 'white'}
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                            className={
                                isGoalSet === '0' ? styles['btn-outline'] : styles['btn-primary']
                            }
                        />
                    ) : null,

                edit: <ThreeDotIcon />,
            };
        });

    const finalInterventionList = useMemo(
        () => getSpecialEducatorInterventionList(assessmentResponse),
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
                    data={finalInterventionList}
                    limit={limit}
                    totalCount={total}
                    setTableFilter={setTableFilter}
                    tableFilter={tableFilter}
                />
            )}

            <ToastContainer />
        </>
    );
};
export default SpecialEducatorInterventionPage;
