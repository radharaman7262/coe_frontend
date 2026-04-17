import React, { Dispatch, SetStateAction } from 'react';

import Drawer from '@/components/shared/Drawer';

import CrossIcon from '@/public/assets/svg/cross-icon.svg';

import { ChangePasswordFormType } from '@/types/changePasswordFormType';

import ChangePasswordForm from './ChangePasswordForm';

import { UPDATE_PASSWORD_INITIAL_STATE } from './constant';

import styles from './styles.module.scss';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    formValues: ChangePasswordFormType;
    setFormValues: Dispatch<SetStateAction<ChangePasswordFormType>>;
}

const ChangePassword = ({ open, setOpen, formValues, setFormValues }: Props) => {
    const handleClose = () => {
        setOpen(false);
        setFormValues(UPDATE_PASSWORD_INITIAL_STATE);
    };

    return (
        <Drawer
            sx={{
                '& .MuiPaper-root': {
                    width: '600px',
                },
            }}
            anchor='right'
            setDrawerOpen={setOpen}
            drawerOpen={open}
        >
            <div className={styles['drawer-header']}>
                <CrossIcon className={styles['cross-icon']} onClick={handleClose} />
            </div>
            <div className={styles['drawer-middle']}>
                <ChangePasswordForm
                    setOpen={setOpen}
                    formValues={formValues}
                    setFormValues={setFormValues}
                />
            </div>
        </Drawer>
    );
};

export default ChangePassword;
