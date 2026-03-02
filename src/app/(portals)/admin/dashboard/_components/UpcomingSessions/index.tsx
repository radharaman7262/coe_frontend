import React, { useMemo } from 'react';

import { SmallTableBody, Text } from '@/components/index';
import { FontType } from '@/types/typographyCommon';

import { ZERO_DATA } from '@/constant/appConstants';
import { COLUMNS } from './constant';

import styles from './styles.module.scss';

const UpcomingSessions = () => {
    console.warn('Upcoming Sessions');

    const results = [
        {
            userName: 'Anjali Sharma',
            specialization: 'Therapist',
            studentId: '12',
            studentName: 'Aarav Mehta',
            sessionId: '1',
            sessionDate: '2026-06-04',
            sessionStartTime: '10:00',
            sessionEndTime: '10:30',
        },
        {
            userName: 'Aman Sharma',
            specialization: 'Therapist',
            studentId: '12',
            studentName: 'Aarav Mehta',
            sessionId: '1',
            sessionDate: '2026-06-04',
            sessionStartTime: '10:00',
            sessionEndTime: '10:30',
        },
        {
            userName: 'Nitin',
            specialization: 'Operational Therapist',
            studentId: '12',
            studentName: 'Aarav Juneja',
            sessionId: '1',
            sessionDate: '2026-06-04',
            sessionStartTime: '14:00',
            sessionEndTime: '14:30',
        },
    ];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getCenterAdminList = (results: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = results?.map((item: any) => ({
            ...item,
            activity: `${item?.userName} ${item?.specialization} with student: ${item?.studentName}`,
            date: `${item?.sessionDate}`,
            time: `${item?.sessionStartTime} - ${item?.sessionEndTime}`,
        }));

        return data;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const finalUpcomingSessionsList = useMemo(() => getCenterAdminList(results), []);

    const hasData = finalUpcomingSessionsList?.length > ZERO_DATA;

    return (
        <div className={styles['overview-wrapper']}>
            <div className={styles['overview-container']}>
                <Text font={[FontType.text_sm_bold, FontType.text_sm_bold]} color='black'>
                    Upcoming Sessions
                </Text>
            </div>
            {!hasData ? (
                <div className={styles['no-data']}>
                    <Text font={[FontType.text_lg_medium, FontType.text_lg_medium]} color='black'>
                        No Data Found
                    </Text>
                </div>
            ) : (
                <SmallTableBody columns={COLUMNS} data={finalUpcomingSessionsList} />
            )}
        </div>
    );
};

export default UpcomingSessions;
