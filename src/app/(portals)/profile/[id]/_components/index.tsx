import React from 'react';

import ProfileHeader from './profileHeader';
import StudentProfile from './studentProfile';
import AssesmentSummary from './assesmentSummary';
import RemarkAndNotes from './remarkAndNotes';

import {
    goalTrackerType,
    sessionLogType,
    studentAssesmentType,
    studentPersonalType,
    studentRemarkType,
} from './type';

import styles from './styles.module.scss';
import GoalsSubgoals from './goalsSubgoals';
import SessionLogTable from './sessionLog';

interface StudentPageComponentType {
    studentProfileList: studentPersonalType;
    studentAssesmentList: studentAssesmentType[];
    studentRemarkList: studentRemarkType[];
    studentGoalSubGoalList: goalTrackerType[];
    studentSessionList: sessionLogType[];
}

const StudentComponentPage = (props: StudentPageComponentType) => {
    const { studentProfileList, studentAssesmentList, studentRemarkList, studentGoalSubGoalList , studentSessionList } =
        props;

    return (
        <div className={styles['profile-page-wrapper']}>
            <ProfileHeader />

            <div className={styles['profile-component']}>
                <StudentProfile studentProfileList={studentProfileList} />

                <div className={styles['assessment-remark']}>
                    <AssesmentSummary studentAssesmentList={studentAssesmentList} />
                    <RemarkAndNotes studentRemarkList={studentRemarkList} />
                </div>

                <GoalsSubgoals studentGoalSubGoalList={studentGoalSubGoalList} />

                <SessionLogTable studentSessionList={studentSessionList} />
            </div>
        </div>
    );
};
export default StudentComponentPage;
