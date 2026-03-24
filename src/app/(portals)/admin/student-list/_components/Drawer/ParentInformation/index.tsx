'use client';

import React, { useMemo } from 'react';

import { Button, Text } from '@/components';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import RightIcon from '@/public/assets/svg/right-arrow-icon.svg';
import CrossIcon from '@/public/assets/svg/cross-icon.svg';
import ButtonBaseIcon from '@/public/assets/svg/button-base.svg';

import ParentInformationData from './ParentInformation';

import { BUTTON_TEXT, DRAWER_DATA as text } from './constant';

import { FormValues } from './type';

import styles from './styles.module.scss';

interface ParentPropsType {
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
    onBack: () => void;
    onclose: () => void;
    onAddStudent: () => void;
    errorMessage?: string;
}

const Parent = ({
    formValues,
    setFormValues,
    onBack,
    onclose,
    onAddStudent,
    errorMessage,
}: ParentPropsType) => {
    const isFormValid = useMemo(
        () =>
            !!formValues.fathersName?.trim() &&
            formValues.fathersName.trim().length >= 3 &&
            formValues.fathersName.trim().length <= 30 &&
            !!formValues.fathersAge &&
            String(formValues.fathersAge).length === 2 &&
            !!formValues.fathersNo &&
            String(formValues.fathersNo).length === 10 &&
            !!formValues.fathersOccupation &&
            !!formValues.mothersName?.trim() &&
            formValues.mothersName.trim().length >= 3 &&
            formValues.mothersName.trim().length <= 30 &&
            !!formValues.mothersAge &&
            String(formValues.mothersAge).length === 2 &&
            !!formValues.mothersNo &&
            String(formValues.mothersNo).length === 10 &&
            !!formValues.mothersOccupation &&
            !!formValues.language &&
            !!formValues.familyType &&
            !!formValues.siblingType &&
            formValues.files.length > 0,
        [formValues],
    );

    return (
        <>
            <div className={styles['drawer-header']}>
                <div className={styles['drawer-header-left']}>
                    <Text font={[FontType.text_xl_bold, FontType.text_xl_bold]} color='gray-900'>
                        {text.parentInformation}
                    </Text>

                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {text.step2of2}
                    </Text>
                </div>
                <CrossIcon className={styles['cross-icon']} onClick={onclose} />
            </div>

            <div className={styles['drawer-body']}>
                <ParentInformationData formValues={formValues} setFormValues={setFormValues} />
            </div>

            {errorMessage && <div className={styles['error-message']}>{errorMessage}</div>}

            <div className={styles['drawer-bottom']}>
                <div className={styles['bottom-wrapper']}>
                    <ButtonBaseIcon onClick={onBack} className={styles['buttonbase-class']} />
                    <Button
                        label={BUTTON_TEXT.addStudent}
                        type='button'
                        variant={ButtonVariant.SOLID}
                        color='white'
                        font={[FontType.text_md_semibold, FontType.text_md_semibold]}
                        className={styles['btn-class']}
                        EndIcon={<RightIcon />}
                        onClick={onAddStudent}
                        disabled={!isFormValid}
                    />
                </div>
            </div>
        </>
    );
};

export default Parent;
