import React, { useMemo } from 'react';

import { SmallTableBody, Text } from '@/components/index';
import { FontType } from '@/types/typographyCommon';

import { ZERO_DATA } from '@/constant/appConstants';
import { COLUMNS } from './constant';

import { UpcomingSessionListType } from './type';

import styles from './styles.module.scss';

interface UpcomingSessionProps {
    upcomingSessionList: UpcomingSessionListType[];
}

const UpcomingSessions = (props: UpcomingSessionProps) => {
    const { upcomingSessionList } = props;

    const getSpecialEducatorList = (results: UpcomingSessionListType[]) => {
        const data = results?.map((item: UpcomingSessionListType) => ({
            ...item,
            activity: `${item?.educatorName || '_'} with student: ${item?.studentName || '_'}`,
            date: `${item?.bookingDate || '-'}`,
            time: `${item?.startTime} - ${item?.endTime}`,
        }));

        return data;
    };

    const finalUpcomingSessionsList = useMemo(
        () => getSpecialEducatorList(upcomingSessionList),
        [upcomingSessionList],
    );

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
                <SmallTableBody
                    columns={COLUMNS}
                    data={finalUpcomingSessionsList}
                    headerClassName={styles['header-className']}
                    headerBaseClass={styles.headerBaseClass}
                    smallTableClass={styles['small-table-class']}
                />
            )}
        </div>
    );
};

export default UpcomingSessions;
