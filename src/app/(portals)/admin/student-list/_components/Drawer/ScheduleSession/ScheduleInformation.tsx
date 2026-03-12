'use client';

import React, { useState } from 'react';

import { ScrollLabelCalender, Text, TextArea } from '@/components/index';
import { FontType } from '@/types/typographyCommon';

import AssignedIcon from '@/public/assets/svg/assigned-icon.svg';
import Clock from '@public/assets/svg/clock-slot.svg';

import { generateNext30Dates } from '@/constant/appConstants';

import { DRAWER_DATA as dummyData, DUMMY_TIME_SLOT } from './constant';

import styles from './styles.module.scss';

const ScheduleInformationData = () => {
    const [dates] = useState(generateNext30Dates());
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    return (
        <div className={styles['container-wrapper']}>
            <div className={styles['drawer-form']}>
                <div className={styles.psychologistCard} aria-hidden='true'>
                    <div className={styles.leftSection}>
                        <div className={styles.avatar}>DPD</div>

                        <div className={styles['left-text-section']}>
                            <Text
                                font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                                color='gray-900'
                            >
                                Dr. Aman Desai
                            </Text>

                            <Text
                                font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                                color='gray-500'
                            >
                                12 years exp
                            </Text>
                        </div>
                    </div>

                    <div className={styles.rightSection}>
                        <AssignedIcon />
                        <Text
                            font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                            color='gray-500'
                        >
                            03 Student Assigned
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
                        {DUMMY_TIME_SLOT?.map((item) => (
                            <div className={styles['time-slot-component']}>
                                <Text
                                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                    color='text-idle'
                                >
                                    {item}
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles['text-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                        required
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
