'use client';

import React, { useState } from 'react';

import { PageHeader, ShimmerUiContainer } from '@/components/index';

import { ToastContainer } from 'react-toastify';

import { STUDENT_LIST_TEXT as text } from './constant';

import TableUi from './TableUi';

import styles from './styles.module.scss';

const AdminStudentListPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const isLoading = false;

    return (
        <>
            <PageHeader
                title={text.studentList}
                description={text.description}
                buttonLabel={text.createStudent}
            />

            {isLoading ? (
                <ShimmerUiContainer className={styles['shimmer-data']} />
            ) : (
                <TableUi
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    data={[]}
                    limit={10}
                    totalCount={100}
                />
            )}

            <ToastContainer />
        </>
    );
};
export default AdminStudentListPage;
