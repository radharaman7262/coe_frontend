import React from 'react';

import { Text } from '@/components/index';

import { FontType } from '@/types/typographyCommon';

import ActivitySection from './components/RecentActivity/ActivitySection';

import { DashboardActivityResponse } from './type';

import { ACTIVITY_TEXT as text } from './constant';

import styles from './styles.module.scss';

const ACTIVITY_SECTIONS = [
    { key: 'today', label: 'Today' },
    { key: 'yesterday', label: 'Yesterday' },
] as const;

interface RecentActivityProps {
    recentActivityData: DashboardActivityResponse[];
}

const RecentActivity = (props: RecentActivityProps) => {
    const { recentActivityData } = props;

    return (
        <div className={styles['activity-container']}>
            <Text font={[FontType.text_sm_bold, FontType.text_sm_bold]} color='text-gray-900'>
                {text.recentActivity}
            </Text>

            <div className={styles['content-activity-schedule']}>
                {recentActivityData?.map((item, index: number) => (
                    <React.Fragment key={index as number}>
                        {ACTIVITY_SECTIONS.map(({ key, label }) => (
                            <ActivitySection
                                key={key}
                                title={label}
                                data={item[key as keyof DashboardActivityResponse]}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;
