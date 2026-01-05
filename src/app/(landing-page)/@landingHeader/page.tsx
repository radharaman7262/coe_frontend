import BeforeLoginHeader from '@/components/shared/BeforeLoginHeader';

import styles from './styles.module.scss';

const LandingHeader = () => (
    <div className={styles['header-wrapper']}>
        <BeforeLoginHeader />
    </div>
);

export default LandingHeader;
