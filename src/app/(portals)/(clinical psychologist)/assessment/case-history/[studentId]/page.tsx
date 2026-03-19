import React from 'react';

import { Text } from '@/components/index';

import { FontType } from '@/types/typographyCommon';

import { getCaseHistorySidebarApiCall } from '@/app/(portals)/utils';

import PersonalHistory from './components/PersonalHistory';

// import BottomNavbar from './components/BottomNavbar';

import styles from './styles.module.scss';

const page = async ({
    params,
    searchParams,
}: {
    params: Promise<{ studentId: string }>;
    searchParams: Promise<{ id: string }>;
}) => {
    const { studentId } = await params;

    const { id } = await searchParams;

    const caseHistorySidebarResponse = await getCaseHistorySidebarApiCall(studentId);

    const { response } = caseHistorySidebarResponse || {};

    const { tree } = response || {};

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <Text font={[FontType.text_xl_bold, FontType.text_xl_bold]}>
                        Personal History
                    </Text>
                    <Text font={[FontType.text_sm_regular, FontType.text_sm_regular]}>
                        Case History
                    </Text>
                </div>
                <PersonalHistory menuId={id} menuList={tree} />
            </div>
            {/* <BottomNavbar /> */}
        </div>
    );
};

export default page;
