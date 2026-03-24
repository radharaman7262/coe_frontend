'use client';

import React, { useMemo, useState } from 'react';

import { PageHeader, ShimmerUiContainer } from '@/components/index';

import { ToastContainer } from 'react-toastify';

import { DEBOUNCE_SEARCH_TIME, StatusDataType, StatusNumber } from '@/constant/appConstants';

import useDebounce from '@/utils/useDebounce';

import { STATUS_LABEL_MAP as statusLabelMap, STUDENT_LIST_TEXT as text } from './constant';

import TableUi from './TableUi';

import StudentDrawerController from './Drawer';

import { useGetStudentList } from './queries';

import { studentDataType } from './type';

import styles from './styles.module.scss';

const AdminStudentListPage = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const [currentPage, setCurrentPage] = useState<number>(StatusNumber.ACTIVE);
    const [tableFilter, setTableFilter] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<StatusDataType | null>(null);

    const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
    const [initialStep, setInitialStep] = useState<number>(1);

    const handleAssignClick = (id: string) => {
        setSelectedStudentId(id);
        setInitialStep(3);
        setOpenDrawer(true);
    };

    const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const { isLoading, data } = useGetStudentList({
        page: currentPage,
        limit: 10,
        search: debouncedFilters,
        status: statusFilter?.id || '',
    });

    const { response } = data || {};

    const { limit, data: studentResponse = [], total = 0 } = response || {};

    const getAdminStudentList = (results: studentDataType[] = []) =>
        results.map((item) => {
            const {
                studentId,
                name,
                age,
                gender,
                sessionSchedule,
                sessionStatus,
                assignedPsychologist,
            } = item;

            const genderInitial = gender?.[0] ?? '';
            const statusLabel = statusLabelMap[sessionStatus] ?? 'Unknown';

            const isAssigned = !!assignedPsychologist;

            return {
                ...item,

                studentId: <div className={styles['capsule-container']}>{`STU-${studentId}`}</div>,

                nameAgeGender: `${name} (${age} / ${genderInitial})`,

                sessionSchedule: sessionSchedule ? (
                    <div>
                        {sessionSchedule.date}
                        <div>
                            {sessionSchedule.startTime} - {sessionSchedule.endTime}
                        </div>
                    </div>
                ) : (
                    '--'
                ),

                assignedPsychologist: isAssigned ? (
                    <span className={styles['assigned-name']}>{assignedPsychologist}</span>
                ) : (
                    <span
                        className={styles['assign-btn']}
                        onClick={() => handleAssignClick(studentId)}
                        role='button'
                        aria-hidden='true'
                    >
                        + Assign Psychologist
                    </span>
                ),

                sessionStatus: (
                    <div className={styles[`status-${sessionStatus}`] || ''}>{statusLabel}</div>
                ),
            };
        });

    const finalStudentList = useMemo(
        () => getAdminStudentList(studentResponse),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [studentResponse],
    );

    const handleOpenDrawer = () => {
        setInitialStep(1);
        setOpenDrawer(true);
    };

    return (
        <>
            <PageHeader
                title={text.studentList}
                description={text.description}
                buttonLabel={text.createStudent}
                onButtonClick={handleOpenDrawer}
            />

            {isLoading ? (
                <ShimmerUiContainer className={styles['shimmer-data']} />
            ) : (
                <TableUi
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    data={finalStudentList}
                    limit={limit}
                    totalCount={total}
                    setTableFilter={setTableFilter}
                    tableFilter={tableFilter}
                    statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                />
            )}
            {openDrawer && (
                <StudentDrawerController
                    openDrawer={openDrawer}
                    setOpenDrawer={setOpenDrawer}
                    initialStep={initialStep}
                    studentIdFromTable={selectedStudentId}
                />
            )}

            <ToastContainer position='top-right' autoClose={3000} pauseOnHover />
        </>
    );
};
export default AdminStudentListPage;
