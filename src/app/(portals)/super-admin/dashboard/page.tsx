import { Suspense } from 'react';

import { ShimmerUiContainer } from '@/components/index';

import FetchSuperAdminDashboard from './_components/FetchSuperAdminData';

import styles from '../../styles.module.scss';

const SuperAdminDashboard = () => (
    <Suspense fallback={<ShimmerUiContainer className={styles.shimmer} />}>
        <FetchSuperAdminDashboard />
    </Suspense>
);

export default SuperAdminDashboard;
