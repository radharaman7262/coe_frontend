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

const CLPCommunicationProfile = () => {
    const [form, setForm] = useState({
        receptiveLanguage: {
            respondsToName: false,
            followSimpleCommands: false,
            underStandBasicVocabulary: false,
        },
        expressiveLanguage: {
            speechOutput: '',
            vocabulary: '',
            mode: {
                verbal: false,
                aac: false,
                gestures: false,
                echolalia: false,
            },
        },
        pragmaticSkills: {
            eyeContact: '',
            jointAttention: '',
            turnTaking: '',
            initiation: '',
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

    const calculatePercentage = () => {
        const totalSections = 3;
        let filledSections = 0;

        // ✅ A. Receptive Language
        const receptiveFilled =
            form.receptiveLanguage.respondsToName ||
            form.receptiveLanguage.followSimpleCommands ||
            form.receptiveLanguage.underStandBasicVocabulary;

        if (receptiveFilled) filledSections += 1;

        // ✅ B. Expressive Language
        const expressiveFilled =
            form.expressiveLanguage.speechOutput ||
            form.expressiveLanguage.vocabulary ||
            form.expressiveLanguage.mode.verbal ||
            form.expressiveLanguage.mode.aac ||
            form.expressiveLanguage.mode.gestures ||
            form.expressiveLanguage.mode.echolalia;

        if (expressiveFilled) filledSections += 1;

        // ✅ C. Pragmatic Skills
        const pragmaticFilled =
            form.pragmaticSkills.eyeContact ||
            form.pragmaticSkills.jointAttention ||
            form.pragmaticSkills.turnTaking ||
            form.pragmaticSkills.initiation;

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
                        isChecked={form.receptiveLanguage.respondsToName}
                        onChange={(v) => update('receptiveLanguage.respondsToName', v)}
                        label='Responds to name / familiar voices'
                        labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                    />

                    <Checkbox
                        isChecked={form.receptiveLanguage.followSimpleCommands}
                        onChange={(v) => update('receptiveLanguage.followSimpleCommands', v)}
                        label='Follows simple commands (1-step / 2-step)'
                        labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                    />
                    <Checkbox
                        isChecked={form.receptiveLanguage.underStandBasicVocabulary}
                        onChange={(v) => update('receptiveLanguage.underStandBasicVocabulary', v)}
                        label='Understands basic vocabulary / WH- questions'
                        labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                    />
                </div>
            </div>

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
                            Speech Output:
                        </Text>

                        <div className={styles['options-container']}>
                            {['Pre-verbal', 'Words', 'Phrases', 'Sentences'].map((val) => (
                                <Radio
                                    key={val}
                                    checked={form.expressiveLanguage.speechOutput === val}
                                    onChange={() => update('expressiveLanguage.speechOutput', val)}
                                    label={val}
                                    color='gray-900'
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
                            Vocabulary:
                        </Text>

                        <div className={styles['options-container']}>
                            {['Age-appropriate', 'Limited', 'Absent'].map((val) => (
                                <Radio
                                    key={val}
                                    checked={form.expressiveLanguage.vocabulary === val}
                                    onChange={() => update('expressiveLanguage.vocabulary', val)}
                                    label={val}
                                    font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                    color='gray-900'
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.row}>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        >
                            Use of:
                        </Text>

                        <div className={styles['options-container']}>
                            {['pointing', 'aac', 'gestures', 'sign'].map((key) => (
                                <Checkbox
                                    key={key}
                                    isChecked={(form.expressiveLanguage.mode as any)[key]}
                                    onChange={(v) => update(`expressiveLanguage.mode.${key}`, v)}
                                    label={key}
                                    labelColor='gray-900'
                                    labelFont={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

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
                        { key: 'jointAttention', label: 'Joint attention' },
                        { key: 'turnTaking', label: 'Turn-taking' },
                        { key: 'initiation', label: 'Initiation' },
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
                    {/* <Text
                        tagType='span'
                        font={[FontType.text_sm_bold, FontType.text_sm_bold]}
                        color='dark-blue'
                        className={styles.progress}
                    >
                        {`${calculatePercentage()}%`}
                    </Text> */}
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

export default CLPCommunicationProfile;
