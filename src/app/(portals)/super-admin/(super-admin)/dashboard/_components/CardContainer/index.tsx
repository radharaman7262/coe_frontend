import React, { useMemo } from 'react';

import WhiteDetailCard from '@/components/shared/WhiteDetailCard';

import { STATS_DETAIL_TITLE, STATS_ICONS, StatsTitleKey } from './constant';

import { StatsListType } from './type';

import styles from './styles.module.scss';

interface cardContainerType {
    StatsListData: StatsListType | undefined;
}

const CardContainer = (props: cardContainerType) => {
    const { StatsListData } = props;

    const finalStatsData = useMemo(
        () =>
            Object.entries(StatsListData ?? {}).map(([key, value]) => ({
                title: STATS_DETAIL_TITLE[key as StatsTitleKey] ?? '_',
                count: value ?? '_',
                icon: STATS_ICONS[key as StatsTitleKey],
            })),
        [StatsListData],
    );

    return (
        <div className={styles['grid-layout']}>
            {finalStatsData?.map(({ title, count, icon: Icon }) => (
                <WhiteDetailCard title={title} count={count} icon={Icon ? <Icon /> : null} />
            ))}
        </div>
    );
};
export default CardContainer;
