import { Suspense } from 'react';

import { ShimmerUiContainer } from '@/components/index';

import FetchDashboard from './_components';

import styles from '../../styles.module.scss';

const SuperAdminDashboard = () => (
    <Suspense fallback={<ShimmerUiContainer className={styles.shimmer} />}>
        <FetchDashboard />
    </Suspense>
);

export default SuperAdminDashboard;
