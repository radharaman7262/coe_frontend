'use client';

import React, { useEffect, useMemo, useState } from 'react';

import { ToastContainer } from 'react-toastify';

import { useRouter } from 'next/navigation';

import { PageHeader, ShimmerUiContainer, Toggle } from '@/components/index';

import EditIcon from '@/public/assets/svg/edit-icon.svg';

import { DEBOUNCE_SEARCH_TIME, StatusNumber, StatusNumberString } from '@/constant/appConstants';

import useDebounce from '@/utils/useDebounce';

import { menuMasterType } from '@/types/menuMasterType';

import { useGetMenuMasterList } from '../queries';

import { INITIAL_STATE as initialState } from './Modal/MenuMaster/constant';
import MenuMasterModal from './Modal/MenuMaster';
import { FormValues } from './Modal/MenuMaster/type';

import { useUserMenuMasterActions } from '../userMenuAction';

import TableUi from './TableUi';

import { MENU_MASTER_TEXT as text } from './constant';

import styles from './styles.module.scss';

const MenuMasterPage = () => {
    const router = useRouter();

    const [, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState<number>(1);

    const [isParentChecked, setIsParentChecked] = useState(false);

    const [addMenuMasterModal, setAddMenuMasterModal] = useState<boolean>(false);

    const [editingMenuId, setEditingMenuId] = useState<string | null>(null);

    const [formValues, setFormValues] = useState<FormValues>(initialState);

    const [tableFilter, setTableFilter] = useState<string>('');

    const { execute } = useUserMenuMasterActions({
        router,
        setLoader: setLoading,
        setShow: setAddMenuMasterModal,
    });

    const handleEditMenuMasterType = (item: menuMasterType) => {
        setIsParentChecked(String(item?.isParent) === '0');
        setEditingMenuId(item?.id);

        setFormValues((prevValues) => ({
            ...prevValues,
            menuName: item?.menuName,
            menuURL: item?.menuLink,
            remarks: item?.remarks ?? '',
            priority: item?.priority,
            selectedParentMenu: item?.parentId
                ? {
                      id: item?.parentId,
                      name: item?.parentMenu || '',
                  }
                : null,
        }));

        setAddMenuMasterModal(true);
    };

    const handleAddMenuMaster = () => {
        setEditingMenuId(null);
        setFormValues(initialState);
        setAddMenuMasterModal(true);
        setIsParentChecked(false);
    };

    const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const { isLoading, data } = useGetMenuMasterList({
        page: currentPage,
        limit: 10,
        search: debouncedFilters,
    });

    const { response } = data || {};

    const { limit, results = [], totalCount = 0 } = response || {};

    useEffect(() => {
        setCurrentPage(1);
    }, []);

    const getMenuMasterType = (userData: menuMasterType[]) => {
        const data = userData?.map((item) => ({
            ...item,
            status: (
                <div className={styles['toggle-data']}>
                    <Toggle
                        value={item?.id.toString()}
                        isToggled={item?.status === StatusNumber.ACTIVE}
                        onToggle={() => {
                            execute({
                                type: 'status',
                                id: item?.id,
                                status:
                                    item?.status === StatusNumber.ACTIVE
                                        ? StatusNumberString.INACTIVE
                                        : StatusNumberString.ACTIVE,
                            });
                        }}
                    />
                </div>
            ),
            edit: (
                <EditIcon
                    onClick={() => handleEditMenuMasterType(item)}
                    className={styles['cursor-pointer']}
                />
            ),
        }));

        return data;
    };

    const handleSubmitMenuMaster = () => {
        if (editingMenuId) {
            execute({
                type: 'update',
                id: editingMenuId,
                body: {
                    menuName: formValues.menuName,
                    menuLink: formValues.menuURL,
                    remarks: formValues.remarks,
                    priority: formValues.priority,
                    parentId: formValues.selectedParentMenu?.id || '0',
                    isParent: formValues.selectedParentMenu ? '0' : '1',
                },
            });
        } else {
            execute({
                type: 'create',
                body: {
                    menuName: formValues.menuName,
                    menuLink: formValues.menuURL,
                    remarks: formValues.remarks,
                    priority: formValues.priority,
                    parentId: formValues.selectedParentMenu?.id || '0',
                    isParent: formValues.selectedParentMenu ? '0' : '1',
                },
            });
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const menuMasterList = useMemo(() => getMenuMasterType(results), [results]);

    return (
        <>
            <MenuMasterModal
                open={addMenuMasterModal}
                setOpen={setAddMenuMasterModal}
                formValues={formValues}
                setFormValues={setFormValues}
                menuMasterList={results}
                onSubmit={handleSubmitMenuMaster}
                isEditMode={Boolean(editingMenuId)}
                isParentChecked={isParentChecked}
                setIsParentChecked={setIsParentChecked}
            />
            <PageHeader
                title={text.menuMaster}
                description={text.manageAndCustomize}
                buttonLabel={text.addMenu}
                onButtonClick={handleAddMenuMaster}
            />
            {isLoading ? (
                <ShimmerUiContainer className={styles['shimmer-data']} />
            ) : (
                <TableUi
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setTableFilter={setTableFilter}
                    tableFilter={tableFilter}
                    data={menuMasterList}
                    totalCount={totalCount}
                    limit={limit}
                    noTitleContainer={text.noMenuMaster}
                    noDescriptionContainer={text.addMenutoGetStarted}
                />
            )}
            <ToastContainer />
        </>
    );
};

export default MenuMasterPage;
