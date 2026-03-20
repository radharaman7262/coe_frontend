'use client';

import React, { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useParams, useRouter } from 'next/navigation';

import { Input, Button, Text, TextArea, BasicDatePicker } from '@/components';
import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { OTFormKeys, OTFormType } from '@/types/OTchildInformationType';
import { AppRoutes } from '@/constant/appRoutes';
import { INITIAL_STATE, inputFields, InputFieldType, textAreaFields } from './constant';

import { useChildInformationSubmit } from '../mutation';

import styles from './styles.module.scss';

interface ChildInformationFormProps {
    studentDetail: {
        studentId: string;
        name: string;
        gender: string;
        dob: string;
        age: number;
        diagnosis: string;
    };
}

const OTChildInformationForm = ({ studentDetail }: ChildInformationFormProps) => {
    const [formData, setFormData] = useState<OTFormType>(INITIAL_STATE);
    const [loader, setLoader] = useState(false);

    const { mutate } = useChildInformationSubmit({ setLoader });
    const { id } = useParams();
    const router = useRouter();

    useEffect(() => {
        if (!studentDetail) return;

        setFormData((prev) => ({
            ...prev,
            studentId: studentDetail.studentId,
            name: studentDetail.name || '',
            gender: studentDetail.gender || '',
            age: studentDetail.age ? dayjs(studentDetail.age) : null,
            dob: studentDetail.dob ? dayjs(studentDetail.dob) : null,
            diagnosis: studentDetail.diagnosis || '',
        }));
    }, [studentDetail]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const referralField = inputFields.find(
        (f): f is InputFieldType => f.name === OTFormKeys.REFERRAL_SOURCE,
    );

    const informantField = inputFields.find(
        (f): f is InputFieldType => f.name === OTFormKeys.INFORMANT,
    );

    const modeField = inputFields.find(
        (f): f is InputFieldType => f.name === OTFormKeys.MODE_OF_ASSESSMENT,
    );

    const renderField = (field: (typeof inputFields)[number]) => {
        const { label, name, type } = field;

        const isDisabled = Boolean(studentDetail?.[name as keyof typeof studentDetail]);

        return (
            <div key={name} className={styles.inputContainer}>
                <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]} color='text-idle'>
                    {label}
                </Text>

                {type === 'input' && (
                    <Input
                        name={name}
                        disable={isDisabled}
                        value={formData[name as keyof OTFormType] as string}
                        onChange={handleChange}
                    />
                )}

                {type === 'date' && (
                    <BasicDatePicker
                        name={name}
                        disabled={isDisabled}
                        value={formData[name as keyof OTFormType] as Dayjs}
                        onChange={(date) => setFormData((prev) => ({ ...prev, [name]: date }))}
                    />
                )}
            </div>
        );
    };

    const renderRadioField = (field: InputFieldType) => {
        const { name, options } = field;

        return (
            <div className={styles.radioGroup}>
                {options?.map((item: string) => (
                    <label key={item} htmlFor={`${name}-${item}`}>
                        <input
                            id={`${name}-${item}`}
                            type='radio'
                            name={name}
                            value={item}
                            checked={formData[name as keyof OTFormType] === item}
                            onChange={handleChange}
                        />
                        {item}
                    </label>
                ))}
            </div>
        );
    };

    const isFormValid = () =>
        Object.entries(formData).every(([key, value]) => {
            if (key === 'informantOther') return true;
            return value !== '' && value !== null && value !== undefined;
        });

    const handleSubmit = () => {
        mutate(
            {
                studentId: studentDetail.studentId,
                referralSource: formData.referralSource,
                informant: {
                    type: formData.informant,
                    other: formData.informant === 'Other' ? formData.informantOther : '',
                },
                modeOfAssessment: formData.modeOfAssessment,
            },
            {
                onSuccess: () => {
                    router.replace(`/${AppRoutes.ASSESSMENT_CASE_HISTORY}/${id}`);
                },
            },
        );
    };

    return (
        <div className={styles.containerMain}>
            <div className={styles.scrollArea}>
                <div className={styles.wrapper}>
                    <Text
                        font={[FontType.text_xxl_semibold, FontType.text_xxl_semibold]}
                        tagType='h2'
                        className={styles.heading}
                    >
                        Child Information
                    </Text>

                    <div className={styles.card}>
                        <div className={styles.form}>
                            <div className={styles.grid}>
                                {inputFields
                                    .filter(
                                        (f) =>
                                            f.type !== 'radio' &&
                                            f.name !== OTFormKeys.REFERRAL_SOURCE,
                                    )
                                    .map(renderField)}
                            </div>

                            <div className={styles.diagnosis}>
                                {textAreaFields.map((field) => (
                                    <div key={field.name}>
                                        <Text
                                            font={[
                                                FontType.text_sm_medium,
                                                FontType.text_sm_medium,
                                            ]}
                                            color='text-idle'
                                        >
                                            {field.label}
                                        </Text>
                                        <TextArea
                                            name={field.name}
                                            disable={Boolean(
                                                studentDetail?.[
                                                    field.name as keyof typeof studentDetail
                                                ],
                                            )}
                                            value={
                                                formData[field.name as keyof OTFormType] as string
                                            }
                                            onChange={handleTextAreaChange}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className={styles.divider} />

                            <div className={styles.full}>
                                <Text
                                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                    color='text-idle'
                                >
                                    {referralField?.label}
                                </Text>
                                {referralField && (
                                    <Input
                                        placeholder='Enter here'
                                        name={referralField?.name}
                                        value={formData.referralSource}
                                        onChange={handleChange}
                                    />
                                )}
                            </div>

                            <div className={styles.divider} />

                            <div className={styles.informant}>
                                <Text
                                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                    color='text-idle'
                                >
                                    {informantField?.label}
                                </Text>

                                <div>
                                    {informantField && renderRadioField(informantField)}

                                    {formData.informant === 'Other' && (
                                        <div className={styles.otherInput}>
                                            <Input
                                                placeholder='Enter here'
                                                name='informantOther'
                                                value={formData.informantOther || ''}
                                                onChange={(e) =>
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        informantOther: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className={styles.divider} />

                            <div className={styles.informant}>
                                <Text
                                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                    color='text-idle'
                                >
                                    {modeField?.label}
                                </Text>
                                {modeField && renderRadioField(modeField)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.buttonWrapper}>
                <Button
                    label='Start Assessment →'
                    color='white'
                    variant={ButtonVariant.SOLID}
                    disabled={loader || !isFormValid()}
                    loader={loader}
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
};

export default OTChildInformationForm;
