'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';

import DocIcon from '@public/assets/svg/doc-icon.svg';

import { Button, Dropdown, Input, Text } from '@/components';

import { useAppMutation } from '@/hooks/useAppMutation';
import { QueryKeys } from '@/utils/queryKeys';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { useGetCaseHistoryFormDetails } from '../../../queries';

import { submitBalanceForm } from './utils.api';

import { FieldData, FieldKey, FormState } from './type';

import { FIELD_LABELS, INITIAL_STATE, mapLowerExtremity, SCORE_OPTIONS } from './constant';

import styles from './styles.module.scss';

const BalanceForm = () => {
    const [form, setForm] = useState<FormState>(INITIAL_STATE);
    const [loader, setLoader] = useState(false);

    const { studentId } = useParams();
    const searchParams = useSearchParams();

    const formId = searchParams.get('formId');
    const sectionId = searchParams.get('sectionId');
    const id = searchParams.get('id');

    const mutation = useAppMutation({
        mutationFn: submitBalanceForm,
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

    const handleChange = (
        key: FieldKey,
        field: keyof FieldData,
        value: string | Record<string, string | number>,
    ) => {
        setForm((prev) => ({
            ...prev,
            [key]: {
                ...prev[key],
                [field]:
                    field === 'comments' || field === 'score'
                        ? value
                        : value === ''
                          ? ''
                          : Number(value),
            },
        }));
    };

    const calculatePercentage = () => {
        const totalSections = Object.keys(form).length;

        const completedSections = Object.values(form).filter(
            (item) => item.score !== null || item.seconds !== '' || item.comments.trim() !== '',
        ).length;

        return totalSections === 0 ? 0 : Math.round((completedSections / totalSections) * 100);
    };

    const handleSubmit = () => {
        mutation.mutate({ studentId, lowerextermity: form, percentage: calculatePercentage() });
    };

    useEffect(() => {
        if (response?.[0]) {
            const mapped = mapLowerExtremity(response[0]);
            setForm(mapped);
        }
    }, [response]);

    // const percentage = Math.round((totalScore / (14 * 4)) * 100);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    BALANCE
                    <span>Pediatric Balance Scale (0–4)</span>
                </div>

                <div className={styles.sectionTitle}>Lower Extremity</div>

                <div className={styles.table}>
                    <div className={styles.tableHeader}>
                        <div>Description</div>
                        <div>Score (0–4)</div>
                        <div>Seconds/Opto</div>
                        <div>Comments</div>
                    </div>

                    {Object.keys(form).map((key) => {
                        const k = key as FieldKey;

                        return (
                            <div key={k} className={styles.row}>
                                <div className={styles.label}>{FIELD_LABELS[k]}</div>
                                <Dropdown
                                    options={SCORE_OPTIONS}
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    value={form[k].score as any}
                                    selectValue='id'
                                    onChange={(selectedValue) =>
                                        handleChange(k, 'score', selectedValue)
                                    }
                                />

                                <Input
                                    name=''
                                    type='number'
                                    placeholder='Enter here'
                                    value={form[k].seconds as string}
                                    onChange={(e) => handleChange(k, 'seconds', e.target.value)}
                                />

                                <Input
                                    name=''
                                    type='text'
                                    placeholder='Enter here'
                                    value={form[k].comments}
                                    onChange={(e) => handleChange(k, 'comments', e.target.value)}
                                />
                            </div>
                        );
                    })}
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
                        {calculatePercentage()} %
                    </Text>

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

export default BalanceForm;
