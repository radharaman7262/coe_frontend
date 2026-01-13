import type { ElementType } from 'react';

import cx from 'classnames';

import { Text } from '@/components/index';

import { FontType } from '@/types/typographyCommon';

import ChevronDown from '@public/assets/svg/chevron-down.svg';

import styles from './styles.module.scss';

interface SidebarItemProps {
    label: string;
    active?: boolean;
    icon?: ElementType;
    showIcon?: number;
    open?: boolean;
}

const SidebarItem = ({ label, active, icon: Icon, open, showIcon }: SidebarItemProps) => (
    <div className={cx(styles['sidebar-item'], active && styles.active)}>
        <div className={styles['sidebar-text']}>
            {Icon && <Icon className={styles.icon} />}
            <Text font={[FontType.text_md_regular, FontType.text_md_regular]} color='gray-700'>
                {label}
            </Text>
        </div>

        {showIcon && showIcon > 0 ? (
            <ChevronDown
                className={!open ? styles.chevron : styles.revolveChevron}
                data-open={open}
            />
        ) : null}
    </div>
);

export default SidebarItem;
