'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';

import { Button, Checkbox, Input, ShimmerUiContainer, Text } from '@/components';

import { QueryKeys } from '@/utils/queryKeys';

import DocIcon from '@public/assets/svg/doc-icon.svg';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { useAppMutation } from '@/hooks/useAppMutation';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitGeneralSpeechRecommend } from './utils.api';

import styles from './styles.module.scss';

import { calculatePercentage, mapApiToState } from './constant';

type Therapy = {
    key: string;
    label: string;
    hasInput?: boolean;
    placeholder?: string;
};

type Referral = {
    key: string;
    label: string;
};

const therapies: Therapy[] = [
    { key: 'speech', label: 'Speech therapy', hasInput: true, placeholder: 'Enter here' },
    { key: 'parentTraining', label: 'Parent training / caregiver coachings' },
    { key: 'pecs', label: 'PECS / AAC trial', hasInput: true, placeholder: 'Enter Stage' },
    { key: 'ot', label: 'OT (Sensory Integration)' },
];

const referrals: Referral[] = [
    { key: 'psychologist', label: 'Psychologist' },
    { key: 'devPediatrician', label: 'Dev. Pediatrician' },
    { key: 'audiologist', label: 'Audiologist' },
    { key: 'homePlan', label: 'Home plan: visuals / routines / reinforcement' },
];

const GeneralSpeechRecommendation = () => {
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    const [inputs, setInputs] = useState<Record<string, string>>({});
    const [loader, setLoader] = useState(false);

    const toggle = (key: string) => {
        setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const { studentId } = useParams();

    const searchParams = useSearchParams();

    const formId = searchParams.get('formId');
    const sectionId = searchParams.get('sectionId');
    const id = searchParams.get('id');

    const mutation = useAppMutation({
        mutationFn: submitGeneralSpeechRecommend,
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
            const { selectedState, inputState } = mapApiToState(response[0]);

            setSelected(selectedState);
            setInputs(inputState);
        }
    }, [response]);

    const handleInput = (key: string, value: string) => {
        setInputs((prev) => ({ ...prev, [key]: value }));
    };

    const handleClick = () => {
        const payload = {
            studentId: studentId as string,

            therapies: {
                speechTherapy: {
                    selected: !!selected.speech,
                    frequencyPerWeek:
                        selected.speech && inputs.speech ? Number(inputs.speech) : null,
                },

                parentTraining: !!selected.parentTraining,

                pecsAacTrial: {
                    selected: !!selected.pecs,
                    stage: selected.pecs ? inputs.pecs || '' : '',
                },

                otSensoryIntegration: !!selected.ot,
            },

            referralTo: {
                psychologist: !!selected.psychologist,
                developmentalPediatrician: !!selected.devPediatrician,
                audiologist: !!selected.audiologist,
                homePlan: !!selected.homePlan,
            },

            percentage: calculatePercentage(selected, inputs), // 🔁 replace with dynamic calculation
            parnetFormId: sectionId, // 🔁 replace dynamically
        };

        mutation.mutate(payload);
    };

    return isLoading ? (
        <ShimmerUiContainer className={styles['accordion-shimmer']} />
    ) : (
        <>
            <div className={styles['general-speech-container']}>
                {/* Therapies */}
                <div className={styles.section}>
                    <Text
                        tagType='div'
                        color='gray-700'
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        className={styles.label}
                    >
                        Therapies
                    </Text>

                    <div className={styles.grid}>
                        {therapies.map((item) => (
                            <div key={item.key} className={styles.row}>
                                <Text tagType='label' className={styles.checkboxRow}>
                                    <Checkbox
                                        isChecked={!!selected[item.key]}
                                        onChange={() => toggle(item.key)}
                                    />
                                    <Text
                                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                        tagType='span'
                                        color='gray-700'
                                    >
                                        {item.label}
                                    </Text>
                                </Text>

                                {item.hasInput && selected[item.key] && (
                                    <div className={styles.inputGroup}>
                                        <Input
                                            name=''
                                            placeholder={item.placeholder}
                                            value={inputs[item.key] || ''}
                                            onChange={(e) => handleInput(item.key, e.target.value)}
                                        />
                                        {item.key === 'speech' && (
                                            <Text
                                                font={[
                                                    FontType.text_sm_medium,
                                                    FontType.text_sm_medium,
                                                ]}
                                                tagType='span'
                                                color='gray-700'
                                            >
                                                /week
                                            </Text>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider} />

                {/* Referrals */}
                <div className={styles.section}>
                    <Text
                        tagType='div'
                        color='gray-700'
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        className={styles.label}
                    >
                        Referral to
                    </Text>

                    <div className={styles.grid}>
                        {referrals.map((item) => (
                            <Text tagType='label' key={item.key} className={styles.checkboxRow}>
                                <Checkbox
                                    isChecked={!!selected[item.key]}
                                    onChange={() => toggle(item.key)}
                                />
                                <Text
                                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                    tagType='span'
                                    color='gray-700'
                                >
                                    {item.label}
                                </Text>
                            </Text>
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
                        {`${calculatePercentage(selected, inputs)}%`}
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
        </>
    );
};

export default GeneralSpeechRecommendation;
