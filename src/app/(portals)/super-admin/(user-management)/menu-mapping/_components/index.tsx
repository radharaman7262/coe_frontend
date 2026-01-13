'use client';

import { useEffect } from 'react';

import { PageHeader, Table } from '@/components';

import { MENU_MAPPING_COLUMNS, MENU_MAPPING_TEXT as text } from './constant';

const MenuMappingPage = () => {
    const getMenuMappingData = () => {
        // Api Call here
    };

    useEffect(() => {
        getMenuMappingData();
    }, []);

    return (
        <>
            <PageHeader title={text.menuMapping} description={text.manageAndCustomize} />
            <Table columns={MENU_MAPPING_COLUMNS} data={[]} totalCount={200} />
        </>
    );
};

export default MenuMappingPage;
