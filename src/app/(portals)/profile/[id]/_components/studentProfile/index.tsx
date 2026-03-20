'use client';

import React from 'react';

import { Text } from '@/components/index';

import { FontType } from '@/types/typographyCommon';

import { studentPersonalType } from '../type';

import { STUDENT_PROFILE_FORMAT, STUDENT_PROFILE_TEXT } from './constant';

import styles from './styles.module.scss';

interface StudentProfileType {
    studentProfileList: studentPersonalType;
}

const StudentProfile = (props: StudentProfileType) => {
    const { studentProfileList } = props;

    return (
        <div className={styles['student-wrapper']}>
            <div className={styles['student-name']}>
                <Text font={[FontType.text_xxl_bold, FontType.text_xxl_bold]} color='black'>
                    {studentProfileList?.name}
                </Text>
                <Text
                    font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                    color='yellow-700'
                >
                    {STUDENT_PROFILE_FORMAT.getStudentId(studentProfileList?.id)}
                </Text>
            </div>

            <hr className={styles['big-hr']} />

            <div className={styles['detail-history-all']}>
                <div className={styles['student-detail']}>
                    <div className={styles['student-specific-detail']}>
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='gray-300'
                        >
                            {STUDENT_PROFILE_TEXT.LABELS.CLASS_AGE}
                        </Text>
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='black'
                        >
                            {STUDENT_PROFILE_FORMAT.getGradeAge(
                                studentProfileList?.gradeId,
                                studentProfileList?.age,
                            )}
                        </Text>
                    </div>

                    <hr className={styles.hr} />

                    <div className={styles['student-specific-detail']}>
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='gray-300'
                        >
                            {STUDENT_PROFILE_TEXT.LABELS.GENDER}
                        </Text>
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='black'
                        >
                            {studentProfileList?.gender ?? STUDENT_PROFILE_TEXT.FALLBACK}
                        </Text>
                    </div>

                    <hr className={styles.hr} />

                    <div className={styles['student-specific-detail']}>
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='gray-300'
                        >
                            {STUDENT_PROFILE_TEXT.LABELS.PARENTS}
                        </Text>
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='black'
                        >
                            {STUDENT_PROFILE_FORMAT.getParentInfo(
                                studentProfileList?.fatherName,
                                studentProfileList?.fatherPhone,
                            )}
                        </Text>
                    </div>
                </div>
                {/* <div className={styles['assigned-wrapper']}>
                    <Text
                        font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        color='gray-300'
                    >
                        Assigned Educators
                    </Text>

                    <div>
                        <div className={styles['assigned-educators']}>
                            <Text
                                font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                color='gray-600'
                            >
                                You
                            </Text>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default StudentProfile;
