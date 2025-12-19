import React from 'react';

import { Button, Text } from '@/components/index';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import DownloadIcon from '@public/assets/svg/white-report-download.svg';

import styles from './styles.module.scss';

interface SmallTableTitleProps {
    title: string;
    showAction?: boolean;
    actionLabel?: string;
}

const SmallTableTitle = (props: SmallTableTitleProps) => {
    const { title, showAction, actionLabel } = props;
    return (
        <div className={styles.header}>
            <Text font={[FontType.text_sm_bold, FontType.text_sm_bold]} color='text-gray-900'>
                {title}
            </Text>

            {showAction && (
                <div>
                    <Button
                        color='text-idle'
                        label={actionLabel || ''}
                        font={[FontType.text_xs_medium, FontType.text_xs_medium]}
                        variant={ButtonVariant.OUTLINED}
                        StartIcon={<DownloadIcon />}
                        className={styles.actionBtn}    
                    />
                </div>
            )}
        </div>
    );
};
export default SmallTableTitle;
