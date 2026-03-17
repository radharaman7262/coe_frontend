'use client';

import React from 'react';

import ArrowIcon from '@public/assets/svg/arrow-icon.svg';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { Button, Text } from '@/components/index';

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
            <div className={styles.detail}>
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
                        >
                            {name}
                        </Text>
                        <Text
                            tagType='p'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        >
                            {age}y / {gender}
                        </Text>
                    </div>
                </div>
            </div>
            <Button label='Assign' variant={ButtonVariant.SOLID} color='white' onClick={() => {}} />
        </div>
    );
};

export default CaseHeader;
