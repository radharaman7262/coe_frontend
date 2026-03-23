'use client';

import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { setFormId } from '@/utils/cookieManager';

import { AccordionItemType } from './type';

import AccordionItem from './AccordionItem';

import styles from './styles.module.scss';

type Props = {
    items: AccordionItemType[];
    allowMultiple?: boolean;
};

const AccordionComponent = ({ items, allowMultiple = false }: Props) => {
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
