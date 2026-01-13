import React from 'react';

import WhiteDetailCard from '@/components/shared/WhiteDetailCard';

import { DUMMY_RESPONSE } from './constant';

import styles from './styles.module.scss';

const CardContainer = () => {
    console.warn('CardContainer');

    return (
        <div className={styles['grid-layout']}>
            {DUMMY_RESPONSE.map((item) => {
                const Icon = item?.icon;

                return (
                    <WhiteDetailCard
                        key={item?.title}
                        title={item?.title || ''}
                        count={item?.count || 0}
                        icon={<Icon />}
                    />
                );
            })}
        </div>
    );
};
export default CardContainer;
