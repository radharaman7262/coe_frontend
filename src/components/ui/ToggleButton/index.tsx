import { memo } from 'react';

import cx from 'classnames';

import { Button } from '@components/index';

import { ButtonVariant } from '@/types/typographyCommon';

import styles from './styles.module.scss';

interface ToggleItem {
    id: number | string;
    name: string;
}

interface ToggleSwitchProps<T extends ToggleItem> {
    leftLabel: T;
    rightLabel: T;
    selected: T | null;
    handleToggle: (value: T) => void;
}

const ToggleSwitch = <T extends ToggleItem>(props: ToggleSwitchProps<T>) => {
    const { leftLabel, rightLabel, selected, handleToggle } = props;

    return (
        <div className={styles.toggleContainer}>
            <Button
                type='button'
                className={cx(styles.toggleButton, styles.button)}
                label={leftLabel.name}
                variant={
                    selected?.id === leftLabel.id ? ButtonVariant.SOLID : ButtonVariant.OUTLINED
                }
                onClick={() => handleToggle(leftLabel)}
                color={selected?.id === leftLabel.id ? 'white' : 'black'}
            />

            <Button
                type='button'
                className={cx(styles.toggleButton, styles.button)}
                label={rightLabel.name}
                variant={
                    selected?.id === rightLabel.id ? ButtonVariant.SOLID : ButtonVariant.OUTLINED
                }
                onClick={() => handleToggle(rightLabel)}
                color={selected?.id === rightLabel.id ? 'white' : 'black'}
            />
        </div>
    );
};

export default memo(ToggleSwitch) as typeof ToggleSwitch;
