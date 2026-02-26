import type { ElementType } from 'react';

import { usePathname, useRouter } from 'next/navigation';

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
    link: string;
}

const SidebarItem = ({ label, active, icon: Icon, open, showIcon, link }: SidebarItemProps) => {
    const route = useRouter();

    const handleRedirection = (redirectionLink: string) => {
        if (redirectionLink) {
            route.replace(redirectionLink);
        }
    };

    const pathname = usePathname();

    const selectedItem = pathname === link ? styles['sidebar-item-selected'] : null;

    return (
        <div className={cx(styles['sidebar-item'], active && styles.active, selectedItem)}>
            <div
                className={styles['sidebar-text']}
                onClick={() => {
                    handleRedirection(link);
                }}
                aria-hidden='true'
            >
                {Icon && <Icon className={styles.icon} />}
                <Text
                    font={[FontType.text_md_regular, FontType.text_md_regular]}
                    color='gray-700'
                    className={styles.whitespace}
                >
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
};

export default SidebarItem;
