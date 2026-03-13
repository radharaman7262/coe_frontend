'use client';

import { ShimmerUiContainer, Text } from '@/components';
import { FontType } from '@/types/typographyCommon';

import AssignedIcon from '@/public/assets/svg/assigned-icon.svg';
import TickIcon from '@/public/assets/svg/tick-icon.svg';

import { DRAWER_DATA as text } from './constant';

import { usePsychologistList } from './queries';

import { PsychologistType } from './type';

import styles from './styles.module.scss';

const SKELETON_KEYS = ['sk-1', 'sk-2', 'sk-3', 'sk-4', 'sk-5', 'sk-6'];

const getInitials = (name: string = ''): string =>
    name
        .trim()
        .split(/\s+/)
        .map((n) => n.charAt(0))
        .slice(0, 2)
        .join('')
        .toUpperCase();

interface AssignPsychologistProps {
    selectedId: string | null;
    onSelect: (psychologist: PsychologistType) => void;
}

const AssignPsychologist = ({ selectedId, onSelect }: AssignPsychologistProps) => {
    const { data: psychologists = [], isLoading } = usePsychologistList();

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
                {isLoading &&
                    SKELETON_KEYS.map((id) => (
                        <ShimmerUiContainer key={id} className={styles.psychologistCardShimmer} />
                    ))}

                {!isLoading &&
                    psychologists?.map((item: PsychologistType) => (
                        <div
                            key={item?.id}
                            className={`${styles.psychologistCard} ${
                                selectedId === item?.id ? styles.activeCard : ''
                            }`}
                            onClick={() => onSelect(item)}
                            aria-hidden='true'
                        >
                            <div className={styles.leftSection}>
                                <div className={styles.avatar}>{getInitials(item?.name)}</div>

                                <div className={styles['left-text-section']}>
                                    <Text
                                        font={[
                                            FontType.text_sm_semibold,
                                            FontType.text_sm_semibold,
                                        ]}
                                        color='gray-900'
                                    >
                                        {item?.name}
                                    </Text>

                                    <Text
                                        font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                                        color='gray-500'
                                    >
                                        {item?.specializations?.[0]?.name || 'Psychologist'}
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
