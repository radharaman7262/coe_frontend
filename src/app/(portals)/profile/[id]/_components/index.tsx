import React from 'react';

import ProfileHeader from './profileHeader';
import StudentProfile from './studentProfile';
import AssesmentSummary from './assesmentSummary';
import RemarkAndNotes from './remarkAndNotes';
import GoalsSubgoals from './goalsSubgoals';
import SessionLogTable from './sessionLog';

import {
    goalTrackerType,
    sessionLogType,
    studentAssesmentType,
    studentPersonalType,
    studentRemarkType,
} from './type';

import styles from './styles.module.scss';

interface StudentPageComponentType {
    studentProfileList: studentPersonalType;
    studentAssesmentList: studentAssesmentType[];
    studentRemarkList: studentRemarkType[];
    studentGoalSubGoalList: goalTrackerType[];
    studentSessionList: sessionLogType[];
    portal: string;
    id: string;
}

const StudentComponentPage = (props: StudentPageComponentType) => {
    const {
        studentProfileList,
        studentAssesmentList,
        studentRemarkList,
        studentGoalSubGoalList,
        studentSessionList,
        portal,
        id,
    } = props;

    const giveAccessToUser = portal !== 'clinicalChecking' && portal !== 'superAdminChecking';

    return (
        <div className={styles['profile-page-wrapper']}>
            <ProfileHeader />

            <div className={styles['profile-component']}>
                <StudentProfile studentProfileList={studentProfileList} />

                <div className={styles['assessment-remark']}>
                    <AssesmentSummary studentAssesmentList={studentAssesmentList} />
                    <RemarkAndNotes studentRemarkList={studentRemarkList} />
                </div>

                <GoalsSubgoals
                    studentGoalSubGoalList={studentGoalSubGoalList}
                    giveAccessToUser={giveAccessToUser}
                    studentId={Number(id)}
                />

                <SessionLogTable
                    studentSessionList={studentSessionList}
                    giveAccessToUser={giveAccessToUser}
                    studentId={Number(id)}
                />
            </div>
        </div>
    );
};
export default StudentComponentPage;
