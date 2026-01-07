import cx from 'classnames';

import { Text, Button } from '@components/index';

import PlusIcon from '@/public/assets/svg/plus-icon.svg';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import styles from './styles.module.scss';

interface PageHeaderProps {
    title: string;
    description: string;
    buttonLabel?: string;
    onButtonClick?: () => void;
    className?: string;
}

const PageHeader = ({
    title,
    description,
    buttonLabel,
    onButtonClick,
    className,
}: PageHeaderProps) => {
    <div className={cx(styles['page-header'], className)}>
        <div className={styles['text-section']}>
            <Text font={[FontType.text_xxl_semibold, FontType.text_xxl_semibold]} color='gray-900'>
                {title}
            </Text>
            <Text font={[FontType.text_sm_regular, FontType.text_sm_regular]} color='gray-600'>
                {description}
            </Text>
        </div>

        {buttonLabel && (
            <Button
                label={buttonLabel}
                variant={ButtonVariant.SOLID}
                color='white'
                onClick={onButtonClick}
                StartIcon={<PlusIcon />}
                className={styles['btn-class']}
            />
        )}
    </div>;
};

export default PageHeader;
