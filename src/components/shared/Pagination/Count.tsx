import React from 'react';

import { Text } from '@components/index';

import cx from 'classnames';

import { FontType } from '@/types/typographyCommon';

import styles from './styles.module.scss';

interface CountPropsType {
    numberOfPages: (string | number)[];
    currentPage: number;
    handleCountClick: (item: number) => () => void;
}

const Count = (props: CountPropsType) => {
    const { numberOfPages, currentPage, handleCountClick } = props;

    return (
        <Text tagType='ul' className={styles['count-list']}>
            {numberOfPages?.map((item, index) => (
                <Text
                    key={index as number}
                    tagType='li'
                    color='gray-500'
                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                    className={cx(
                        currentPage === item ? styles['active-count'] : styles['in-active-count'],
                        typeof item === 'string' ? styles['cursor--not--allowed'] : styles.cursor,
                    )}
                    onClick={typeof item !== 'string' ? handleCountClick(item) : undefined}
                >
                    {item}
                </Text>
            ))}
        </Text>
    );
};

export default Count;
