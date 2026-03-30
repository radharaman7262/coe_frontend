/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useEffect, useState } from 'react';

import { Checkbox, Radio, Text, Button, ShimmerUiContainer } from '@/components/index';

import DocIcon from '@public/assets/svg/doc-icon.svg';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useParams, useSearchParams } from 'next/navigation';
import { QueryKeys } from '@/utils/queryKeys';
import { useGetCaseHistoryFormDetails } from '../../../queries';
import styles from './styles.module.scss';
import { submitGSLCommunicationProfile } from './utils.api';

type FunctionsType = {
    requesting: boolean;
    labeling: boolean;
    protesting: boolean;
    commenting: boolean;
    answering: boolean;
};

const GSLCommunicationProfile = () => {
    const [form, setForm] = useState({
        receptiveLanguage: {
            respondsToName: false,
            oneStep: false,
            twoStepCommands: false,
            objectLabels: false,
            whQuestions: false,
            narratives: false,
            aidedBy: {
                gestures: false,
                visuals: false,
                routines: false,
            },
        },

        expressiveLanguage: {
            mode: {
                verbal: false,
                gestural: false,
            },
            echolalia: false,
            aacpecs: false,
            intentionalVocalizations: false,
            wordApproximations: false,
            wordCombinations: false,
            repetition: false,
            functions: {
                requesting: false,
                labeling: false,
                protesting: false,
                commenting: false,
                answering: false,
            },
        },

        pragmaticsSocial: {
            initiates: false,
            maintainsTurn: false,
            sharesEnjoyment: false,
            gestures: {
                pointing: false,
                reaching: false,
                leading: false,
                eyeGazeVocalIntent: false,
            },
            iom: '',
        },
    });

    const [loader, setLoader] = useState(false);

    const update = (path: string, value: any) => {
        setForm((prev: any) => {
            const keys = path.split('.');
            const updated = { ...prev };
            let obj = updated;

            keys.slice(0, -1).forEach((k) => {
                if (!obj[k]) obj[k] = {};
                obj = obj[k];
            });

            obj[keys[keys.length - 1]] = value;
            return updated;
        });
    };

    const { studentId } = useParams();

    const searchParams = useSearchParams();

    const formId = searchParams.get('formId');
    const sectionId = searchParams.get('sectionId');
    const id = searchParams.get('id');

    const mutation = useAppMutation({
        mutationFn: submitGSLCommunicationProfile,
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

    const calculatePercentage = (form: any): number => {
        const totalSections = 8;
        let completed = 0;

        const hasAnyTrue = (obj: Record<string, any>): boolean =>
            Object.values(obj).some((val) => {
                if (typeof val === 'boolean') return val;
                if (typeof val === 'object' && val !== null) return hasAnyTrue(val);
                return false;
            });

        // 1. Understands
        if (
            form.receptiveLanguage.objectLabels ||
            form.receptiveLanguage.whQuestions ||
            form.receptiveLanguage.narratives
        ) {
            completed += 1;
        }

        // 2. Aided by
        if (hasAnyTrue(form.receptiveLanguage.aidedBy)) {
            completed += 1;
        }

        // 3. Functions
        if (hasAnyTrue(form.expressiveLanguage.functions)) {
            completed += 1;
        }

        // 4. Gestures
        if (hasAnyTrue(form.pragmaticsSocial.gestures)) {
            completed += 1;
        }

        // 5. TOM
        if (form.pragmaticsSocial.iom) {
            completed += 1;
        }

        // 6. Pragmatics Core
        if (
            form.pragmaticsSocial.initiates ||
            form.pragmaticsSocial.maintainsTurn ||
            form.pragmaticsSocial.sharesEnjoyment
        ) {
            completed += 1;
        }

        // 7. Expressive Language (overall)
        if (hasAnyTrue(form.expressiveLanguage)) {
            completed += 1;
        }

        // 8. Receptive Language (overall)
        if (hasAnyTrue(form.receptiveLanguage)) {
            completed += 1;
        }

        return Math.round((completed / totalSections) * 100);
    };

    const handleSubmit = () => {
        const payload = {
            studentId: studentId ?? '',
            ...form,
            percentage: calculatePercentage(form),
        };

        mutation.mutate(payload);
    };

    useEffect(() => {
        if (response?.[0]) {
            const data = response[0];

            setForm({
                receptiveLanguage: {
                    respondsToName: !!data.receptiveLanguage?.respondsToName,
                    oneStep: !!data.receptiveLanguage?.oneStep,
                    twoStepCommands: !!data.receptiveLanguage?.twoStepCommands,
                    objectLabels: !!data.receptiveLanguage?.objectLabels,
                    whQuestions: !!data.receptiveLanguage?.whQuestions,
                    narratives: !!data.receptiveLanguage?.narratives,
                    aidedBy: {
                        gestures: !!data.receptiveLanguage?.aidedBy?.gestures,
                        visuals: !!data.receptiveLanguage?.aidedBy?.visuals,
                        routines: !!data.receptiveLanguage?.aidedBy?.routines,
                    },
                },

                expressiveLanguage: {
                    mode: {
                        verbal: !!data.expressiveLanguage?.mode?.verbal,
                        gestural: !!data.expressiveLanguage?.mode?.gestural,
                    },
                    echolalia: !!data.expressiveLanguage?.echolalia,
                    aacpecs: !!data.expressiveLanguage?.aacpecs,
                    intentionalVocalizations: !!data.expressiveLanguage?.intentionalVocalizations,
                    wordApproximations: !!data.expressiveLanguage?.wordApproximations,
                    wordCombinations: !!data.expressiveLanguage?.wordCombinations,
                    repetition: !!data.expressiveLanguage?.repetition,
                    functions: {
                        requesting: !!data.expressiveLanguage?.functions?.requesting,
                        labeling: !!data.expressiveLanguage?.functions?.labeling,
                        protesting: !!data.expressiveLanguage?.functions?.protesting,
                        commenting: !!data.expressiveLanguage?.functions?.commenting,
                        answering: !!data.expressiveLanguage?.functions?.answering,
                    },
                },

                pragmaticsSocial: {
                    initiates: !!data.pragmaticsSocial?.initiates,
                    maintainsTurn: !!data.pragmaticsSocial?.maintainsTurn,
                    sharesEnjoyment: !!data.pragmaticsSocial?.sharesEnjoyment,
                    gestures: {
                        pointing: !!data.pragmaticsSocial?.gestures?.pointing,
                        reaching: !!data.pragmaticsSocial?.gestures?.reaching,
                        leading: !!data.pragmaticsSocial?.gestures?.leading,
                        eyeGazeVocalIntent: !!data.pragmaticsSocial?.gestures?.eyeGazeVocalIntent,
                    },
                    iom: data.pragmaticsSocial?.iom || '',
                },
            });
        }
    }, [response]);

    return isLoading ? (
        <ShimmerUiContainer className={styles['accordion-shimmer']} />
    ) : (
        <div className={styles.card}>
            <div className={styles['receiptive-language']}>
                <div className={styles['receptive-left']}>
                    <Text tagType='p' font={[FontType.text_sm_medium, FontType.text_sm_medium]}>
                        A. Receptive Language
                    </Text>
                </div>
                <div className={styles['receptive-right']}>
                    <div className={styles.grid}>
                        <Checkbox
                            label='Responds to name'
                            isChecked={form.receptiveLanguage.respondsToName}
                            onChange={(v) => update('receptiveLanguage.respondsToName', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />

                        <Checkbox
                            label='1-step'
                            isChecked={form.receptiveLanguage.oneStep}
                            onChange={(v) => update('receptiveLanguage.oneStep', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />

                        <Checkbox
                            label='2-step commands'
                            isChecked={form.receptiveLanguage.twoStepCommands}
                            onChange={(v) => update('receptiveLanguage.twoStepCommands', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />
                    </div>
                    <div className={styles['sub-level']}>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='gray-500'
                        >
                            Understands:
                        </Text>

                        <div className={styles.grid}>
                            <Checkbox
                                label='Object labels'
                                isChecked={form.receptiveLanguage.objectLabels}
                                onChange={(v) => update('receptiveLanguage.objectLabels', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />

                            <Checkbox
                                label='WH-questions'
                                isChecked={form.receptiveLanguage.whQuestions}
                                onChange={(v) => update('receptiveLanguage.whQuestions', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />

                            <Checkbox
                                label='Narratives'
                                isChecked={form.receptiveLanguage.narratives}
                                onChange={(v) => update('receptiveLanguage.narratives', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />
                        </div>
                    </div>
                    <div>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='gray-500'
                        >
                            Aided by:
                        </Text>

                        <div className={styles.grid}>
                            <Checkbox
                                label='Gestures'
                                isChecked={form.receptiveLanguage.aidedBy.gestures}
                                onChange={(v) => update('receptiveLanguage.aidedBy.gestures', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />

                            <Checkbox
                                label='Visuals'
                                isChecked={form.receptiveLanguage.aidedBy.visuals}
                                onChange={(v) => update('receptiveLanguage.aidedBy.visuals', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />

                            <Checkbox
                                label='Routines'
                                isChecked={form.receptiveLanguage.aidedBy.routines}
                                onChange={(v) => update('receptiveLanguage.aidedBy.routines', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.divider} />

            <div className={styles['receiptive-language']}>
                <div className={styles['receptive-left']}>
                    <Text tagType='p' font={[FontType.text_sm_medium, FontType.text_sm_medium]}>
                        B. Expressive Language
                    </Text>
                </div>

                <div className={styles['receptive-right']}>
                    <div className={styles.grid}>
                        <Checkbox
                            label='Verbal'
                            isChecked={form.expressiveLanguage.mode.verbal}
                            onChange={(v) => update('expressiveLanguage.mode.verbal', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />

                        <Checkbox
                            label='Gestural'
                            isChecked={form.expressiveLanguage.mode.gestural}
                            onChange={(v) => update('expressiveLanguage.mode.gestural', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />

                        <Checkbox
                            label='Echolalia'
                            isChecked={form.expressiveLanguage.echolalia}
                            onChange={(v) => update('expressiveLanguage.echolalia', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />

                        <Checkbox
                            label='AAC/PECS'
                            isChecked={form.expressiveLanguage.aacpecs}
                            onChange={(v) => update('expressiveLanguage.aacpecs', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />
                        <Checkbox
                            label='Intentional vocalizations'
                            isChecked={form.expressiveLanguage.intentionalVocalizations}
                            onChange={(v) =>
                                update('expressiveLanguage.intentionalVocalizations', v)
                            }
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />
                        <Checkbox
                            label='Word approximations'
                            isChecked={form.expressiveLanguage.wordApproximations}
                            onChange={(v) => update('expressiveLanguage.wordApproximations', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />
                        <Checkbox
                            label='Word combinations'
                            isChecked={form.expressiveLanguage.wordCombinations}
                            onChange={(v) => update('expressiveLanguage.wordCombinations', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />
                        <Checkbox
                            label='Repetition'
                            isChecked={form.expressiveLanguage.repetition}
                            onChange={(v) => update('expressiveLanguage.repetition', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />
                    </div>

                    {/* FUNCTIONS */}
                    <div>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='gray-500'
                        >
                            Functions:
                        </Text>

                        <div className={styles.grid}>
                            {(
                                Object.keys(
                                    form.expressiveLanguage.functions,
                                ) as (keyof FunctionsType)[]
                            ).map((key) => (
                                <Checkbox
                                    key={key}
                                    label={key}
                                    isChecked={form.expressiveLanguage.functions[key]}
                                    onChange={(v) =>
                                        update(`expressiveLanguage.functions.${key}`, v)
                                    }
                                    labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                    labelColor='gray-900'
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.divider} />

            <div className={styles['receiptive-language']}>
                <div className={styles['receptive-left']}>
                    <Text tagType='p' font={[FontType.text_sm_medium, FontType.text_sm_medium]}>
                        C. Pragmatics & Social
                    </Text>
                </div>

                <div className={styles['receptive-right']}>
                    <div className={styles.grid}>
                        <Checkbox
                            label='Initiates'
                            isChecked={form.pragmaticsSocial.initiates}
                            onChange={(v) => update('pragmaticsSocial.initiates', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />

                        <Checkbox
                            label='Maintains turn'
                            isChecked={form.pragmaticsSocial.maintainsTurn}
                            onChange={(v) => update('pragmaticsSocial.maintainsTurn', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />

                        <Checkbox
                            label='Shares enjoyment'
                            isChecked={form.pragmaticsSocial.sharesEnjoyment}
                            onChange={(v) => update('pragmaticsSocial.sharesEnjoyment', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />
                    </div>

                    <div>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='gray-500'
                        >
                            Gestures:
                        </Text>

                        <div className={styles.grid}>
                            <Checkbox
                                label='Pointing'
                                isChecked={form.pragmaticsSocial.gestures.pointing}
                                onChange={(v) => update('pragmaticsSocial.gestures.pointing', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />

                            <Checkbox
                                label='Reaching'
                                isChecked={form.pragmaticsSocial.gestures.reaching}
                                onChange={(v) => update('pragmaticsSocial.gestures.reaching', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />

                            <Checkbox
                                label='Leading'
                                isChecked={form.pragmaticsSocial.gestures.leading}
                                onChange={(v) => update('pragmaticsSocial.gestures.leading', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />
                            <Checkbox
                                label='Combines eye gaze + vocal intent'
                                isChecked={form.pragmaticsSocial.gestures.eyeGazeVocalIntent}
                                onChange={(v) =>
                                    update('pragmaticsSocial.gestures.eyeGazeVocalIntent', v)
                                }
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />
                        </div>
                    </div>

                    {/* IOM */}
                    <div className={styles.radioGroup}>
                        <div>
                            <Text
                                tagType='p'
                                font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                color='gray-500'
                            >
                                TOM
                            </Text>
                        </div>
                        <div className={styles['option-alignment']}>
                            {['present', 'emerging', 'absent'].map((val) => (
                                <Radio
                                    key={val}
                                    label={val}
                                    checked={form.pragmaticsSocial.iom === val}
                                    onChange={() => update('pragmaticsSocial.iom', val)}
                                    color='gray-900'
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className={styles.footer}>
                <div className={styles.actions}>
                    <Text
                        tagType='span'
                        font={[FontType.text_sm_bold, FontType.text_sm_bold]}
                        color='dark-blue'
                        className={styles.progress}
                    >
                        {`${calculatePercentage(form)}%`}
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

export default GSLCommunicationProfile;
