/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';

import { Checkbox, Text, Button, ShimmerUiContainer, Input } from '@/components/index';

import DocIcon from '@public/assets/svg/doc-icon.svg';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { useAppMutation } from '@/hooks/useAppMutation';
import { QueryKeys } from '@/utils/queryKeys';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import RadioGroup from '../CLPVoiceOralPeripheralExam/RadioGroup';

import { submitSpeechVoiceProfile } from './utils.api';

import { FormType } from './type';
import {
    STRUCTURE_FIELDS as structureFields,
    VEGITATIVE_FIELDS as vegetativeFields,
    FUNCTION_FIELDS as functionFieldsTwo,
    FUNCTION_FIELDS_TWO as functionFields,
} from './constant';

import styles from './styles.module.scss';

const GSLCommunicationProfile = () => {
    const [form, setForm] = useState<FormType>({
        speechPhonology: {
            babbling: false,
            phonemes: false,
            sharesEnjoyment: false,
            intelligibility: '',
            processes: '',
        },

        fluency: {
            fast: false,
            slow: false,
            normal: false,
            repetitions: false,
            prolongations: false,
            cluttering: false,
        },

        voice: {
            pitch: {
                high: false,
                low: false,
                monotone: false,
                varied: false,
            },
            quality: {
                hoarse: false,
                breathy: false,
                normal: false,
            },
            resonance: {
                hypernasal: false,
                hyponasal: false,
                normal: false,
            },
        },
        structure: {},
        function: {},
        vegetativeSkills: {},
        behavior: {
            pickyEater: false,
            textureRefusal: false,
            pocketingFood: false,
            needsPrompts: false,
            careGiverFed: false,
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
        mutationFn: submitSpeechVoiceProfile,
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

    const handleSubmit = () => {
        const {
            speechPhonology,
            fluency,
            voice,
            vegetativeSkills,
            structure,
            function: functionData,
            behavior,
        } = form;

        const payload = {
            studentId: studentId ?? '',
            speechPhonology,
            fluency,
            voice,
            oroMotorMechanism: {
                structure,
                function: functionData,
                vegetativeSkills: { ...vegetativeSkills, behavior },
            },
        };

        mutation.mutate(payload);
    };

    useEffect(() => {
        if (response?.[0]) {
            const data = response[0];

            setForm({
                speechPhonology: {
                    babbling: !!data.speechPhonology?.babbling,
                    intelligibility: data.speechPhonology?.intelligibility,
                    processes: data.speechPhonology?.processes,
                    phonemes: !!data.speechPhonology?.phonemes,
                    sharesEnjoyment: !!data.speechPhonology?.sharesEnjoyment,
                },

                fluency: {
                    fast: !!data.fluency?.fast,
                    slow: !!data.fluency?.slow,
                    normal: !!data.fluency?.normal,
                    prolongations: !!data.fluency?.prolongations,
                    repetitions: !!data.fluency?.repetitions,
                    cluttering: !!data.fluency?.cluttering,
                },

                voice: {
                    pitch: {
                        low: !!data.voice?.pitch?.low,
                        high: !!data.voice?.pitch?.high,
                        monotone: !!data.voice?.pitch?.monotone,
                        varied: !!data.voice?.pitch?.varied,
                    },
                    quality: {
                        hoarse: !!data.voice?.quality?.hoarse,
                        normal: !!data.voice?.quality?.normal,
                        breathy: !!data.voice?.quality?.breathy,
                    },
                    resonance: {
                        hypernasal: !!data.voice?.resonance?.hypernasal,
                        normal: !!data.voice?.resonance?.normal,
                        hyponasal: !!data.voice?.resonance?.hyponasal,
                    },
                },
                structure: data.oroMotorMechanism.structure || {},
                function: data.oroMotorMechanism.function || {},
                vegetativeSkills: data.oroMotorMechanism.vegetativeSkills || {},
                behavior: {
                    pickyEater: !!data.oroMotorMechanism.vegetativeSkills.behavior?.pickyEater,
                    textureRefusal:
                        !!data.oroMotorMechanism.vegetativeSkills.behavior?.textureRefusal,
                    pocketingFood:
                        !!data.oroMotorMechanism.vegetativeSkills.behavior?.pocketingFood,
                    needsPrompts: !!data.oroMotorMechanism.vegetativeSkills.behavior?.needsPrompts,
                    careGiverFed: !!data.oroMotorMechanism.vegetativeSkills.behavior?.careGiverFed,
                },
            });
        }
    }, [response]);

    const handleRadioChange = (section: keyof FormType, field: string, value: string) => {
        setForm((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    };

    return isLoading ? (
        <ShimmerUiContainer className={styles['accordion-shimmer']} />
    ) : (
        <>
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
                                label='Babbling'
                                isChecked={form.speechPhonology.babbling}
                                onChange={(v) => update('speechPhonology.babbling', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />

                            <Checkbox
                                label='Phonemes present'
                                isChecked={form.speechPhonology.phonemes}
                                onChange={(v) => update('speechPhonology.phonemes', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />

                            <Checkbox
                                label='Shares enjoyment'
                                isChecked={form.speechPhonology.sharesEnjoyment}
                                onChange={(v) => update('speechPhonology.sharesEnjoyment', v)}
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
                                Processes:
                            </Text>

                            <div className={styles.grid}>
                                <Input
                                    value={form.speechPhonology.processes}
                                    onChange={(event) => {
                                        setForm((prev) => ({
                                            ...prev,
                                            speechPhonology: {
                                                ...prev.speechPhonology,
                                                processes: event?.target.value,
                                            },
                                        }));
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <Text
                                tagType='span'
                                font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                color='gray-500'
                            >
                                Intelligibility:
                            </Text>

                            <div className={styles.grid}>
                                <Input
                                    value={form.speechPhonology.intelligibility}
                                    onChange={(event) => {
                                        setForm((prev) => ({
                                            ...prev,
                                            speechPhonology: {
                                                ...prev.speechPhonology,
                                                intelligibility: event?.target.value,
                                            },
                                        }));
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.divider} />

                <div className={styles['receiptive-language']}>
                    <div className={styles['receptive-left']}>
                        <Text tagType='p' font={[FontType.text_sm_medium, FontType.text_sm_medium]}>
                            B. Fluency
                        </Text>
                    </div>

                    <div className={styles['receptive-right']}>
                        <div className={styles.grid}>
                            <Checkbox
                                label='Fast'
                                isChecked={form.fluency.fast}
                                onChange={(v) => update('fluency.fast', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />

                            <Checkbox
                                label='Slow'
                                isChecked={form.fluency.slow}
                                onChange={(v) => update('fluency.slow', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />

                            <Checkbox
                                label='Normal'
                                isChecked={form.fluency.normal}
                                onChange={(v) => update('fluency.normal', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />

                            <Checkbox
                                label='Repetitions'
                                isChecked={form.fluency.repetitions}
                                onChange={(v) => update('fluency.repetitions', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />
                            <Checkbox
                                label='Prolongations'
                                isChecked={form.fluency.prolongations}
                                onChange={(v) => update('fluency.prolongations', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />
                            <Checkbox
                                label='Cluttering'
                                isChecked={form.fluency.cluttering}
                                onChange={(v) => update('fluency.cluttering', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles['receiptive-language']}>
                    <div className={styles['receptive-left']}>
                        <Text tagType='p' font={[FontType.text_sm_medium, FontType.text_sm_medium]}>
                            C. Voice
                        </Text>
                    </div>

                    <div className={styles['receptive-right']}>
                        <div className={styles.grid}>
                            <Checkbox
                                label='High'
                                isChecked={form.voice.pitch.high}
                                onChange={(v) => update('voice.pitch.high', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />

                            <Checkbox
                                label='Low'
                                isChecked={form.voice.pitch.low}
                                onChange={(v) => update('voice.pitch.low', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />

                            <Checkbox
                                label='Monotone'
                                isChecked={form.voice.pitch.monotone}
                                onChange={(v) => update('voice.pitch.monotone', v)}
                                labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                labelColor='gray-900'
                            />
                            <Checkbox
                                label='Varied'
                                isChecked={form.voice.pitch.varied}
                                onChange={(v) => update('voice.pitch.varied', v)}
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
                                Quality:
                            </Text>

                            <div className={styles.grid}>
                                <Checkbox
                                    label='Hoarse'
                                    isChecked={form.voice.quality.hoarse}
                                    onChange={(v) => update('voice.quality.hoarse', v)}
                                    labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                    labelColor='gray-900'
                                />

                                <Checkbox
                                    label='Breathy'
                                    isChecked={form.voice.quality.breathy}
                                    onChange={(v) => update('voice.quality.breathy', v)}
                                    labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                    labelColor='gray-900'
                                />

                                <Checkbox
                                    label='Normal'
                                    isChecked={form.voice.quality.normal}
                                    onChange={(v) => update('voice.quality.normal', v)}
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
                                Resonance:
                            </Text>

                            <div className={styles.grid}>
                                <Checkbox
                                    label='Hypernasal'
                                    isChecked={form.voice.resonance.hypernasal}
                                    onChange={(v) => update('voice.resonance.hypernasal', v)}
                                    labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                    labelColor='gray-900'
                                />

                                <Checkbox
                                    label='Hyponasal'
                                    isChecked={form.voice.resonance.hyponasal}
                                    onChange={(v) => update('voice.resonance.hyponasal', v)}
                                    labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                    labelColor='gray-900'
                                />

                                <Checkbox
                                    label='Normal'
                                    isChecked={form.voice.resonance.normal}
                                    onChange={(v) => update('voice.resonance.normal', v)}
                                    labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                    labelColor='gray-900'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.divider} />
                <Text
                    tagType='span'
                    font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                    color='gray-500'
                >
                    D. Oral Peripheral Mechanism Examination
                </Text>
            </div>

            <div className={styles.container}>
                {/* STRUCTURE */}
                <div className={styles.section}>
                    <Text font={[FontType.text_sm_bold, FontType.text_sm_bold]} color='text-cta-1'>
                        Structure
                    </Text>
                    <div className={styles.headerRow}>
                        <Text
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                            color='black'
                            className={styles.subHeader}
                        >
                            Area
                        </Text>
                        <Text
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                            color='black'
                            className={styles.subHeaderRight}
                        >
                            Observation
                        </Text>
                    </div>

                    {structureFields.map(({ field, options }) => (
                        <RadioGroup
                            key={field}
                            section='structure'
                            field={field}
                            options={options}
                            value={form.structure[field]}
                            onChange={handleRadioChange}
                        />
                    ))}
                </div>

                {/* FUNCTION */}
                <div className={styles.section}>
                    <Text font={[FontType.text_sm_bold, FontType.text_sm_bold]} color='text-cta-1'>
                        Function
                    </Text>
                    <div className={styles.headerRow}>
                        <Text
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                            color='black'
                            className={styles.subHeader}
                        >
                            Task
                        </Text>
                        <Text
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                            color='black'
                            className={styles.subHeaderRight}
                        >
                            Observation
                        </Text>
                    </div>

                    {functionFields.map(({ field, options }) => (
                        <RadioGroup
                            key={field}
                            section='function'
                            field={field}
                            options={options}
                            value={form.function[field]}
                            onChange={handleRadioChange}
                        />
                    ))}
                    <div className={styles.row}>
                        <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]}>
                            DDK /pa/ /ta/ /ka/
                        </Text>

                        <Input
                            name='ddk'
                            placeholder='Enter here'
                            error={undefined}
                            helperText={undefined}
                            onKeyDown={() => {}}
                            inputBaseClass={styles['input-wrapper']}
                        />
                    </div>
                    {functionFieldsTwo.map(({ field, options }) => (
                        <RadioGroup
                            key={field}
                            section='function'
                            field={field}
                            options={options}
                            value={form.function[field]}
                            onChange={handleRadioChange}
                        />
                    ))}
                </div>

                {/* VEGETATIVE */}
                <div className={styles.section}>
                    <Text font={[FontType.text_sm_bold, FontType.text_sm_bold]} color='text-cta-1'>
                        Vegetative Skills
                    </Text>
                    {vegetativeFields.map(({ field, options }) => (
                        <RadioGroup
                            key={field}
                            section='vegetativeSkills'
                            field={field}
                            options={options}
                            value={form.vegetativeSkills[field]}
                            onChange={handleRadioChange}
                        />
                    ))}
                </div>
                <div
                    className={styles['receiptive-language']}
                    style={{ backgroundColor: 'white', padding: '0 24px' }}
                >
                    <div className={styles['receptive-left']}>
                        <Text tagType='p' font={[FontType.text_sm_medium, FontType.text_sm_medium]}>
                            Behavior
                        </Text>
                    </div>
                    <div className={styles['receptive-right']}>
                        <Checkbox
                            label='Picky eater'
                            isChecked={form.behavior.pickyEater}
                            onChange={(v) => update('behavior.pickyEater', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />
                        <Checkbox
                            label='Texture refusal'
                            isChecked={form.behavior.textureRefusal}
                            onChange={(v) => update('behavior.textureRefusal', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />
                        <Checkbox
                            label='Pocketing food'
                            isChecked={form.behavior.pocketingFood}
                            onChange={(v) => update('behavior.pocketingFood', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />
                        <Checkbox
                            label='Needs prompts'
                            isChecked={form.behavior.needsPrompts}
                            onChange={(v) => update('behavior.needsPrompts', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />
                        <Checkbox
                            label='caregiver-feed'
                            isChecked={form.behavior.careGiverFed}
                            onChange={(v) => update('behavior.careGiverFed', v)}
                            labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            labelColor='gray-900'
                        />
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.actions}>
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
        </>
    );
};

export default GSLCommunicationProfile;
