import React, { useEffect } from 'react';

import Text from '@/components/ui/Text';

import { FontType } from '@/types/typographyCommon';
import { ForgotInFormType } from '@/types/signInFormType';

import SuccessMailIcon from '@/public/assets/svg/post-box.svg';

import { AuthDrawerStep } from '@/constant/enumConstant';

import { EMAIL_SENT_CONSTANTS } from './constant';

import styles from './styles.module.scss';

interface EmailSentType {
    forgotValues: ForgotInFormType;
    setStep: React.Dispatch<React.SetStateAction<AuthDrawerStep>>;
}

const EmailSent = ({ forgotValues, setStep }: EmailSentType) => {
    const { TITLE, DESCRIPTION, TITLE_ID, DESCRIPTION_ID } = EMAIL_SENT_CONSTANTS;

    useEffect(() => {
        if (!forgotValues.email) {
            setStep(AuthDrawerStep.FORGOT_PASSWORD_SCREEN);
        }
    }, [forgotValues.email, setStep]);

    return (
        <section
            aria-labelledby={TITLE_ID}
            aria-describedby={DESCRIPTION_ID}
            className={styles['section-container']}
        >
            <div className={styles.card} role='status' aria-live='polite'>
                <div className={styles.iconWrapper} aria-hidden='true'>
                    <SuccessMailIcon />
                </div>

                <header>
                    <Text
                        tagType='h1'
                        font={[FontType.text_xxl_semibold, FontType.text_xxl_semibold]}
                        color='text-gray-900'
                        className={styles.title}
                    >
                        <span id={TITLE_ID}>{TITLE}</span>
                    </Text>

                    <div>
                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='text-idle'
                        >
                            <span id={DESCRIPTION_ID}>{DESCRIPTION}</span>
                        </Text>

                        <Text
                            tagType='span'
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='gray-800'
                        >
                            &nbsp;{forgotValues.email}
                        </Text>
                    </div>
                </header>
            </div>
        </section>
    );
};

export default EmailSent;
