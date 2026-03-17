'use client';

import React, { useMemo, useState } from 'react';

import { PageHeader, ShimmerUiContainer } from '@/components/index';

import { ToastContainer } from 'react-toastify';

import { DEBOUNCE_SEARCH_TIME, StatusDataType, StatusNumber } from '@/constant/appConstants';

import useDebounce from '@/utils/useDebounce';

import { ASSESSMENT_TEXT as text, STATUS_LABEL_MAP as statusLabelMap } from './constant';

import { useGetClinicalPsychologistAssessmentList } from '../queries';

import TableUi from './TableUi';

import { AssessmentStudentType } from '../type';

import styles from './styles.module.scss';

const ClinicalPsychologistAssessmentPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(StatusNumber.ACTIVE);
    const [tableFilter, setTableFilter] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<StatusDataType | null>(null);

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
            const { studentId, studentName, gender, startTime, endTime, bookingDate, status } =
                item;

            const genderInitial = gender?.[0] ?? '';
            const statusLabel = statusLabelMap[status] ?? 'Unknown';

            return {
                ...item,

                studentId: <div className={styles['capsule-container']}>{`STU-${studentId}`}</div>,

                nameAgeGender: `${studentName} (- / ${genderInitial})`,

                sessionStatus: (
                    <div className={styles[`status-${status}`] || ''}>{statusLabel}</div>
                ),

                sessionDate: (
                    <div>
                        {bookingDate}
                        <div>
                            {startTime} - {endTime}
                        </div>
                    </div>
                ),

                // sessionWith: (
                //     <div className={styles['table-Session-text']}>
                //         {staffName}
                //         {specializations.length > 0 && (
                //             <div>
                //                 <span> ({specializations.join(', ')})</span>
                //             </div>
                //         )}
                //     </div>
                // ),

                assignedTherapist: <div className={styles['table-Session-text']}>Not Assigned</div>,
            };
        });

    const finalAssessmentList = useMemo(
        () => getClinicalPsychologistAssessmentList(assessmentResponse),
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
export default ClinicalPsychologistAssessmentPage;
