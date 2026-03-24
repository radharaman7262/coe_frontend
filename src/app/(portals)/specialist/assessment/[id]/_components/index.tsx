'use client';

import React, { useEffect, useState } from 'react';

import { useParams, useRouter } from 'next/navigation';

import { AppRoutes } from '@/constant/appRoutes';
import dayjs, { Dayjs } from 'dayjs';

import { Input, Button, Text, TextArea, BasicDatePicker } from '@/components/index';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import {
    SpecialEducatorStudentFormKeys,
    SpecialEducatorStudentFormType,
} from '@/types/specialEducatorChildInformationType';

import { useChildInformationSubmit } from '../mutation';

import { INITIAL_STATE, inputFields, textAreaFields } from './constant';

import styles from './styles.module.scss';

interface ChildInformationFormProps {
    studentDetail: {
        studentId: string;
        name: string;
        gender: string;
        dob: string;
        age: number;
        areaOfConcern: string;
    };
}

const SpecialEducatorChildInformationForm = (props: ChildInformationFormProps) => {
    const { studentDetail } = props;

    const [formData, setFormData] = useState<SpecialEducatorStudentFormType>(INITIAL_STATE);
    const [loader, setLoader] = useState(false);

    const { mutate } = useChildInformationSubmit({ setLoader });

    const { id } = useParams();

    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        setFormData((prevValues) => ({
            ...prevValues,
            [SpecialEducatorStudentFormKeys.STUDENT_ID]: studentDetail.studentId || '',
            [SpecialEducatorStudentFormKeys.DOB]: dayjs(studentDetail.dob),
            [SpecialEducatorStudentFormKeys.GENDER]: studentDetail.gender || '',
            [SpecialEducatorStudentFormKeys.NAME]: studentDetail.name || '',
            [SpecialEducatorStudentFormKeys.AGE]: dayjs(studentDetail.age),
            [SpecialEducatorStudentFormKeys.AREA_OF_CONCERN]: studentDetail.areaOfConcern || '',
        }));
    }, [studentDetail]);

    const renderField = (field: (typeof inputFields)[number]) => {
        const { label, name, type } = field;

        const isDisabled = Boolean(studentDetail?.[name as keyof typeof studentDetail]);

        return (
            <div key={name} className={styles['input-container']}>
                <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]} color='text-idle'>
                    {label}
                </Text>

                {type === 'input' && (
                    <Input
                        label={label}
                        name={name}
                        disable={isDisabled}
                        value={
                            formData[field.name as keyof SpecialEducatorStudentFormType] as string
                        }
                        onChange={handleChange}
                    />
                )}

                {type === 'date' && (
                    <BasicDatePicker
                        label={label}
                        name={name}
                        value={
                            formData[field.name as keyof SpecialEducatorStudentFormType] as Dayjs
                        }
                        onChange={(date) => {
                            setFormData((prev) => ({
                                ...prev,
                                [name]: date,
                            }));
                        }}
                    />
                )}
            </div>
        );
    };

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const isFormValid = () =>
        Object.values(formData).every(
            (value) => value !== '' && value !== null && value !== undefined,
        );

    const handleSubmit = () => {
        const payload = {
            studentId: studentDetail.studentId,
            [SpecialEducatorStudentFormKeys.AREA_OF_CONCERN]:
                formData[SpecialEducatorStudentFormKeys.AREA_OF_CONCERN],
        };

        mutate(payload, {
            onSuccess: (data) => {
                const { response } = data || {};

                const { success, message } = response || {};

                if (!success) {
                    throw new Error(message);
                }

                router.replace(`/${AppRoutes.ASSESSMENT_CASE_HISTORY}/${id}`);
            },
        });
    };

    return (
        <div className={styles['child-information-container']}>
            <div className={styles['form-scroll']}>
                <div className={styles['child-information']}>
                    <Text
                        tagType='h2'
                        font={[FontType.text_xxl_semibold, FontType.text_xxl_semibold]}
                        className={styles.heading}
                    >
                        Child Information
                    </Text>
                    <div className={styles.container}>
                        <div className={styles.form}>
                            <div className={styles.formGrid}>{inputFields.map(renderField)}</div>
                            <div>
                                {textAreaFields.map((field) => (
                                    <div key={field.name} className={styles['input-container']}>
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
                                            label={field.label}
                                            name={field.name}
                                            // disable={Boolean(
                                            //     studentDetail?.[
                                            //         field.name as keyof typeof studentDetail
                                            //     ],
                                            // )}
                                            value={
                                                formData[
                                                    field.name as keyof SpecialEducatorStudentFormType
                                                ] as string
                                            }
                                            onChange={handleTextAreaChange}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <Button
                    color='white'
                    label='Start Assessment →'
                    disabled={loader || !isFormValid()}
                    loader={loader}
                    variant={ButtonVariant.SOLID}
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
};

export default SpecialEducatorChildInformationForm;
