import cx from 'classnames';

import { Text, Button } from '@/components/index';
import Modal from '@/components/shared/Modal';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import FeaturedIcon from '@/public/assets/svg/featured-logout-icon.svg';

import { MODAL_STYLING } from '@/constant/appConstants';

import { LOGOUT_TEXT as text } from './constant';

import styles from './styles.module.scss';

interface LogoutModalProps {
    open: boolean;
    setOpen: (value: boolean) => void;
    className?: string;
}

const LogoutModal = (props: LogoutModalProps) => {
    const { open, setOpen, className } = props;

    // This will be used later //
    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     setOpen(false);
    //     clearAllCookies();
    //     navigate(APP_ROUTES.LOGIN);
    // };

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
                        variant={ButtonVariant.NORMAL}
                        onClick={handleCancel}
                        loader={false}
                        disabled={false}
                        className={styles['cancel-button']}
                        color='gray-700'
                    />
                    <Button
                        type='button'
                        label={text.logout}
                        variant={ButtonVariant.NORMAL}
                        loader={false}
                        disabled={false}
                        className={styles['logout-button']}
                        color='white'
                    />
                </div>
            </div>
        </Modal>
    );
};

export default LogoutModal;
