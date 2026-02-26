'use client';

import { useState, useMemo } from 'react';

import { useRouter } from 'next/navigation';

import { NoDataContainer, PageHeader, Table, Toggle } from '@/components';

import EditIcon from '@/public/assets/svg/edit-icon.svg';

import { StatusNumber, StatusNumberString } from '@/constant/appConstants';

import { RoleType } from '@/types/roleType';

import { ToastContainer } from 'react-toastify';

import { FormValues, RoleFormKeys } from './Modal/RoleMaster/type';

import { INITIAL_STATE as initialState } from './Modal/RoleMaster/constant';

import { ROLE_MASTER_COLUMNS, ROLE_MASTER_TEXT as text } from './constant';

import { useChangeRoleMasterStatusMutation } from '../mutation';

import RoleMasterModal from './Modal/RoleMaster';

import styles from './styles.module.scss';

interface roleMasterPageProps {
    roleMasterData: RoleType[];
}

const RoleMasterPage = (props: roleMasterPageProps) => {
    const { roleMasterData } = props;

    const router = useRouter();

    const { mutate } = useChangeRoleMasterStatusMutation({ router });

    const [addRoleMasterModal, setAddRoleMasterModal] = useState<boolean>(false);
    const [roleId, setRoleId] = useState<number | null>(null);

    const [formValues, setFormValues] = useState<FormValues>(initialState);

    const getRoleMaster = (roleMasterData: RoleType[]) => {
        const data = roleMasterData?.map((item) => ({
            ...item,
            createdAt: item?.createdAt?.split('T')[0],
            status: (
                <div className={styles['toggle-data']}>
                    <Toggle
                        value={item?.id.toString()}
                        isToggled={item?.status === StatusNumber.ACTIVE}
                        onToggle={(_, id) => {
                            mutate({
                                status:
                                    item?.status === StatusNumber.ACTIVE
                                        ? StatusNumberString.INACTIVE
                                        : StatusNumberString.ACTIVE,
                                id: id?.toString(),
                            });
                        }}
                    />
                </div>
            ),
            edit: (
                <EditIcon
                    onClick={() => {
                        setAddRoleMasterModal(true);
                        setRoleId(Number(item?.id));
                        setFormValues((prevValues) => ({
                            ...prevValues,
                            [RoleFormKeys.ROLE_NAME]: item?.roleName,
                            [RoleFormKeys.SELECTED_USER_TYPE]: {
                                id: item?.userTypeId,
                                name: item.userTypeName,
                                status: StatusNumber.ACTIVE,
                            },
                        }));
                    }}
                    className={styles['cursor-pointer']}
                />
            ),
        }));

        return data;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const roleMasterList = useMemo(() => getRoleMaster(roleMasterData), [roleMasterData]);

    const handleRoleMasterType = () => {
        setFormValues(initialState);
        setAddRoleMasterModal(true);
    };

    return (
        <>
            {addRoleMasterModal && (
                <RoleMasterModal
                    open={addRoleMasterModal}
                    setOpen={setAddRoleMasterModal}
                    formValues={formValues}
                    setFormValues={setFormValues}
                    roleId={roleId}
                    setRoleId={setRoleId}
                />
            )}
            <PageHeader
                title={text.roleMaster}
                description={text.manageAndCustomize}
                buttonLabel={text.addRole}
                onButtonClick={handleRoleMasterType}
            />
            {!roleMasterData?.length ? (
                <NoDataContainer title={text.noRole} description={text.addRoletoGetStarted} />
            ) : (
                <Table
                    columns={ROLE_MASTER_COLUMNS}
                    data={roleMasterList}
                    tableClassName={styles['table-container']}
                    baseTableClassName={styles['table-data']}
                />
            )}

            <ToastContainer />
        </>
    );
};

export default RoleMasterPage;
