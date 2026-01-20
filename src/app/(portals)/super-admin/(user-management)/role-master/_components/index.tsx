'use client';

import { useState, useMemo } from 'react';

import { NoDataContainer, PageHeader, Table, Toggle } from '@/components';

import EditIcon from '@/public/assets/svg/edit-icon.svg';

import { RoleMasterStatusNumber } from '@/constant/appConstants';

import { RoleType } from '@/types/roleType';

import RoleMasterModal from './Modal/RoleMaster';

import { FormValues } from './Modal/RoleMaster/type';

import { INITIAL_STATE as initialState } from './Modal/RoleMaster/constant';

import { ROLE_MASTER_COLUMNS, ROLE_MASTER_TEXT as text } from './constant';

import styles from './styles.module.scss';

interface roleMasterPageProps {
    roleMasterData: RoleType[];
}

const RoleMasterPage = (props: roleMasterPageProps) => {
    const { roleMasterData } = props;

    const [addRoleMasterModal, setAddRoleMasterModal] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<FormValues>(initialState);

    const getRoleMaster = (roleMasterData: RoleType[]) => {
        const data = roleMasterData?.map((item) => ({
            ...item,
            createdAt: item?.createdAt?.split('T')[0],
            status: (
                <div className={styles['toggle-data']}>
                    <Toggle
                        value={item?.id.toString()}
                        isToggled={item?.status === RoleMasterStatusNumber.ACTIVE}
                        onToggle={() => {}}
                    />
                </div>
            ),
            edit: <EditIcon onClick={() => {}} />,
        }));

        return data;
    };

    const roleMasterList = useMemo(() => getRoleMaster(roleMasterData), [roleMasterData]);

    const handleRoleMasterType = () => {
        setFormValues(initialState);
        setAddRoleMasterModal(true);
    };

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
            {!roleMasterData?.length ? (
                <NoDataContainer title={text.noRole} description={text.addRoletoGetStarted} />
            ) : (
                <Table columns={ROLE_MASTER_COLUMNS} data={roleMasterList} />
            )}
        </>
    );
};

export default RoleMasterPage;
