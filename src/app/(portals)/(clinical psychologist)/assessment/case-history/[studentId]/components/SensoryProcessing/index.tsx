'use client';

import { useEffect, useMemo, useState } from 'react';

import { useParams, useSearchParams } from 'next/navigation';

import { QueryKeys } from '@/utils/queryKeys';

import { Button, Checkbox, Input, Text, Toaster } from '@/components/index';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { useAppMutation } from '@/hooks/useAppMutation';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitSensoryProcessing } from './utils.api';

import { DATA, INITIAL_STATE, mapApiToFormValues } from './constant';

import styles from './styles.module.scss';

const SensoryProcessing = () => {
    const [loader, setLoader] = useState(false);
    const [state, setState] = useState(INITIAL_STATE);

    const mutation = useAppMutation({
        mutationFn: submitSensoryProcessing,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const { studentId }: { studentId: string } = useParams();

    const searchParams = useSearchParams();

    const formId = searchParams.get('formId');

    const { data } = useGetCaseHistoryFormDetails({ studentId, formId: formId ?? '' });

    const { response } = data || {};

    const handleCheckboxChange = (section: string, field: string, value: boolean) => {
        setState((prev) => ({
            ...prev,
            [section]: {
                ...(prev[section] as Record<string, boolean>),
                [field]: value,
            },
        }));
    };

    const handleInputChange = (value: string) => {
        setState((prev) => ({
            ...prev,
            additionalComments: value,
        }));
    };

    const calculatePercentage = (
        data: Record<string, string | Record<string, string | boolean>>,
    ) => {
        let totalSections = 0;
        let checkedSections = 0;

        Object.entries(data).forEach(([key, value]) => {
            if (typeof value === 'object' && key !== 'studentId') {
                totalSections += 1;

                const hasAnyTrue = Object.values(value).some((v) => v === true);

                if (hasAnyTrue) {
                    checkedSections += 1;
                }
            }
            if (typeof value === 'string') {
                totalSections += 1;
                if (value) {
                    checkedSections += 1;
                }
            }
        });

        return totalSections ? Math.round((checkedSections / totalSections) * 100) : 0;
    };

    const percentage = useMemo(() => calculatePercentage(state), [state]);

    const handleClick = () => {
        calculatePercentage(state);

        mutation.mutate({
            ...state,
            percentage,
            studentId,
        });
    };

    useEffect(() => {
        if (response?.length) {
            const formatted = mapApiToFormValues(response[0]);
            setState(formatted);
        }
    }, [response]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.table}>
                    <div className={styles.header}>
                        <Text
                            tagType='span'
                            color='gray-900'
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                        >
                            Sensory System
                        </Text>
                        <Text
                            tagType='span'
                            color='gray-900'
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                        >
                            Behavior / Indicator
                        </Text>
                    </div>

                    {DATA?.map((section, index) => (
                        <div key={index as number} className={styles.section}>
                            <Text
                                tagType='div'
                                color='text-idle'
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            >
                                {section.title}
                            </Text>

                            <div className={styles.items}>
                                {section.items?.map((item, i) => (
                                    <Text
                                        tagType='label'
                                        key={i as number}
                                        className={styles.itemRow}
                                    >
                                        <Text
                                            tagType='span'
                                            font={[
                                                FontType.text_sm_regular,
                                                FontType.text_sm_regular,
                                            ]}
                                        >
                                            {item.label}
                                        </Text>
                                        <Checkbox
                                            // isChecked={!!state?.[section.key ]?.[item.key]}
                                            isChecked={
                                                typeof state?.[section.key] === 'object'
                                                    ? !!(
                                                          state[section.key] as Record<
                                                              string,
                                                              boolean
                                                          >
                                                      )[item.key]
                                                    : false
                                            }
                                            onChange={(checked) =>
                                                handleCheckboxChange(section.key, item.key, checked)
                                            }
                                        />
                                    </Text>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.comments}>
                    <Text
                        color='text-idle'
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                    >
                        Label
                    </Text>
                    <Input
                        placeholder='Enter here'
                        value={state.additionalComments as string}
                        name='additionalComments'
                        onChange={(e) => handleInputChange(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.footer}>
                <Text
                    tagType='p'
                    color='dark-blue'
                    font={[FontType.text_sm_bold, FontType.text_sm_bold]}
                    className={styles.progress}
                >
                    {percentage} %
                </Text>
                <Button
                    label='Save'
                    variant={ButtonVariant.SOLID}
                    onClick={handleClick}
                    color='white'
                    disabled={loader}
                />
            </div>
            <Toaster />
        </>
    );
};

export default SensoryProcessing;
