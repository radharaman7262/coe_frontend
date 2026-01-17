'use client';

import Text from '@/components/ui/Text';

import SidebarIcon from '@/public/assets/svg/sidebar-icon.svg';

import { FontType } from '@/types/typographyCommon';

import { buildMenuTree, MenuItem, SIDEBAR_TITLE as title } from './constant';

import { SidebarDropdown } from './SidebarDropDown';

import styles from './styles.module.scss';

interface SidebarDataType {
    sideBarData: MenuItem[];
}

const Sidebar = (props: SidebarDataType) => {
    const { sideBarData } = props;

    const menuTree = buildMenuTree(sideBarData);

    return (
        <aside className={styles['sidebar-wrapper']}>
            <div className={styles['sidebar-header']}>
                <SidebarIcon />
                <div className={styles['text-group']}>
                    <Text font={[FontType.text_xxl_bold, FontType.text_xxl_bold]} color='black'>
                        {title.mothers}
                    </Text>
                    <Text font={[FontType.text_xxl_bold, FontType.text_xxl_bold]} color='black'>
                        {title.grace}
                    </Text>
                </div>
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
