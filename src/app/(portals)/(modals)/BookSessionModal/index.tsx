import React, { useEffect, useMemo, useState } from 'react';

import { Button, ScrollLabelCalender, ShimmerUiContainer, Text } from '@/components/index';

import Modal from '@/components/shared/Modal';

import CloseIcon from '@public/assets/svg/cross-icon.svg';
import Clock from '@public/assets/svg/clock-slot.svg';

import { generateNextDates, MODAL_STYLING } from '@/constant/appConstants';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { getUserDetails } from '@/utils/cookieInServer';
import { LoggedUserDetailType } from '@/types/LoggedUserDetailType';

import { useGetBookingTimeSlotList } from './queries';

import { bookingSlotType, calendarItemType, CreateSessionPayload, slotType } from './type';

import { useUserTherpistScheduleAction } from './userStudentBookingAction';

import styles from './styles.module.scss';

interface boolkSessionModaltype {
    open: boolean;
    setGoalModal: React.Dispatch<React.SetStateAction<boolean>>;
    studentId: number;
    setStudentId?: React.Dispatch<React.SetStateAction<number | null>>;
    sessionTypeId: number;
}

const BookASessionModal = (props: boolkSessionModaltype) => {
    const { open, setGoalModal, studentId, setStudentId, sessionTypeId } = props;

    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedSlots, setSelectedSlots] = useState<number[]>([]);

    const [userDetails, setUserDetails] = useState<LoggedUserDetailType | null>(null);
    const [isLoadingBtn, setIsLoadingBtn] = useState<boolean>(false);

    const { execute } = useUserTherpistScheduleAction({
        setShow: setGoalModal,
        setLoader: setIsLoadingBtn,
    });

    const getdates = generateNextDates(15);

    const getDetails = async () => {
        const user = (await getUserDetails()) || {};
        const details = typeof user === 'string' ? JSON.parse(user) : {};
        setUserDetails(details);
    };

    const { userSpecializations, id } = userDetails || {};

    const { isLoading, data } = useGetBookingTimeSlotList({
        studentId: studentId.toString(),
        startDate: getdates[0],
        endDate: getdates[getdates.length - 1],
    });

    const { response: bookingSlot } = data || {};

    const handleClose = () => {
        setGoalModal(false);
        setStudentId?.(null);
        setSelectedDate(null);
        setSelectedSlots([]);
    };

    const dates = useMemo(() => {
        if (!bookingSlot) return [];

        return bookingSlot.map((item: bookingSlotType) => {
            const d = new Date(item.date);

            return {
                id: item.date,
                day: d.toLocaleDateString('en-US', { weekday: 'short' }),
                date: d.getDate(),
                month: d.toLocaleDateString('en-US', { month: 'short' }),
                slotsCount: item.availableCount ?? 0,
            };
        });
    }, [bookingSlot]);

    const slots = useMemo<slotType[]>(() => {
        if (!selectedDate || !bookingSlot.length) return [];

        const selectedDay = bookingSlot.find((item: bookingSlotType) => item.date === selectedDate);

        return (selectedDay?.slots ?? []).filter((slot: slotType) => !slot.selected);
    }, [selectedDate, bookingSlot]);

    const handleSelectedSlots = (slot: slotType) => {
        setSelectedSlots((prev) => {
            const exists = prev.includes(slot.slotId);

            if (exists) {
                return prev.filter((id) => id !== slot.slotId);
            }
            return [...prev, slot.slotId];
        });
    };

    useEffect(() => {
        getDetails();
    }, []);

    useEffect(() => {
        setSelectedSlots([]);
    }, [selectedDate]);

    const handleSubmit = () => {
        const body: CreateSessionPayload = {
            studentId,
            bookings: [
                {
                    bookingDate: selectedDate || '',
                    slotIds: selectedSlots,
                },
            ],

            notes: '',
            goal: '',
            subGoal: '',
            toSpecializationId: Number(userSpecializations?.id),
            sessionType: sessionTypeId,
            userId: Number(id),
        };

        execute({
            type: 'create',
            body,
        });
    };

    const isDisabled = selectedDate && selectedSlots.length > 0;

    return (
        <Modal open={open} sx={MODAL_STYLING}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles['modal-title']}>
                        <Text
                            font={[FontType.text_xl_semibold, FontType.text_xl_semibold]}
                            color='black'
                        >
                            Book Therapy Session
                        </Text>
                        <CloseIcon onClick={handleClose} className={styles.cursor} />
                    </div>
                </div>
                {!isLoading ? (
                    <>
                        <div className={styles['book-session-select']}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='gray-300'
                            >
                                Select Date
                            </Text>
                            <ScrollLabelCalender<calendarItemType>
                                items={dates}
                                selectedId={selectedDate}
                                getId={(item) => item?.id}
                                onSelect={(item) => {
                                    setSelectedDate(item?.id);
                                    setSelectedSlots([]);
                                }}
                                renderItem={(item, isSelected) => (
                                    <div
                                        className={`${styles.card} ${isSelected ? styles.active : ''}`}
                                        aria-pressed={isSelected}
                                        aria-hidden='true'
                                    >
                                        <Text
                                            font={[
                                                FontType.text_xs_regular,
                                                FontType.text_xs_regular,
                                            ]}
                                        >
                                            {item?.day}
                                        </Text>
                                        <Text
                                            font={[
                                                FontType.text_xs_regular,
                                                FontType.text_xs_regular,
                                            ]}
                                        >
                                            {item?.date}
                                        </Text>
                                        <Text
                                            font={[
                                                FontType.text_xs_regular,
                                                FontType.text_xs_regular,
                                            ]}
                                        >
                                            {item?.month}
                                        </Text>

                                        <div className={styles['slot-booking']}>
                                            <Clock />
                                            <Text
                                                font={[
                                                    FontType.text_xs_regular,
                                                    FontType.text_xs_regular,
                                                ]}
                                            >
                                                {item?.slotsCount}
                                            </Text>
                                        </div>
                                    </div>
                                )}
                            />
                        </div>
                        <div className={styles['available-slot']}>
                            <div className={styles['select-date-label']}>
                                <Text
                                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                    color='text-idle'
                                >
                                    Available Time Slots
                                </Text>
                            </div>

                            <div className={styles['time-data']}>
                                {selectedDate ? (
                                    slots.length ? (
                                        slots.map((slot) => {
                                            const slotLabel = `${slot.startTime} - ${slot.endTime}`;
                                            const isSelected = selectedSlots.includes(slot.slotId);

                                            return (
                                                <div
                                                    key={slot.slotId}
                                                    className={`${styles['time-slot-component']} ${
                                                        isSelected ? styles.activeSlot : ''
                                                    }`}
                                                    aria-hidden='true'
                                                    onClick={() => handleSelectedSlots(slot)}
                                                >
                                                    <Text
                                                        font={[
                                                            FontType.text_sm_medium,
                                                            FontType.text_sm_medium,
                                                        ]}
                                                        color={
                                                            isSelected ? 'blue-600' : 'text-idle'
                                                        }
                                                    >
                                                        {slotLabel}
                                                    </Text>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <Text color='gray-400'>No slots available</Text>
                                    )
                                ) : (
                                    <div className={styles['empty-slots']}>
                                        <Text
                                            font={[
                                                FontType.text_sm_medium,
                                                FontType.text_sm_medium,
                                            ]}
                                            color='gray-400'
                                        >
                                            Select a Date First
                                        </Text>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <ShimmerUiContainer className={styles['shimmer-container']} />
                )}

                <div className={styles['btn-container']}>
                    <Button
                        color='white'
                        type='button'
                        label='Schedule'
                        variant={ButtonVariant.SOLID}
                        onClick={handleSubmit}
                        disabled={!isDisabled}
                        loader={isLoadingBtn}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default BookASessionModal;
