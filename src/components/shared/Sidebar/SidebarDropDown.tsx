import { useEffect, useState } from 'react';

import { MenuItem } from './constant';

import SidebarItem from './DashboardSidebardItem';

import styles from './styles.module.scss';

export const SidebarDropdown = ({ menu }: { menu: MenuItem }) => {
    const [open, setOpen] = useState<boolean>(false);

    const [hasChildrenState, setHasChildrenState] = useState<boolean | undefined>();

    const handleMenu = () => {
        const hasChildren = menu.children && menu.children.length > 0;

        setHasChildrenState(hasChildren);

        if (hasChildren) {
            setOpen(!open);
        }
    };

    useEffect(() => {
        setHasChildrenState(false);
    }, []);

    const childrenLength = menu?.children?.length || 0;

    return (
        <div>
            <div
                onClick={() => handleMenu()}
                onKeyDown={() => handleMenu()}
                tabIndex={0}
                role='button'
            >
                <SidebarItem
                    label={menu.menuName}
                    icon={menu.menuIcon}
                    showIcon={childrenLength}
                    open={open}
                />
            </div>

            {hasChildrenState && open && (
                <div className={styles.subMenu}>
                    {menu.children!.map((child) => (
                        <SidebarItem key={child.menuId} label={child.menuName} />
                    ))}
                </div>
            )}
        </div>
    );
};
