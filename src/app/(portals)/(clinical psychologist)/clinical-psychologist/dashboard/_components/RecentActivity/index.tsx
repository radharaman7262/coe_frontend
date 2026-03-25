'use client';

import React from 'react';
import { Text } from '@/components/index';
import { FontType } from '@/types/typographyCommon';
import { DashboardActivityResponse } from './type';
import { ACTIVITY_TEXT as text } from './constant';
import styles from './styles.module.scss';
import ActivitySection from './components/RecentActivity/ActivitySection';

const ACTIVITY_SECTIONS = [
    { key: 'today', label: 'Today' },
    { key: 'yesterday', label: 'Yesterday' },
] as const;

interface RecentActivityProps {
    recentActivityData: DashboardActivityResponse[];
}

const RecentActivity = (props: RecentActivityProps) => {
    const { recentActivityData } = props;

    const hasAnyActivity = (data: DashboardActivityResponse[]) =>
        data?.some((item) =>
            ACTIVITY_SECTIONS.some(({ key }) => {
                const section = item[key as keyof DashboardActivityResponse];

                return Object.values(section || {}).some(
                    (arr) => Array.isArray(arr) && arr.length > 0,
                );
            }),
        );

    const hasSectionData = (section: DashboardActivityResponse[keyof DashboardActivityResponse]) =>
        Object.values(section || {}).some((arr) => Array.isArray(arr) && arr.length > 0);

    const hasData = hasAnyActivity(recentActivityData);

    return (
        <div className={styles['activity-container']}>
            <Text font={[FontType.text_sm_bold, FontType.text_sm_bold]} color='text-gray-900'>
                {text.recentActivity}
            </Text>

            <div className={styles['content-activity-schedule']}>
                {!hasData ? (
                    <Text
                        font={[FontType.text_xs_semibold, FontType.text_xs_semibold]}
                        color='gray-500'
                    >
                        {text.noDataFound}
                    </Text>
                ) : (
                    recentActivityData?.map((item, index: number) => {
                        const visibleSections = ACTIVITY_SECTIONS.filter(({ key }) =>
                            hasSectionData(item[key as keyof DashboardActivityResponse]),
                        );

                        return (
                            <React.Fragment key={index as number}>
                                {visibleSections.map(({ key, label }) => (
                                    <ActivitySection
                                        key={key}
                                        title={label}
                                        data={item[key as keyof DashboardActivityResponse]}
                                    />
                                ))}
                            </React.Fragment>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default RecentActivity;
