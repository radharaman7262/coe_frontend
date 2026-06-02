'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Input, Text, Button } from '@/components/index';

import { FontType, ButtonVariant } from '@/types/typographyCommon';

import MailIcon from '@/public/assets/svg/mail-icon.svg';
import RightIcon from '@/public/assets/svg/right-arrow-icon.svg';
import EyeOffIcon from '@/public/assets/svg/eye-off-icon.svg';
import EyeOnIcon from '@/public/assets/svg/eye-on-icon.svg';

import { ErrorMessagesType, SignInFormKeys, SignInFormType } from '@/types/signInFormType';
import { MenuListType } from '@/types/menuListsType';

import { AuthDrawerStep, KeyboardEvent } from '@/constant/enumConstant';

import { showToast } from '@/components/ui/Toaster/constant';

import { storeDataInServerSideCookies } from '@/utils/storeDataInServerSideCookies';

import { ServerSideRoutes } from '@/constant/serverSideRoutes';
import { AppRoutes } from '@/constant/appRoutes';
import { LOADING_TIME_DURATION, StatusNumber } from '@/constant/appConstants';

import { setClientSideUserDetail } from '@/utils/cookieManager';
import { LoggedRoleType } from '@/types/roleType';
import { checkAllValueValidOrNot, loginApiCall, validateInput } from './utils';

import { LOGIN_PAGE_DATA as staticLabel, BUTTON_TEXT as button, MAX_LENGTHS } from './constant';

import styles from './styles.module.scss';

interface LoginFormType {
    openLoginDrawer: boolean;
    setStep: React.Dispatch<React.SetStateAction<AuthDrawerStep>>;
    formValues: SignInFormType;
    setFormValues: React.Dispatch<React.SetStateAction<SignInFormType>>;
    setMultiSelectionUser: React.Dispatch<React.SetStateAction<LoggedRoleType[] | null>>;
}

