import React from 'react';

import { Text, AccordionComponent } from '@/components/index';

import { FontType } from '@/types/typographyCommon';
import { CaseHistoryResponse } from '@/types/caseHIstorySidebarMenuType';

import { COMPONENT_MAP } from './constant';

interface PersonalHistoryProps {
    menuList: CaseHistoryResponse;
    menuId: string;
}

const PersonalHistory = (props: PersonalHistoryProps) => {
    const { menuList, menuId } = props;

    console.warn('HHIHIHI', menuList);

    const data = menuList?.[0]?.children?.find((item) => item.id === menuId);

    const menuData =
        data?.children.map((item) => ({
            ...item,
            content: COMPONENT_MAP[item?.tableName as string],
            rightContent: (
                <Text color='dark-blue' font={[FontType.text_sm_bold, FontType.text_sm_bold]}>
                    {`${item.percentage} %`}
                </Text>
            ),
        })) || [];

    return <AccordionComponent items={menuData} />;
};

export default PersonalHistory;
