'use client';

import React, { useEffect } from 'react';

import { BasicDatePicker, Dropdown, Input, Text } from '@/components/index';
import { Textarea } from '@/components/ui/TextArea';

import { FontType } from '@/types/typographyCommon';

import { STATIC_GENDER, STATIC_SCHOOL_TYPE } from '@/constant/appConstants';

import { NO_LEADING_SPACES_REGEX } from '@/utils/regex';

import { MAX_LENGTHS, MIN_LENGTHS, DRAWER_DATA as text, VALIDATION_RULES } from './constant';

import { ChildFormKeys, FormValues } from './type';

import { useGradeList, useSchoolTypeList } from './queries';

import styles from './styles.module.scss';

interface Props {
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

const ChildInformationData = ({ formValues, setFormValues }: Props) => {
    const [errors, setErrors] = React.useState<Partial<Record<ChildFormKeys, string>>>({});
    const [udiseError, setUdiseError] = React.useState('');

    const { data: grades = [], isLoading: gradeLoading } = useGradeList();

    const { data: school, isLoading: schoolLoading } = useSchoolTypeList(formValues.udiseCode);

    const updateFormValue = <K extends ChildFormKeys>(key: K, value: FormValues[K]) => {
        setFormValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    useEffect(() => {
        if (school?.schoolName) {
            setFormValues((prev) => ({
                ...prev,
                [ChildFormKeys.SCHOOL_NAME]: school.schoolName,
            }));
        }
    }, [school, setFormValues]);

    const handleChange =
        (field: ChildFormKeys) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            let { value } = e.target;

            value = value.replace(NO_LEADING_SPACES_REGEX, '');

            const rule = VALIDATION_RULES[field];
            if (rule?.regex && value && !rule.regex.test(value)) {
                return;
            }

            const minLength = MIN_LENGTHS[field];
            const maxLength = MAX_LENGTHS[field];

            if (maxLength && value.length > maxLength) {
                return;
            }

            if (rule?.required && value.length > 0 && value.length < minLength) {
                setErrors((prev) => ({
                    ...prev,
                    [field]: rule.errorMessage,
                }));
            } else {
                setErrors((prev) => ({
                    ...prev,
                    [field]: '',
                }));
            }

            updateFormValue(field, value);
        };

    const handleUdiseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        if (/^\d{0,11}$/.test(value)) {
            updateFormValue(ChildFormKeys.UDISE_CODE, value);

            if (value.length > 0 && value.length < 11) {
                setUdiseError('Please enter 11 digit UDISE code');
            } else {
                setUdiseError('');
            }
        }
    };

    const schoolTypeName = formValues.schoolType?.name;

    const disableSchoolFields =
        schoolTypeName === 'No School' ||
        schoolTypeName === 'Home School' ||
        schoolTypeName === 'Play School';

    const disableSchoolName =
        disableSchoolFields ||
        schoolTypeName === 'Govt. School' ||
        schoolTypeName === 'Pvt. School';

    return (
        <div className={styles['container-wrapper']}>
            <div className={styles['drawer-form']}>
                <div className={styles['input-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                        required
                    >
                        {text.fullName}
                    </Text>

                    <Input
                        name={ChildFormKeys.FULL_NAME}
                        placeholder='Enter Full Name'
                        value={formValues.fullName}
                        onChange={handleChange(ChildFormKeys.FULL_NAME)}
                        error={Boolean(errors[ChildFormKeys.FULL_NAME])}
                        helperText={errors[ChildFormKeys.FULL_NAME]}
                    />
                </div>

                <div className={styles['input-second-container']}>
                    <div className={styles['input-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                            required
                        >
                            {text.gender}
                        </Text>

                        <Dropdown
                            label={text.selectGender}
                            options={STATIC_GENDER}
                            selectValue='name'
                            value={formValues.gender}
                            isSearchable={false}
                            onChange={(value) => updateFormValue(ChildFormKeys.GENDER, value)}
                        />
                    </div>

                    <div className={styles['input-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.dateofbirth}
                        </Text>

                        <BasicDatePicker
                            value={formValues.dateoFBirth}
                            onChange={(date) => updateFormValue(ChildFormKeys.DATE_OF_BIRTH, date)}
                        />
                    </div>
                </div>

                <div className={styles['input-second-container']}>
                    <div className={styles['input-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                            required
                        >
                            {text.schoolType}
                        </Text>
                        <Dropdown
                            label={text.selectSchool}
                            options={STATIC_SCHOOL_TYPE}
                            selectValue='name'
                            value={formValues.schoolType}
                            isSearchable={false}
                            onChange={(value) => updateFormValue(ChildFormKeys.SCHOOL_TYPE, value)}
                        />
                    </div>

                    <div className={styles['input-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.udiseCode}
                        </Text>
                        <Input
                            name='udisecode'
                            placeholder='Enter code'
                            value={formValues.udiseCode}
                            onChange={handleUdiseChange}
                            disable={disableSchoolFields}
                            error={Boolean(udiseError)}
                            helperText={udiseError}
                        />
                    </div>
                </div>

                <div className={styles['input-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {text.schoolname}
                    </Text>
                    <Input
                        name='schoolname'
                        placeholder={schoolLoading ? 'Loading...' : 'School'}
                        value={formValues.schoolName}
                        disable={disableSchoolName}
                    />
                </div>

                <div className={styles['input-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                        required
                    >
                        {text.grade}
                    </Text>
                    <Dropdown
                        label={text.selectGrade}
                        options={gradeLoading ? [] : grades}
                        selectValue='name'
                        value={formValues.grade}
                        isSearchable={false}
                        disable={disableSchoolFields}
                        onChange={(value) => updateFormValue(ChildFormKeys.GRADE, value)}
                    />
                </div>

                <div className={styles['text-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                        required
                    >
                        {text.difficultiesFaced}
                    </Text>

                    <Textarea
                        name={ChildFormKeys.DIFFICULTIES_FACED}
                        placeholder='Enter difficulties'
                        value={formValues.difficultiesFaced}
                        rows={4}
                        onChange={handleChange(ChildFormKeys.DIFFICULTIES_FACED)}
                        error={Boolean(errors[ChildFormKeys.DIFFICULTIES_FACED])}
                        helperText={errors[ChildFormKeys.DIFFICULTIES_FACED]}
                    />
                </div>
            </div>
        </div>
    );
};

export default ChildInformationData;
