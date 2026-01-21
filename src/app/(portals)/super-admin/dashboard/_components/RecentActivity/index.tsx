import React from 'react';

import { Text } from '@/components/index';

import { FontType } from '@/types/typographyCommon';

import { ACTIVITY_TEXT as text } from './constant';

import { RecentActivityDataType } from './type';

import styles from './styles.module.scss';

interface RecentActivityProps {
    RecentActivityList: RecentActivityDataType[];
}

const RecentActivity = (props: RecentActivityProps) => {
    const { RecentActivityList } = props;

    return (
        <div className={styles['activity-container']}>
            <Text font={[FontType.text_sm_bold, FontType.text_sm_bold]} color='text-gray-900'>
                {text.recentActivity}
            </Text>

            <div className={styles['content-activity-schedule']}>
                {RecentActivityList?.map((item) => (
                    <div className={styles['activity-gap']}>
                        <Text
                            font={[FontType.text_xs_bold, FontType.text_xs_bold]}
                            color='text-gray-900'
                        >
                            {item.date}
                        </Text>

                        {item.newUser?.map((user) => (
                            <div>
                                <Text
                                    font={[FontType.text_xs_medium, FontType.text_xs_medium]}
                                    color='gray-900'
                                >
                                    {text.newUserAdded}&nbsp;
                                </Text>
                                <Text
                                    font={[FontType.text_xs_medium, FontType.text_xs_medium]}
                                    color='gray-400'
                                >
                                    {`${user?.name} (${user?.specialization
                                        .map((s) => s?.name)
                                        .join(', ')}) assigned to ${user?.center} at ${user?.time}`}
                                </Text>
                            </div>
                        ))}

                        {item.studentCaseAssigned?.map((caseItem) => (
                            <div>
                                <Text
                                    font={[FontType.text_xs_medium, FontType.text_xs_medium]}
                                    color='gray-900'
                                >
                                    {text.studentCaseAssigned}&nbsp;
                                </Text>
                                <Text
                                    font={[FontType.text_xs_medium, FontType.text_xs_medium]}
                                    color='gray-400'
                                >
                                    {`${caseItem?.studentName} Linked to (${caseItem?.specialization
                                        .map((s) => s.name)
                                        .join(
                                            ', ',
                                        )}) ${caseItem?.user} in ${caseItem?.center} at ${caseItem?.time}`}
                                </Text>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;
