/**
 * @file Pagination Component
 */

'use client';

import React, { memo, useMemo } from 'react';

import { Button } from '@components/index';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import ArrowIcon from '@public/assets/svg/arrow-icon.svg';
import DisableArrowIcon from '@public/assets/svg/disable-arrow.svg';

import Count from './Count';

import styles from './styles.module.scss';

interface PaginationPropsType {
    totalCount: number;
    handlePreviousButton: () => void;
    handleNextButton: () => void;
    currentPage?: number;
    numberOfRowsPerPage?: number;
    handleClickOnCount?: (item: number) => void;
}

const Pagination = (props: PaginationPropsType) => {
    const {
        totalCount,
        numberOfRowsPerPage = 10,
        currentPage = 1,
        handlePreviousButton,
        handleNextButton,
        handleClickOnCount,
    } = props;

    const pages = Math.ceil(totalCount / Math.ceil(numberOfRowsPerPage));

    const getDynamicPagination = ({
        currentPage,
        siblingCount = 2,
    }: {
        currentPage: number;
        siblingCount?: number;
    }) => {
        const DOTS = '...';
        const totalCurrentPages = siblingCount * 2 + 5; // first, last, current, 2 siblings, and 2 DOTS

        if (pages <= totalCurrentPages) {
            return Array.from({ length: pages }, (_, i) => i + 1);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, pages - 1);

        const showLeftDots = leftSiblingIndex > 2;
        const showRightDots = rightSiblingIndex < pages - 1;

        const pagination = [];

        pagination.push(1);

        if (showLeftDots) {
            pagination.push(DOTS);
        }

        for (let i = leftSiblingIndex; i <= rightSiblingIndex; i += 1) {
            pagination.push(i);
        }

        if (showRightDots) {
            pagination.push(DOTS);
        }

        pagination.push(pages);

        return pagination;
    };

    const handleCountClick = (item: number) => () => {
        handleClickOnCount?.(item);
    };

    const isForwardButtonDisabled = currentPage === pages || !totalCount;

    const numberOfPages = useMemo(
        () => getDynamicPagination({ currentPage }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentPage, totalCount],
    );

    return (
        <div className={styles.wrapper}>
            <Button
                variant={
                    currentPage === 1 ? ButtonVariant.DISABLE_PAGINATION : ButtonVariant.PAGINATION
                }
                color={currentPage === 1 ? 'gray-300' : 'black'}
                label='Previous'
                className={currentPage === 1 ? styles['disable-button'] : ''}
                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                type='button'
                onClick={handlePreviousButton}
                StartIcon={currentPage === 1 ? <DisableArrowIcon /> : <ArrowIcon />}
            />
            <Count
                handleCountClick={handleCountClick}
                currentPage={currentPage}
                numberOfPages={numberOfPages}
            />
            <Button
                variant={
                    isForwardButtonDisabled
                        ? ButtonVariant.DISABLE_PAGINATION
                        : ButtonVariant.PAGINATION
                }
                color={isForwardButtonDisabled ? 'gray-300' : 'black'}
                label='Next'
                type='button'
                className={isForwardButtonDisabled ? styles['disable-button'] : ''}
                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                onClick={handleNextButton}
                EndIcon={
                    isForwardButtonDisabled ? (
                        <DisableArrowIcon className={styles.svg} />
                    ) : (
                        <ArrowIcon className={styles.svg} />
                    )
                }
            />
        </div>
    );
};

/**
 * This component provides a way to render checkBox components with various styling options.
 * @example
 *    <Pagination currentPage={1} totalCount={100} handlePreviousButton={} handleNextButton={} />
 */

export default memo(Pagination);
