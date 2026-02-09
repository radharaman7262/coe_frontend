'use client';

import { useRouter } from 'next/navigation';

import { ToastContainer } from 'react-toastify';

import { useMemo, useState } from 'react';

import { NoDataContainer, PageHeader, ShimmerUiContainer, Table, Toggle } from '@/components/index';

import EditIcon from '@public/assets/svg/edit-icon.svg';

import { StatusNumber, StatusNumberString } from '@/constant/appConstants';

import { FormValues } from './Modal/UserType/type';
import { INITIAL_STATE as initialState } from './Modal/UserType/constant';
import UserTypeModal from './Modal/UserType';

import { useAddUserTypeMutation } from './mutation';

import { COLUMNS, USERTYPE_TEXT as text } from './constant';

import { userDataType, UserTypePageProps } from './type';

import styles from './styles.module.scss';

const UserTypePage = (props: UserTypePageProps) => {
    const { userData } = props;

    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [addNewUserTypeModal, setAddNewUserTypeModal] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<FormValues>(initialState);
    const [editingUserId, setEditingUserId] = useState<string | null>(null);

    const { mutate: addUserTypeMutation } = useAddUserTypeMutation({
        router,
        setLoader: setLoading,
        setShow: setAddNewUserTypeModal,
    });

    const handleEditUserType = (item: userDataType) => {
        setEditingUserId(item?.id);

        setFormValues({
            userType: item?.name,
        });

        setAddNewUserTypeModal(true);
    };

    const handleToggleStatus = (item: userDataType) => {
        addUserTypeMutation({
            id: item?.id,
            status:
                item?.status === StatusNumber.ACTIVE
                    ? StatusNumberString.INACTIVE
                    : StatusNumberString.ACTIVE,
        });
    };

    const getUserType = (userData: userDataType[]) => {
        const data = userData?.map((item) => ({
            ...item,
            createdAt: item?.createdAt?.split('T')[0],
            status: (
                <div className={styles['toggle-data']}>
                    <Toggle
                        value={item?.id.toString()}
                        isToggled={item?.status === StatusNumber.ACTIVE}
                        onToggle={() => handleToggleStatus(item)}
                    />
                </div>
            ),
            edit: (
                <EditIcon
                    onClick={() => handleEditUserType(item)}
                    className={styles['edit-cursor']}
                />
            ),
        }));

        return data;
    };

    const userTypeList = useMemo(
        () => getUserType(userData),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [userData],
    );

    const handleAddUserType = () => {
        setEditingUserId(null);
        setFormValues(initialState);
        setAddNewUserTypeModal(true);
    };

    const handleSubmitUserType = () => {
        addUserTypeMutation({
            id: editingUserId ?? undefined,
            body: {
                name: formValues.userType,
            },
        });
    };

    return (
        <>
            {addNewUserTypeModal && (
                <UserTypeModal
                    open={addNewUserTypeModal}
                    setOpen={setAddNewUserTypeModal}
                    formValues={formValues}
                    setFormValues={setFormValues}
                    onSubmit={handleSubmitUserType}
                    isEditMode={Boolean(editingUserId)}
                />
            )}

            <PageHeader
                title={text.userTypeMaster}
                description={text.manageAndCustomize}
                buttonLabel={text.addUserType}
                onButtonClick={handleAddUserType}
            />
            {loading ? (
                <ShimmerUiContainer />
            ) : !userData?.length ? (
                <NoDataContainer title={text.noUserType} description={text.addUserTypetoStarted} />
            ) : (
                <Table
                    columns={COLUMNS}
                    data={userTypeList}
                    tableClassName={styles['table-container']}
                    baseTableContainerClassName={styles['table-wrapper']}
                    baseTableClassName={styles['table-data']}
                />
            )}
            <ToastContainer />
        </>
    );
};

export default UserTypePage;
