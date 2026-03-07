'use client';

import React from 'react';

import ArrowIcon from '@public/assets/svg/arrow-icon.svg';

import { FontType } from '@/types/typographyCommon';

import { Text } from '@/components/index';

import styles from './styles.module.scss';

interface CaseHeaderProps {
    name: string;
    age: number | string;
    gender: string;
}

const CaseHeader = (props: CaseHeaderProps) => {
    const { name, age, gender } = props;

    return (
        <div className={styles.header}>
            <ArrowIcon />
            <div className={styles.profile}>
                <Text
                    tagType='div'
                    font={[FontType.text_lg_bold, FontType.text_lg_bold]}
                    color='white'
                    className={styles.avatar}
                >
                    {name?.charAt(0)}
                </Text>

                <div className={styles.info}>
                    <Text
                        tagType='p'
                        font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                        className={styles.name}
                    >
                        {name}
                    </Text>
                    <Text
                        tagType='p'
                        font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        className={styles.meta}
                    >
                        {age}y / {gender}
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default CaseHeader;
