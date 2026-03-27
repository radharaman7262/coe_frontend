'use client';

import React, { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useParams, useRouter } from 'next/navigation';

import { Input, Button, Text, TextArea, BasicDatePicker } from '@/components';
import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { AppRoutes } from '@/constant/appRoutes';

import {
    SpeechTherapistStudentFormKeys,
    SpeechTherapistStudentFormType,
} from '@/types/speechTherapistChildInformationType';

import { submitSpeechTherapistChildInformation } from '../../../utils.api';

import {
    disableFieldMap,
    INITIAL_STATE,
    inputFields,
    InputFieldType,
    textAreaFields,
} from './constant';

import { getSelectAssessmentListDetail } from './SelectAssessmentModal/util';
import SelectAssessmentModal from './SelectAssessmentModal';
import { AssessmentItem } from './SelectAssessmentModal/type';

import styles from './styles.module.scss';

interface ChildInformationFormProps {
    studentDetail: {
        studentId: string;
        name: string;
        gender: string;
        dob: string;
        age: number;
        diagnosis: string;
        primaryConcern: string;
        languageAtHome: string;
        speechDiagnosis?: {
            type: string;
            other: string;
        };
    };
}

const SpeechTherapistChildInformationForm = ({ studentDetail }: ChildInformationFormProps) => {
    const [formData, setFormData] = useState<SpeechTherapistStudentFormType>(INITIAL_STATE);
    const [loader, setLoader] = useState(false);

    const [openModal, setOpenModal] = useState(false);
    const [assessmentList, setAssessmentList] = useState<AssessmentItem[]>([]);

    // const { mutateAsync } = useChildInformationSubmit({ setLoader });
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
            primaryConcern: studentDetail.primaryConcern || '',
            languageAtHome: studentDetail.languageAtHome || '',

            diagnosisAny: studentDetail.speechDiagnosis?.type || '',

            diagnosisOther:
                studentDetail.speechDiagnosis?.type === 'Other'
                    ? studentDetail.speechDiagnosis?.other || ''
                    : '',
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

    const primaryField = inputFields.find(
        (f): f is InputFieldType => f.name === SpeechTherapistStudentFormKeys.PRIMARY_CONCERN,
    );

    const languageField = inputFields.find(
        (f): f is InputFieldType => f.name === SpeechTherapistStudentFormKeys.LANGUAGES_AT_HOME,
    );

    const diagnosisField = inputFields.find(
        (f): f is InputFieldType => f.name === SpeechTherapistStudentFormKeys.DIAGNOSIS_ANY,
    );

    const renderField = (field: (typeof inputFields)[number]) => {
        const { label, name, type } = field;

        const isDisabled = (() => {
            const key = disableFieldMap[name] as keyof typeof studentDetail;
            const value = studentDetail?.[key];
            return value !== null && value !== '' && value !== undefined;
        })();

        return (
            <div key={name} className={styles.inputContainer}>
                <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]} color='text-idle'>
                    {label}
                </Text>

                {type === 'input' && (
                    <Input
                        name={name}
                        disable={isDisabled}
                        value={formData[name as keyof SpeechTherapistStudentFormType] as string}
                        onChange={handleChange}
                    />
                )}

                {type === 'date' && (
                    <BasicDatePicker
                        name={name}
                        disabled={isDisabled}
                        value={formData[name as keyof SpeechTherapistStudentFormType] as Dayjs}
                        onChange={(date) => setFormData((prev) => ({ ...prev, [name]: date }))}
                    />
                )}
            </div>
        );
    };

    const renderRadioField = (field: InputFieldType) => {
        const { name, options } = field;

        const isDisabled = (() => {
            if (name === SpeechTherapistStudentFormKeys.PRIMARY_CONCERN) {
                return !!studentDetail?.primaryConcern;
            }

            if (name === SpeechTherapistStudentFormKeys.DIAGNOSIS_ANY) {
                return !!studentDetail?.speechDiagnosis?.type;
            }

            return false;
        })();

        const isPrimary = name === SpeechTherapistStudentFormKeys.PRIMARY_CONCERN;
        const isDiagnosis = name === SpeechTherapistStudentFormKeys.DIAGNOSIS_ANY;

        return (
            <div
                className={`${styles.radioGroup} ${
                    isPrimary ? styles.primaryGrid : ''
                } ${isDiagnosis ? styles.diagnosisGrid : ''}`}
            >
                {options?.map((item: string) => (
                    <label key={item} htmlFor={`${name}-${item}`}>
                        <input
                            id={`${name}-${item}`}
                            type='radio'
                            name={name}
                            value={item}
                            checked={
                                formData[name as keyof SpeechTherapistStudentFormType] === item
                            }
                            onChange={handleChange}
                            disabled={isDisabled}
                        />
                        {item}
                    </label>
                ))}
            </div>
        );
    };

    const isFormValid = () =>
        Object.entries(formData).every(([key, value]) => {
            if (key === 'diagnosisOther') return true;
            return value !== '' && value !== null && value !== undefined;
        });

    const handleSubmit = async () => {
        try {
            setLoader(true);
            const payload = {
                studentId: studentDetail.studentId,
                primaryConcern: formData.primaryConcern,
                diagnosis: {
                    type: formData.diagnosisAny,
                    other: formData.diagnosisAny === 'Other' ? formData.diagnosisOther : '',
                },
                languageAtHome: formData.languageAtHome,
                // diagnosisAny: formData.diagnosisAny,
            };

            const response = await submitSpeechTherapistChildInformation(payload);

            const { status, error } = response || {};

            if (!status) {
                throw new Error(error);
            }

            const selectedAssessmentResponse = await getSelectAssessmentListDetail(
                studentDetail.studentId,
            );

            const {
                status: assessmentStatus,
                response: apiResponse,
                error: assessmentError,
            } = selectedAssessmentResponse || {};

            if (!assessmentStatus) {
                throw new Error(assessmentError);
            }
            setAssessmentList(apiResponse || []);

            setOpenModal(true);
        } catch (error) {
            console.error('Submit or fetch error:', error);
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setLoader(false);
    };

    return (
        <div className={styles.containerMain}>
            {assessmentList && openModal && (
                <SelectAssessmentModal
                    open={openModal}
                    setOpen={setOpenModal}
                    data={assessmentList}
                    setAssessmentList={setAssessmentList}
                    studentId={Number(studentDetail.studentId)}
                    onClose={() => {
                        handleCloseModal();
                    }}
                    onContinue={() => {
                        router.replace(`/${AppRoutes.ASSESSMENT_CASE_HISTORY}/${id}`);
                    }}
                />
            )}

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
                                            f.name !==
                                                SpeechTherapistStudentFormKeys.LANGUAGES_AT_HOME,
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
                                                formData[
                                                    field.name as keyof SpeechTherapistStudentFormType
                                                ] as string
                                            }
                                            onChange={handleTextAreaChange}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className={styles.divider} />

                            <div className={styles.informant}>
                                <Text
                                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                    color='text-idle'
                                >
                                    {primaryField?.label}
                                </Text>
                                {primaryField && renderRadioField(primaryField)}
                            </div>

                            <div className={styles.divider} />

                            <div className={styles.full}>
                                <Text
                                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                    color='text-idle'
                                >
                                    {languageField?.label}
                                </Text>
                                {languageField && (
                                    <Input
                                        placeholder='Enter here'
                                        name={languageField?.name}
                                        value={formData.languageAtHome}
                                        onChange={handleChange}
                                        disable={Boolean(studentDetail?.languageAtHome)}
                                    />
                                )}
                            </div>

                            <div className={styles.divider} />

                            <div className={styles.informant}>
                                <Text
                                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                    color='text-idle'
                                >
                                    {diagnosisField?.label}
                                </Text>

                                <div>
                                    {diagnosisField && renderRadioField(diagnosisField)}

                                    {formData.diagnosisAny === 'Other' && (
                                        <div className={styles.otherInput}>
                                            <Input
                                                placeholder='Enter here'
                                                name='diagnosisOther'
                                                value={formData.diagnosisOther || ''}
                                                disable={Boolean(
                                                    studentDetail?.speechDiagnosis?.type,
                                                )}
                                                onChange={(e) =>
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        diagnosisOther: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    )}
                                </div>
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

export default SpeechTherapistChildInformationForm;
