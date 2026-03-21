import { Suspense } from 'react';

import { ShimmerUiContainer } from '@/components/index';

import FetchSpecialEducatorDashboard from '../../specialist/(specialist)/dashboard/_components/FetchSpecialEducatorData';

const SpecialEducatorDashboard = () => (
    <Suspense fallback={<ShimmerUiContainer />}>
        <FetchSpecialEducatorDashboard />
    </Suspense>
);

export default SpecialEducatorDashboard;
