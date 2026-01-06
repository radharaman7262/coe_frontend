'use client';

import React from 'react';

import { Drawer } from '@/components';

import Logo from '@/public/assets/svg/rupantar-header-large.svg';
import CrossIcon from '@/public/assets/svg/cross-icon.svg';

import { useUserContext } from './_contextProvider';

import Login from '../(authentication)/_login';

import styles from './styles.module.scss';

const Home = () => {
    const { openLoginDrawer, setOpenLoginDrawer } = useUserContext();

    const handleClose = () => {
        setOpenLoginDrawer(false);
    };

    return (
        <Drawer
            sx={{
                '& .MuiPaper-root': {
                    width: '600px',
                },
            }}
            anchor='right'
            setDrawerOpen={setOpenLoginDrawer}
            drawerOpen={openLoginDrawer}
        >
            <div className={styles['drawer-header']}>
                <CrossIcon className={styles['cross-icon']} onClick={handleClose} />
            </div>
            <div className={styles['drawer-middle']}>
                <Logo className={styles.logo} />
                <Login openLoginDrawer={openLoginDrawer} />
            </div>
        </Drawer>
    );
};
export default Home;
