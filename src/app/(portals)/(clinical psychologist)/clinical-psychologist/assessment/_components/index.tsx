'use client';

import React, { useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { PageHeader, ShimmerUiContainer, Text } from '@/components/index';

import { ToastContainer } from 'react-toastify';

import ThreeDotIcon from '@/public/assets/svg/trhee-dot.svg';

import { DEBOUNCE_SEARCH_TIME, StatusDataType, StatusNumber } from '@/constant/appConstants';

import useDebounce from '@/utils/useDebounce';

import { FontType } from '@/types/typographyCommon';

import useClickOutside from '@/hooks/useClickOutside';

import { setStudentDetail } from '@/utils/cookieManager';

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

    const router = useRouter();

    const [openMenuId, setOpenMenuId] = useState<string | null>(null);

    const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleThreeDot = (id: string) => {
        setOpenMenuId((prev) => (prev === id ? null : id));
    };

    const handleCaseStudyRedirection = (item: AssessmentStudentType) => {
        const { studentId } = item;

        setStudentDetail(JSON.stringify(item));

        router.push(`/${AppRoutes.ASSESSMENT}/${studentId}`);
    };

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
                            {`${startTime || ''} - ${endTime || ''}`}
                        </Text>
                    </div>
                ),

                assignedTherapist: (
                    <div className={styles['table-Session-text']}>
                        {transferredEducators?.length > 0 ? (
                            transferredEducators.map((educator: string) => (
                                <div key={educator}>{educator}</div>
                            ))
                        ) : (
                            <span className={styles['assign-btn']} role='button' aria-hidden='true'>
                                _
                            </span>
                        )}
                    </div>
                ),

                action: (
                    <div className={styles['action-wrapper']}>
                        <div className={styles['cursor-pointer']}>
                            <ThreeDotIcon onClick={() => handleThreeDot(studentId)} />
                        </div>

                        {openMenuId === item?.studentId && (
                            <div className={styles['dropdown-menu']} ref={dropdownRef}>
                                <div
                                    className={styles['dropdown-item']}
                                    onClick={() => {
                                        handleCaseStudyRedirection(item);
                                    }}
                                    aria-hidden='true'
                                >
                                    <Text
                                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                        color='text-idle'
                                    >
                                        Start Case Study
                                    </Text>
                                </div>
                            </div>
                        )}
                    </div>
                ),
            };
        });

    useClickOutside(dropdownRef, () => setOpenMenuId(null));

    const finalAssessmentList = useMemo(
        () => getClinicalPsychologistAssessmentList(assessmentResponse),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [assessmentResponse, openMenuId],
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
export default ClinicalPsychologistAssessmentPage;
