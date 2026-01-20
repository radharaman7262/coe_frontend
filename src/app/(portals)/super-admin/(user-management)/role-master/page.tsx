import React, { Suspense } from 'react';

import { ShimmerUiContainer } from '@/components/index';

import FetchRoleMaster from './_components/FetchRoleMasterData';

const RoleMasterType = () => (
    <Suspense fallback={<ShimmerUiContainer />}>
        <FetchRoleMaster />
    </Suspense>
);
export default RoleMasterType;
