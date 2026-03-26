import React from 'react';

import cx from 'classnames';

import { useParams, useRouter, useSearchParams } from 'next/navigation';

import { Text } from '@/components/index';

import { AppRoutes } from '@/constant/appRoutes';

import { FontType } from '@/types/typographyCommon';
import { CaseHistoryItemType } from '@/types/caseHIstorySidebarMenuType';

import styles from './styles.module.scss';

type Props = {
    section: CaseHistoryItemType;
    index: number;
    parentId: number;
};

const CaseHistoryItem = (props: Props) => {
    const { section, index, parentId } = props;

    const router = useRouter();

    const { studentId } = useParams();
    const searchParams = useSearchParams();

    const id = searchParams.get('id');

    const handleClick = () => {
        router.push(
            // eslint-disable-next-line max-len
            `/${AppRoutes.ASSESSMENT_CASE_HISTORY}/${studentId}?id=${section.id}&sectionId=${parentId}&p_id=${section.parentId}`,
        );
    };

    return (
        <div
            className={cx(styles.sectionItem, section.id === id && styles['selected-menu'])}
            role='button'
            tabIndex={0}
            onKeyDown={handleClick}
            onClick={handleClick}
        >
            <div className={styles.sectionLeft}>
                <Text
                    tagType='span'
                    font={[FontType.text_xs_semibold, FontType.text_xs_semibold]}
                    className={styles.sectionNumber}
                    color='text-cta-2'
                >
                    {index + 1}
                </Text>
                <Text
                    font={[FontType.text_xs_bold, FontType.text_xs_bold]}
                    tagType='span'
                    className={styles.sectionLabel}
                    color={section.id === id ? 'text-cta-2' : 'gray-700'}
                >
                    {section.name}
                </Text>
            </div>

            <Text
                font={[FontType.text_xs_bold, FontType.text_xs_bold]}
                tagType='span'
                className={styles.sectionProgress}
            >
                {section.percentage}%
            </Text>
        </div>
    );
};

export default CaseHistoryItem;
