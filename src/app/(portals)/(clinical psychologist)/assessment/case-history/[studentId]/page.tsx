import React from 'react';

import { cookies } from 'next/headers';

import { Text } from '@/components/index';

import { FontType } from '@/types/typographyCommon';
import { CaseHistoryResponse } from '@/types/caseHIstorySidebarMenuType';

import { getCaseHistorySidebarApiCall } from '@/app/(portals)/utils';

import { SpecializationEnum } from '@/constant/appConstants';

import { USER_DETAIL } from '@/utils/cookieManager';

import { getSpeechTherapistSpeechLanguageAssessment } from '../utils.api';

import PersonalHistory from './components/PersonalHistory';

import styles from './styles.module.scss';

const page = async ({
    params,
    searchParams,
}: {
    params: Promise<{ studentId: string }>;
    searchParams: Promise<{ id: string; sectionId: string }>;
}) => {
    const { studentId } = await params;

    const { id, sectionId } = await searchParams;

    const cookieStore = cookies();
    const userCookie = (await cookieStore).get(USER_DETAIL);

    const parsedUser = userCookie?.value ? JSON.parse(decodeURIComponent(userCookie.value)) : null;

    const specializationName = parsedUser?.userSpecializations?.name;

    let apiResponse;

    if (specializationName === SpecializationEnum.SPEECH_THERAPIST) {
        apiResponse = await getSpeechTherapistSpeechLanguageAssessment(studentId);
    } else {
        apiResponse = await getCaseHistorySidebarApiCall(studentId);
    }

    const { response } = apiResponse || {};

    const { tree }: { tree: CaseHistoryResponse } = response || {};

    const menu = tree?.find((item) => item?.id === sectionId);

    const subMenu = menu?.children.find((item) => item?.id === id);

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <Text font={[FontType.text_xl_bold, FontType.text_xl_bold]}>
                        {subMenu?.name}
                    </Text>
                    <Text font={[FontType.text_sm_regular, FontType.text_sm_regular]}>
                        Case History
                    </Text>
                </div>
                <PersonalHistory sectionId={sectionId} menuId={id} menuList={tree} />
            </div>
            {/* <BottomNavbar /> */}
        </div>
    );
};

export default page;
