import { Suspense } from 'react';

import { ShimmerUiContainer } from '@/components';

import FetchProfilePage from './_components/FetchProfile';

import styles from './styles.module.scss';

const AdminDashboard = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return (
        <Suspense fallback={<ShimmerUiContainer className={styles.shimmer} />}>
            <FetchProfilePage id={id} />
        </Suspense>
    );
};

export default AdminDashboard;
