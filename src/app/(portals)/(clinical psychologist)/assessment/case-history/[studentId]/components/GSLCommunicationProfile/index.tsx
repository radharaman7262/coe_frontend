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

    const calculatePercentage = () => {
        let total = 0;
        let filled = 0;

        const countBooleans = (obj: any) => {
            Object.values(obj).forEach((val) => {
                if (typeof val === 'boolean') {
                    total += 1;
                    if (val) filled += 1;
                } else if (typeof val === 'object') {
                    countBooleans(val);
                } else if (typeof val === 'string') {
                    total += 1;
                    if (val) filled += 1;
                }
            });
        };

        countBooleans(form);

        return total === 0 ? 0 : Math.round((filled / total) * 100);
    };
    const handleSubmit = () => {
        const payload = {
            studentId: studentId ?? '',
            ...form,
            percentage: calculatePercentage(),
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
                        />

                        <Checkbox
                            label='1-step'
                            isChecked={form.receptiveLanguage.oneStep}
                            onChange={(v) => update('receptiveLanguage.oneStep', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        />

                        <Checkbox
                            label='2-step commands'
                            isChecked={form.receptiveLanguage.twoStepCommands}
                            onChange={(v) => update('receptiveLanguage.twoStepCommands', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        />
                    </div>
                    <div className={styles['sub-level']}>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        >
                            Understands:
                        </Text>

                        <div className={styles.grid}>
                            <Checkbox
                                label='Object labels'
                                isChecked={form.receptiveLanguage.objectLabels}
                                onChange={(v) => update('receptiveLanguage.objectLabels', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            />

                            <Checkbox
                                label='WH-questions'
                                isChecked={form.receptiveLanguage.whQuestions}
                                onChange={(v) => update('receptiveLanguage.whQuestions', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            />

                            <Checkbox
                                label='Narratives'
                                isChecked={form.receptiveLanguage.narratives}
                                onChange={(v) => update('receptiveLanguage.narratives', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            />
                        </div>
                    </div>
                    <div>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        >
                            Aided by:
                        </Text>

                        <div className={styles.grid}>
                            <Checkbox
                                label='Gestures'
                                isChecked={form.receptiveLanguage.aidedBy.gestures}
                                onChange={(v) => update('receptiveLanguage.aidedBy.gestures', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            />

                            <Checkbox
                                label='Visuals'
                                isChecked={form.receptiveLanguage.aidedBy.visuals}
                                onChange={(v) => update('receptiveLanguage.aidedBy.visuals', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            />

                            <Checkbox
                                label='Routines'
                                isChecked={form.receptiveLanguage.aidedBy.routines}
                                onChange={(v) => update('receptiveLanguage.aidedBy.routines', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* AIDED BY */}

            {/* EXPRESSIVE */}
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
                        />

                        <Checkbox
                            label='Gestural'
                            isChecked={form.expressiveLanguage.mode.gestural}
                            onChange={(v) => update('expressiveLanguage.mode.gestural', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        />

                        <Checkbox
                            label='Echolalia'
                            isChecked={form.expressiveLanguage.echolalia}
                            onChange={(v) => update('expressiveLanguage.echolalia', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        />

                        <Checkbox
                            label='AAC/PECS'
                            isChecked={form.expressiveLanguage.aacpecs}
                            onChange={(v) => update('expressiveLanguage.aacpecs', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        />
                    </div>

                    {/* FUNCTIONS */}
                    <div>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
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
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* PRAGMATICS */}

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
                        />

                        <Checkbox
                            label='Maintains turn'
                            isChecked={form.pragmaticsSocial.maintainsTurn}
                            onChange={(v) => update('pragmaticsSocial.maintainsTurn', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        />

                        <Checkbox
                            label='Shares enjoyment'
                            isChecked={form.pragmaticsSocial.sharesEnjoyment}
                            onChange={(v) => update('pragmaticsSocial.sharesEnjoyment', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        />
                    </div>

                    <div>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        >
                            Gestures:
                        </Text>

                        <div className={styles.grid}>
                            <Checkbox
                                label='Pointing'
                                isChecked={form.pragmaticsSocial.initiates}
                                onChange={(v) => update('pragmaticsSocial.initiates', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            />

                            <Checkbox
                                label='Reaching'
                                isChecked={form.pragmaticsSocial.maintainsTurn}
                                onChange={(v) => update('pragmaticsSocial.maintainsTurn', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            />

                            <Checkbox
                                label='Leading'
                                isChecked={form.pragmaticsSocial.sharesEnjoyment}
                                onChange={(v) => update('pragmaticsSocial.sharesEnjoyment', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            />
                            <Checkbox
                                label='Combines eye gaze + vocal intent'
                                isChecked={form.pragmaticsSocial.sharesEnjoyment}
                                onChange={(v) => update('pragmaticsSocial.sharesEnjoyment', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
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
                        {`${calculatePercentage()}%`}
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
