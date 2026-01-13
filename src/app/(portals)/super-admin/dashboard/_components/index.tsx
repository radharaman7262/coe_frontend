import React from 'react';

import RecentActivity from './RecentActivity';
import CompilenceTracker from './CompilenceTracker';
import CenterUserOverView from './CenterUserOverView';
import CardContainer from './CardContainer';

import { DUMMY_RESPONSE } from './CompilenceTracker/constant';

import { DUMMY_RESPONSE as OVERVIEW_DATA } from './CenterUserOverView/constant';

import styles from './styles.module.scss';

const FetchDashboard = () => {
    console.warn('fetch dashboard');

    return (
        <div className={styles['main-container']}>
            <div className={styles['left-section']}>
                <CardContainer />
                <div className={styles['tracker-overview-wrapper']}>
                    <CompilenceTracker data={DUMMY_RESPONSE} />
                    <CenterUserOverView data={OVERVIEW_DATA} />
                </div>
            </div>

            <div className={styles['right-section']}>
                <RecentActivity />
            </div>
        </div>
    );
};
export default FetchDashboard;
