/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useEffect, useState } from 'react';

import { useParams, useSearchParams } from 'next/navigation';

import { Text, Input, Button, Dropdown } from '@/components';

import DocIcon from '@public/assets/svg/doc-icon.svg';

import { QueryKeys } from '@/utils/queryKeys';
import { ButtonVariant, FontType } from '@/types/typographyCommon';
import { useAppMutation } from '@/hooks/useAppMutation';
import { DISFLUENCY_KEYS, mapBehaviorData } from './constant';

import styles from './styles.module.scss';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitAssociatedBehaviors } from './utils.api';

const BEHAVIOR_LABELS: Record<string, string> = {
    facialTension: 'Facial tension',
    eyeBlinking: 'Eye blinking',
    jawTongueTension: 'Jaw / tongue tension',
    tappingFootMovement: 'Tapping / Foot movement',
    headJerks: 'Head jerks / Arm movements',
    breathingIrregularities: 'Breathing irregularities',
    avoidance: 'Avoidance of words/situations',
};

export const AssociatedSecondaryBehavior = () => {
    const [form, setForm] = useState<any>({
        behaviors: {
            facialTension: { present: '', frequency: '', context: '' },
            eyeBlinking: { present: '', frequency: '', context: '' },
            jawTongueTension: { present: '', frequency: '', context: '' },
            tappingFootMovement: { present: '', frequency: '', context: '' },
            headJerks: { present: '', frequency: '', context: '' },
            breathingIrregularities: { present: '', frequency: '', context: '' },
            avoidance: { present: '', frequency: '', context: '' },
        },
    });

    const [loader, setLoader] = useState(false);

    const { studentId } = useParams();
    const searchParams = useSearchParams();

    const formId = searchParams.get('formId');
    const sectionId = searchParams.get('sectionId');
    const id = searchParams.get('id');

    const mutation = useAppMutation({
        mutationFn: submitAssociatedBehaviors,
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
        let totalSections = 0;
        let completedSections = 0;

        // ---------- DISFLUENCY TYPES ----------
        DISFLUENCY_KEYS.forEach(({ key }) => {
            totalSections += 1;

            const item = form.behaviors[key];

            if (item?.frequency || item?.severity || item?.comment) {
                completedSections += 1;
            }
        });

        return totalSections === 0 ? 0 : Math.round((completedSections / totalSections) * 100);
    };

    // ---------- SUBMIT ----------
    const handleSubmit = () => {
        const payload = {
            studentId: Number(studentId),
            behaviors: form.behaviors,
            percentage: calculatePercentage(),
        };

        mutation.mutate(payload);
    };

    // ---------- API → STATE ----------
    useEffect(() => {
        if (response?.[0]) {
            const mapped = mapBehaviorData(response[0]);
            setForm(mapped);
        }
    }, [response]);

    return (
        <>
            <div className={styles.card}>
                {/* HEADER */}
                <div className={styles.table}>
                    <div className={styles.header}>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                        >
                            Behavior Type
                        </Text>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                        >
                            Present
                        </Text>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                        >
                            Frequency
                        </Text>
                    </div>

                    {/* ROWS */}
                    {Object.keys(form.behaviors).map((key) => {
                        const row = form.behaviors[key as keyof typeof form.behaviors];

                        return (
                            <div key={key} className={styles.row}>
                                <Text
                                    tagType='span'
                                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                    color='gray-500'
                                >
                                    {BEHAVIOR_LABELS[key] || key}
                                </Text>

                                {/* PRESENT */}
                                <Dropdown
                                    selectValue='value'
                                    value={row.present || ''}
                                    isSearchable={false}
                                    onChange={(v) => update(`behaviors.${key}.present`, v)}
                                    options={[
                                        { label: 'Yes', value: 'Yes' },
                                        { label: 'No', value: 'No' },
                                    ]}
                                />

                                {/* FREQUENCY */}
                                <Input
                                    name=''
                                    placeholder='Type here'
                                    value={row.frequency || ''}
                                    onChange={(e) =>
                                        update(`behaviors.${key}.frequency`, e.target.value)
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* FOOTER */}
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
                        label='Save'
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

export default AssociatedSecondaryBehavior;
