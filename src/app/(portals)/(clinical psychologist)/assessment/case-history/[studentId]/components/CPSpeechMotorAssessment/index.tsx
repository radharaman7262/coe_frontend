/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useEffect, useState } from 'react';

import { useParams, useSearchParams } from 'next/navigation';

import DocIcon from '@public/assets/svg/doc-icon.svg';

import { Input, Text, Button, Radio } from '@/components/index';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import { QueryKeys } from '@/utils/queryKeys';
import { useAppMutation } from '@/hooks/useAppMutation';
import styles from './styles.module.scss';
import { submitSpeechMotorAssessment } from './utils.api';
import { useGetCaseHistoryFormDetails } from '../../../queries';

import { mapCommunicationProfile } from './constant';

const CPSpeechMotorAssessment = () => {
    const [form, setForm] = useState({
        respirationPhonation: {
            loudness: '',
            breathSupport: '',
            phonation: '',
        },

        articulationIntelligibility: {
            jawControl: '',
            lipClosure: '',
            tongueMovement: '',
            intelligibility: '',
            phonologicalPatterns: '',
            rateOfSpeech: '',
        },

        prosodyVoice: {
            pitch: '',
            nasality: '',
            voiceQuality: '',
        },
    });

    const [loader, setLoader] = useState(false);

    const { studentId } = useParams();

    const searchParams = useSearchParams();

    const formId = searchParams.get('formId');
    const sectionId = searchParams.get('sectionId');
    const id = searchParams.get('id');

    const mutation = useAppMutation({
        mutationFn: submitSpeechMotorAssessment,
        setLoader,
        invalidateKeys: [[QueryKeys.CASE_HISTORY_SIDEBAR_MENU]],
    });

    const { data } = useGetCaseHistoryFormDetails({
        studentId: (studentId as string) ?? '',
        id: (id as string) ?? '',
        formId: (formId as string) ?? '',
        sectionId: (sectionId as string) ?? '',
    });

    const { response } = data || {};

    // ---------- HANDLERS ----------
    const update = (path: string, value: any) => {
        setForm((prev: any) => {
            const keys = path.split('.');
            const updated = { ...prev };
            let obj = updated;

            // eslint-disable-next-line no-return-assign
            keys.slice(0, -1).forEach((k) => (obj = obj[k]));
            obj[keys[keys.length - 1]] = value;

            return updated;
        });
    };

    const calculatePercentage = () => {
        let total = 0;
        let filled = 0;

        // ---------- A ----------
        total += 3;

        if (form.respirationPhonation.loudness) filled += 1;
        if (form.respirationPhonation.breathSupport) filled += 1;
        if (form.respirationPhonation.phonation) filled += 1;

        // ---------- B ----------
        total += 6;

        if (form.articulationIntelligibility.jawControl) filled += 1;
        if (form.articulationIntelligibility.lipClosure) filled += 1;
        if (form.articulationIntelligibility.tongueMovement) filled += 1;
        if (form.articulationIntelligibility.intelligibility) filled += 1;
        if (form.articulationIntelligibility.phonologicalPatterns) filled += 1;
        if (form.articulationIntelligibility.rateOfSpeech) filled += 1;

        // ---------- C ----------
        total += 3;

        if (form.prosodyVoice.pitch) filled += 1;
        if (form.prosodyVoice.nasality) filled += 1;
        if (form.prosodyVoice.voiceQuality) filled += 1;

        return total === 0 ? 0 : Math.round((filled / total) * 100);
    };

    // ---------- SUBMIT ----------
    const handleSubmit = () => {
        const payload = {
            studentId: Number(studentId),

            respirationPhonation: form.respirationPhonation,

            articulationIntelligibility: form.articulationIntelligibility,

            prosodyVoice: form.prosodyVoice,

            percentage: calculatePercentage(),
        };

        mutation.mutate(payload);
    };

    useEffect(() => {
        if (response?.[0]) {
            const mapped = mapCommunicationProfile(response[0]);
            setForm(mapped);
        }
    }, [response]);

    return (
        <div className={styles.card}>
            <div className={styles.section}>
                <Text
                    tagType='p'
                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                    className={styles.left}
                >
                    A. Respiration & Phonation
                </Text>

                <div className={styles.right}>
                    {/* Loudness */}
                    <div className={styles.row}>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        >
                            Loudness:
                        </Text>

                        <div className={styles['options-container']}>
                            {['Adequate', 'Reduced', 'Variable'].map((val) => (
                                <Radio
                                    key={val}
                                    label={val}
                                    checked={form.respirationPhonation.loudness === val}
                                    onChange={() => update('respirationPhonation.loudness', val)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Breath */}
                    <div className={styles.row}>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        >
                            Breath support:
                        </Text>

                        <div className={styles['options-container']}>
                            {['Adequate', 'Shallow', 'Poor control'].map((val) => (
                                <Radio
                                    key={val}
                                    label={val}
                                    checked={form.respirationPhonation.breathSupport === val}
                                    onChange={() =>
                                        update('respirationPhonation.breathSupport', val)
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    {/* Phonation */}
                    <div className={styles.row}>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        >
                            Phonation:
                        </Text>

                        <div className={styles['options-container']}>
                            {['Voiced', 'Breath support limited'].map((val) => (
                                <Radio
                                    key={val}
                                    label={val}
                                    checked={form.respirationPhonation.phonation === val}
                                    onChange={() => update('respirationPhonation.phonation', val)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.divider} />
            {/* ---------------- B ---------------- */}
            <div className={styles.section}>
                <Text
                    tagType='p'
                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                    className={styles.left}
                >
                    B. Articulation / Intelligibility
                </Text>

                <div className={styles.right}>
                    {/* Jaw */}
                    <div className={styles.row}>
                        <Text font={[FontType.text_sm_regular, FontType.text_sm_regular]}>
                            Jaw control:
                        </Text>
                        <div className={styles['options-container']}>
                            {['Adequate', 'Fluctuating', 'Rigid'].map((val) => (
                                <Radio
                                    key={val}
                                    label={val}
                                    checked={form.articulationIntelligibility.jawControl === val}
                                    onChange={() =>
                                        update('articulationIntelligibility.jawControl', val)
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    {/* Lip */}
                    <div className={styles.row}>
                        <Text font={[FontType.text_sm_regular, FontType.text_sm_regular]}>
                            Lip closure:
                        </Text>
                        <div className={styles['options-container']}>
                            {['Yes', 'No', 'Inconsistent'].map((val) => (
                                <Radio
                                    key={val}
                                    label={val}
                                    checked={form.articulationIntelligibility.lipClosure === val}
                                    onChange={() =>
                                        update('articulationIntelligibility.lipClosure', val)
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    {/* Tongue */}
                    <div className={styles.row}>
                        <Text font={[FontType.text_sm_regular, FontType.text_sm_regular]}>
                            Tongue movement:
                        </Text>
                        <div className={styles['options-container']}>
                            {['Normal', 'Limited', 'Involuntary'].map((val) => (
                                <Radio
                                    key={val}
                                    label={val}
                                    checked={
                                        form.articulationIntelligibility.tongueMovement === val
                                    }
                                    onChange={() =>
                                        update('articulationIntelligibility.tongueMovement', val)
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    <Input
                        name=''
                        value={form.articulationIntelligibility.intelligibility}
                        onChange={(e) =>
                            update('articulationIntelligibility.intelligibility', e.target.value)
                        }
                        placeholder='eg. 20%'
                    />

                    <Input
                        name=''
                        value={form.articulationIntelligibility.phonologicalPatterns}
                        onChange={(e) =>
                            update(
                                'articulationIntelligibility.phonologicalPatterns',
                                e.target.value,
                            )
                        }
                        placeholder='Phonological patterns'
                    />

                    <div className={styles.row}>
                        <Text font={[FontType.text_sm_regular, FontType.text_sm_regular]}>
                            Rate of speech:
                        </Text>
                        <div className={styles['options-container']}>
                            {['Fast', 'Slow', 'Jerky', 'Normal'].map((val) => (
                                <Radio
                                    key={val}
                                    label={val}
                                    checked={form.articulationIntelligibility.rateOfSpeech === val}
                                    onChange={() =>
                                        update('articulationIntelligibility.rateOfSpeech', val)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.divider} />
            {/* ---------------- C ---------------- */}
            <div className={styles.section}>
                <Text
                    tagType='p'
                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                    className={styles.left}
                >
                    C. Prosody & Voice
                </Text>

                <div className={styles.right}>
                    <div className={styles.row}>
                        <Text font={[FontType.text_sm_regular, FontType.text_sm_regular]}>
                            Pitch:
                        </Text>
                        <div className={styles['options-container']}>
                            {['High', 'Low', 'Monotone', 'Varied'].map((val) => (
                                <Radio
                                    key={val}
                                    label={val}
                                    checked={form.prosodyVoice.pitch === val}
                                    onChange={() => update('prosodyVoice.pitch', val)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.row}>
                        <Text font={[FontType.text_sm_regular, FontType.text_sm_regular]}>
                            Nasality:
                        </Text>
                        <div className={styles['options-container']}>
                            {['Hypernasal', 'Hyponasal', 'Normal'].map((val) => (
                                <Radio
                                    key={val}
                                    label={val}
                                    checked={form.prosodyVoice.nasality === val}
                                    onChange={() => update('prosodyVoice.nasality', val)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.row}>
                        <Text font={[FontType.text_sm_regular, FontType.text_sm_regular]}>
                            Voice quality:
                        </Text>
                        <div className={styles['options-container']}>
                            {['Hoarse', 'Breathy', 'Strained', 'Normal'].map((val) => (
                                <Radio
                                    key={val}
                                    label={val}
                                    checked={form.prosodyVoice.voiceQuality === val}
                                    onChange={() => update('prosodyVoice.voiceQuality', val)}
                                />
                            ))}
                        </div>
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

export default CPSpeechMotorAssessment;
