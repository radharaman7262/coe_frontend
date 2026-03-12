import { useState } from 'react';

import { Text } from '@/components/index';

import CenterAdminIcon from '@/public/assets/svg/center-admin-icon.svg';
import SpecialEducatorIcon from '@/public/assets/svg/special-educator-icon.svg';

import { FontType } from '@/types/typographyCommon';

import { LOGIN_PAGE_DATA as data, SELECT_ROLE_DATA as text } from './constant';

import styles from './styles.module.scss';

const RoleSelection = () => {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

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

            <div className={styles['role-part']}>
                <div
                    className={`${styles['role-card']} ${
                        selectedRole === 'centerAdmin' ? styles.active : ''
                    }`}
                    onClick={() => setSelectedRole('centerAdmin')}
                    aria-hidden='true'
                >
                    <CenterAdminIcon />
                    <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]} color='black'>
                        {text.centerAdmin}
                    </Text>
                </div>

                <div
                    className={`${styles['role-card']} ${
                        selectedRole === 'specialEducator' ? styles.active : ''
                    }`}
                    onClick={() => setSelectedRole('specialEducator')}
                    aria-hidden='true'
                >
                    <SpecialEducatorIcon />
                    <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]} color='black'>
                        {text.specialEducator}
                    </Text>
                </div>
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
