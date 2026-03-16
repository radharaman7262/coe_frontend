import React from 'react';

import { Text } from '@/components/index';
import { FontType } from '@/types/typographyCommon';

import { activityRenderers } from '../activityRenderers';

import styles from '../../styles.module.scss';
import { ActivityGroup, NewUserAdded, StudentCaseAssigned } from '../../type';

interface ActivitySectionProps {
    title: string;
    data: ActivityGroup;
}

const ActivitySection = ({ title, data }: ActivitySectionProps) => {
    if (!data) return null;

    return (
        <div className={styles['activity-gap']}>
            <Text font={[FontType.text_xs_bold, FontType.text_xs_bold]} color='text-gray-900'>
                {title}
            </Text>

            {Object.entries(data).map(([activityType, activities]) => {
                const Renderer = activityRenderers[activityType as keyof typeof activityRenderers];

                if (!Renderer || !Array.isArray(activities)) return null;

                return activities.map((item: NewUserAdded | StudentCaseAssigned, index: number) => (
                    <Renderer key={index as number} item={item} />
                ));
            })}
        </div>
    );
};

export default ActivitySection;
