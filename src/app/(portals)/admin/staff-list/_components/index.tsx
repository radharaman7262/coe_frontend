'use client';

import React, { useMemo, useState } from 'react';

import { PageHeader, ShimmerUiContainer } from '@/components/index';

import { ToastContainer } from 'react-toastify';

import TableUi from './TableUi';

import { useGetAdminStaffManagementList } from '../queries';

import { STATUS_LABEL_MAP as statusLabelMap, STAFF_LIST_TEXT as text } from './constant';

import AddNewStaff from './Modal/AddNewStaff';

import { INITIAL_STATE } from './Modal/AddNewStaff/constant';

import { FormValues } from './Modal/AddNewStaff/type';

import { staffListDataType } from '../type';

import styles from './styles.module.scss';

const AdminStaffListPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [addNewStaffModal, setAddNewStaffModal] = useState<boolean>(true);

    const [formValues, setFormValues] = useState<FormValues>(INITIAL_STATE);

    const { isLoading, data } = useGetAdminStaffManagementList({
        page: currentPage,
        limit: 10,
    });

    const { response } = data || {};

    const { limit, data: staffManagementData = [], total: totalCount } = response || {};

    const getAdminStaffManagementList = (results: staffListDataType[] = []) =>
        results?.map((item) => {
            const { name, email, specialist, status, assignedStudents } = item;

            const reverseStatus = Number(status) === 1 ? 0 : 1;
            const statusLabel = statusLabelMap[status] ?? 'Unknown';
            const changeStatusLabel = statusLabelMap[reverseStatus] ?? 'Unknown';

            return {
                ...item,
                name: (
                    <div>
                        {name}
                        <div>{email}</div>
                    </div>
                ),

                specialist: specialist.length > 0 && (
                    <div>
                        {specialist?.map((spec, index) => <div key={index as number}>{spec}</div>)}
                    </div>
                ),

                status: (
                    <div className={styles[`status-${status}`] || ''}>
                        <div className={styles.dot} />
                        {statusLabel}
                    </div>
                ),
                changeStatus: (
                    <div className={styles[`status-${reverseStatus}`] || ''}>
                        {changeStatusLabel}
                    </div>
                ),
                assignedStudents: (
                    <div className={styles['assigned-students']}>{assignedStudents}</div>
                ),

                action: <div className={styles['edit-action']}>Edit</div>,
            };
        });

    const finalStaffManagementList = useMemo(
        () => getAdminStaffManagementList(staffManagementData),
        [staffManagementData],
    );

    return (
        <>
            {addNewStaffModal && (
                <AddNewStaff
                    open={addNewStaffModal}
                    setOpen={setAddNewStaffModal}
                    formValues={formValues}
                    setFormValues={setFormValues}
                />
            )}

            <PageHeader
                title={text.staffManagement}
                description={text.description}
                buttonLabel={text.createStaff}
            />

            {isLoading ? (
                <ShimmerUiContainer className={styles['shimmer-data']} />
            ) : (
                <TableUi
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    data={finalStaffManagementList}
                    limit={limit}
                    totalCount={totalCount}
                />
            )}

            <ToastContainer />
        </>
    );
};

export default AdminStaffListPage;
