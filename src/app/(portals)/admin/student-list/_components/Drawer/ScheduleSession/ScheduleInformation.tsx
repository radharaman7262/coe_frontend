'use client';

import React, { useEffect, useState } from 'react';

import { ScrollLabelCalender, Text, TextArea } from '@/components/index';
import { FontType } from '@/types/typographyCommon';

import AssignedIcon from '@/public/assets/svg/assigned-icon.svg';
import Clock from '@public/assets/svg/clock-slot.svg';

import { generateNext30Dates } from '@/constant/appConstants';

import { PsychologistType } from '../AssignPsychologist/type';

import { DRAWER_DATA as dummyData, DUMMY_TIME_SLOT } from './constant';

import styles from './styles.module.scss';

const getInitials = (name: string = ''): string =>
    name
        .trim()
        .split(/\s+/)
        .map((n) => n.charAt(0))
        .slice(0, 2)
        .join('')
        .toUpperCase();

const ScheduleInformationData = ({
    selectedPsychologist,
}: {
    selectedPsychologist: PsychologistType | null;
}) => {
    const [dates] = useState(generateNext30Dates());
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

    useEffect(() => {
        setSelectedSlot(null);
    }, [selectedDate]);

    return (
        <div className={styles['container-wrapper']}>
            <div className={styles['drawer-form']}>
                <div className={styles.psychologistCard} aria-hidden='true'>
                    <div className={styles.leftSection}>
                        <div className={styles.avatar}>
                            {selectedPsychologist ? getInitials(selectedPsychologist?.name) : '??'}
                        </div>

                        <div className={styles['left-text-section']}>
                            <Text
                                font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                                color='gray-900'
                            >
                                {selectedPsychologist?.name || 'No Psychologist Selected'}
                            </Text>

                            <Text
                                font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                                color='gray-500'
                            >
                                {selectedPsychologist?.specializations?.[0]?.name || '12 years exp'}
                            </Text>
                        </div>
                    </div>

                    <div className={styles.rightSection}>
                        <AssignedIcon />
                        <Text
                            font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                            color='gray-500'
                        >
                            {selectedPsychologist?.assignedStudentsCount || 0} Student Assigned
                        </Text>
                    </div>
                </div>

                <div>
                    <div className={styles['select-date-label']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {dummyData?.scheduleInformation}
                        </Text>
                    </div>
                    <ScrollLabelCalender
                        items={dates}
                        selectedId={selectedDate}
                        getId={(item) => item.id}
                        onSelect={(item) => setSelectedDate(item.id)}
                        renderItem={(item, isSelected) => (
                            <div className={`${styles.card} ${isSelected ? styles.active : ''}`}>
                                <div>{item.day}</div>
                                <div>{item.date}</div>
                                <div>{item.month}</div>
                                <div className={styles['slot-booking']}>
                                    <Clock />3
                                </div>
                            </div>
                        )}
                    />
                </div>

                <div>
                    <div className={styles['select-date-label']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {dummyData?.availableSlots}
                        </Text>
                    </div>
                    <div className={styles['time-data']}>
                        {selectedDate ? (
                            DUMMY_TIME_SLOT?.map((item) => {
                                const isSelected = selectedSlot === item;
                                return (
                                    <div
                                        key={item}
                                        className={`${styles['time-slot-component']} ${isSelected ? styles.activeSlot : ''}`}
                                        onClick={() => setSelectedSlot(item)}
                                        aria-hidden='true'
                                    >
                                        <Text
                                            font={[
                                                FontType.text_sm_medium,
                                                FontType.text_sm_medium,
                                            ]}
                                            color={isSelected ? 'blue-600' : 'text-idle'}
                                        >
                                            {item}
                                        </Text>
                                    </div>
                                );
                            })
                        ) : (
                            <div className={styles['empty-slots']}>
                                <Text
                                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                    color='gray-400'
                                >
                                    {dummyData?.selectDateFirst}
                                </Text>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles['text-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {dummyData?.notes}
                    </Text>

                    <TextArea
                        name='specialInstructions'
                        placeholder='Special instructions...'
                        value=''
                        rows={2}
                    />
                </div>
            </div>
        </div>
    );
};

export default ScheduleInformationData;
