'use client';

import { ReactNode, useEffect, useMemo, useState } from 'react';

import { Sidebar, AfterLoginHeader, ShimmerUiContainer } from '@/components/index';

import { getUserMenu } from '@/utils/cookieInServer';

import { AssignedMenuType } from '@/types/assignedMenuType';

import ChangePassword from '@/components/Drawer/ChangePassword';

import { ChangePasswordFormType } from '@/types/changePasswordFormType';

import { UPDATE_PASSWORD_INITIAL_STATE } from '@/components/Drawer/ChangePassword/constant';

import { ICON_MAP } from './constant';

import styles from './styles.module.scss';

interface ClientLayoutProps {
    children: ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
    const [userMenuList, setUserMenuList] = useState<AssignedMenuType[]>([]);

    const [openChangePasswordDrawer, setOpenChangePasswordDrawer] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(true);

    const [error, setError] = useState<string | null>(null);

    const [formValuesUpdatePass, setFormValuesUpdatePass] = useState<ChangePasswordFormType>(
        UPDATE_PASSWORD_INITIAL_STATE,
    );

    const handleChangePasswordDrawer = () => {
        setFormValuesUpdatePass(UPDATE_PASSWORD_INITIAL_STATE);
        setOpenChangePasswordDrawer(true);
    };

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const [menu] = await Promise.all([getUserMenu()]);

                if (menu) {
                    setUserMenuList(JSON.parse(menu));
                }
            } catch (err) {
                console.warn(err);
                setError('Something went wrong while loading your dashboard.');
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    const sidebarContent = useMemo<AssignedMenuType[]>(() => {
        if (!userMenuList.length) return [];

        return userMenuList.map((item) => ({
            ...item,
            menuIcon: ICON_MAP[item.menuName] ?? null,
        }));
    }, [userMenuList]);

    if (loading)
        return (
            <div className={styles['layout-shimmer-setup']}>
                <ShimmerUiContainer className={styles['shimmer-sidebar']} />

                <div className={styles['layout-body']}>
                    <ShimmerUiContainer className={styles['shimmer-header']} />
                    <ShimmerUiContainer className={styles['shimmer-body']} />
                </div>
            </div>
        );
    if (error)
        return (
            <div className={styles.layout}>
                <div className={styles.errorBox}>
                    <h2>Oops!</h2>
                    <p>{error}</p>
                </div>
            </div>
        );

    return (
        <div className={styles['main-dashboard-layout']}>
            <aside>
                <Sidebar sideBarData={sidebarContent} />
            </aside>

            <div className={styles.header}>
                <AfterLoginHeader onChangePassword={() => handleChangePasswordDrawer()} />

                <main className={styles['main-children']}>{children}</main>
            </div>
            <ChangePassword
                open={openChangePasswordDrawer}
                setOpen={setOpenChangePasswordDrawer}
                formValues={formValuesUpdatePass}
                setFormValues={setFormValuesUpdatePass}
            />
        </div>
    );
};

export default ClientLayout;
