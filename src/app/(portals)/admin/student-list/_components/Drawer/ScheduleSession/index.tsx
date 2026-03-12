'use client';

import { Button, Text } from '@/components';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import RightIcon from '@/public/assets/svg/right-arrow-icon.svg';
import CrossIcon from '@/public/assets/svg/cross-icon.svg';

import ScheduleInformationData from './ScheduleInformation';

import { BUTTON_TEXT, DRAWER_DATA as text } from './constant';

import styles from './styles.module.scss';

const ScheduleSession = () => (
    <>
        <div className={styles['drawer-header']}>
            <div className={styles['drawer-header-left']}>
                <Text font={[FontType.text_xl_bold, FontType.text_xl_bold]} color='gray-900'>
                    {text.scheduleInformation}
                </Text>
            </div>
            <CrossIcon className={styles['cross-icon']} onClick={onclose} />
        </div>

        <div className={styles['drawer-body']}>
            <ScheduleInformationData />
        </div>

        <div className={styles['drawer-bottom']}>
            <div className={styles['bottom-wrapper']}>
                <Button
                    label={BUTTON_TEXT.addStudent}
                    type='button'
                    variant={ButtonVariant.SOLID}
                    color='white'
                    font={[FontType.text_md_semibold, FontType.text_md_semibold]}
                    className={styles['btn-class']}
                    EndIcon={<RightIcon />}
                />
            </div>
        </div>
    </>
);

export default ScheduleSession;
