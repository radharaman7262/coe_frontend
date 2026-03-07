import React from 'react';

import { CaseHistoryItemType } from '@/types/caseHIstorySidebarMenuType';

export type AccordionItemType = {
    content: React.JSX.Element;
    rightContent: React.JSX.Element;
    id: string;
    name: string;
    tableName: string | null;
    priority: number;
    parentId: string | null;
    children: CaseHistoryItemType[];
    percentage: number;
    defaultOpen?: boolean;
};
