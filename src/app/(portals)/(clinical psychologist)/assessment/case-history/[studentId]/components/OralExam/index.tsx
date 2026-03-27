/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React, { useEffect, useRef, useState } from 'react';

import { Text, Input, Button, ShimmerUiContainer } from '@/components/index';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { useAppMutation } from '@/hooks/useAppMutation';
import { useParams, useSearchParams } from 'next/navigation';
import { QueryKeys } from '@/utils/queryKeys';
import DocIcon from '@public/assets/svg/doc-icon.svg';
import { FormState } from './type';

import RadioGroup from './RadioGroup';

import { calculatePercentage } from './utils';

import styles from './style.module.scss';
import { submitOralPeripheralMechanismExam } from './utils.api';
import { useGetCaseHistoryFormDetails } from '../../../queries';

const OralExam = () => {
    const [form, setForm] = useState<FormState>({
        structure: {},
        function: {},
        vegetativeSkills: {},
    });

    const [percentage, setPercentage] = useState(0);
    const [loader, setLoader] = useState(false);

    const [ddk, setDdk] = useState('');

    const ddkRef = useRef<HTMLInputElement>(null);

    const { studentId } = useParams();

    const searchParams = useSearchParams();

    const formId = searchParams.get('formId');
    const sectionId = searchParams.get('sectionId');
    const id = searchParams.get('id');

    const mutation = useAppMutation({
        mutationFn: submitOralPeripheralMechanismExam,
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

    const handleChange = (section: keyof FormState, field: string, value: string) => {
        setForm((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    };

    const handleSubmit = async () => {
        const percent = calculatePercentage(form, ddk);

        const payload = {
            studentId: studentId ?? '',
            structure: {
                face: form.structure.face || '',
                jaw: form.structure.jaw || '',
                tongue: form.structure.tongue || '',
                palate: form.structure.palate || '',
                dentition: form.structure.dentition || '',
                bite: form.structure.bite || '',
            },
            function: {
                lipClosure: form.function.lipClosure || '',
                lipMovement: form.function.lipMovement || '',
                tongueMobility: form.function.tongueMobility || '',
                jawControl: form.function.jawControl || '',
                ddk: ddk || '',
                cheekPuff: form.function.cheekPuff || '',
                softPalate: form.function.softPalate || '',
                gag: form.function.gag || '',
                drooling: form.function.drooling || '',
            },
            vegetativeSkills: {
                sucking: form.vegetativeSkills.sucking || '',
                swallowing: form.vegetativeSkills.swallowing || '',
                chewing: form.vegetativeSkills.chewing || '',
                biting: form.vegetativeSkills.biting || '',
                breathing: form.vegetativeSkills.breathing || '',
                saliva: form.vegetativeSkills.saliva || '',
                nasalRegurgitation: form.vegetativeSkills.nasalRegurgitation || '',
            },
            percentage: percent,
        };

        mutation.mutate(payload);
    };

    const structureFields = [
        { field: 'face', options: ['Symmetrical', 'Asymmetrical'] },
        { field: 'jaw', options: ['Normal', 'Micrognathia', 'Macrognathia', 'Hypotonia'] },
        { field: 'tongue', options: ['Normal', 'Ankyloglossia', 'Deviation'] },
        { field: 'palate', options: ['Normal', 'High/Low arch', 'Cleft'] },
        { field: 'dentition', options: ['Normal', 'Malocclusion', 'Missing'] },
        { field: 'bite', options: ['Normal', 'Open', 'Cross', 'Overbite'] },
    ];

    const functionFields = [
        { field: 'lipClosure', options: ['Complete', 'Partial', 'Weak'] },
        { field: 'lipMovement', options: ['Adequate', 'Limited'] },
        { field: 'tongueMobility', options: ['Adequate', 'Restricted'] },
        { field: 'jawControl', options: ['Stable', 'Tremors', 'Limited ROM'] },
    ];

    const functionFieldsTwo = [
        { field: 'cheekPuff', options: ['Maintains', 'Air escape'] },
        { field: 'softPalate', options: ['Symmetrical', 'Asymmetrical'] },
        { field: 'gag', options: ['Present', 'Absent', 'Hyper'] },
        { field: 'drooling', options: ['None', 'Occasional', 'Frequent', 'Continuous'] },
    ];

    const vegetativeFields = [
        { field: 'sucking', options: ['Efficient', 'Weak', 'Absent'] },
        { field: 'swallowing', options: ['Safe', 'Delayed', 'Wet voice'] },
        { field: 'chewing', options: ['Rotary', 'Munching', 'Poor'] },
        { field: 'biting', options: ['Controlled', 'Avoids solids'] },
        { field: 'breathing', options: ['Nasal', 'Oral'] },
        { field: 'saliva', options: ['Adequate', 'Excessive'] },
        { field: 'nasalRegurgitation', options: ['Yes', 'No'] },
    ];

    const setFormData = (data: any) => {
        setForm({
            structure: data.structure || {},
            function: {
                ...data.function,
            },
            vegetativeSkills: data.vegetativeSkills || {},
        });

        setDdk(data.function?.ddk || '');
    };

    useEffect(() => {
        const percent = calculatePercentage(form, ddk);
        setPercentage(percent);
    }, [form, ddk]);

    useEffect(() => {
        if (response?.length) {
            setFormData(response[0]);
        }
    }, [response]);

    return isLoading ? (
        <ShimmerUiContainer className={styles['accroding-shimmer']} />
    ) : (
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />
                ))}

                {/* DDK INPUT */}
                <div className={styles.row}>
                    <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]}>
                        DDK /pa/ /ta/ /ka/
                    </Text>

                    <Input
                        ref={ddkRef}
                        name='ddk'
                        placeholder='Enter here'
                        value={ddk || ''}
                        error={undefined}
                        helperText={undefined}
                        onChange={(e) => setDdk(e.target.value)}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />
                ))}
            </div>
            <div className={styles.footer}>
                <div className={styles.actions}>
                    <Text
                        tagType='span'
                        font={[FontType.text_sm_bold, FontType.text_sm_bold]}
                        color='dark-blue'
                        className={styles.progress}
                    >
                        {percentage}%
                    </Text>
                    <Button
                        label='save'
                        StartIcon={<DocIcon />}
                        variant={ButtonVariant.SOLID}
                        loader={loader}
                        size='small'
                        className={styles['save-button']}
                        color='white'
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default OralExam;
