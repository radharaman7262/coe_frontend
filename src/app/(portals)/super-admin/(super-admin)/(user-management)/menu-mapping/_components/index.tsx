/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { NoDataContainer, PageHeader } from '@/components';

import { MENU_MAPPING_TEXT as text } from './constant';

import styles from './styles.module.scss';
import MenuList from './PermissionMatrix/MenuList';

interface MenuMappingPageType {
    status: string;
    response: any;
}

const MenuMappingPage = (props: MenuMappingPageType) => {
    const { status, response } = props;

    const { allMenuList, roleList } = response || {};

    return (
        <div>
            <PageHeader title={text.menuMapping} description={text.manageAndCustomize} />

            {status ? (
                <MenuList menuList={allMenuList} roles={roleList} />
            ) : (
                <NoDataContainer
                    title='No Menu'
                    description='Menu Description'
                    noDatClassName={styles['no-data']}
                />
            )}
        </div>
    );
};

export default MenuMappingPage;
