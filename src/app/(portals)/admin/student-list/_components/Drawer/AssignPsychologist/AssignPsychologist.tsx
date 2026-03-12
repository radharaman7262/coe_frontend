'use client';

import { useEffect, useState } from 'react';

import { Text } from '@/components';

import { FontType } from '@/types/typographyCommon';

import AssignedIcon from '@/public/assets/svg/assigned-icon.svg';
import TickIcon from '@/public/assets/svg/tick-icon.svg';

import { PsychologistType } from './type';

import { getPsychologistApiCall } from './utils.api';

import { DRAWER_DATA as text } from './constant';

import styles from './styles.module.scss';

const AssignPsychologist = () => {
    const [psychologists, setPsychologists] = useState<PsychologistType[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const fetchPsychologists = async () => {
        try {
            const result = await getPsychologistApiCall();

            if (result?.status) {
                setPsychologists(result?.response);
            }
        } catch (error) {
            console.error('Failed to fetch psychologists', error);
        }
    };

    useEffect(() => {
        fetchPsychologists();
    }, []);

    const getInitials = (name: string = ''): string =>
        name
            .trim()
            .split(/\s+/)
            .map((n) => n.charAt(0))
            .slice(0, 2)
            .join('')
            .toUpperCase();

    return (
        <>
            <div className={styles.studentContainer}>
                <div className={styles.leftPart}>
                    <div className={styles.iconwrapper}>
                        <TickIcon />
                    </div>
                    <div className={styles.textPart}>
                        <Text
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                            color='gray-900'
                        >
                            {text.studentSuccessfullyAdded}
                        </Text>
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='gray-900'
                        >
                            {text.studentAdded}
                        </Text>
                    </div>
                </div>
            </div>
            <div className={styles.psychologistContainer}>
                {psychologists?.map((item) => (
                    <div
                        key={item?.id}
                        className={`${styles.psychologistCard} ${selectedId === item?.id ? styles.activeCard : ''}`}
                        onClick={() => setSelectedId(item?.id)}
                        aria-hidden='true'
                    >
                        <div className={styles.leftSection}>
                            <div className={styles.avatar}>{getInitials(item?.name)}</div>

                            <div className={styles['left-text-section']}>
                                <Text
                                    font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                                    color='gray-900'
                                >
                                    {item?.name}
                                </Text>

                                <Text
                                    font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                                    color='gray-500'
                                >
                                    {item?.specializations?.[0] || 'Psychologist'}
                                </Text>
                            </div>
                        </div>

                        <div className={styles.rightSection}>
                            <AssignedIcon />
                            <Text
                                font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                                color='gray-500'
                            >
                                {item?.assignedStudentsCount} Student Assigned
                            </Text>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AssignPsychologist;
