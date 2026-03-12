'use client';

import React from 'react';

import styles from './styles.module.scss';

type ScrollLabelProps<T> = {
    items: T[];
    selectedId: string | number | null;
    onSelect: (item: T) => void;
    getId: (item: T) => string | number;
    renderItem: (item: T, isSelected: boolean) => React.ReactNode;
};

function ScrollLabel<T>({ items, selectedId, onSelect, getId, renderItem }: ScrollLabelProps<T>) {
    return (
        <div className={styles.container}>
            <div className={styles.scrollWrapper}>
                {items.map((item) => {
                    const id = getId(item);
                    const isSelected = selectedId === id;

                    return (
                        <div
                            key={id}
                            className={styles.item}
                            onClick={() => onSelect(item)}
                            aria-hidden='true'
                        >
                            {renderItem(item, isSelected)}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ScrollLabel;
