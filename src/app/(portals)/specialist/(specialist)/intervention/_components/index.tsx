'use client';

import React, { useMemo, useRef, useState } from 'react';

import { Button, PageHeader, ShimmerUiContainer, Text } from '@/components/index';

import ThreeDotIcon from '@/public/assets/svg/trhee-dot.svg';

import { useRouter } from 'next/navigation';

import { ToastContainer } from 'react-toastify';

import { DEBOUNCE_SEARCH_TIME, StatusNumber, StatusNumberString } from '@/constant/appConstants';

import useDebounce from '@/utils/useDebounce';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import SmallUser from '@public/assets/svg/small-user.svg';

import useClickOutside from '@/hooks/useClickOutside';

// import { AppRoutes } from '@/constant/appRoutes';

import BookASessionModal from '@/app/(portals)/(modals)/BookSessionModal';
import GoalModal from '@/app/(portals)/(modals)/GoalModal';

import { PROFILE_ACTIONS, ASSESSMENT_TEXT as text } from './constant';

import { useGetSpecialEducatorInterventionList } from '../queries';

import TableUi from './TableUi';

import { InterventionType } from '../type';

import { ActionType } from './type';

import styles from './styles.module.scss';

const SpecialEducatorInterventionPage = () => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [currentPage, setCurrentPage] = useState<number>(StatusNumber.ACTIVE);
    const [tableFilter, setTableFilter] = useState<string>('');
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);

    const [goalModal, setGoalModal] = useState<boolean>(false);
    const [bookASessionModal, setBookASessionModal] = useState<boolean>(false);
    const [studentId, setStudentId] = useState<number | null>(null);

    const router = useRouter();

    const debouncedFilters = useDebounce(tableFilter, DEBOUNCE_SEARCH_TIME);

    const { isLoading, data } = useGetSpecialEducatorInterventionList({
        page: currentPage,
        limit: 25,
        search: debouncedFilters,
    });

    const { response } = data || {};

    const { data: assessmentResponse = [], total = 0 } = response || {};

    const handleModal = (item: InterventionType) => {
        const { studentId, isGoalSet } = item;

        if (!studentId) return;

        setStudentId(Number(studentId));

        if (isGoalSet.toString() === StatusNumberString.INACTIVE) {
            setGoalModal(true);
        } else {
            setBookASessionModal(true);
        }
    };

    const handleThreeDot = (id: string) => {
        setOpenMenuId((prev) => (prev === id ? null : id));
    };

    const renderIcon = (type: string) => {
        switch (type) {
            case 'profile':
                return <SmallUser />;
            default:
                return null;
        }
    };

    const handleProfileRedirection = (studentId: string) => {
        if (!studentId) return;

        router.push(`/specialist/profile/${studentId}`);
    };

    const ACTION_MAP: Record<ActionType, (item: InterventionType) => void> = {
        viewProfile: (item) => {
            handleProfileRedirection(item.studentId);
        },

        reschedule: (item) => {
            setStudentId(Number(item.studentId));
            setBookASessionModal(true);
        },
    };

    const handleAction = (action: ActionType, item: InterventionType) => {
        ACTION_MAP[action]?.(item);
    };

    const getSpecialEducatorInterventionList = (results: InterventionType[] = []) =>
        results.map((item) => {
            const {
                studentName,
                age,
                gender,
                startTime,
                endTime,
                bookingDate,
                activeGoals,
                isGoalSet,
                studentId,
            } = item;

            const genderInitial = gender?.[0] ?? '';

            const formatDate = (bookingDate: string) => {
                if (!bookingDate) return '';

                const d = new Date(bookingDate);

                if (Number.isNaN(d.getTime())) return '';

                return d.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                });
            };

            return {
                ...item,

                nameAgeGender: (
                    <div className={styles['name-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-gray-900'
                        >
                            {studentName}
                        </Text>
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='gray-500'
                        >
                            {`(${age} | ${genderInitial})`}
                        </Text>
                    </div>
                ),

                activeGoals: (
                    <Text
                        font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                        color='gray-500'
                    >
                        {`${activeGoals} Active Goals`}
                    </Text>
                ),

                nextSession: (
                    <div className={styles['date-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-gray-900'
                        >
                            {formatDate(bookingDate)}
                        </Text>
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='gray-500'
                        >
                            {`${startTime || '_'} - ${endTime || '_ '}`}
                        </Text>
                    </div>
                ),

                action:
                    isGoalSet.toString() === StatusNumberString.INACTIVE ||
                    isGoalSet.toString() !== StatusNumberString.INACTIVE ? (
                        <Button
                            label={
                                isGoalSet.toString() === StatusNumberString.INACTIVE
                                    ? 'Set Goal'
                                    : 'Start Session'
                            }
                            type='button'
                            variant={ButtonVariant.NORMAL}
                            color={
                                isGoalSet.toString() === StatusNumberString.INACTIVE
                                    ? 'gray-900'
                                    : 'white'
                            }
                            font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                            className={
                                isGoalSet.toString() === StatusNumberString.INACTIVE
                                    ? styles['btn-outline']
                                    : styles['btn-primary']
                            }
                            onClick={() => handleModal(item)}
                        />
                    ) : null,

                edit: (
                    <div>
                        <div className={styles.cursor}>
                            <ThreeDotIcon onClick={() => handleThreeDot(studentId)} />
                        </div>

                        {openMenuId === studentId && (
                            <div className={styles['dropdown-menu']} ref={dropdownRef}>
                                {PROFILE_ACTIONS.map((profileItem) => (
                                    <div
                                        key={profileItem.id}
                                        className={styles['dropdown-item']}
                                        onClick={() =>
                                            handleAction(profileItem?.action as ActionType, item)
                                        }
                                        aria-hidden='true'
                                    >
                                        {renderIcon(profileItem.icon)}
                                        <Text
                                            font={[
                                                FontType.text_sm_medium,
                                                FontType.text_sm_medium,
                                            ]}
                                            color='text-idle'
                                        >
                                            {profileItem.label}
                                        </Text>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ),
            };
        });

    useClickOutside(dropdownRef, () => setOpenMenuId(null));

    const finalInterventionList = useMemo(
        () => getSpecialEducatorInterventionList(assessmentResponse),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [assessmentResponse, openMenuId],
    );

    return (
        <div className={styles['assessment-page']}>
            <PageHeader title={text.assessment} description={text.description} />
            {goalModal && studentId && (
                <GoalModal
                    open={goalModal}
                    setGoalModal={setGoalModal}
                    studentId={studentId}
                    setStudentId={setStudentId}
                />
            )}

            {bookASessionModal && studentId && (
                <BookASessionModal
                    open={bookASessionModal}
                    setGoalModal={setBookASessionModal}
                    studentId={studentId}
                    setStudentId={setStudentId}
                    sessionTypeId={2}
                />
            )}

            {isLoading ? (
                <ShimmerUiContainer className={styles['shimmer-data']} />
            ) : (
                <TableUi
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    data={finalInterventionList}
                    totalCount={total}
                    setTableFilter={setTableFilter}
                    tableFilter={tableFilter}
                />
            )}

            <ToastContainer />
        </div>
    );
};
export default SpecialEducatorInterventionPage;
