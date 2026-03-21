'use client';

import React, { useState } from 'react';

import { Button, SmallTableBody, Text } from '@/components/index';
import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { ZERO_DATA } from '@/constant/appConstants';
import PlusIcon from '@public/assets/svg/plus-icon.svg';

import GoalModal from '@/app/(portals)/(modals)/GoalModal';

import { goalTrackerType } from '../type';

import { COLUMNS } from './constant';

import styles from './styles.module.scss';

interface goalsSubgoalsType {
    studentGoalSubGoalList: goalTrackerType[];
    giveAccessToUser: boolean;
    studentId: number;
}

const GoalsSubgoals = (props: goalsSubgoalsType) => {
    const { studentGoalSubGoalList, giveAccessToUser, studentId } = props;

    const [goalModal, setGoalModal] = useState<boolean>(false);

    const hasData = studentGoalSubGoalList?.length > ZERO_DATA;

    const handleGoalCreate = () => {
        setGoalModal(true);
    };

    return (
        <>
            {goalModal && studentId && (
                <GoalModal open={goalModal} setGoalModal={setGoalModal} studentId={studentId} />
            )}
            <div className={styles['title-header']}>
                <div>
                    <Text font={[FontType.text_md_bold, FontType.text_md_bold]} color='black'>
                        Goals & Subgoals Tracker
                    </Text>
                </div>
                {giveAccessToUser && (
                    <Button
                        color='white'
                        type='button'
                        label='Create a Goal'
                        variant={ButtonVariant.SOLID}
                        StartIcon={<PlusIcon />}
                        onClick={handleGoalCreate}
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
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='black'
                        >
                            There is no goals added yet. Be the first one to add goal for the
                            student.
                        </Text>
                    </div>
                ) : (
                    <SmallTableBody
                        columns={COLUMNS}
                        data={studentGoalSubGoalList}
                        headerClassName={styles['header-className']}
                        headerBaseClass={styles.headerBaseClass}
                        smallTableClass={styles['small-table-class']}
                    />
                )}
            </div>
        </>
    );
};

export default GoalsSubgoals;
