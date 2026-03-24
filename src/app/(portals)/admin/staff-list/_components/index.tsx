'use client';

import React, { useMemo, useState } from 'react';
import cx from 'classnames';

import { PageHeader, ShimmerUiContainer } from '@/components/index';

import { ToastContainer } from 'react-toastify';

import { STATIC_GENDER, StatusNumber, StatusNumberString } from '@/constant/appConstants';

import TableUi from './TableUi';

import { useGetAdminStaffManagementList } from '../queries';

import { STATUS_LABEL_MAP as statusLabelMap, STAFF_LIST_TEXT as text } from './constant';

import AddNewStaff from './Modal/AddNewStaff';

import { INITIAL_STATE as initialState } from './Modal/AddNewStaff/constant';

import { AdminStaffFormKeys, FormValues } from './Modal/AddNewStaff/type';

import { staffListDataType } from '../type';

import { useUserAdminStaffAction } from '../useAdminStaffAction';

import styles from './styles.module.scss';

const AdminStaffListPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [addNewStaffModal, setAddNewStaffModal] = useState<boolean>(false);

    const [formValues, setFormValues] = useState<FormValues>(initialState);

    const [adminStaffId, setAdminStaffId] = useState<number | null>(null);

    const { execute } = useUserAdminStaffAction({
        setShow: setAddNewStaffModal,
    });

    const { isLoading, data } = useGetAdminStaffManagementList({
        page: currentPage,
        limit: 10,
    });

    const { response } = data || {};

    const { limit, data: staffManagementData = [], total: totalCount } = response || {};

    const handleEditModal = (item: staffListDataType) => {
        setFormValues(initialState);
        setAddNewStaffModal(true);
        setAdminStaffId(Number(item?.id));

        const gender = STATIC_GENDER.find((g) => g.name === item?.gender);

        const genderDetail = {
            id: Number(gender?.id) ?? null,
            name: gender?.name ?? '',
        };

        const updatedLanguages = item?.languages.map((item) => ({
            id: item.languageId.toString(),
            name: item.language,
        }));

        setFormValues((prevValues) => ({
            ...prevValues,
            [AdminStaffFormKeys.NAME]: item?.name,
            [AdminStaffFormKeys.PHONE_NO]: item?.phone,
            [AdminStaffFormKeys.EMAIL_ID]: item?.email,
            [AdminStaffFormKeys.TOTAL_YEAR_EXPERIENCE]: item?.totalYearOfExperience,
            [AdminStaffFormKeys.GENDER]: genderDetail,
            [AdminStaffFormKeys.SELECTED_SPECIALIZATION]: {
                id: Number(item?.specialist[0].specializationId),
                name: item?.specialist[0].specialization,
            },
            [AdminStaffFormKeys.ASSIGN_ROLE]: {
                id: item.roleId,
                roleName: item?.role,
            },
            [AdminStaffFormKeys.LANGUAGE]: updatedLanguages,
        }));
    };

    const getAdminStaffManagementList = (results: staffListDataType[] = []) =>
        results?.map((item) => {
            const { name, email, status, assignedStudents, specialist, languages } = item;

            const reverseStatus =
                Number(status) === StatusNumber.ACTIVE
                    ? StatusNumber.INACTIVE
                    : StatusNumber.ACTIVE;
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
                specialist: <div>{specialist[0]?.specialization}</div>,
                status: (
                    <div className={styles[`status-${status}`] || ''}>
                        {status === StatusNumber.ACTIVE && <div className={styles.dot} />}
                        {statusLabel}
                    </div>
                ),
                languages: languages.map((item) => item.language).join(', '),
                changeStatus: (
                    <div
                        className={cx(
                            styles[`status-${reverseStatus}`] || '',
                            styles['cursor-pointer'],
                        )}
                        onClick={() => {
                            execute({
                                type: 'status',
                                id: item?.id,
                                status:
                                    item?.status === StatusNumber.ACTIVE
                                        ? StatusNumberString.INACTIVE
                                        : StatusNumberString.ACTIVE,
                            });
                        }}
                        aria-hidden='true'
                    >
                        {changeStatusLabel}
                    </div>
                ),
                assignedStudents: (
                    <div className={styles['assigned-students']}>{assignedStudents}</div>
                ),

                action: (
                    <div
                        className={styles['edit-action']}
                        onClick={() => {
                            handleEditModal(item);
                        }}
                        aria-hidden='true'
                    >
                        Edit
                    </div>
                ),
            };
        });

    const handleAddNewAdmin = () => {
        setFormValues(initialState);
        setAddNewStaffModal(true);
        setAdminStaffId(null);
    };

    const finalStaffManagementList = useMemo(
        () => getAdminStaffManagementList(staffManagementData),
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    AdminStaffId={adminStaffId}
                    setAdminStaffId={setAdminStaffId}
                />
            )}

            <PageHeader
                title={text.staffManagement}
                description={text.description}
                buttonLabel={text.createStaff}
                onButtonClick={handleAddNewAdmin}
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
