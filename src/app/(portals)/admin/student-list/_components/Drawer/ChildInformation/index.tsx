'use client';

import React, { useMemo } from 'react';

import { Button, Text } from '@/components';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import RightIcon from '@/public/assets/svg/right-arrow-icon.svg';
import CrossIcon from '@/public/assets/svg/cross-icon.svg';

import ChildInformationData from './ChildInformation';

import { BUTTON_TEXT, DRAWER_DATA as text } from './constant';

import { FormValues } from './type';

import styles from './styles.module.scss';

interface ChildPropsType {
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
    onContinue: () => void;
    onclose: () => void;
}

const Child = ({ formValues, setFormValues, onContinue, onclose }: ChildPropsType) => {
    const isFormValid = useMemo(() => {
        const schoolTypeName = formValues.schoolType?.name;

        const isNoOrHome = schoolTypeName === 'No School' || schoolTypeName === 'Home School';

        const isGovtOrPvt = schoolTypeName === 'Govt. School' || schoolTypeName === 'Pvt. School';

        const isSchoolNameValid = !!formValues.schoolName?.trim();
        const isGradeValid = !!formValues.grade;

        return (
            !!formValues.fullName?.trim() &&
            formValues.fullName.trim().length >= 3 &&
            formValues.fullName.trim().length <= 30 &&
            !!formValues.difficultiesFaced?.trim() &&
            formValues.difficultiesFaced.trim().length >= 10 &&
            (isNoOrHome ? true : isSchoolNameValid) &&
            (isGovtOrPvt ? isGradeValid : true)
        );
    }, [formValues]);

    return (
        <>
            <div className={styles['drawer-header']}>
                <div className={styles['drawer-header-left']}>
                    <Text font={[FontType.text_xl_bold, FontType.text_xl_bold]} color='gray-900'>
                        {text.childInformation}
                    </Text>

                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {text.step1of2}
                    </Text>
                </div>

                <CrossIcon className={styles['cross-icon']} onClick={onclose} />
            </div>

            <div className={styles['drawer-body']}>
                <ChildInformationData
                    formValues={formValues}
                    setFormValues={setFormValues}
                    setUdiseValid={() => {}}
                />
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
                    disabled={!isFormValid}
                />
            </div>
        </>
    );
};

export default Child;
