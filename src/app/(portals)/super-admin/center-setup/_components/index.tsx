'use client';

import React, { useEffect, useState } from 'react';

import { NoDataContainer, PageHeader } from '@/components/index';

import { INITIAL_STATE as initialState } from './Modal/AddNewCenter/constant';

import { FormValues } from './Modal/AddNewCenter/type';

import AddNewCentre from './Modal/AddNewCenter';

import { NEW_CENTRE_TEXT as text } from './constant';

const CenterSetupPage = () => {
    // const [currentPage, setCurrentPage] = useState<number>(1);

    const [addNewCenterModal, setAddNewCenterModal] = useState<boolean>(false);

    const [formValues, setFormValues] = useState<FormValues>(initialState);

    // const [tableFilter, setTableFilter] = useState<string>('');

    const handleAddNewCenter = () => {
        setFormValues(initialState);
        setAddNewCenterModal(true);
    };

    // const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const getCenterSetupData = () => {
        // Api Call here
    };

    useEffect(() => {
        getCenterSetupData();
    }, []);

    return (
        <>
            <AddNewCentre
                open={addNewCenterModal}
                setOpen={setAddNewCenterModal}
                formValues={formValues}
                setFormValues={setFormValues}
            />
            <PageHeader
                title={text.centerCreation}
                description={text.simplifyCenter}
                buttonLabel={text.createCenter}
                onButtonClick={handleAddNewCenter}
            />
            {/* <TableUi
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setTableFilter={setTableFilter}
                tableFilter={tableFilter}
            /> */}

            <NoDataContainer
                title='No Center added yet'
                description='Add user type to get started with viewing and managing them here.'
            />
        </>
    );
};
export default CenterSetupPage;
