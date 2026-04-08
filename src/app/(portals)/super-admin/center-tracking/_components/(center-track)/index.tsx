import React from 'react';

import { PageHeader } from '@/components';

import { ToastContainer } from 'react-toastify';

import { CENTRE_TRACKING_TEXT as text } from './constant';

import styles from './styles.module.scss';

const CenterTrack = () => {
    console.warn('center-track');
    return (
        <div className={styles['assessment-page']}>
            <PageHeader title={text.centerTracking} description={text.simplifyCenter} />

            {/* {isLoading ? (
                <ShimmerUiContainer className={styles['shimmer-data']} />
            ) : (
                <TableUi
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setTableFilter={setTableFilter}
                    tableFilter={tableFilter}
                    data={finalCenterSetupList}
                    totalCount={totalCount}
                />
            )} */}
            <ToastContainer />
        </div>
    );
};

export default CenterTrack;
