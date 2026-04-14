import React from 'react';

import { FontType } from '@/types/typographyCommon';

import ChevronDownIcon from '@public/assets/svg/chevron-down.svg';

import { Checkbox, Text } from '@components/index';

import styles from './styles.module.scss';

interface ListItemProps {
    menu: { id: number; name: string };
    subMenus: { id: number; name: string; parentId: number | null }[];
    roles: { roleId: string; permissions: { menuId: string }[] }[];
    isExpanded: boolean;
    toggleSubMenus: () => void;
    handleCheckBox: (menuId: number | string, roleId: string) => void;
}
const ListItem = ({
    menu,
    subMenus,
    roles,
    isExpanded,
    toggleSubMenus,
    handleCheckBox,
}: ListItemProps) => {
    const renderPermissionCells = (menuId: number) =>
        roles.map((role) => {
            const hasPermission = role.permissions.some((perm) => perm.menuId === String(menuId));
            return (
                <Text key={role.roleId} tagType='td' className={styles.permissionCell}>
                    <Checkbox
                        onChange={() => {
                            handleCheckBox(menuId, role?.roleId);
                        }}
                        isChecked={hasPermission}
                        inputClassName={styles['input-className']}
                    />
                </Text>
            );
        });

    return (
        <>
            <Text tagType='tr' className={`${styles['permission-row']} ${styles.stickyParentRow}`}>
                <Text tagType='td' className={styles['menu-container']}>
                    <Text
                        tagType='span'
                        color='black'
                        font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                    >
                        {menu.name}
                    </Text>
                    {subMenus?.length ? (
                        <ChevronDownIcon
                            className={styles['cursor-dropdown']}
                            onClick={toggleSubMenus}
                        />
                    ) : null}
                </Text>
                {renderPermissionCells(menu.id)}
            </Text>

            {isExpanded &&
                subMenus.map((sub) => (
                    <Text key={sub.id} tagType='tr' className={styles['permission-row-submenu']}>
                        <Text
                            tagType='td'
                            color='black'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            className={styles['sub-menu']}
                        >
                            {sub.name}
                        </Text>
                        {renderPermissionCells(sub.id)}
                    </Text>
                ))}
        </>
    );
};

export default ListItem;
