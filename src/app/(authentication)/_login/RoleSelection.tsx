import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button, Text } from '@/components/index';

import CenterAdminIcon from '@/public/assets/svg/center-admin-icon.svg';
import ClinicalPsychologistIcon from '@/public/assets/svg/clinical-psychologist-icon.svg';
import SpecialEducatorIcon from '@/public/assets/svg/special-educator-iconss.svg';
import OccupationalTherapistIcon from '@/public/assets/svg/occupational_therapist-icon.svg';
import SpeechTherapistIcon from '@/public/assets/svg/speech-therapist-icon.svg';

import RightIcon from '@/public/assets/svg/right-arrow-icon.svg';

import { LoggedRoleType } from '@/types/roleType';
import { ButtonVariant, FontType } from '@/types/typographyCommon';

import { showToast } from '@/components/ui/Toaster/constant';

import { LOADING_TIME_DURATION } from '@/constant/appConstants';

import { setClientSideUserDetail } from '@/utils/cookieManager';
import { storeDataInServerSideCookies } from '@/utils/storeDataInServerSideCookies';

import { ServerSideRoutes } from '@/constant/serverSideRoutes';
import { AppRoutes } from '@/constant/appRoutes';

import { MenuListType } from '@/types/menuListsType';

import { SignInFormType } from '@/types/signInFormType';

import { loginApiCall } from './utils';

import { LOGIN_PAGE_DATA as data, SELECT_ROLE_DATA as text } from './constant';

import styles from './styles.module.scss';

interface RoleSelectionType {
    multiSelectionUser: LoggedRoleType[] | null;
    selectSpecialization: LoggedRoleType | null;
    setSelectSpecialization: React.Dispatch<React.SetStateAction<LoggedRoleType | null>>;
    formValues: SignInFormType;
}

const RoleSelection = (props: RoleSelectionType) => {
    const { multiSelectionUser, setSelectSpecialization, selectSpecialization, formValues } = props;

    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();

    const handleLogin = async () => {
        try {
            setLoading(true);

            const body = { ...formValues, specializationId: selectSpecialization?.id };

            const loginData = await loginApiCall(body);

            const { status, response, message } = loginData || {};

            if (!status) {
                throw new Error(message);
            }

            const { token, Message, data: userDetail } = response || {};

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
                console.warn('No allowed route found to redirect. Skipping redirect to avoid 404.');
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);

            showToast({ type: 'error', message: errorMessage });
        } finally {
            setLoading(false);
        }
    };

    const getRoleClass = (roleName: string) => {
        switch (roleName?.toLowerCase()) {
            case 'center admin':
                return styles.centerAdmin;

            case 'clinical psychologist':
                return styles.clinicalPsychologist;

            case 'special educator':
                return styles.specialEducator;

            case 'occupational therapists':
                return styles.occupationalTherapist;

            case 'speech therapist':
                return styles.speechTherapist;

            default:
                return '';
        }
    };

    const getRoleIcon = (roleName: string) => {
        switch (roleName?.toLowerCase()) {
            case 'center admin':
                return <CenterAdminIcon />;

            case 'clinical psychologist':
                return <ClinicalPsychologistIcon />;

            case 'special educator':
                return <SpecialEducatorIcon />;

            case 'occupational therapists':
                return <OccupationalTherapistIcon />;

            case 'speech therapist':
                return <SpeechTherapistIcon />;

            default:
                return null;
        }
    };

    return (
        <>
            <div className={styles['text-part']}>
                <Text font={[FontType.text_xl_semibold, FontType.text_xl_semibold]} color='black'>
                    {text.selectRole}
                </Text>
                <Text font={[FontType.text_md_regular, FontType.text_md_regular]} color='text-idle'>
                    {text.wehavefound}
                </Text>
            </div>
            <div className={styles.roles}>
                {multiSelectionUser &&
                    multiSelectionUser?.map((item: LoggedRoleType) => (
                        <div className={styles['role-part']} key={item?.id}>
                            <div
                                className={`${styles['role-card']} ${getRoleClass(item?.name)} ${
                                    selectSpecialization?.name === item?.name ? styles.active : ''
                                }`}
                                onClick={() => setSelectSpecialization(item)}
                                aria-hidden='true'
                            >
                                {getRoleIcon(item?.name)}
                                <Text
                                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                    color='black'
                                >
                                    {item?.name}
                                </Text>
                            </div>
                        </div>
                    ))}
            </div>

            <div>
                <Button
                    label='Submit'
                    type='button'
                    variant={ButtonVariant.SOLID}
                    color='white'
                    font={[FontType.text_md_semibold, FontType.text_md_semibold]}
                    className={styles['role-btn-class']}
                    EndIcon={!loading ? <RightIcon /> : null}
                    onClick={handleLogin}
                    disabled={loading || !selectSpecialization}
                    loader={loading}
                />
            </div>

            <div className={styles['role-footer']}>
                <Text font={[FontType.text_xs_regular, FontType.text_xs_regular]} color='text-idle'>
                    {data.copyRight} <strong>{data.rupantar}</strong>
                    {data.allRights}
                </Text>
            </div>
        </>
    );
};

export default RoleSelection;
