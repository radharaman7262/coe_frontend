import React, { useMemo } from 'react';

import { SmallTableBody, Text } from '@/components/index';
import { FontType } from '@/types/typographyCommon';

import { getRandomColor, ZERO_DATA } from '@/constant/appConstants';
import { COLUMNS } from './constant';

import { UpcomingSessionListType } from './type';

import styles from './styles.module.scss';

interface UpcomingSessionProps {
    upcomingSessionList: UpcomingSessionListType[];
}

const UpcomingSessions = (props: UpcomingSessionProps) => {
    const { upcomingSessionList } = props;

    const capitalizeFirstLetter = (text: string = '') => {
        if (!text) return '';
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };

    const getSpecialEducatorList = (results: UpcomingSessionListType[]) => {
        const data = results?.map((item: UpcomingSessionListType) => ({
            ...item,
            activity: (
                <div className={styles['instruction-aligned']}>
                    <hr
                        className={styles['hr-instruction-line']}
                        style={{ backgroundColor: getRandomColor() }}
                    />
                    <div className={styles.activityText}>
                        <Text
                            font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                            color='text-cta-3'
                        >
                            {capitalizeFirstLetter(item?.educatorName)}
                        </Text>{' '}
                        <Text
                            font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                            color='gray-900'
                        >
                            &nbsp;with student:
                        </Text>{' '}
                        <Text
                            font={[FontType.text_xs_medium, FontType.text_xs_medium]}
                            color='blue-500'
                            className={styles['student-name']}
                        >
                            &nbsp;{capitalizeFirstLetter(item?.studentName)}
                        </Text>
                    </div>
                </div>
            ),
            date: `${item?.bookingDate || '-'}`,
            time: `${item?.startTime} - ${item?.endTime}`,
        }));

        return data;
    };

    const finalUpcomingSessionsList = useMemo(
        () => getSpecialEducatorList(upcomingSessionList),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
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
