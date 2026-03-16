'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { Dispatch, SetStateAction, useEffect, useMemo } from 'react';

import { ScrollLabelCalender, Text, TextArea } from '@/components/index';
import { FontType } from '@/types/typographyCommon';

import AssignedIcon from '@/public/assets/svg/assigned-icon.svg';
import Clock from '@public/assets/svg/clock-slot.svg';

import { PsychologistType } from '../AssignPsychologist/type';

import { DRAWER_DATA as text } from './constant';

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
    data,
    selectedPsychologist,
    selectedDate,
    setSelectedDate,
    selectedSlot,
    setSelectedSlot,
    instructions,
    setInstructions,
}: {
    data: any[];
    selectedPsychologist: PsychologistType | null;
    selectedDate: string | null;
    setSelectedDate: Dispatch<SetStateAction<string | null>>;
    selectedSlot: string | null;
    setSelectedSlot: Dispatch<SetStateAction<string | null>>;
    instructions: string;
    setInstructions: Dispatch<SetStateAction<string>>;
}) => {
    const dates = useMemo(
        () =>
            data.map((item) => {
                const d = new Date(item.date);

                return {
                    id: item.date,
                    day: d.toLocaleDateString('en-US', { weekday: 'short' }),
                    date: d.getDate(),
                    month: d.toLocaleDateString('en-US', { month: 'short' }),
                    slotsCount: item.availableSlotsCount,
                };
            }),
        [data],
    );

    /**
     * Get slots for selected date
     */
    const slots = useMemo(() => {
        if (!selectedDate) return [];

        const found = data.find((d) => d.date === selectedDate);
        return found?.slots || [];
    }, [selectedDate, data]);

    const handleInstructionChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setInstructions(e.target.value);
    };

    useEffect(() => {
        setSelectedSlot(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDate]);

    return (
        <div className={styles['container-wrapper']}>
            <div className={styles['drawer-form']}>
                {/* Psychologist Card */}
                <div className={styles.psychologistCard}>
                    <div className={styles.leftSection}>
                        <div className={styles.avatar}>
                            {selectedPsychologist ? getInitials(selectedPsychologist.name) : '??'}
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
                                {selectedPsychologist?.specializations?.[0]?.name || 'Psychologist'}
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

                {/* DATE SELECT */}
                <div>
                    <div className={styles['select-date-label']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.scheduleInformation}
                        </Text>
                    </div>

                    <ScrollLabelCalender
                        items={dates}
                        selectedId={selectedDate}
                        getId={(item) => item.id}
                        onSelect={(item) => {
                            setSelectedDate(item.id);
                            setSelectedSlot(null);
                        }}
                        renderItem={(item, isSelected) => (
                            <div
                                className={`${styles.card} ${isSelected ? styles.active : ''}`}
                                aria-pressed={isSelected}
                                aria-hidden='true'
                            >
                                <Text font={[FontType.text_xs_regular, FontType.text_xs_regular]}>
                                    {item.day}
                                </Text>
                                <Text font={[FontType.text_xs_regular, FontType.text_xs_regular]}>
                                    {item?.date}
                                </Text>
                                <Text font={[FontType.text_xs_regular, FontType.text_xs_regular]}>
                                    {item?.month}
                                </Text>

                                <div className={styles['slot-booking']}>
                                    <Clock />
                                    <Text
                                        font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                                    >
                                        {item?.slotsCount}
                                    </Text>
                                </div>
                            </div>
                        )}
                    />
                </div>

                {/* SLOT SELECT */}
                <div>
                    <div className={styles['select-date-label']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.availableSlots}
                        </Text>
                    </div>

                    <div className={styles['time-data']}>
                        {selectedDate ? (
                            slots.map((slot: any) => {
                                const slotLabel = `${slot.startTime} - ${slot.endTime}`;
                                const isSelected = selectedSlot === slot.slotId;

                                return (
                                    <div
                                        key={slot.slotId}
                                        className={`${styles['time-slot-component']} ${
                                            isSelected ? styles.activeSlot : ''
                                        }`}
                                        onClick={() => setSelectedSlot(slot?.slotId)}
                                        aria-pressed={isSelected}
                                        aria-hidden='true'
                                    >
                                        <Text
                                            font={[
                                                FontType.text_sm_medium,
                                                FontType.text_sm_medium,
                                            ]}
                                            color={isSelected ? 'blue-600' : 'text-idle'}
                                        >
                                            {slotLabel}
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
                                    {text.selectDateFirst}
                                </Text>
                            </div>
                        )}
                    </div>
                </div>

                {/* NOTES */}
                <div className={styles['text-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {text.notes}
                    </Text>

                    <TextArea
                        name='specialInstructions'
                        placeholder='Special instructions...'
                        value={instructions}
                        onChange={handleInstructionChange}
                        rows={2}
                    />
                </div>
            </div>
        </div>
    );
};

export default ScheduleInformationData;
