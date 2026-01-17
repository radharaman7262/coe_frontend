import React, { Suspense } from 'react';

import { ShimmerUiContainer } from '@/components/index';
import FetchUserTypeData from './_components/FetchUserTypeData';

const UserType = () => (
    <Suspense fallback={<ShimmerUiContainer />}>
        <FetchUserTypeData />
    </Suspense>
);
export default UserType;
