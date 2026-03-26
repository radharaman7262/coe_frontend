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

import RoleMasterModal from './Modal/RoleMaster';

import styles from './styles.module.scss';
import { useUserRoleActions } from '../userRoleAction';

interface roleMasterPageProps {
    roleMasterData: RoleType[];
}

const RoleMasterPage = (props: roleMasterPageProps) => {
    const { roleMasterData } = props;

    const [, setLoading] = useState(false);
    const [addRoleMasterModal, setAddRoleMasterModal] = useState<boolean>(false);
    const [roleId, setRoleId] = useState<number | null>(null);

    const router = useRouter();

    const { execute } = useUserRoleActions({
        router,
        setLoader: setLoading,
        setShow: setAddRoleMasterModal,
    });

    const [formValues, setFormValues] = useState<FormValues>(initialState);

    const getRoleMaster = (roleMasterData: RoleType[]) => {
        const data = roleMasterData?.map((item) => ({
            ...item,
            createdAt: item?.createdAt?.split('T')[0],
            status: (
                <div className={styles['toggle-data']}>
                    <Toggle
                        value={item?.id || ''}
                        isToggled={item?.status === StatusNumber.ACTIVE}
                        onToggle={(_, id) => {
                            execute({
                                type: 'status',
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
                        setFormValues((prevValues: FormValues) => ({
                            ...prevValues,
                            [RoleFormKeys.ROLE_NAME]: item?.roleName,
                            [RoleFormKeys.SELECTED_USER_TYPE]: {
                                id: item.userTypeId || '',
                                name: item.userTypeName || '',
                                status: item?.status || 0,
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
        <div className={styles['assessment-page']}>
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
        </div>
    );
};

export default RoleMasterPage;
