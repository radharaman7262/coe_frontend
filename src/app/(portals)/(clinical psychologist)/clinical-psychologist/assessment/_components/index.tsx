'use client';

import React, { useMemo, useRef, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Button, PageHeader, ShimmerUiContainer, Text } from '@/components/index';
import { getStudentDetail, setStudentDetail } from '@/utils/cookieManager';

import { ToastContainer } from 'react-toastify';

import ThreeDotIcon from '@/public/assets/svg/trhee-dot.svg';

import { DEBOUNCE_SEARCH_TIME, StatusDataType, StatusNumber } from '@/constant/appConstants';

import useDebounce from '@/utils/useDebounce';

import useClickOutside from '@/hooks/useClickOutside';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { AppRoutes } from '@/constant/appRoutes';
import { ASSESSMENT_TEXT as text, STATUS_LABEL_MAP as statusLabelMap } from './constant';

import { useGetClinicalPsychologistAssessmentList } from '../queries';

import TableUi from './TableUi';

import { AssessmentStudentType } from '../type';

import styles from './styles.module.scss';

const ClinicalPsychologistAssessmentPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(StatusNumber.ACTIVE);
    const [tableFilter, setTableFilter] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<StatusDataType | null>(null);
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

    const router = useRouter();

    const actionRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(actionRef, () => setOpenMenuIndex(null));

    const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const { isLoading, data } = useGetClinicalPsychologistAssessmentList({
        page: currentPage,
        limit: 10,
        search: debouncedFilters,
        status: statusFilter?.id || '',
    });

    const { response } = data || {};

    const { limit, finalData: assessmentResponse = [], total = 0 } = response || {};

    const getClinicalPsychologistAssessmentList = (results: AssessmentStudentType[] = []) =>
        results.map((item) => {
            const {
                studentId,
                studentName,
                gender,
                age,
                startTime,
                endTime,
                bookingDate,
                status,
                fatherName,
                transferredEducators = [],
            } = item;

            const genderInitial = gender?.[0] ?? '';
            const statusLabel = statusLabelMap[status] ?? 'Unknown';

            const formattedDate = bookingDate
                ? new Date(bookingDate).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                  })
                : '-';

            return {
                ...item,

                studentId: <div className={styles['capsule-container']}>{`STU-${studentId}`}</div>,

                nameAgeGender: (
                    <div className={styles['name-container']}>
                        <div className={styles['name-row']}>
                            <Text
                                font={[FontType.text_xs_medium, FontType.text_xs_medium]}
                                color='text-gray-900'
                            >
                                {studentName}
                            </Text>

                            <Text
                                font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                                color='gray-500'
                            >
                                {`(${age} | ${genderInitial})`}
                            </Text>
                        </div>

                        <Text
                            font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                            color='gray-500'
                        >
                            {`S/o ${fatherName}`}
                        </Text>
                    </div>
                ),

                sessionStatus: (
                    <div className={styles[`status-${status}`] || ''}>{statusLabel}</div>
                ),

                sessionDate: (
                    <div className={styles['date-container']}>
                        <Text
                            font={[FontType.text_xs_medium, FontType.text_xs_medium]}
                            color='text-gray-900'
                        >
                            {formattedDate}
                        </Text>
                        <Text
                            font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                            color='gray-500'
                        >
                            {`${startTime} - ${endTime}`}
                        </Text>
                    </div>
                ),

                assignedTherapist: (
                    <div className={styles['table-Session-text']}>
                        {transferredEducators?.length
                            ? transferredEducators?.map((educator: string, index: number) => (
                                  // eslint-disable-next-line react/jsx-indent
                                  <div key={index as number}>{educator}</div>
                              ))
                            : 'Not Assigned'}
                    </div>
                ),

                action: (
                    <div className={styles['action-wrapper']}>
                        <button
                            type='button'
                            className={styles['three-dot-btn']}
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpenMenuIndex((prev) =>
                                    prev === +item.studentId ? null : +item.studentId,
                                );
                                setStudentDetail(JSON.stringify(item));
                            }}
                        >
                            <ThreeDotIcon />
                        </button>
                    </div>
                ),
            };
        });

    const finalAssessmentList = useMemo(
        () => getClinicalPsychologistAssessmentList(assessmentResponse),
        [assessmentResponse],
    );

    const handleClick = () => {
        const details = getStudentDetail();

        const userDetails = details ? JSON.parse(details) : {};

        const { studentId } = userDetails || {};

        router.push(`/${AppRoutes.ASSESSMENT}/${studentId}`);
    };

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

            {openMenuIndex && (
                <div className={styles['action-popup']} ref={actionRef}>
                    <Button
                        label='Start Case Study'
                        variant={ButtonVariant.NORMAL}
                        color='black'
                        type='button'
                        className={styles['action-item']}
                        onClick={handleClick}
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                    />
                    <Button
                        label='Re Schedule'
                        variant={ButtonVariant.NORMAL}
                        color='black'
                        type='button'
                        className={styles['action-item']}
                        onClick={handleClick}
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                    />
                </div>
            )}
            <ToastContainer />
        </>
    );
};
export default ClinicalPsychologistAssessmentPage;
