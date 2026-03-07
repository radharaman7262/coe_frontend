'use client';

import React, { useEffect, useState } from 'react';

import { Input, Button, Text, TextArea, BasicDatePicker } from '@/components/index';

import { ButtonVariant, FontType } from '@/types/typographyCommon';
import { ChildInformationFormKeys, ChildInformationFormType } from '@/types/childInformationType';

import { INITIAL_STATE, inputFields, textAreaFields } from './constant';

import styles from './styles.module.scss';
import { useChildInformationSubmit } from '../mutation';

interface ChildInformationFormProps {
    studentDetail: {
        id: number;
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
        studentId: string;
        studentName: string;
        gender: string;
        dob: string;
        fatherName: string;
        motherName: string;
        fatherOccupation: string;
        motherOccupation: string;
        schoolName: string;
        createdBy: string;
        createdByName: string;
        updatedBy: string;
        updatedByName: string;
        createdAt: string;
        updatedAt: string;
    };
}

const ChildInformationForm = (props: ChildInformationFormProps) => {
    const { studentDetail } = props;

    const [formData, setFormData] = useState<ChildInformationFormType>(INITIAL_STATE);
    const [loader, setLoader] = useState(false);

    const { mutate } = useChildInformationSubmit({ setLoader });

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
            [ChildInformationFormKeys.CHILD_NAME]: studentDetail.studentName || '',
            [ChildInformationFormKeys.DOB]: studentDetail.dob || '',
            [ChildInformationFormKeys.GENDER]: studentDetail.gender || '',
            [ChildInformationFormKeys.ADDRESS]: '',
            [ChildInformationFormKeys.FATHER_NAME]: studentDetail.fatherName || '',
            [ChildInformationFormKeys.MOTHER_NAME]: studentDetail.motherName || '',
            [ChildInformationFormKeys.CONTACT_NUMBER]: '',
            [ChildInformationFormKeys.FATHER_EDUCATION]: '',
            [ChildInformationFormKeys.MOTHER_EDUCATION]: '',
            [ChildInformationFormKeys.FATHER_OCCUPATION]: studentDetail.fatherOccupation || '',
            [ChildInformationFormKeys.MOTHER_OCCUPATION]: studentDetail.motherOccupation || '',
            [ChildInformationFormKeys.LANGUAGES]: '',
            [ChildInformationFormKeys.REFERRED_BY]: studentDetail.referredBy || '',
            [ChildInformationFormKeys.VISIT_DATE]: studentDetail.dateOfVisit || '',
            [ChildInformationFormKeys.INFORMANT]: studentDetail.informantNameRelationship || '',
            [ChildInformationFormKeys.RELIABILITY]: studentDetail.reliabilityOfInformant || '',
            [ChildInformationFormKeys.PRECIPITATING_FACTORS]:
                studentDetail.precipitatingFactors || '',
            [ChildInformationFormKeys.PREPETUATING_FACTORS]:
                studentDetail.perpetuatingFactors || '',
            [ChildInformationFormKeys.PRE_DISPOSING_FACTORS]:
                studentDetail.predisposingFactors || '',
            [ChildInformationFormKeys.PROGRESS]: studentDetail.progress || '',
            [ChildInformationFormKeys.ONSET]: studentDetail.onset || '',
            [ChildInformationFormKeys.PROBLEM_RECOGNITION_AGE]:
                studentDetail.ageWhenProblemRecognized || '',
            [ChildInformationFormKeys.CHIEF_COMPLAINTS]: studentDetail.chiefComplaints || '',
            [ChildInformationFormKeys.COURSE]: studentDetail.course || '',
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
                        value={formData[field.name as keyof ChildInformationFormType]}
                        onChange={handleChange}
                    />
                )}

                {type === 'date' && <BasicDatePicker label={label} name={name} value={null} />}
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
                formData[ChildInformationFormKeys.PROGRESS],
            [ChildInformationFormKeys.PRE_DISPOSING_FACTORS]:
                formData[ChildInformationFormKeys.PRE_DISPOSING_FACTORS],
            [ChildInformationFormKeys.PRECIPITATING_FACTORS]:
                formData[ChildInformationFormKeys.PRECIPITATING_FACTORS],
            [ChildInformationFormKeys.PREPETUATING_FACTORS]:
                formData[ChildInformationFormKeys.PREPETUATING_FACTORS],
            [ChildInformationFormKeys.PROBLEM_RECOGNITION_AGE]:
                formData[ChildInformationFormKeys.PROBLEM_RECOGNITION_AGE],
        };

        mutate(payload);
    };

    return (
        <div className={styles['child-information-container']}>
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
                                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                        color='text-idle'
                                    >
                                        {field.label}
                                    </Text>

                                    <TextArea
                                        label={field.label}
                                        name={field.name}
                                        disable={Boolean(studentDetail?.[field.name as keyof typeof studentDetail])}
                                        value={
                                            formData[field.name as keyof ChildInformationFormType]
                                        }
                                        onChange={handleTextAreaChange}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <Button
                    color='white'
                    label='Start Case Study →'
                    disabled={loader}
                    loader={loader}
                    variant={ButtonVariant.SOLID}
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
};

export default ChildInformationForm;
