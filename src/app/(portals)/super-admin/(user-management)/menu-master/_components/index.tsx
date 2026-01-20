'use client';

import React, { useEffect, useMemo, useState } from 'react';

import { PageHeader, ShimmerUiContainer, Toggle } from '@/components/index';

import EditIcon from '@/public/assets/svg/edit-icon.svg';

import { DEBOUNCE_SEARCH_TIME, MenuMasterStatusNumber } from '@/constant/appConstants';

import useDebounce from '@/utils/useDebounce';

import { menuMasterType } from '@/types/menuMasterType';

import { useGetMenuMasterList } from '../queries';

import { FormValues } from './Modal/MenuMaster/type';
import { INITIAL_STATE as initialState } from './Modal/MenuMaster/constant';
import MenuMasterModal from './Modal/MenuMaster';

import TableUi from './TableUi';

import { MENU_MASTER_TEXT as text } from './constant';

import styles from './styles.module.scss';

const MenuMasterPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [addMenuMasterModal, setAddMenuMasterModal] = useState<boolean>(false);

    const [formValues, setFormValues] = useState<FormValues>(initialState);

    const [tableFilter, setTableFilter] = useState<string>('');

    const handleAddMenuMaster = () => {
        setFormValues(initialState);
        setAddMenuMasterModal(true);
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
                        isToggled={item?.status === MenuMasterStatusNumber.ACTIVE}
                        onToggle={() => {}}
                    />
                </div>
            ),
            edit: <EditIcon onClick={() => {}} />,
        }));

        return data;
    };

    const menuMasterList = useMemo(() => getMenuMasterType(results), [results]);

    return (
        <>
            <MenuMasterModal
                open={addMenuMasterModal}
                setOpen={setAddMenuMasterModal}
                formValues={formValues}
                setFormValues={setFormValues}
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
        </>
    );
};
export default MenuMasterPage;
