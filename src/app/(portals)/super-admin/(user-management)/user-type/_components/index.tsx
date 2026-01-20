'use client';

import { useMemo, useState } from 'react';

import { NoDataContainer, PageHeader, Table, Toggle } from '@/components/index';

import { UserStatusNumber } from '@/constant/appConstants';

import EditIcon from '@public/assets/svg/edit-icon.svg';

import { FormValues } from './Modal/UserType/type';
import { INITIAL_STATE as initialState } from './Modal/UserType/constant';
import UserTypeModal from './Modal/UserType';

import { COLUMNS, USERTYPE_TEXT as text } from './constant';

import styles from './styles.module.scss';

interface userDataType {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    status: number;
}

interface UserTypePageProps {
    userData: userDataType[];
}

const UserTypePage = (props: UserTypePageProps) => {
    const { userData } = props;

    const [addNewUserTypeModal, setAddNewUserTypeModal] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<FormValues>(initialState);

    const getUserType = (userData: userDataType[]) => {
        const data = userData?.map((item) => ({
            ...item,
            createdAt: item?.createdAt?.split('T')[0],
            status: (
                <div className={styles['toggle-data']}>
                    <Toggle
                        value={item?.id.toString()}
                        isToggled={item?.status === UserStatusNumber.ACTIVE}
                        onToggle={() => {}}
                    />
                </div>
            ),
            edit: <EditIcon onClick={() => {}} />,
        }));

        return data;
    };

    const userTypeList = useMemo(() => getUserType(userData), [userData]);

    const handleAddUserType = () => {
        setFormValues(initialState);
        setAddNewUserTypeModal(true);
    };

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
            {!userData?.length ? (
                <NoDataContainer title={text.noUserType} description={text.addUserTypetoStarted} />
            ) : (
                <Table columns={COLUMNS} data={userTypeList} />
            )}
        </>
    );
};

export default UserTypePage;
