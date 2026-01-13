'use client';

import React, { useEffect, useState } from 'react';

import { PageHeader } from '@/components/index';

import useDebounce from '@/utils/useDebounce';

import { DEBOUNCE_SEARCH_TIME } from '@/constant/appConstants';

import { INITIAL_STATE as initialState } from './Modal/AddCenterAdmin/constant';

import { FormValues } from './Modal/AddCenterAdmin/type';

import AddCenterAdmin from './Modal/AddCenterAdmin';

import TableUi from './TableUi';

import { CENTERADMIN_TEXT as text } from './constant';

const CenterAdminPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [addNewCenterAdminModal, setAddNewCenterAdminModal] = useState<boolean>(false);

    const [formValues, setFormValues] = useState<FormValues>(initialState);

    const [tableFilter, setTableFilter] = useState<string>('');

    const handleAddNewAdmin = () => {
        setFormValues(initialState);
        setAddNewCenterAdminModal(true);
    };

    const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const getCenterAdminData = () => {
        // Api Call here
    };

    useEffect(() => {
        getCenterAdminData();
    }, [debouncedFilters]);

    return (
        <>
            <AddCenterAdmin
                open={addNewCenterAdminModal}
                setOpen={setAddNewCenterAdminModal}
                formValues={formValues}
                setFormValues={setFormValues}
            />
            <PageHeader
                title={text.userManagement}
                description={text.simplifyUser}
                buttonLabel={text.createAdmin}
                onButtonClick={handleAddNewAdmin}
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
export default CenterAdminPage;
