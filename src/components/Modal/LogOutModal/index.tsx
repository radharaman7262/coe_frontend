import { useRouter } from 'next/navigation';
import cx from 'classnames';

import { Text, Button } from '@/components/index';
import Modal from '@/components/shared/Modal';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import FeaturedIcon from '@/public/assets/svg/featured-logout-icon.svg';

import { LOADING_TIME_DURATION, MODAL_STYLING } from '@/constant/appConstants';

import { clearAllCookies } from '@/utils/cookieManager';
import { queryClient } from '@/utils/react-query-client';

import { useState } from 'react';
import { LOGOUT_TEXT as text } from './constant';

import styles from './styles.module.scss';

interface LogoutModalProps {
    open: boolean;
    setOpen: (value: boolean) => void;
    className?: string;
}

const LogoutModal = (props: LogoutModalProps) => {
    const { open, setOpen, className } = props;

    const router = useRouter();

    const [loader, setLoader] = useState<boolean>(false);

    const handleUserLogOut = async () => {
        setLoader(true);
        try {
            const res = await fetch('/api/logout', {
                method: 'POST',
            });

            if (res.ok) {
                // Optionally redirect to login
                queryClient.clear();
                clearAllCookies();
                localStorage.clear();
                router.replace('/');
                router.refresh();
            } else {
                console.error('Failed to logout');
            }
        } catch (error) {
            console.error('Error logging out:', error);
        } finally {
            setTimeout(() => {
                setLoader(false);
            }, LOADING_TIME_DURATION);
        }
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <Modal open={open} sx={MODAL_STYLING}>
            <div className={cx(styles['container-wrapper'], className)}>
                <div>
                    <div className={styles['icon-container']}>
                        <FeaturedIcon />
                    </div>
                    <div className={styles['text-description']}>
                        <div>
                            <Text
                                font={[FontType.text_lg_semibold, FontType.text_lg_semibold]}
                                color='gray-900'
                            >
                                {text.areYouSure}
                            </Text>
                        </div>

                        <div>
                            <Text
                                font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                                color='gray-600'
                            >
                                {text.youWillNeed}
                            </Text>
                        </div>
                    </div>
                </div>
                <div className={styles['button-duo']}>
                    <Button
                        type='button'
                        label={text.cancel}
                        variant={ButtonVariant.OUTLINED}
                        onClick={handleCancel}
                        loader={false}
                        disabled={false}
                        color='gray-700'
                    />
                    <Button
                        type='button'
                        label={text.logout}
                        variant={ButtonVariant.WARN}
                        onClick={handleUserLogOut}
                        loader={loader}
                        disabled={loader}
                        color='white'
                    />
                </div>
            </div>
        </Modal>
    );
};

export default LogoutModal;
