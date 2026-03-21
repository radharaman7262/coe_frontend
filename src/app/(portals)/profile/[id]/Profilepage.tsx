import { Suspense } from 'react';

import { ShimmerUiContainer } from '@/components';

import FetchProfilePage from './_components/FetchProfile';

import styles from './styles.module.scss';

type ProfilePageProps = {
    id: string;
    portal: 'clinicalChecking' | 'therapistChecking';
};

const ProfilePage = ({ id, portal }: ProfilePageProps) => (
    <Suspense fallback={<ShimmerUiContainer className={styles.shimmer} />}>
        <FetchProfilePage id={id} portal={portal} />
    </Suspense>
);

export default ProfilePage;
