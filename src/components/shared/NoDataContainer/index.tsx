import React from 'react';

import cx from 'classnames';

import { Text } from '@components/index';

import CloudIcon from '@/public/assets/svg/cloud-no-data.svg';

import { FontType } from '@/types/typographyCommon';

import styles from './styles.module.scss';

interface NoDataContainerProps {
    title: string;
    description: string;
    noDatClassName?: string;
}

const NoDataContainer = (props: NoDataContainerProps) => {
    const { title, description, noDatClassName } = props;

    return (
        <div className={cx(styles['box-container'], noDatClassName)}>
            <CloudIcon />
            <div className={styles['text-container']}>
                <Text font={[FontType.text_lg_semibold, FontType.text_lg_semibold]} color='black'>
                    {title}
                </Text>
                <Text font={[FontType.text_sm_regular, FontType.text_sm_regular]} color='text-idle'>
                    {description}
                </Text>
            </div>
        </div>
    );
};
export default NoDataContainer;
