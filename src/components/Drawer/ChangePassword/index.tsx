import React from 'react';

import Drawer from '@/components/shared/Drawer';

import CrossIcon from '@/public/assets/svg/cross-icon.svg';

import ChangePasswordForm from './ChangePasswordForm';

import styles from './styles.module.scss';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangePassword = ({ open, setOpen }: Props) => {
    const handleClose = () => {
        setOpen(false);
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
                <ChangePasswordForm />
            </div>
        </Drawer>
    );
};

export default ChangePassword;
