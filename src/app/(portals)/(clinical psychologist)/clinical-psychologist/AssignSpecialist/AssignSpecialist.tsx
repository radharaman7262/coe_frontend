'use client';

import { Dispatch, SetStateAction } from 'react';

import { Checkbox, ShimmerUiContainer, Text, Toaster } from '@/components/index';

import { FontType } from '@/types/typographyCommon';

import AssignedIcon from '@/public/assets/svg/assigned-icon.svg';

import { useGetAssignSpecialist } from './queries';

import { SelectedAssignment, UserDataType } from './type';

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

interface AssignSpecialistProps {
    setSelectedAssignments: Dispatch<SetStateAction<SelectedAssignment[]>>;
    selectedAssignments: SelectedAssignment[];
}

const AssignSpecialist = (props: AssignSpecialistProps) => {
    const { setSelectedAssignments, selectedAssignments } = props;

    const { data: response = {}, isLoading } = useGetAssignSpecialist({
        role: '',
        search: '',
    });

    const { data = [] } = response?.response || {};

    const handleCheckBox = (userId: string, specializationId: number, checked: boolean) => {
        if (checked) {
            setSelectedAssignments((prev) => {
                if (prev.some((item) => +item.toSpecializationId === specializationId)) return prev;

                return [
                    ...prev,
                    { toId: +userId, toSpecializationId: specializationId.toString() },
                ];
            });
        } else {
            setSelectedAssignments((prev) =>
                prev.filter((item) => +item.toSpecializationId !== specializationId),
            );
        }
    };

    return (
        <>
            <div className={styles.psychologistContainer}>
                {isLoading &&
                    SKELETON_KEYS.map((id) => (
                        <ShimmerUiContainer key={id} className={styles.psychologistCardShimmer} />
                    ))}

                {!isLoading &&
                    data?.map((item: UserDataType, index: number) => (
                        <div key={index as number} className={styles.activeCard} aria-hidden='true'>
                            <div className={styles['select-specialist']}>
                                <Checkbox
                                    isChecked={selectedAssignments.some(
                                        (selected) => selected.toId === +item.userId,
                                    )}
                                    onChange={(e) =>
                                        handleCheckBox(
                                            item.userId,
                                            Number(item.specializations[0].specializationId),
                                            e,
                                        )
                                    }
                                />
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
                                            font={[
                                                FontType.text_xs_regular,
                                                FontType.text_xs_regular,
                                            ]}
                                            color='gray-500'
                                        >
                                            {item?.specializations[0]?.specialization}
                                        </Text>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.rightSection}>
                                <AssignedIcon />

                                <Text
                                    font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                                    color='gray-500'
                                >
                                    {item?.studentsAssigned} Student Assigned
                                </Text>
                            </div>
                        </div>
                    ))}
            </div>
            <Toaster />
        </>
    );
};

export default AssignSpecialist;
