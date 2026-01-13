import React from 'react';

import DownloadIcon from '@/public/assets/svg/white-report-download.svg';

import { Text, Button, SmallTableBody } from '@/components/index';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import { ZERO_DATA } from '@/constant/appConstants';

import { DashboardOverviewData } from './type';

import { columns, OVERVIEW_TEXT as text } from './constant';

import styles from './styles.module.scss';

interface CenterOverviewProps {
    data: DashboardOverviewData[];
}

const CenterUserOverView = (props: CenterOverviewProps) => {
    const { data } = props;

    const hasData = data?.length > ZERO_DATA;

    return (
        <div className={styles['overview-wrapper']}>
            <div className={styles['overview-container']}>
                <Text font={[FontType.text_sm_bold, FontType.text_sm_bold]} color='black'>
                    {text.centerUserOverview}
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
            {!hasData ? (
                <div className={styles['no-data']}>
                    <Text font={[FontType.text_lg_medium, FontType.text_lg_medium]} color='black'>
                        {text.noDataFound}
                    </Text>
                </div>
            ) : (
                <SmallTableBody columns={columns} data={data} />
            )}
        </div>
    );
};
export default CenterUserOverView;
