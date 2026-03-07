'use client';

import { useEffect, useState } from 'react';

import cx from 'classnames';

import ArrowIcon from '@public/assets/svg/chevron-down.svg'

import Text from '../Text'; 

import { AccordionItemType } from './type';

import styles from './styles.module.scss';

type Props = {
    item: AccordionItemType;
    isOpen: boolean;
    onToggle: () => void;
};

const AccordionItem = ({ item, isOpen, onToggle }: Props) => {
    const [open, setOpen] = useState(item.defaultOpen || false);

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return (
        <div className={styles.accordionItem}>
            <div className={styles.header} role='button' tabIndex={0} onKeyDown={onToggle} onClick={onToggle}>
                <div className={styles.left}>
                    <Text tagType='div' className={cx(styles.icon, open && styles.rotate)}><ArrowIcon/></Text>
                    <Text tagType='h4'>{item.name}</Text>
                </div>

                {item.rightContent && <div className={styles.right}>{item.rightContent}</div>}
            </div>

            <div className={cx(styles.body, open && styles.open)}>{item.content}</div>
        </div>
    );
}

export default AccordionItem;