'use client';

import { useState } from 'react'
;
import { AccordionItemType } from './type';

import AccordionItem from './AccordionItem';

type Props = {
    items: AccordionItemType[];
    allowMultiple?: boolean;
};

const AccordionComponent = ({ items, allowMultiple = false }: Props) => {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        if (allowMultiple) {
            setOpenItems((prev) =>
                prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
            );
        } else {
            setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
        }
    };

    return (
        <div>
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
