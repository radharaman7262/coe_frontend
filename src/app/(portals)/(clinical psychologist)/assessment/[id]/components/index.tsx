'use client';

import React, { useEffect, useState } from 'react';

import { useParams, useRouter } from 'next/navigation';

import { AppRoutes } from '@/constant/appRoutes';

import dayjs, { Dayjs } from 'dayjs';

import { Input, Button, Text, TextArea, BasicDatePicker } from '@/components/index';

import { ButtonVariant, FontType } from '@/types/typographyCommon';
import { ChildInformationFormKeys, ChildInformationFormType } from '@/types/childInformationType';

import { useChildInformationSubmit } from '../mutation';

import { disableFieldMap, INITIAL_STATE, inputFields, textAreaFields } from './constant';

import styles from './styles.module.scss';

interface ChildInformationFormProps {
    studentDetail: {
        id: string;
        referredBy: string;
        dateOfVisit: string;
        informantNameRelationship: string;
        reliabilityOfInformant: string;
        chiefComplaints: string;
        ageWhenProblemRecognized: string;
        onset: string;
        course: string;
        progress: string;
        predisposingFactors: string;
        precipitatingFactors: string;
        perpetuatingFactors: string;

        address: string | null;
        contact: string | null;
        fatherQualification: string | null;
        motherQualification: string | null;
        languageSpoken: string | null;

        studentId: string;
        studentName: string;
        gender: string;
        dob: string;
        fatherName: string;
        motherName: string;
        fatherOccupation: string;
        motherOccupation: string;
        status: string;

        briefHistory: string;
    };
}

