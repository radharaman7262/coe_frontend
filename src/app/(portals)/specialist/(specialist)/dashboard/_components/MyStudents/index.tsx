'use client';

import React, { useMemo, useState } from 'react';

import { Text, Dropdown } from '@/components';
import { FontType } from '@/types/typographyCommon';

import { StatusDataType, STUDENT_STATUS } from '@/constant/appConstants';
import styles from './styles.module.scss';
import { StudentType } from './type';
import { STUDENT_TEXT } from './constant';

interface MyStudentsProps {
    studentData: StudentType[];
}

const MyStudents = ({ studentData }: MyStudentsProps) => {
    const [statusFilter, setStatusFilter] = useState<StatusDataType | null>(null);

    const filteredStudents = useMemo(() => {
        if (!statusFilter || statusFilter.id === '0') return studentData;

        return studentData.filter((student) => student.processStatus === statusFilter.name);
    }, [studentData, statusFilter]);

    const handleStatusChange = (item: StatusDataType) => {
        setStatusFilter(item);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Text font={[FontType.text_sm_bold, FontType.text_sm_bold]}>
                    {STUDENT_TEXT.title}
                </Text>

                <Dropdown
                    label='All Status'
                    options={STUDENT_STATUS}
                    selectValue='name'
                    value={statusFilter}
                    isSearchable={false}
                    widthClassName={styles['dropdown-width']}
                    additionalStyle={styles['dropdown-bg']}
                    onChange={handleStatusChange}
                />
            </div>

            <div className={styles.list}>
                {filteredStudents.length === 0 ? (
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='gray-400'
                    >
                        {STUDENT_TEXT.noStudentsFound}
                    </Text>
                ) : (
                    filteredStudents?.map((student) => {
                        const genderText = student.gender || '';

                        return (
                            <div key={student.id} className={styles.card}>
                                <Text
                                    font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                                    className={
                                        styles[`status-${student.processStatus?.toLowerCase()}`] ||
                                        styles['status-default']
                                    }
                                >
                                    {student.processStatus}
                                </Text>

                                <Text
                                    font={[FontType.text_sm_bold, FontType.text_sm_bold]}
                                    color='black'
                                >
                                    {student.name}
                                </Text>

                                <Text
                                    font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                                    color='text-cta-3'
                                >
                                    {`${student.age} yrs | ${genderText}`}
                                </Text>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default MyStudents;
