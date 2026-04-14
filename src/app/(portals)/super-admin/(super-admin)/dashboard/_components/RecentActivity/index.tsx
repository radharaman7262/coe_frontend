import React from 'react';

import { Text } from '@/components/index';

import { FontType } from '@/types/typographyCommon';

import { getRandomColor } from '@/constant/appConstants';
import { ACTIVITY_TEXT as text } from './constant';

import { RecentActivityDataType } from './type';

import styles from './styles.module.scss';

interface RecentActivityProps {
    RecentActivityList: RecentActivityDataType[];
}

const RecentActivity = (props: RecentActivityProps) => {
    const { RecentActivityList } = props;

    const filteredActivityList = RecentActivityList.filter(
        (item) => item.newUser.length > 0 || item.studentCaseAssigned.length > 0,
    );

    return (
        <div className={styles['activity-container']}>
            <Text font={[FontType.text_sm_bold, FontType.text_sm_bold]} color='text-gray-900'>
                {text.recentActivity}
            </Text>

            <div className={styles['content-activity-schedule']}>
                {filteredActivityList.length === 0 ? (
                    <Text
                        font={[FontType.text_sm_bold, FontType.text_sm_bold]}
                        color='text-gray-900'
                    >
                        No recent activity
                    </Text>
                ) : (
                    filteredActivityList?.map((item) => (
                        <div className={styles['activity-gap']}>
                            <Text
                                font={[FontType.text_xs_bold, FontType.text_xs_bold]}
                                color='text-gray-900'
                            >
                                {item?.date}
                            </Text>

                            {item?.newUser?.map((user) => (
                                <div className={styles['instruction-aligned']}>
                                    <hr
                                        className={styles['hr-instruction-line']}
                                        style={{ backgroundColor: getRandomColor() }}
                                    />
                                    <div>
                                        <Text
                                            font={[
                                                FontType.text_xs_medium,
                                                FontType.text_xs_medium,
                                            ]}
                                            color='gray-900'
                                        >
                                            {text.newUserAdded}&nbsp;
                                        </Text>
                                        <Text
                                            font={[
                                                FontType.text_xs_medium,
                                                FontType.text_xs_medium,
                                            ]}
                                            color='gray-400'
                                        >
                                            {`${user?.name} (${user?.specialization
                                                .map((s) => s?.name)
                                                .join(
                                                    ', ',
                                                )}) assigned to ${user?.center} at ${user?.time}`}
                                        </Text>
                                    </div>
                                </div>
                            ))}

                            {item?.studentCaseAssigned?.map((caseItem) => (
                                <div className={styles['instruction-aligned']}>
                                    <hr
                                        className={styles['hr-instruction-line']}
                                        style={{ backgroundColor: getRandomColor() }}
                                    />
                                    <div>
                                        <Text
                                            font={[
                                                FontType.text_xs_medium,
                                                FontType.text_xs_medium,
                                            ]}
                                            color='gray-900'
                                        >
                                            {text.studentCaseAssigned}&nbsp;
                                        </Text>
                                        <Text
                                            font={[
                                                FontType.text_xs_medium,
                                                FontType.text_xs_medium,
                                            ]}
                                            color='gray-400'
                                        >
                                            {`${caseItem?.studentName} Linked to (${caseItem?.specialization
                                                .map((s) => s.name)
                                                .join(
                                                    ', ',
                                                )}) ${caseItem?.user} in ${caseItem?.center} at ${caseItem?.time}`}
                                        </Text>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default RecentActivity;
