'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { setFormId } from '@/utils/cookieManager';

import { CaseHistoryResponse } from '@/types/caseHIstorySidebarMenuType';

import { AccordionItemType } from './type';

import AccordionItem from './AccordionItem';

import styles from './styles.module.scss';

type Props = {
    items: AccordionItemType[];
    allowMultiple?: boolean;
    menuList: CaseHistoryResponse;
};

const AccordionComponent = ({ items, allowMultiple = false, menuList }: Props) => {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const toggleItem = (id: string) => {
        setFormId(id);

        if (allowMultiple) {
            setOpenItems((prev) =>
                prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
            );
        } else {
            router.replace(
                `${pathName}?id=${searchParams.get('id')}&sectionId=${searchParams.get('sectionId')}&formId=${id}`,
            );
            setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
        }
    };

    useEffect(() => {
        if (!menuList.length) return;

        const currentId = searchParams.get('id');
        if (currentId) return; // already set → do nothing

        const params = new URLSearchParams(searchParams.toString());

        const menuData = menuList[0]?.children;
        if (!menuData?.length) return;

        const firstSection = menuData[0];
        const firstForm = firstSection?.children?.[0];

        if (!firstSection || !firstForm) return;

        params.set('id', firstSection.id);
        params.set('sectionId', firstSection.parentId || '');
        params.set('formId', firstForm.id);

        router.replace(`${pathName}?${params.toString()}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menuList]); // ✅ only depend on menuList

    return (
        <div className={styles.accordion}>
            {items.map((item) => (
                <AccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openItems.includes(item.id)}
                    onToggle={() => toggleItem(item.id)}
                />
            ))}
        </div>
    );
};

export default AccordionComponent;
