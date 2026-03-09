'use client';

import { useMemo } from 'react';

import SidebarLogo from '@/public/assets/svg/mother-grace-logo.svg';

import { buildMenuTree, MenuItem } from './constant';

import { SidebarDropdown } from './SidebarDropDown';

import styles from './styles.module.scss';

interface SidebarDataType {
    sideBarData: MenuItem[];
}

const Sidebar = (props: SidebarDataType) => {
    const { sideBarData } = props;

    const menuTree = useMemo(() => buildMenuTree(sideBarData), [sideBarData]);

    return (
        <aside className={styles['sidebar-wrapper']}>
            <div className={styles['sidebar-header']}>
                <SidebarLogo />
            </div>

            <div className={styles['sidebar-menu']}>
                {menuTree?.map((menu: MenuItem) => (
                    <SidebarDropdown key={menu.menuId} menu={menu} />
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
