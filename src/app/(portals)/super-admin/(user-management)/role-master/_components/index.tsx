'use client';

import { useState, useEffect } from 'react';

import { NoDataContainer, PageHeader, Table } from '@/components';

import CloudIcon from '@/public/assets/svg/cloud-no-data.svg';

import RoleMasterModal from './Modal/RoleMaster';

import { FormValues } from './Modal/RoleMaster/type';

import { INITIAL_STATE as initialState } from './Modal/RoleMaster/constant';

import { ROLE_MASTER_COLUMNS, ROLE_MASTER_TEXT as text } from './constant';

const RoleMasterPage = () => {
    const [addRoleMasterModal, setAddRoleMasterModal] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<FormValues>(initialState);

    const handleRoleMasterType = () => {
        setFormValues(initialState);
        setAddRoleMasterModal(true);
    };

    const getRoleMastereData = () => {
        // Api Call here
    };

    useEffect(() => {
        getRoleMastereData();
    }, []);

    return (
        <>
            <RoleMasterModal
                open={addRoleMasterModal}
                setOpen={setAddRoleMasterModal}
                formValues={formValues}
                setFormValues={setFormValues}
            />
            <PageHeader
                title={text.roleMaster}
                description={text.manageAndCustomize}
                buttonLabel={text.addRole}
                onButtonClick={handleRoleMasterType}
            />
            <NoDataContainer
                Icon={<CloudIcon />}
                title={text.noRole}
                description={text.addRoletoGetStarted}
            />
            <Table columns={ROLE_MASTER_COLUMNS} data={[]} totalCount={50} />
        </>
    );
};

export default RoleMasterPage;
