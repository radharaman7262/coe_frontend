'use client';

import { Input, Text, Button } from '@/components/index';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import MailIcon from '@/public/assets/svg/mail-icon.svg';
import RightIcon from '@/public/assets/svg/right-arrow-icon.svg';
import LockIcon from '@/public/assets/svg/lock-icon.svg';

import { LOGIN_PAGE_DATA as title, BUTTON_TEXT as button } from './constant';

import styles from './styles.module.scss';

const LoginForm = () => (
    <div className={styles['login-wrapper']}>
        <div className={styles['heading-container']}>
            <Text font={[FontType.display_Desktop_xmd_bold, FontType.display_Desktop_xmd_bold]}>
                {title.heading}
            </Text>
            <Text
                font={[FontType.display_Desktop_xmd_regular, FontType.display_Desktop_xmd_regular]}
            >
                {title.dashboardLogin}
            </Text>
        </div>

        <div className={styles['login-form']}>
            <div className={styles['input-container']}>
                <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]} color='text-idle'>
                    {title.userNameLabel}
                </Text>

                <Input
                    value=''
                    name='username'
                    placeholder='Enter Your Username'
                    EndAdornment={MailIcon}
                />
            </div>

            <div className={styles['input-container']}>
                <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]} color='text-idle'>
                    {title.passwordLabel}
                </Text>

                <Input
                    value=''
                    name='password'
                    placeholder='Enter Your Password'
                    EndAdornment={LockIcon}
                />
            </div>

            <div className={styles['form-remember']}>
                <div className={styles['check-box']}>
                    <input type='checkbox' id='remember' />

                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {title.rememberMe}
                    </Text>
                </div>
                <Button
                    label={button.login}
                    type='button'
                    variant={ButtonVariant.SOLID}
                    color='white'
                    font={[FontType.text_md_semibold, FontType.text_md_semibold]}
                    className={styles['btn-class']}
                    EndIcon={<RightIcon />}
                />
            </div>
        </div>

        <div className={styles['login-footer']}>
            <Text font={[FontType.text_xs_regular, FontType.text_xs_regular]} color='text-idle'>
                {title.copyRight} <strong>{title.rupantar}</strong>
                {title.allRights}
            </Text>
        </div>
    </div>
);

export default LoginForm;
