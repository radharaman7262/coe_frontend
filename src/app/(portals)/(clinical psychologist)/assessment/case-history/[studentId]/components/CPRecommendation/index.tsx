/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useEffect, useState } from 'react';

import { useParams, useSearchParams } from 'next/navigation';

import { useAppMutation } from '@/hooks/useAppMutation';

import { Checkbox, Input, Text, Button, ShimmerUiContainer } from '@/components/index';

import { QueryKeys } from '@/utils/queryKeys';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import DocIcon from '@public/assets/svg/doc-icon.svg';

import { calculateCPPercentage, mapCPApiToState } from './constant';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitCPRecommendation } from './utils.api';

import styles from './styles.module.scss';

const options = [
    {
        key: 'speechTherapy',
        label: 'Regular speech-language therapy',
        hasInput: true,
        inputKey: 'frequency',
        placeholder: 'eg. 2 sessions/week',
    },
    { key: 'oralMotor', label: 'Oral motor strengthening' },
    { key: 'aac', label: 'AAC trial / continuation' },
    { key: 'parentTraining', label: 'Parent / caregiver training' },
    { key: 'feeding', label: 'Feeding therapy (if indicated)' },
    { key: 'otReferral', label: 'OT referral (for fine motor / seating)' },
    {
        key: 'multidisciplinary',
        label: 'Multidisciplinary follow-up (neurologist, pediatrician, psychologist)',
    },
];

export default function CPRecommendations() {
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    const [inputs, setInputs] = useState<Record<string, string>>({});
    const [loader, setLoader] = useState(false);

    const { studentId } = useParams();

    const searchParams = useSearchParams();

    const formId = searchParams.get('formId');
    const sectionId = searchParams.get('sectionId');
    const id = searchParams.get('id');

    const mutation = useAppMutation({
        mutationFn: submitCPRecommendation,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const { data, isLoading } = useGetCaseHistoryFormDetails({
        studentId: (studentId as string) ?? '',
        id: (id as string) ?? '',
        formId: (formId as string) ?? '',
        sectionId: (sectionId as string) ?? '',
    });

    const { response } = data || {};

    useEffect(() => {
        if (response?.[0]) {
            const { selectedState, inputState } = mapCPApiToState(response[0]);

            setSelected(selectedState);
            setInputs(inputState);
        }
    }, [response]);

    const toggle = (key: string) => {
        setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleInput = (key: string, value: string) => {
        setInputs((prev) => ({ ...prev, [key]: value }));
    };

    const handleClick = () => {
        const payload: any = {
            studentId: Number(studentId),

            therapies: {
                speechLanguageTherapy: !!selected.speechTherapy,
                oralMotorStrengthening: !!selected.oralMotor,
                aacTrial: !!selected.aac,
                parentTraining: !!selected.parentTraining,
                feedingTherapy: !!selected.feeding,
                otReferral: !!selected.otReferral,
                multidisciplinaryFollowUp: !!selected.multidisciplinary,
            },

            therapyFrequency: {
                value: selected.speechTherapy ? inputs.frequency || '' : '',
            },

            percentage: calculateCPPercentage(selected, inputs),

            parnetFormId: id,
        };

        mutation.mutate(payload);

        // console.lo;

        setLoader(true);
    };

    return isLoading ? (
        <ShimmerUiContainer className={styles['accordion-shimmer']} />
    ) : (
        <div>
            <div className={styles['recommendation-container']}>
                <div className={styles.section}>
                    <Text
                        tagType='div'
                        font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        color='gray-900'
                        className={styles.label}
                    >
                        Therapies
                    </Text>

                    <div className={styles.list}>
                        {options.map((item) => (
                            <div key={item.key} className={styles.row}>
                                <Checkbox
                                    isChecked={!!selected[item.key]}
                                    onChange={() => toggle(item.key)}
                                />

                                <div className={styles.content}>
                                    <Text
                                        font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                        tagType='span'
                                        color='gray-900'
                                    >
                                        {item.label}
                                    </Text>

                                    {/* Input under label */}
                                    {item.hasInput && selected[item.key] && (
                                        <div className={styles.inputWrapper}>
                                            <Text
                                                font={[
                                                    FontType.text_sm_regular,
                                                    FontType.text_sm_regular,
                                                ]}
                                                color='gray-500'
                                            >
                                                Therapy Frequency
                                            </Text>

                                            <Input
                                                name=''
                                                placeholder={item.placeholder}
                                                value={inputs[item.inputKey!] || ''}
                                                onChange={(e) =>
                                                    handleInput(item.inputKey!, e.target.value)
                                                }
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.actions}>
                    <Text
                        tagType='span'
                        font={[FontType.text_sm_bold, FontType.text_sm_bold]}
                        color='dark-blue'
                        className={styles.progress}
                    >
                        {`${calculateCPPercentage(selected, inputs)} %`}
                    </Text>
                    <Button
                        label='save'
                        StartIcon={<DocIcon />}
                        variant={ButtonVariant.SOLID}
                        size='small'
                        loader={loader}
                        className={styles['save-button']}
                        color='white'
                        onClick={handleClick}
                    />
                </div>
            </div>
        </div>
    );
}
