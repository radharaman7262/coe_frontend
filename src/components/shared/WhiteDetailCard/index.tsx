import React, { ReactNode } from 'react';

import { Text } from '@/components/index';

import { FontType } from '@/types/typographyCommon';

import styles from './styles.module.scss';

interface WhiteDetailType {
    title: string;
    count: string | number;
    icon: ReactNode;
}

const WhiteDetailCard = (props: WhiteDetailType) => {
    const { title, count, icon } = props;

    return (
        <div className={styles['container-wrapper']}>
            {icon}

            <div className={styles['text-wrapper']}>
                <Text font={[FontType.text_xs_regular, FontType.text_xs_regular]} color='text-idle'>
                    {title}
                </Text>
                <Text font={[FontType.text_xl_bold, FontType.text_xl_bold]} color='gray-900'>
                    {count}
                </Text>
            </div>
        </div>
    );
};
export default WhiteDetailCard;
