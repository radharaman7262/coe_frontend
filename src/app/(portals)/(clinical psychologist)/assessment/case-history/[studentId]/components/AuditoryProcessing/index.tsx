'use client';

import { useEffect, useState } from 'react';

import { Button, Input, Text, Radio } from '@/components/index';
import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { QueryKeys } from '@/utils/queryKeys';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useParams, useSearchParams } from 'next/navigation';
import { auditoryProcessing } from './utils.api';

import { AUDITORY_QUESTIONS, SCALE_OPTIONS } from './constant';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import styles from './styles.module.scss';

type FormState = Record<string, number>;

const AuditoryProcessing = () => {
    const [formData, setFormData] = useState<FormState>({});
    const [comment, setComment] = useState('');
    const [loader, setLoader] = useState<boolean>(false);

    const mutation = useAppMutation({
        mutationFn: auditoryProcessing,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const handleChange = (key: string, value: number) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const isFormComplete = AUDITORY_QUESTIONS.every((q) => formData[q.key] !== undefined);

    const { studentId }: { studentId: string } = useParams();

    const handleSubmit = () => {
        const rawData = AUDITORY_QUESTIONS.map((q) => ({
            questionId: q.id,
            key: q.key,
            answer: formData[q.key],
        }));

        const payload = {
            data: { details: rawData, comments: comment },
            studentId,
        };

        mutation.mutate(payload);
    };

    const searchParams = useSearchParams();

    const formId = searchParams.get('formId');
    const id = searchParams.get('id');
    const sectionId = searchParams.get('sectionId');

    const { data } = useGetCaseHistoryFormDetails({
        studentId,
        formId: formId ?? '',
        id: id ?? '',
        sectionId: sectionId ?? '',
    });

    const { response } = data || {};

    useEffect(() => {
        if (response?.length) {
            const details = response[0]?.data?.details || [];

            const formattedData = details.reduce(
                (acc: Record<string, number>, item: { key: string; answer: number }) => {
                    acc[item.key] = item.answer;

                    return acc;
                },
                {},
            );

            setFormData(formattedData);

            setComment(response[0]?.data?.comments || '');
        }
    }, [response]);

    return (
        <div className={styles.container}>
            {/* 🔹 Header */}
            <div className={styles['bg-header-title']}>
                {SCALE_OPTIONS.map((item) => (
                    <div key={item.value}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='primary-cta'
                        >
                            {item.label}:&nbsp;
                        </Text>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-gray-900'
                        >
                            When presented with the opportunity, your child{' '}
                            {item.label.toLowerCase()} responds in this manner.
                        </Text>
                    </div>
                ))}

                <Text
                    font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                    color='text-gray-900'
                >
                    1 = Always | 2 = Frequently | 3 = Occasionally | 4 = Seldom | 5 = Never
                </Text>
            </div>

            {/* 🔹 Form */}
            <form
                className={styles.wrapper}
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                {AUDITORY_QUESTIONS.map((q) => {
                    const legendId = `question-${q.key}`;

                    return (
                        <fieldset key={q.key} className={styles.row}>
                            {/* Accessible Legend */}
                            {/* <legend id={legendId} className={styles.legend}>
                                {index + 1}. {q.label}
                            </legend> */}

                            {/* Icon */}
                            <div className={styles.icon} aria-hidden='true'>
                                👂
                            </div>

                            {/* Type */}
                            <div className={styles.tag}>
                                <Text
                                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                    color='text-gray-900'
                                >
                                    {q.type}
                                </Text>
                            </div>

                            {/* Question */}
                            <div className={styles.question}>
                                <Text
                                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                    color='text-gray-900'
                                >
                                    {q?.id}. {q.label}
                                </Text>
                            </div>

                            {/* Radio Group */}
                            <div
                                className={styles.options}
                                role='radiogroup'
                                aria-labelledby={legendId}
                            >
                                {SCALE_OPTIONS.map((opt) => (
                                    <Radio
                                        key={opt.value}
                                        name={q.key}
                                        value={opt.value}
                                        label={String(opt.value)}
                                        checked={formData[q.key] === opt.value}
                                        onChange={(e) =>
                                            handleChange(q.key, Number(e.target.value))
                                        }
                                    />
                                ))}
                            </div>
                        </fieldset>
                    );
                })}

                {/* 🔹 Comment */}
                <div className={styles.comments}>
                    <Text
                        color='text-idle'
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                    >
                        Comment
                    </Text>

                    <Input
                        placeholder='Enter here'
                        value={comment}
                        name='additionalComments'
                        onChange={(e) => setComment(e.target.value)}
                        aria-label='Additional comments'
                    />
                </div>

                {/* 🔹 Submit */}
                <div className={styles.footer}>
                    <Button
                        label='Save'
                        type='submit'
                        variant={ButtonVariant.SOLID}
                        color='white'
                        disabled={!isFormComplete}
                        loader={loader}
                    />
                </div>
            </form>
        </div>
    );
};

export default AuditoryProcessing;
