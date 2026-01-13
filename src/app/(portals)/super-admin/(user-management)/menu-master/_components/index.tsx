'use client';

import React, { useEffect, useState } from 'react';

import { NoDataContainer, PageHeader } from '@/components/index';

import CloudIcon from '@/public/assets/svg/cloud-no-data.svg';

import { DEBOUNCE_SEARCH_TIME } from '@/constant/appConstants';

import useDebounce from '@/utils/useDebounce';

import { FormValues } from './Modal/MenuMaster/type';

import { INITIAL_STATE as initialState } from './Modal/MenuMaster/constant';

import MenuMasterModal from './Modal/MenuMaster';

import TableUi from './TableUi';

import { MENU_MASTER_TEXT as text } from './constant';

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

    const getCenterSetupData = () => {
        // Api Call here
    };

    useEffect(() => {
        getCenterSetupData();
    }, [debouncedFilters]);

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
            <NoDataContainer
                Icon={<CloudIcon />}
                title={text.noMenuMaster}
                description={text.addMenutoGetStarted}
            />
            <TableUi
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setTableFilter={setTableFilter}
                tableFilter={tableFilter}
            />
        </>
    );
};
export default MenuMasterPage;