const ChildInformationForm = (props: ChildInformationFormProps) => {
    const { studentDetail } = props;

    const [formData, setFormData] = useState<ChildInformationFormType>(INITIAL_STATE);
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
        if (!studentDetail) return;

        setFormData((prev) => ({
            ...prev,

            [ChildInformationFormKeys.CHILD_NAME]: studentDetail.studentName || '',
            [ChildInformationFormKeys.DOB]: studentDetail.dob ? dayjs(studentDetail.dob) : null,
            [ChildInformationFormKeys.GENDER]: studentDetail.gender || '',

            [ChildInformationFormKeys.ADDRESS]: studentDetail.address || '',
            [ChildInformationFormKeys.CONTACT_NUMBER]: studentDetail.contact || '',

            [ChildInformationFormKeys.FATHER_NAME]: studentDetail.fatherName || '',
            [ChildInformationFormKeys.MOTHER_NAME]: studentDetail.motherName || '',

            [ChildInformationFormKeys.FATHER_EDUCATION]: studentDetail.fatherQualification || '',
            [ChildInformationFormKeys.MOTHER_EDUCATION]: studentDetail.motherQualification || '',

            [ChildInformationFormKeys.FATHER_OCCUPATION]: studentDetail.fatherOccupation || '',
            [ChildInformationFormKeys.MOTHER_OCCUPATION]: studentDetail.motherOccupation || '',

            [ChildInformationFormKeys.LANGUAGES]: studentDetail.languageSpoken || '',

            [ChildInformationFormKeys.REFERRED_BY]: studentDetail.referredBy || '',

            [ChildInformationFormKeys.VISIT_DATE]: studentDetail.dateOfVisit
                ? dayjs(studentDetail.dateOfVisit)
                : null,

            [ChildInformationFormKeys.INFORMANT]: studentDetail.informantNameRelationship || '',

            [ChildInformationFormKeys.RELIABILITY]: studentDetail.reliabilityOfInformant || '',

            [ChildInformationFormKeys.CHIEF_COMPLAINTS]: studentDetail.chiefComplaints || '',

            [ChildInformationFormKeys.PROBLEM_RECOGNITION_AGE]:
                studentDetail.ageWhenProblemRecognized || '',

            [ChildInformationFormKeys.ONSET]: studentDetail.onset || '',
            [ChildInformationFormKeys.COURSE]: studentDetail.course || '',
            [ChildInformationFormKeys.PROGRESS]: studentDetail.progress || '',

            [ChildInformationFormKeys.PRE_DISPOSING_FACTORS]:
                studentDetail.predisposingFactors || '',

            [ChildInformationFormKeys.PRECIPITATING_FACTORS]:
                studentDetail.precipitatingFactors || '',

            [ChildInformationFormKeys.PREPETUATING_FACTORS]:
                studentDetail.perpetuatingFactors || '',

            [ChildInformationFormKeys.BRIEF_HISTORY]: studentDetail.briefHistory || '',
        }));
    }, [studentDetail]);

    const renderField = (field: (typeof inputFields)[number]) => {
        const { label, name, type } = field;

        const isDisabled = (() => {
            const key = disableFieldMap[name] as keyof typeof studentDetail;
            const value = studentDetail?.[key];
            return value !== null && value !== '' && value !== undefined;
        })();

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
                        value={formData[field.name as keyof ChildInformationFormType] as string}
                        onChange={handleChange}
                    />
                )}

                {type === 'date' && (
                    <BasicDatePicker
                        name={name}
                        value={formData[field.name as keyof ChildInformationFormType] as Dayjs}
                        onChange={(date) => {
                            setFormData((prev) => ({
                                ...prev,
                                [name]: date,
                            }));
                        }}
                        isDisableFutureDate={false}
                        minDate={name === ChildInformationFormKeys.VISIT_DATE ? dayjs() : undefined}
                        disabled={isDisabled}
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
            [ChildInformationFormKeys.REFERRED_BY]: formData[ChildInformationFormKeys.REFERRED_BY],
            [ChildInformationFormKeys.VISIT_DATE]: formData[ChildInformationFormKeys.VISIT_DATE],
            [ChildInformationFormKeys.INFORMANT]: formData[ChildInformationFormKeys.INFORMANT],
            [ChildInformationFormKeys.RELIABILITY]: formData[ChildInformationFormKeys.RELIABILITY],
            [ChildInformationFormKeys.ONSET]: formData[ChildInformationFormKeys.ONSET],
            [ChildInformationFormKeys.PROGRESS]: formData[ChildInformationFormKeys.PROGRESS],
            [ChildInformationFormKeys.CHIEF_COMPLAINTS]:
                formData[ChildInformationFormKeys.CHIEF_COMPLAINTS],
            [ChildInformationFormKeys.PRE_DISPOSING_FACTORS]:
                formData[ChildInformationFormKeys.PRE_DISPOSING_FACTORS],
            [ChildInformationFormKeys.PRECIPITATING_FACTORS]:
                formData[ChildInformationFormKeys.PRECIPITATING_FACTORS],
            [ChildInformationFormKeys.PREPETUATING_FACTORS]:
                formData[ChildInformationFormKeys.PREPETUATING_FACTORS],
            [ChildInformationFormKeys.PROBLEM_RECOGNITION_AGE]:
                formData[ChildInformationFormKeys.PROBLEM_RECOGNITION_AGE],
            [ChildInformationFormKeys.LANGUAGES]: formData[ChildInformationFormKeys.LANGUAGES],
            [ChildInformationFormKeys.CONTACT_NUMBER]:
                formData[ChildInformationFormKeys.CONTACT_NUMBER],
            [ChildInformationFormKeys.FATHER_EDUCATION]:
                formData[ChildInformationFormKeys.FATHER_EDUCATION],
            [ChildInformationFormKeys.MOTHER_EDUCATION]:
                formData[ChildInformationFormKeys.MOTHER_EDUCATION],
            [ChildInformationFormKeys.COURSE]: formData[ChildInformationFormKeys.COURSE],
            [ChildInformationFormKeys.ADDRESS]: formData[ChildInformationFormKeys.ADDRESS],
            [ChildInformationFormKeys.BRIEF_HISTORY]:
                formData[ChildInformationFormKeys.BRIEF_HISTORY],
        };

        mutate(payload, {
            onSuccess: (data) => {
                const { status, error } = data || {};

                if (!status) {
                    throw new Error(error);
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
                                            disable={Boolean(
                                                studentDetail?.[
                                                    field.name as keyof typeof studentDetail
                                                ],
                                            )}
                                            value={
                                                formData[
                                                    field.name as keyof ChildInformationFormType
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
                    label='Start Case Study →'
                    disabled={loader || !isFormValid()}
                    loader={loader}
                    variant={ButtonVariant.SOLID}
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
};

export default ChildInformationForm;