const LoginForm = (props: LoginFormType) => {
    const { openLoginDrawer, setStep, formValues, setFormValues, setMultiSelectionUser } = props;

    const router = useRouter();

    const [errorMessages, setErrorMessages] = useState<ErrorMessagesType>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const userNameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const INPUT_MAPPING: Record<string, React.RefObject<HTMLInputElement | null>> = {
        [SignInFormKeys.NAME]: passwordRef,
    };

    const updateFormValues = (key: SignInFormKeys, value: string) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [key]: value,
        }));
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (!value) {
            setErrorMessages((prev) => ({
                ...prev,
                [name]: '',
            }));
            updateFormValues(name as SignInFormKeys, value);
            return;
        }

        if (value.length < MAX_LENGTHS[name as SignInFormKeys]) {
            setFormValues((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));

            validateInput(name as SignInFormKeys, value, setErrorMessages);
            updateFormValues(name as SignInFormKeys, value);
        }
    };

    const handleLogin = async () => {
        try {
            setLoading(true);

            const body = { ...formValues };

            const loginData = await loginApiCall(body);

            const { status, response, message } = loginData || {};

            if (!status) {
                throw new Error(message);
            }

            const { token, Message, data: userDetail } = response || {};

            const { askSpecialization, userSpecializations } = userDetail || {};

            if (askSpecialization !== StatusNumber.ACTIVE) {
                const { assignedMenus: menuLists } = userDetail || {};
                if (!menuLists?.length) {
                    showToast({ type: 'error', message: 'Please mapped at least one menu.' });
                    return;
                }
                const allowedRoutes = menuLists
                    .filter((item: MenuListType) => item.menuLink !== '/#')
                    ?.map((item: MenuListType) => item.menuLink)
                    .filter((link: string) => link?.startsWith(AppRoutes.LANDING_PAGE));
                await Promise.all([
                    storeDataInServerSideCookies(ServerSideRoutes.STORE_AUTH_TOKEN, { token }),
                    storeDataInServerSideCookies(ServerSideRoutes.STORE_USER_MENU_LIST, {
                        menuList: menuLists,
                    }),
                    storeDataInServerSideCookies(ServerSideRoutes.STORE_ALLOWED_ROUTE, {
                        allowedRoute: allowedRoutes,
                    }),
                    storeDataInServerSideCookies(ServerSideRoutes.STORE_USER_DETAIL_ROUTE, {
                        userDetail,
                    }),
                ]);
                setClientSideUserDetail(userDetail);
                const redirectRoute = allowedRoutes[0] || '/';
                showToast({ type: 'success', message: Message });
                if (redirectRoute) {
                    setTimeout(() => {
                        router.push(redirectRoute);
                    }, LOADING_TIME_DURATION);
                } else {
                    // TODo we have to implement a 404 or route path is invalid page here.
                    console.warn(
                        'No allowed route found to redirect. Skipping redirect to avoid 404.',
                    );
                }
            } else {
                setMultiSelectionUser(userSpecializations);
                setStep(AuthDrawerStep.ROLE_SELECTION);
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);

            showToast({ type: 'error', message: errorMessage });
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const targetInput = event.target as HTMLInputElement;

        if (event.key === KeyboardEvent.ENTER) {
            const nextInputRef = INPUT_MAPPING[targetInput.name];

            if (nextInputRef && nextInputRef.current) {
                nextInputRef.current.focus();
            } else if (isFormValid) {
                handleLogin();
            }
        }
    };

    const handleToggleIcon = () => {
        setShowPassword((prev) => !prev);
    };

    const handleforgotRedirection = () => {
        setStep(AuthDrawerStep.FORGOT_PASSWORD_SCREEN);
    };

    useEffect(() => {
        if (userNameRef.current) {
            userNameRef.current.focus();
        }
    }, [openLoginDrawer]);

    useEffect(() => {
        const isValid = checkAllValueValidOrNot({ formValues, errorMessages });

        setIsFormValid(isValid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formValues]);

    return (
        <div className={styles['login-wrapper']}>
            <div className={styles['heading-container']}>
                <Text font={[FontType.text_xl_semibold, FontType.text_xl_semibold]}>
                    {staticLabel.heading}
                </Text>
                <Text font={[FontType.text_md_regular, FontType.text_md_regular]} color='text-idle'>
                    {staticLabel.dashboardLogin}
                </Text>
            </div>

            <div className={styles['login-form']}>
                <div className={styles['input-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {staticLabel.userNameLabel}
                    </Text>

                    <Input
                        ref={userNameRef}
                        EndAdornment={MailIcon}
                        name={SignInFormKeys.NAME}
                        placeholder={staticLabel.userNamePlaceholder}
                        value={formValues[SignInFormKeys.NAME]}
                        error={!!errorMessages[SignInFormKeys.NAME]}
                        helperText={errorMessages[SignInFormKeys.NAME] || ''}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                <div className={styles['input-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {staticLabel.passwordLabel}
                    </Text>

                    <Input
                        EndAdornment={showPassword ? EyeOnIcon : EyeOffIcon}
                        ref={passwordRef}
                        name={SignInFormKeys.PASSWORD}
                        placeholder={staticLabel.passwordPlaceholder}
                        value={formValues[SignInFormKeys.PASSWORD]}
                        onChange={handleChange}
                        error={!!errorMessages[SignInFormKeys.PASSWORD]}
                        helperText={errorMessages[SignInFormKeys.PASSWORD] || ''}
                        onKeyDown={handleKeyDown}
                        type={showPassword ? 'text' : 'password'}
                        onClickEnd={handleToggleIcon}
                    />
                </div>

                <div className={styles['form-remember']}>
                    {/* <div className={styles['check-box']}>
                        <input type='checkbox' id='remember' />

                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {staticLabel.rememberMe}
                        </Text>
                    </div> */}

                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='primary-cta'
                        className={styles.pointer}
                        onClick={handleforgotRedirection}
                    >
                        {staticLabel.forgotPassword}
                    </Text>
                    <Button
                        label={button.login}
                        type='button'
                        variant={ButtonVariant.SOLID}
                        color='white'
                        font={[FontType.text_md_semibold, FontType.text_md_semibold]}
                        className={styles['btn-class']}
                        EndIcon={!loading ? <RightIcon /> : null}
                        onClick={handleLogin}
                        disabled={loading || !isFormValid}
                        loader={loading}
                    />
                </div>
            </div>

            <div className={styles['login-footer']}>
                <Text font={[FontType.text_xs_regular, FontType.text_xs_regular]} color='text-idle'>
                    {staticLabel.copyRight} <strong>{staticLabel.rupantar}</strong>
                    {staticLabel.allRights}
                </Text>
            </div>
        </div>
    );
};

export default LoginForm;
