import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import { MenuItem } from './constant';

import SidebarItem from './DashboardSidebardItem';

import styles from './styles.module.scss';

export const SidebarDropdown = ({ menu }: { menu: MenuItem }) => {
    const [open, setOpen] = useState<boolean>(false);

    const pathname = usePathname();

    const hasChildren = !!menu.children?.length;

    const handleMenu = () => {
        if (hasChildren) {
            setOpen((prev) => !prev);
        }
    };

    useEffect(() => {
        const children = menu.children ?? [];

        const isChildActive = children.some(
            (child: { menuLink: string }) => pathname === child.menuLink,
        );

        if (isChildActive) {
            setOpen(true);
            // setHasChildrenState(true);
        }
    }, [pathname, menu.children]);

    const childrenLength = menu?.children?.length || 0;

    return (
        <div>
            <div onClick={() => handleMenu()} aria-hidden='true'>
                <SidebarItem
                    label={menu.menuName}
                    icon={menu.menuIcon}
                    showIcon={childrenLength}
                    open={open}
                    link={menu?.menuLink}
                />
            </div>

            {hasChildren && open && (
                <div className={styles['sub-menu']}>
                    {menu.children!.map((child) => (
                        <SidebarItem
                            key={child.menuId}
                            label={child.menuName}
                            link={child?.menuLink}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
