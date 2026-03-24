'use client';

import React from 'react';

import { Text } from '@/components/index';

import { FontType } from '@/types/typographyCommon';
import { CaseHistoryResponse } from '@/types/caseHIstorySidebarMenuType';

import HumanIcon from '@public/assets/svg/human-icon.svg';

import LinearProgressBar from '../LinearProgressBar';

import CaseHistoryItem from './CaseHistoryItem';

import styles from './styles.module.scss';

interface CaseHistorySidebarProps {
    menuList: CaseHistoryResponse;
    totalProgress: number;
}

const CaseHistorySidebar = (props: CaseHistorySidebarProps) => {
    const { menuList, totalProgress } = props;

    return (
        <div className={styles['case-history']}>
            {menuList?.map((item) => (
                <div className={styles.sidebar}>
                    <div className={styles.header}>
                        <div className={styles['icon-container']}>
                            <HumanIcon />
                        </div>
                        <div>
                            <Text
                                font={[FontType.text_xs_bold, FontType.text_xs_bold]}
                                tagType='h3'
                            >
                                {item.name}
                            </Text>
                            <Text
                                font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                                tagType='span'
                            >
                                {item?.children?.length} sections
                            </Text>
                        </div>
                    </div>

                    <div className={styles.progressContainer}>
                        <div className={styles.progressHeader}>
                            <Text
                                font={[FontType.text_xs_bold, FontType.text_xs_bold]}
                                tagType='span'
                            >
                                Progress
                            </Text>
                            <Text
                                font={[FontType.text_xs_bold, FontType.text_xs_bold]}
                                tagType='span'
                            >
                                {totalProgress}%
                            </Text>
                        </div>

                        <div className={styles.progressBar}>
                            <LinearProgressBar progress={item.percentage} />
                        </div>
                    </div>

                    <div className={styles.sectionList}>
                        {item.children.map((section, index) => (
                            <CaseHistoryItem
                                parentId={+item.id}
                                key={section.id}
                                index={index}
                                section={section}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CaseHistorySidebar;
