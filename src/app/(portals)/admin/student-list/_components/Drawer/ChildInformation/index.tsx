'use client';

import { Button, Text } from '@/components';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import RightIcon from '@/public/assets/svg/right-arrow-icon.svg';
import CrossIcon from '@/public/assets/svg/cross-icon.svg';

import ChildInformationData from './ChildInformation';

import { BUTTON_TEXT, DRAWER_DATA as text } from './constant';

import styles from './styles.module.scss';

interface ChildPropsType {
    onContinue: () => void;
    onclose: () => void;
}

const Child = ({ onContinue, onclose }: ChildPropsType) => (
    <>
        <div className={styles['drawer-header']}>
            <div className={styles['drawer-header-left']}>
                <Text font={[FontType.text_xl_bold, FontType.text_xl_bold]} color='gray-900'>
                    {text.childInformation}
                </Text>

                <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]} color='text-idle'>
                    {text.step1of2}
                </Text>
            </div>
            <CrossIcon className={styles['cross-icon']} onClick={onclose} />
        </div>

        <div className={styles['drawer-body']}>
            <ChildInformationData />
        </div>

        <div className={styles['drawer-bottom']}>
            <Button
                label={BUTTON_TEXT.continue}
                type='button'
                variant={ButtonVariant.SOLID}
                color='white'
                font={[FontType.text_md_semibold, FontType.text_md_semibold]}
                className={styles['btn-class']}
                EndIcon={<RightIcon />}
                onClick={onContinue}
            />
        </div>
    </>
);

export default Child;
