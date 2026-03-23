import React from 'react';

import { Text, AccordionComponent } from '@/components/index';

import { FontType } from '@/types/typographyCommon';
import { CaseHistoryResponse } from '@/types/caseHIstorySidebarMenuType';

import { COMPONENT_MAP } from './constant';

interface PersonalHistoryProps {
    menuList: CaseHistoryResponse;
    menuId: string;
    sectionId: string;
}

const PersonalHistory = (props: PersonalHistoryProps) => {
    const { menuList, menuId, sectionId } = props;

    const menu = menuList?.find((item) => item.id === sectionId);

    const subMenu = menu?.children.find((item) => item.id === menuId);

    const menuData =
        subMenu?.children.map((item) => ({
            ...item,
            content: COMPONENT_MAP[item?.id as string],
            rightContent: (
                <Text color='dark-blue' font={[FontType.text_sm_bold, FontType.text_sm_bold]}>
                    {`${item.percentage} %`}
                </Text>
            ),
        })) || [];

    //     console.log(menuData,'menuData')

    return <AccordionComponent items={menuData} />;
};

export default PersonalHistory;
