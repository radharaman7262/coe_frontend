'use client';

import { useState, useEffect } from 'react';

import { NoDataContainer, PageHeader, Table } from '@/components/index';

import CloudIcon from '@/public/assets/svg/cloud-no-data.svg';

import { FormValues } from './Modal/UserType/type';

import { INITIAL_STATE as initialState } from './Modal/UserType/constant';

import UserTypeModal from './Modal/UserType';

import { COLUMNS, USERTYPE_TEXT as text } from './constant';

const UserTypePage = () => {
    const [addNewUserTypeModal, setAddNewUserTypeModal] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<FormValues>(initialState);

    const handleAddUserType = () => {
        setFormValues(initialState);
        setAddNewUserTypeModal(true);
    };

    const getUserTypeData = () => {
        // Api Call here
    };

    useEffect(() => {
        getUserTypeData();
    }, []);

    return (
        <>
            <UserTypeModal
                open={addNewUserTypeModal}
                setOpen={setAddNewUserTypeModal}
                formValues={formValues}
                setFormValues={setFormValues}
            />
            <PageHeader
                title={text.userTypeMaster}
                description={text.manageAndCustomize}
                buttonLabel={text.addUserType}
                onButtonClick={handleAddUserType}
            />
            <NoDataContainer
                Icon={<CloudIcon />}
                title={text.noUserType}
                description={text.addUserTypetoStarted}
            />
            <Table columns={COLUMNS} data={[]} totalCount={4} />
        </>
    );
};

export default UserTypePage;
