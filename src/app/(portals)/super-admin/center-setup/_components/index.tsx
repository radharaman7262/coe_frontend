'use client';

import React, { useMemo, useState } from 'react';

import { PageHeader, ShimmerUiContainer, Toggle } from '@/components/index';

import { ToastContainer } from 'react-toastify';

import useDebounce from '@/utils/useDebounce';

import { DEBOUNCE_SEARCH_TIME, StatusNumber, StatusNumberString } from '@/constant/appConstants';

import EditIcon from '@/public/assets/svg/edit-icon.svg';

import { INITIAL_STATE as initialState } from './Modal/AddNewCenter/constant';

import { AdminType, CenterSetupFormKeys, FormValues } from './Modal/AddNewCenter/type';
import AddNewCentre from './Modal/AddNewCenter';

import { useUserCenterSetupActions } from '../userCenterSetupAction';
import { useGetCenterList } from '../queries';
import { getCenterSetupListType } from '../type';

import TableUi from './TableUi';

import { NEW_CENTRE_TEXT as text } from './constant';

import styles from './styles.module.scss';

const CenterSetupPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [addNewCenterModal, setAddNewCenterModal] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<FormValues>(initialState);
    const [tableFilter, setTableFilter] = useState<string>('');

    const [centerId, setCenterId] = useState<number | null>(null);

    const handleAddNewCenter = () => {
        setCenterId(null);
        setFormValues(initialState);
        setAddNewCenterModal(true);
    };

    const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const { isLoading, data, isFetching } = useGetCenterList({
        page: currentPage,
        limit: 25,
        search: debouncedFilters,
    });

    const { response } = data || {};

    const { results = [], totalCount = 0 } = response || {};

    const { execute } = useUserCenterSetupActions({
        setShow: setAddNewCenterModal,
    });

    const handleEditModal = (item: getCenterSetupListType) => {
        setAddNewCenterModal(true);
        setCenterId(Number(item?.centerId));
        setFormValues((prevValues) => ({
            ...prevValues,
            [CenterSetupFormKeys.CENTER_NAME]: item?.name,
            [CenterSetupFormKeys.ADDRESS]: item?.address,
            [CenterSetupFormKeys.CONTACT_DETAILS]: item?.phone,
            [CenterSetupFormKeys.SELECTED_ADMIN]: {
                fullName: item?.centerAdmin,
                userId: Number(item?.adminId),
            } as AdminType,
        }));
    };

    const getCenterSetupList = (results: getCenterSetupListType[]) => {
        const data = results?.map((item) => ({
            ...item,
            status: (
                <div className={styles['toggle-data']}>
                    <Toggle
                        value={item?.centerId.toString()}
                        isToggled={item?.status === StatusNumber.ACTIVE}
                        onToggle={(_, id) => {
                            execute({
                                type: 'status',
                                id: id.toString(),
                                status:
                                    item?.status === StatusNumber.ACTIVE
                                        ? StatusNumberString.INACTIVE
                                        : StatusNumberString.ACTIVE,
                            });
                        }}
                    />
                </div>
            ),
            action: (
                <EditIcon
                    onClick={() => {
                        handleEditModal(item);
                    }}
                    className={styles['cursor-pointer']}
                />
            ),
            centerAdmin: (
                <div>
                    {item?.centerAdmin ? (
                        <div>
                            <div>{item.centerAdmin}</div>
                            <div className={styles.email}>{item.email}</div>
                        </div>
                    ) : (
                        <div
                            className={styles['assign-capsule-container']}
                            onClick={() => {
                                handleEditModal(item);
                            }}
                            aria-hidden='true'
                        >
                            + Assign Admin
                        </div>
                    )}
                </div>
            ),
        }));

        return data;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const finalCenterSetupList = useMemo(() => getCenterSetupList(results), [results]);

    return (
        <div className={styles['assessment-page']}>
            {addNewCenterModal && (
                <AddNewCentre
                    open={addNewCenterModal}
                    setOpen={setAddNewCenterModal}
                    formValues={formValues}
                    setFormValues={setFormValues}
                    centerId={centerId}
                    setCenterId={setCenterId}
                />
            )}

            <PageHeader
                title={text.centerCreation}
                description={text.simplifyCenter}
                buttonLabel={text.createCenter}
                onButtonClick={handleAddNewCenter}
            />

            {isLoading || isFetching ? (
                <ShimmerUiContainer className={styles['shimmer-data']} />
            ) : (
                <TableUi
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setTableFilter={setTableFilter}
                    tableFilter={tableFilter}
                    data={finalCenterSetupList}
                    totalCount={totalCount}
                />
            )}
            <ToastContainer />
        </div>
    );
};
export default CenterSetupPage;
