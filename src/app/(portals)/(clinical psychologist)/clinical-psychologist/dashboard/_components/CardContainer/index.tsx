import React, { useMemo } from 'react';

import WhiteDetailCard from '@/components/shared/WhiteDetailCard';

import { STATS_DETAIL_TITLE, STATS_ICONS, StatsTitleKey } from './constant';

import { StatsPsychologistListType } from './type';

import styles from './styles.module.scss';

interface cardContainerType {
    statsListData: StatsPsychologistListType | undefined;
}

const CardContainer = (props: cardContainerType) => {
    const { statsListData } = props;

    const finalStatsData = useMemo(
        () =>
            Object.entries(statsListData ?? {}).map(([key, value]) => ({
                title: STATS_DETAIL_TITLE[key as StatsTitleKey] ?? '_',
                count: value ?? '_',
                icon: STATS_ICONS[key as StatsTitleKey],
            })),
        [statsListData],
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
