/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';

import { Text, Input, Button, Radio, Checkbox, Dropdown } from '@/components';

import { QueryKeys } from '@/utils/queryKeys';
import { useAppMutation } from '@/hooks/useAppMutation';
import { ButtonVariant, FontType } from '@/types/typographyCommon';

import DocIcon from '@public/assets/svg/doc-icon.svg';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { DISFLUENCY_KEYS, mapFluencyCharacteristics } from './constant';

import styles from './styles.module.scss';

import { submitFluencyCharactersticks } from './utils.api';

export const FluencyCharacteristics = () => {
    const [form, setForm] = useState<any>({
        typeOfDisfluency: {},
        speechRate: '',
        clutteringSigns: {
            rapidRate: false,
            collapsingSyllables: false,
            disorganizedContent: false,
        },
    });
    const [loader, setLoader] = useState(false);

    const { studentId } = useParams();

    const searchParams = useSearchParams();

    const formId = searchParams.get('formId');
    const sectionId = searchParams.get('sectionId');
    const id = searchParams.get('id');

    const mutation = useAppMutation({
        mutationFn: submitFluencyCharactersticks,
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

    // ---------- UPDATE ----------
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

    // ---------- PERCENTAGE ----------
    const calculatePercentage = () => {
        let total = 0;
        let filled = 0;

        DISFLUENCY_KEYS.forEach(({ key }) => {
            const item = form.typeOfDisfluency[key];

            total += 3; // frequency + severity + comment

            if (item?.frequency) filled += 1;
            if (item?.severity) filled += 1;
            if (item?.comment) filled += 1;
        });

        // speech rate
        total += 1;
        if (form.speechRate) filled += 1;

        // cluttering
        total += 3;
        Object.values(form.clutteringSigns).forEach((v) => {
            if (v) filled += 1;
        });

        return total === 0 ? 0 : Math.round((filled / total) * 100);
    };

    // ---------- SUBMIT ----------
    const handleSubmit = () => {
        const payload = {
            studentId: studentId ?? '',

            typeOfDisfluency: form.typeOfDisfluency,

            speechRate: {
                value: form.speechRate,
            },

            clutteringSigns: form.clutteringSigns,

            percentage: calculatePercentage(),
        };

        mutation.mutate(payload);
    };

    // ---------- API → STATE ----------
    useEffect(() => {
        if (response?.[0]) {
            const mapped = mapFluencyCharacteristics(response[0]);
            setForm(mapped);
        }
    }, [response]);

    return (
        <>
            <div className={styles.card}>
                {/* TABLE */}
                <div className={styles.table}>
                    <div className={styles.header}>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                        >
                            Type
                        </Text>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                        >
                            Frequency
                        </Text>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                        >
                            Severity
                        </Text>
                    </div>

                    {DISFLUENCY_KEYS.map((item) => {
                        const row = form.typeOfDisfluency[item.key] || {};

                        return (
                            <div key={item.key} className={styles.row}>
                                <Text
                                    tagType='span'
                                    color='gray-500'
                                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                >
                                    {item.label}
                                </Text>

                                <Dropdown
                                    selectValue='value'
                                    value={row.frequency || ''}
                                    isSearchable={false}
                                    onChange={(v) =>
                                        update(`typeOfDisfluency.${item.key}.frequency`, v)
                                    }
                                    options={[
                                        { label: 'Yes', value: 'Yes' },
                                        { label: 'No', value: 'No' },
                                    ]}
                                />

                                <Input
                                    name=''
                                    placeholder='Enter here'
                                    value={row.severity || ''}
                                    onChange={(e) =>
                                        update(
                                            `typeOfDisfluency.${item.key}.severity`,
                                            e.target.value,
                                        )
                                    }
                                />
                            </div>
                        );
                    })}
                </div>

                {/* SPEECH RATE */}
                <div className={styles.section}>
                    <Text tagType='span' font={[FontType.text_sm_medium, FontType.text_sm_medium]}>
                        Speech Rate
                    </Text>

                    {['Slow', 'Normal', 'Fast', 'Jerky'].map((val) => (
                        <Radio
                            key={val}
                            checked={form.speechRate === val}
                            onChange={() => update('speechRate', val)}
                            label={val}
                        />
                    ))}
                </div>

                {/* CLUTTERING */}
                <div className={styles.section}>
                    <Text tagType='span' font={[FontType.text_sm_medium, FontType.text_sm_medium]}>
                        Cluttering signs
                    </Text>

                    {[
                        { key: 'rapidRate', label: 'Rapid rate' },
                        { key: 'collapsingSyllables', label: 'Collapsing syllables' },
                        { key: 'disorganizedContent', label: 'Disorganized content' },
                    ].map((item) => (
                        <Checkbox
                            key={item.key}
                            isChecked={form.clutteringSigns[item.key]}
                            onChange={(v) => update(`clutteringSigns.${item.key}`, v)}
                            label={item.label}
                            labelFont={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        />
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
        </>
    );
};
export default FluencyCharacteristics;
