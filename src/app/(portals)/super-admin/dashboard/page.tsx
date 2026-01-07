import { Suspense } from 'react';

import { ShimmerUiContainer } from '@/components/index';

import styles from '../../styles.module.scss';

const SuperAdminDashboard = () => (
    <Suspense fallback={<ShimmerUiContainer className={styles.shimmer} />}>
        Hello SuperAdmin Dashboard
    </Suspense>
);

export default SuperAdminDashboard;
