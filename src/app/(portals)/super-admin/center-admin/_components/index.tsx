'use client';

import React, { useMemo, useState } from 'react';

import { PageHeader, ShimmerUiContainer, Toggle } from '@/components/index';

import useDebounce from '@/utils/useDebounce';

import { DEBOUNCE_SEARCH_TIME, StatusNumber, TEN_MIN_LENGTH } from '@/constant/appConstants';

import EditIcon from '@/public/assets/svg/edit-icon.svg';

import { ToastContainer } from 'react-toastify';

import { INITIAL_STATE as initialState } from './Modal/AddCenterAdmin/constant';

import { CenterAdminFormKeys, FormValues } from './Modal/AddCenterAdmin/type';

import AddCenterAdmin from './Modal/AddCenterAdmin';

import TableUi from './TableUi';

import { CENTERADMIN_TEXT as text } from './constant';

import { useGetCenterAdminList } from '../queries';

import { getCenterAdminListType } from '../type';

import styles from './styles.module.scss';

const CenterAdminPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [addNewCenterAdminModal, setAddNewCenterAdminModal] = useState<boolean>(false);

    const [formValues, setFormValues] = useState<FormValues>(initialState);

    const [tableFilter, setTableFilter] = useState<string>('');

    const [centerAdminId, setCenterAdminId] = useState<number | null>(null);

    const handleAddNewAdmin = () => {
        setFormValues(initialState);
        setAddNewCenterAdminModal(true);
    };

    const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const { isLoading, data } = useGetCenterAdminList({
        page: currentPage,
        limit: TEN_MIN_LENGTH,
        search: debouncedFilters,
    });

    const { response } = data || {};

    const { limit, results = [], totalCount = 0 } = response || {};

    const handleEditAdmin = (item: getCenterAdminListType) => {
        setAddNewCenterAdminModal(true);
        setCenterAdminId(Number(item?.id));
        setFormValues((prevValues) => ({
            ...prevValues,
            [CenterAdminFormKeys.FIRST_NAME]: item?.firstName,
            [CenterAdminFormKeys.LAST_NAME]: item?.lastName,
            [CenterAdminFormKeys.PHONE_NO]: item?.phone,
            [CenterAdminFormKeys.EMAIL_ID]: item?.email,
            [CenterAdminFormKeys.SELECTED_CENTER]: {
                centerId: Number(item?.centerId),
                name: item?.centerName,
            },
            [CenterAdminFormKeys.SELECTED_SPECIALIZATION]: null,
        }));
    };

    const getCenterAdminList = (results: getCenterAdminListType[]) => {
        const data = results?.map((item) => ({
            ...item,
            fullName: `${item?.firstName} ${item?.lastName}`,
            roleName: <div className={styles['capsule-container']}>{item?.roleName}</div>,
            specialization: (
                <div>
                    {item?.specialization?.map((subItem) => (
                        <div>{subItem?.specializationName}</div>
                    ))}
                </div>
            ),
            centerName: (
                <div>
                    {item?.centerName !== null ? (
                        item?.centerName
                    ) : (
                        <div
                            className={styles['assign-capsule-container']}
                            onClick={() => {
                                handleEditAdmin(item);
                            }}
                            aria-hidden='true'
                        >
                            + Assigned Center
                        </div>
                    )}
                </div>
            ),
            status: (
                <div className={styles['toggle-data']}>
                    <Toggle
                        value={item?.id.toString()}
                        isToggled={item?.status === StatusNumber.ACTIVE}
                        onToggle={() => {}}
                    />
                </div>
            ),
            edit: (
                <EditIcon
                    onClick={() => {
                        handleEditAdmin(item);
                    }}
                    className={styles['cursor-pointer']}
                />
            ),
        }));

        return data;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const finalCenterAdminList = useMemo(() => getCenterAdminList(results), [results]);

    return (
        <>
            {addNewCenterAdminModal && (
                <AddCenterAdmin
                    open={addNewCenterAdminModal}
                    setOpen={setAddNewCenterAdminModal}
                    formValues={formValues}
                    setFormValues={setFormValues}
                    centerAdminId={centerAdminId}
                    setCenterAdminId={setCenterAdminId}
                />
            )}

            <PageHeader
                title={text.userManagement}
                description={text.simplifyUser}
                buttonLabel={text.createAdmin}
                onButtonClick={handleAddNewAdmin}
            />

            {isLoading ? (
                <ShimmerUiContainer className={styles['shimmer-data']} />
            ) : (
                <TableUi
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setTableFilter={setTableFilter}
                    tableFilter={tableFilter}
                    data={finalCenterAdminList}
                    limit={limit}
                    totalCount={totalCount}
                />
            )}

            <ToastContainer />
        </>
    );
};
export default CenterAdminPage;
