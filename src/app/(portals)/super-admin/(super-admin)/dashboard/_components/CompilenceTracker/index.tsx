import React from 'react';

import DownloadIcon from '@/public/assets/svg/white-report-download.svg';

import { Button, Text } from '@/components/index';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import { ZERO_DATA } from '@/constant/appConstants';

import CompilenceTrackerProgress from './CompilenceTrackerProgress';

import { DashboardTrackerData } from './type';

import { TRACKER_TEXT as text } from './constant';

import styles from './styles.module.scss';

interface CompilenceTrackerProps {
    data: DashboardTrackerData[];
}

const CompilenceTracker = (props: CompilenceTrackerProps) => {
    const { data } = props;

    const hasData = data?.length > ZERO_DATA;

    return (
        <div className={styles['tracker-wrapper']}>
            <div className={styles['top-container']}>
                <Text font={[FontType.text_sm_bold, FontType.text_sm_bold]} color='black'>
                    {text.complianceTracker}
                </Text>
                {hasData && (
                    <Button
                        label={text.downloadReport}
                        type='button'
                        variant={ButtonVariant.SOLID}
                        color='text-idle'
                        font={[FontType.text_xs_medium, FontType.text_xs_medium]}
                        className={styles['btn-class']}
                        StartIcon={<DownloadIcon />}
                    />
                )}
            </div>
            <div className={styles['tracker-list']}>
                {!hasData ? (
                    <div className={styles['no-data']}>
                        <Text
                            font={[FontType.text_lg_medium, FontType.text_lg_medium]}
                            color='black'
                        >
                            {text.noDataFound}
                        </Text>
                    </div>
                ) : (
                    data?.map((item) => <CompilenceTrackerProgress key={item.id} item={item} />)
                )}
            </div>
        </div>
    );
};

export default CompilenceTracker;
