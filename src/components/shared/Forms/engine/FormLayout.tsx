'use client';

import { ReactNode } from 'react';

import { Button } from '@/components/index';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import DocIcon from '@public/assets/svg/doc-icon.svg';

import styles from '../styles.module.scss';

interface FormLayoutProps {
    children: ReactNode;
    percentage: number;
    onSubmit: () => void;
    loader: boolean;
}

const FormLayout = (props: FormLayoutProps) => {
    const { children, percentage, onSubmit, loader } = props;

    return (
        <div className={styles['parental-birth-history']}>
            <div className={styles['form-wrapper']}>{children}</div>
            <div className={styles['button-wrapper']}>
                {/* Due to current requirement we are comment it out for now */}

                {/* <Text
                    tagType='div'
                    color='dark-blue'
                    font={[FontType.text_sm_bold, FontType.text_sm_bold]}
                    className={styles.right}
                >
                    {`${percentage} %`}
                </Text> */}

                <Button
                    StartIcon={<DocIcon />}
                    variant={ButtonVariant.SOLID}
                    color='white'
                    label='Save'
                    font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                    className={styles.button}
                    onClick={onSubmit}
                    loader={loader}
                    disabled={loader || percentage === 0}
                />
            </div>
        </div>
    );
};

export default FormLayout;
