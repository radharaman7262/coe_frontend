'use client';

import { useEffect, useState } from 'react';

import { useParams, useSearchParams } from 'next/navigation';

import DocIcon from '@public/assets/svg/doc-icon.svg';

import { useAppMutation } from '@/hooks/useAppMutation';
import { QueryKeys } from '@/utils/queryKeys';

import { Checkbox, Input, Text, Button, ShimmerUiContainer } from '@/components/index';
import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitSSDRecommendation } from './utils.api';

import { mapSSDApiToState } from './constant';

import styles from './styles.module.scss';

const SSDRecommendations = () => {
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    const [inputs, setInputs] = useState<Record<string, string>>({});
    const [loader, setLoader] = useState(false);

    const { studentId } = useParams();

    const searchParams = useSearchParams();

    const formId = searchParams.get('formId');
    const sectionId = searchParams.get('sectionId');
    const id = searchParams.get('id');

    const mutation = useAppMutation({
        mutationFn: submitSSDRecommendation,
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

    const toggle = (key: string) => {
        setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleInput = (key: string, value: string) => {
        setInputs((prev) => ({ ...prev, [key]: value }));
    };

    const calculatePercentage = (
        selected: Record<string, boolean>,
        inputs: Record<string, string>,
    ) => {
        const totalSections = 1; // Only "Therapies" section
        let completedSections = 0;

        const keys = [
            'speechTherapy',
            'phonemeDrill',
            'auditoryTraining',
            'oralMotor',
            'homeProgram',
            'reevaluation',
            'entReferral',
        ];

        const hasAnyTherapySelected = keys.some((key) => selected[key]);

        if (hasAnyTherapySelected) {
            // Special condition for speech therapy
            if (selected.speechTherapy) {
                if (inputs.frequency) {
                    completedSections += 1;
                }
            } else {
                completedSections += 1;
            }
        }

        return Math.round((completedSections / totalSections) * 100);
    };

    const handleSubmit = () => {
        const payload = {
            studentId: studentId ?? '',

            therapies: {
                speechTherapy: {
                    selected: !!selected.speechTherapy,
                    frequency: selected.speechTherapy ? inputs.frequency || '' : '',
                },

                phonemeDrill: !!selected.phonemeDrill,
                auditoryTraining: !!selected.auditoryTraining,
                oralMotor: !!selected.oralMotor,
                homeProgram: !!selected.homeProgram,

                reevaluation: {
                    selected: !!selected.reevaluation,
                    months: selected.reevaluation ? inputs.months || '' : '',
                },

                entReferral: !!selected.entReferral,
            },

            percentage: calculatePercentage(selected, inputs),
            parnetFormId: sectionId,
        };

        mutation.mutate(payload);
    };

    useEffect(() => {
        if (response?.[0]) {
            const { selectedState, inputState } = mapSSDApiToState(response[0]);

            setSelected(selectedState);
            setInputs(inputState);
        }
    }, [response]);

    return isLoading ? (
        <ShimmerUiContainer className={styles['accordion-shimmer']} />
    ) : (
        <div className={styles.card}>
            <div className={styles.section}>
                <div className={styles.left}>Therapies</div>

                <div className={styles.right}>
                    {/* Speech therapy */}
                    <div className={styles.row}>
                        <Checkbox
                            isChecked={!!selected.speechTherapy}
                            onChange={() => toggle('speechTherapy')}
                        />
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='gray-900'
                            tagType='span'
                        >
                            Speech therapy
                        </Text>

                        {selected.speechTherapy && (
                            <Input
                                name=''
                                placeholder='eg. 2 sessions/week'
                                value={inputs.frequency || ''}
                                onChange={(e) => handleInput('frequency', e.target.value)}
                            />
                        )}
                    </div>

                    {/* Other checkboxes */}
                    {[
                        { key: 'phonemeDrill', label: 'Phoneme-specific drill work' },
                        {
                            key: 'auditoryTraining',
                            label: 'Auditory discrimination & phonological awareness tasks',
                        },
                        { key: 'oralMotor', label: 'Oral-motor activities (if indicated)' },
                        { key: 'homeProgram', label: 'Home program with modeling + feedback' },
                    ].map((item) => (
                        <div key={item.key} className={styles.row}>
                            <Checkbox
                                isChecked={!!selected[item.key]}
                                onChange={() => toggle(item.key)}
                            />
                            <Text
                                font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                color='gray-900'
                                tagType='span'
                            >
                                {item.label}
                            </Text>
                        </div>
                    ))}

                    {/* Reevaluation */}
                    <div className={styles.row}>
                        <Checkbox
                            isChecked={!!selected.reevaluation}
                            onChange={() => toggle('reevaluation')}
                        />
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='gray-900'
                            tagType='span'
                        >
                            Re-evaluation after
                        </Text>

                        {selected.reevaluation && (
                            <>
                                <Input
                                    name=''
                                    placeholder='Enter month'
                                    value={inputs.months || ''}
                                    onChange={(e) => handleInput('months', e.target.value)}
                                />
                                <Text
                                    font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                    color='gray-900'
                                    tagType='span'
                                >
                                    months
                                </Text>
                            </>
                        )}
                    </div>

                    {/* ENT */}
                    <div className={styles.row}>
                        <Checkbox
                            isChecked={!!selected.entReferral}
                            onChange={() => toggle('entReferral')}
                        />
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='gray-900'
                            tagType='span'
                        >
                            ENT / Audiology referral (if hearing concern)
                        </Text>
                    </div>
                </div>
            </div>

            {/* Footer */}
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
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default SSDRecommendations;
