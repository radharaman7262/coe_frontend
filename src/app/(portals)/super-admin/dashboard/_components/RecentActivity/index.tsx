import React from 'react';

import { Text } from '@/components/index';

import { FontType } from '@/types/typographyCommon';

import { ACTIVITY_TEXT as text } from './constant';

import styles from './styles.module.scss';

const RecentActivity = () => {
    console.warn('recent activity');

    return (
        <div className={styles['activity-container']}>
            <Text font={[FontType.text_sm_bold, FontType.text_sm_bold]} color='text-gray-900'>
                {text.recentActivity}
            </Text>
        </div>
    );
};

export default RecentActivity;
