import React from 'react';

import HomeIcon from '@public/assets/svg/home-icon.svg';
import Chevron from '@public/assets/svg/chevron-right.svg';

import { Text } from '@components/index';

import { FontType } from '@/types/typographyCommon';

import styles from './styles.module.scss';

interface BreadCrumbType {
    label: string;
}

const BreadCrumb = (props: BreadCrumbType) => {
    const { label } = props;
    return (
        <div className={styles.wrapper}>
            <HomeIcon />
            <Chevron />

            <div className={styles['text-wrap']}>
                <Text font={[FontType.text_xs_regular, FontType.text_xs_regular]} color='text-gray'>
                    {label}
                </Text>
            </div>
        </div>
    );
};

export default BreadCrumb;
