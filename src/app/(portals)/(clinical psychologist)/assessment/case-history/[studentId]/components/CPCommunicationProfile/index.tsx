/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useEffect, useState } from 'react';

import { useParams, useSearchParams } from 'next/navigation';

import DocIcon from '@public/assets/svg/doc-icon.svg';

import { Checkbox, Input, Text, Button, Radio } from '@/components/index';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import { QueryKeys } from '@/utils/queryKeys';
import { useAppMutation } from '@/hooks/useAppMutation';
import styles from './styles.module.scss';
import { submitCommunicationProfile } from './utils.api';
import { useGetCaseHistoryFormDetails } from '../../../queries';

import { mapCommunicationProfile } from './constant';

const CommunicationProfile = () => {
    const [form, setForm] = useState({
        receptiveLanguage: {
            alertnessOrientation: false,
            responseToName: false,
            followsCommands: false,
            understandsGestures: false,
        },
        expressiveLanguage: {
            intentionality: '',
            wordLevel: '',
            functionsExpressed: {
                requesting: false,
                labeling: false,
                protesting: false,
                commenting: false,
            },
            vocabulary: {
                adequate: false,
                limited: false,
                absent: false,
            },
            modeOfExpression: {
                vocal: false,
                gestural: false,
                aac: false,
                eyeGraze: false,
                sign: false,
            },
        },
        pragmaticSkills: {
            eyeContact: '',
            initiationTurnTaking: '',
            jointAttention: '',
            socialInteraction: '',
        },
    });

    const [loader, setLoader] = useState(false);

    const { studentId } = useParams();

    const searchParams = useSearchParams();

    const formId = searchParams.get('formId');
    const sectionId = searchParams.get('sectionId');
    const id = searchParams.get('id');

    const mutation = useAppMutation({
        mutationFn: submitCommunicationProfile,
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

    // ---------- PERCENTAGE ----------
    const calculatePercentage = () => {
        const totalSections = 3;
        let filledSections = 0;

        // ✅ A. Receptive Language
        const receptiveFilled =
            form.receptiveLanguage.alertnessOrientation ||
            form.receptiveLanguage.followsCommands ||
            form.receptiveLanguage.responseToName ||
            form.receptiveLanguage.understandsGestures;

        if (receptiveFilled) filledSections += 1;

        // ✅ B. Expressive Language
        const expressiveFilled =
            form.expressiveLanguage.functionsExpressed.commenting ||
            form.expressiveLanguage.functionsExpressed.labeling ||
            form.expressiveLanguage.functionsExpressed.protesting ||
            form.expressiveLanguage.functionsExpressed.requesting ||
            form.expressiveLanguage.vocabulary.absent ||
            form.expressiveLanguage.vocabulary.adequate ||
            form.expressiveLanguage.vocabulary.limited ||
            form.expressiveLanguage.wordLevel ||
            form.expressiveLanguage.intentionality ||
            form.expressiveLanguage.modeOfExpression.eyeGraze ||
            form.expressiveLanguage.modeOfExpression.aac ||
            form.expressiveLanguage.modeOfExpression.gestural ||
            form.expressiveLanguage.modeOfExpression.sign ||
            form.expressiveLanguage.modeOfExpression.vocal;

        if (expressiveFilled) filledSections += 1;

        // ✅ C. Pragmatic Skills
        const pragmaticFilled =
            form.pragmaticSkills.eyeContact ||
            form.pragmaticSkills.jointAttention ||
            form.pragmaticSkills.initiationTurnTaking ||
            form.pragmaticSkills.socialInteraction;

        if (pragmaticFilled) filledSections += 1;

        return Math.round((filledSections / totalSections) * 100);
    };

    // ---------- SUBMIT ----------
    const handleSubmit = () => {
        const payload = {
            studentId: studentId ?? '',

            receptiveLanguage: form.receptiveLanguage,

            expressiveLanguage: form.expressiveLanguage,

            pragmaticSkills: form.pragmaticSkills,

            percentage: calculatePercentage(),
        };

        // setLoader(true);

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
                    A. Receptive Language
                </Text>

                <div className={styles['receiptive-language']}>
                    <Checkbox
                        isChecked={form.receptiveLanguage.alertnessOrientation}
                        onChange={(v) => update('receptiveLanguage.alertnessOrientation', v)}
                        label='Alertness / Orientation'
                        labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                    />

                    <Checkbox
                        isChecked={form.receptiveLanguage.responseToName}
                        onChange={(v) => update('receptiveLanguage.responseToName', v)}
                        label='Response to name / familiar voices'
                        labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                    />
                    <Checkbox
                        isChecked={form.receptiveLanguage.followsCommands}
                        onChange={(v) => update('receptiveLanguage.followsCommands', v)}
                        label='Follows commands: 1-step / 2-step / Routine-based'
                        labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                    />
                    <Checkbox
                        isChecked={form.receptiveLanguage.understandsGestures}
                        onChange={(v) => update('receptiveLanguage.understandsGestures', v)}
                        label='Understands gestures / visuals / objects / WH-questions'
                        labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                    />
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
                    B. Expressive Language
                </Text>

                <div className={styles.right}>
                    <div className={styles.row}>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        >
                            Mode of expression:
                        </Text>

                        <div className={styles['options-container']}>
                            {[
                                { key: 'vocal', label: 'Vocal' },
                                { key: 'gestural', label: 'Gestural' },
                                { key: 'aac', label: 'AAC / PECS' },
                                { key: 'eyeGraze', label: 'Eye gaze' },
                                { key: 'sign', label: 'Sign' },
                            ].map((item) => (
                                <Checkbox
                                    key={item.label}
                                    isChecked={
                                        (form.expressiveLanguage.modeOfExpression as any)[item.key]
                                    }
                                    // isChecked={form.expressiveLanguage.modeOfExpression[val]}
                                    onChange={() =>
                                        update(
                                            `expressiveLanguage.modeOfExpression.${item.key}`,
                                            item.label,
                                        )
                                    }
                                    label={item.label}
                                    labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.row}>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        >
                            Intentionality of communication:
                        </Text>

                        <div className={styles['options-container']}>
                            {['Consistent', 'Emerging', 'Absent'].map((val) => (
                                <Radio
                                    key={val}
                                    checked={form.expressiveLanguage.intentionality === val}
                                    onChange={() =>
                                        update('expressiveLanguage.intentionality', val)
                                    }
                                    label={val}
                                    font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.row}>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        >
                            Word level:
                        </Text>

                        <div className={styles['options-container']}>
                            {['Pre-verbal', 'Babbling', 'Words', 'Sentences'].map((key) => (
                                <Radio
                                    key={key}
                                    checked={form.expressiveLanguage.wordLevel === key}
                                    onChange={(v) => update(`expressiveLanguage.wordLevel`, v)}
                                    label={key}
                                    font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        >
                            Functions expressed:
                        </Text>

                        <div className={styles['options-container']}>
                            {['Requesting', 'Labeling', 'Protesting', 'Commenting'].map((key) => (
                                <Checkbox
                                    key={key}
                                    isChecked={
                                        (form.expressiveLanguage.functionsExpressed as any)[key]
                                    }
                                    onChange={(v) =>
                                        update(`expressiveLanguage.functionsExpressed.${key}`, v)
                                    }
                                    label={key}
                                    labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        >
                            Vocabulary:
                        </Text>

                        <div className={styles['options-container']}>
                            {['Adequate', 'Limited', 'Absent'].map((key) => (
                                <Checkbox
                                    key={key}
                                    isChecked={(form.expressiveLanguage.vocabulary as any)[key]}
                                    onChange={(v) =>
                                        update(`expressiveLanguage.vocabulary.${key}`, v)
                                    }
                                    label={key}
                                    labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
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
                    C. Pragmatic Skills
                </Text>

                <div className={styles.column}>
                    {[
                        { key: 'eyeContact', label: 'Eye contact' },
                        { key: 'jointAttention', label: 'Initiation and turn-taking' },
                        { key: 'initiationTurnTaking', label: 'Joint attention' },
                        { key: 'socialInteraction', label: 'Social interaction' },
                    ].map((item) => (
                        <div key={item.key} className={styles.inputRow}>
                            <Text
                                tagType='span'
                                font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            >
                                {item.label}
                            </Text>

                            <Input
                                name=''
                                placeholder='Enter here'
                                value={(form.pragmaticSkills as any)[item.key]}
                                onChange={(e) =>
                                    update(`pragmaticSkills.${item.key}`, e.target.value)
                                }
                            />
                        </div>
                    ))}
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

export default CommunicationProfile;
