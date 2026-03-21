'use client';

import React, { useMemo, useState } from 'react';

import { Button, SmallTableBody, Text } from '@/components/index';
import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { ZERO_DATA } from '@/constant/appConstants';

import ViewMove from '@public/assets/svg/chevron-right.svg';
import Calender from '@public/assets/svg/white-color.svg';

import BookASessionModal from '@/app/(portals)/(modals)/BookSessionModal';
import { COLUMNS } from './constant';

import { sessionLogType } from '../type';

import styles from './styles.module.scss';

interface sessionlogTableType {
    studentSessionList: sessionLogType[];
    giveAccessToUser: boolean;
    studentId: number;
}

const SessionLogTable = (props: sessionlogTableType) => {
    const { studentSessionList, giveAccessToUser, studentId } = props;

    const [bookSessionModal, setBookSessionModal] = useState<boolean>(false);

    const handleBookASession = () => {
        setBookSessionModal(true);
    };

    const getSessionLogList = (results: sessionLogType[]) => {
        const data = results?.map((item: sessionLogType) => ({
            ...item,
            action: (
                <div className={styles['action-icon']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        View
                    </Text>
                    <ViewMove />
                </div>
            ),
        }));

        return data;
    };

    const finalSessionLogtList = useMemo(
        () => getSessionLogList(studentSessionList),
        [studentSessionList],
    );

    const hasData = studentSessionList?.length > ZERO_DATA;

    return (
        <>
            {bookSessionModal && studentId && (
                <BookASessionModal
                    open={bookSessionModal}
                    setGoalModal={setBookSessionModal}
                    studentId={studentId}
                />
            )}
            <div className={styles['title-header']}>
                <div>
                    <Text font={[FontType.text_md_bold, FontType.text_md_bold]} color='black'>
                        Session Log
                    </Text>
                </div>
                {giveAccessToUser && (
                    <Button
                        color='white'
                        type='button'
                        label='Book a Session'
                        variant={ButtonVariant.SOLID}
                        StartIcon={<Calender />}
                        onClick={handleBookASession}
                    />
                )}
            </div>

            <div className={styles['assesment-table-wrap']}>
                {!hasData ? (
                    <div className={styles['no-data']}>
                        <Text
                            font={[FontType.text_lg_medium, FontType.text_lg_medium]}
                            color='black'
                        >
                            No Data Yet !!!
                        </Text>
                    </div>
                ) : (
                    <SmallTableBody
                        columns={COLUMNS}
                        data={finalSessionLogtList}
                        headerClassName={styles['header-className']}
                        headerBaseClass={styles.headerBaseClass}
                        smallTableClass={styles['small-table-class']}
                    />
                )}
            </div>
        </>
    );
};

export default SessionLogTable;
