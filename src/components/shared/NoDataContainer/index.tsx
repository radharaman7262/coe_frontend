import React, { ReactNode } from 'react';

import cx from 'classnames';

import { Text } from '@components/index';

import { FontType } from '@/types/typographyCommon';

import styles from './styles.module.scss';

interface NoDataContainerProps {
    Icon: ReactNode;
    title: string;
    description: string;
    noDatClassName?: string;
}

const NoDataContainer = (props: NoDataContainerProps) => {
    const { Icon, title, description, noDatClassName } = props;

    return (
        <div className={cx(styles['box-container'], noDatClassName)}>
            {Icon}
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
