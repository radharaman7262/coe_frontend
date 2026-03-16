'use client';

import { useState } from 'react';

import { Button, Text } from '@/components';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import CrossIcon from '@/public/assets/svg/cross-icon.svg';

import { generateNextDates } from '@/constant/appConstants';

import ScheduleInformationData from './ScheduleInformation';

import { BUTTON_TEXT, DRAWER_DATA as text } from './constant';

import { PsychologistType } from '../AssignPsychologist/type';

import { useGetPsychologistDatesList } from './queries';

import { useUserStudentScheduleAction } from './userStudentScheduleAction';

import { SchedulePayload } from './type';

import styles from './styles.module.scss';

interface SessionPropsType {
    setOpenDrawer: (val: boolean) => void;
    studentId: string;
    selectedPsychologist: PsychologistType | null;
    onclose: () => void;
}

const ScheduleSession = ({
    setOpenDrawer,
    studentId,
    selectedPsychologist,
    onclose,
}: SessionPropsType) => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [instructions, setInstructions] = useState<string>('');
    const [loadingAddData, setLoadingAddData] = useState<boolean>(false);

    const { execute } = useUserStudentScheduleAction({
        setShow: setOpenDrawer,
        setLoader: setLoadingAddData,
    });

    const dates = generateNextDates(15);

    const { isLoading, data } = useGetPsychologistDatesList({
        userId: selectedPsychologist?.id || '',
        startDate: dates[0],
        endDate: dates[dates.length - 1],
    });

    const { response } = data || {};

    const handleSchedule = () => {
        setLoadingAddData(true);

        const body: SchedulePayload = {
            slotId: Number(selectedSlot),
            userId: Number(selectedPsychologist?.id),
            studentId: Number(studentId),
            bookingDate: selectedDate || '',
            notes: instructions,
            toSpecializationId: Number(selectedPsychologist?.specializations?.[0]?.id),
        };

        execute({
            type: 'create',
            body,
        });
    };

    return (
        <>
            <div className={styles['drawer-header']}>
                <div className={styles['drawer-header-left']}>
                    <Text font={[FontType.text_xl_bold, FontType.text_xl_bold]} color='gray-900'>
                        {text.scheduleInformation}
                    </Text>
                </div>
                <CrossIcon className={styles['cross-icon']} onClick={onclose} />
            </div>

            <div className={styles['drawer-body']}>
                {!isLoading && (
                    <ScheduleInformationData
                        selectedPsychologist={selectedPsychologist}
                        data={response}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        selectedSlot={selectedSlot}
                        setSelectedSlot={setSelectedSlot}
                        instructions={instructions}
                        setInstructions={setInstructions}
                    />
                )}
            </div>

            <div className={styles['drawer-bottom']}>
                <div className={styles['bottom-wrapper']}>
                    <Button
                        label={BUTTON_TEXT.schedule}
                        type='button'
                        variant={ButtonVariant.SOLID}
                        color='white'
                        font={[FontType.text_md_semibold, FontType.text_md_semibold]}
                        className={styles['btn-class']}
                        loader={loadingAddData}
                        onClick={handleSchedule}
                    />
                </div>
            </div>
        </>
    );
};

export default ScheduleSession;
