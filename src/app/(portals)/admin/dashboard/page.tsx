import { Suspense } from 'react';

import { ShimmerUiContainer } from '@/components/index';

import FetchAdminDashboard from './_components/FetchAdminData';

import styles from '../../styles.module.scss';

const AdminDashboard = () => (
    <Suspense fallback={<ShimmerUiContainer className={styles.shimmer} />}>
        <FetchAdminDashboard />
    </Suspense>
);

export default AdminDashboard;
