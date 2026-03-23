'use client';

import { Button, Text } from '@/components';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import RightIcon from '@/public/assets/svg/right-arrow-icon.svg';
import CrossIcon from '@/public/assets/svg/cross-icon.svg';

import AssignPsychologist from './AssignPsychologist';

import { BUTTON_TEXT, DRAWER_DATA as text } from './constant';

import { PsychologistType } from './type';

import styles from './styles.module.scss';

interface PsychologistPropsType {
    selectedPsychologist: PsychologistType | null;
    setSelectedPsychologist: (p: PsychologistType) => void;
    onContinue: () => void;
    onclose: (fromPsychologist?: boolean) => void;
}

const Psychologist = ({
    selectedPsychologist,
    setSelectedPsychologist,
    onContinue,
    onclose,
}: PsychologistPropsType) => (
    <>
        <div className={styles['drawer-header']}>
            <div className={styles['drawer-header-left']}>
                <Text font={[FontType.text_xl_bold, FontType.text_xl_bold]} color='gray-900'>
                    {text.assignPsychologist}
                </Text>
            </div>
            <CrossIcon className={styles['cross-icon']} onClick={() => onclose(true)} />
        </div>

        <div className={styles['drawer-body']}>
            <AssignPsychologist
                selectedId={selectedPsychologist?.id || null}
                onSelect={setSelectedPsychologist}
            />
        </div>

        <div className={styles['drawer-bottom']}>
            <Button
                label={BUTTON_TEXT.continue}
                type='button'
                variant={ButtonVariant.SOLID}
                disabled={!selectedPsychologist}
                color='white'
                font={[FontType.text_md_semibold, FontType.text_md_semibold]}
                className={styles['btn-class']}
                EndIcon={<RightIcon />}
                onClick={onContinue}
            />
        </div>
    </>
);

export default Psychologist;
