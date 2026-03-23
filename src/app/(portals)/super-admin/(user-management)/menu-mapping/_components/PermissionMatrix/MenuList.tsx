'use client';

import React, { ChangeEvent, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Text, Toaster } from '@components/index';

import { FontType } from '@/types/typographyCommon';

import { showToast } from '@/components/ui/Toaster/constant';

import { MapMenuStateType, MenuDataType } from './constant';

import { MapMenuApiCall } from '../../utils';

import SearchBox from './SearchBox';

import ListItem from './ListItem';

import styles from './styles.module.scss';

const MenuList = (props: MenuDataType) => {
    const { menuList, roles } = props;

    const router = useRouter();

    const [searchState, setSearchState] = useState<string>('');

    const [menuListState, setMenuListState] = useState(menuList);

    const [expandedMenus, setExpandedMenus] = useState<Record<number, boolean>>({});

    const toggleSubMenus = (menuId: number) => {
        setExpandedMenus((prev) => ({
            ...prev,
            [menuId]: !prev[menuId],
        }));
    };

    const handleSearchState = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        const formattedValue = value.replace(/^\s+/, '');

        setSearchState(formattedValue);

        const filteredItems = menuList.filter(({ name }) =>
            (name ?? '').toLowerCase().includes(formattedValue.toLowerCase()),
        );

        setMenuListState(filteredItems);
    };

    const topLevelMenus = menuListState.filter((menu) => menu.parentId === null);

    const handleActiveInActive = async (mapData: MapMenuStateType) => {
        try {
            const apiResponse = await MapMenuApiCall(mapData);

            const { status, error, response } = apiResponse;

            if (!status) {
                throw new Error(error);
            }

            router.refresh();

            showToast({ type: 'success', message: response });
        } catch (error) {
            const errorData = error as Error;
            showToast({ type: 'error', message: errorData?.message || 'Something went wrong' });
        }
    };

    const handleCheckBox = (menuId: number | string, roleId: string) => {
        const mapData = { roleId, menuId: `${menuId}` };
        handleActiveInActive(mapData);
    };

    return (
        <>
            <div className={styles.tableContainer}>
                <Text tagType='table' className={styles.permissionTable}>
                    <Text tagType='thead' className={styles.tableHeader}>
                        <Text tagType='tr'>
                            <Text tagType='th'>
                                <SearchBox
                                    searchState={searchState}
                                    handleSearchState={handleSearchState}
                                />
                            </Text>
                            {roles?.map((item) => (
                                <Text
                                    tagType='th'
                                    key={item?.roleId}
                                    className={styles.theader}
                                    font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                                >
                                    {item?.roleName}
                                </Text>
                            ))}
                        </Text>
                    </Text>

                    <Text tagType='tbody'>
                        {topLevelMenus.length > 0 &&
                            topLevelMenus.map((menu) => (
                                <ListItem
                                    key={menu.id}
                                    menu={menu}
                                    subMenus={menuListState.filter(
                                        (sub) => sub.parentId === menu.id,
                                    )}
                                    roles={roles}
                                    isExpanded={expandedMenus[menu.id] || false}
                                    toggleSubMenus={() => toggleSubMenus(menu.id)}
                                    handleCheckBox={handleCheckBox}
                                />
                            ))}
                    </Text>
                    {topLevelMenus.length === 0 && (
                        <div className={styles['no-data']}>
                            <Text
                                font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                                color='black'
                            >
                                No data Found
                            </Text>
                        </div>
                    )}
                </Text>
            </div>
            <Toaster />
        </>
    );
};
export default MenuList;
