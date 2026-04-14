import React from 'react';

import MenuMappingPage from './_components';

import { getRoleMenuMapApiCall } from './utils';

const MenuMapping = async () => {
    const apiResponse = await getRoleMenuMapApiCall();

    const { status, response } = apiResponse || {};

    return <MenuMappingPage status={status} response={response} />;
};

export default MenuMapping;
